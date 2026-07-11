'use strict';

(async function initEditor() {

  // ── 1. Verificar autenticação ─────────────────────────────────
  let authenticated = false;
  try {
    const res = await fetch('/adm/session-check.php', { credentials: 'include' });
    if (res.ok) ({ authenticated } = await res.json());
  } catch { return; }
  if (!authenticated) return;

  // ── 2. Ativar modo editor ─────────────────────────────────────
  document.documentElement.classList.add('editor-mode');
  const pending = {};    // key → { type, value }

  // ── 3. Barra de ferramentas ───────────────────────────────────
  const toolbar = document.createElement('div');
  toolbar.className = 'editor-toolbar';
  toolbar.setAttribute('role', 'toolbar');
  toolbar.setAttribute('aria-label', 'Barra de edição do site');
  toolbar.innerHTML = `
    <div class="editor-toolbar__brand" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
        <path d="M2,38 L2,28 L10,12 L16,22 L20,6 L24,22 L30,12 L38,28 L38,38 Z" fill="#c9a84c"/>
      </svg>
      <span>Modo Edição</span>
    </div>
    <div class="editor-toolbar__actions">
      <a href="/adm/logout.php" class="editor-btn editor-btn--logout">Sair</a>
      <button class="editor-btn editor-btn--discard" type="button">Descartar</button>
      <button class="editor-btn editor-btn--publish" type="button" disabled>Publicar</button>
    </div>
  `;
  document.body.prepend(toolbar);

  const publishBtn = toolbar.querySelector('.editor-btn--publish');
  const discardBtn = toolbar.querySelector('.editor-btn--discard');

  function markChanged() {
    publishBtn.disabled = false;
    publishBtn.textContent = 'Publicar';
  }

  // ── 4. Elementos de texto ─────────────────────────────────────
  document.querySelectorAll('[data-editable]:not([data-editable-type])').forEach(el => {
    initTextEditable(el, el.dataset.editable);
  });

  // ── 5. Elementos de imagem ────────────────────────────────────
  document.querySelectorAll('[data-editable][data-editable-type="image"]').forEach(el => {
    initImageEditable(el, el.dataset.editable);
  });

  // ── Inicializar elemento de texto ─────────────────────────────
  function initTextEditable(el, key) {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `Editar: ${el.innerText.trim().slice(0, 50)}`);

    function activate() {
      if (el.hasAttribute('contenteditable')) return;

      // Semântica de input
      el.removeAttribute('role');
      el.setAttribute('contenteditable', 'plaintext-only');
      el.setAttribute('role', 'textbox');
      el.setAttribute(
        'aria-multiline',
        ['P', 'BLOCKQUOTE', 'LI'].includes(el.tagName) ? 'true' : 'false'
      );
      el.classList.add('editor-active');
      el.focus();

      // Selecionar todo o conteúdo
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }

    function deactivate() {
      if (!el.hasAttribute('contenteditable')) return;

      const newVal = el.innerText.trim();
      pending[key] = { type: 'text', value: newVal };
      markChanged();

      // Restaurar semântica de botão
      el.removeAttribute('contenteditable');
      el.removeAttribute('aria-multiline');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', `Editar: ${newVal.slice(0, 50)}`);
      el.classList.remove('editor-active');

      // Sincronizar data-target nos contadores
      if (el.classList.contains('counter') && /^\d+$/.test(newVal)) {
        el.dataset.target = newVal;
      }
    }

    el.addEventListener('click', activate);

    el.addEventListener('keydown', e => {
      if (!el.hasAttribute('contenteditable')) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
        return;
      }
      if (e.key === 'Escape') { el.blur(); return; }
      // Elementos de linha única: Enter confirma e sai
      if (e.key === 'Enter' && !['P', 'BLOCKQUOTE', 'LI'].includes(el.tagName)) {
        e.preventDefault();
        el.blur();
      }
    });

    // Bloquear colagem de HTML — aceitar apenas texto puro
    el.addEventListener('paste', e => {
      const ct = e.clipboardData || window.clipboardData;
      if (!ct) return;
      e.preventDefault();
      const text = ct.getData('text/plain');
      document.execCommand('insertText', false, text);
    });

    el.addEventListener('blur', deactivate);
  }

  // ── Inicializar elemento de imagem ────────────────────────────
  function initImageEditable(el, key) {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute(
      'aria-label',
      `Trocar imagem${el.getAttribute('alt') ? ': ' + el.getAttribute('alt') : ''}`
    );

    // Input de arquivo oculto (semântica de input ao ser ativado)
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/jpeg,image/png,image/webp,image/gif,image/svg+xml';
    fileInput.setAttribute('aria-label', 'Selecionar nova imagem');
    Object.assign(fileInput.style, {
      position: 'absolute',
      opacity: '0',
      pointerEvents: 'none',
      width: '0',
      height: '0',
    });
    el.parentElement.insertBefore(fileInput, el.nextSibling);

    fileInput.addEventListener('change', async () => {
      const file = fileInput.files[0];
      if (!file) return;
      await uploadImage(el, key, file);
      fileInput.value = '';
    });

    function trigger() { fileInput.click(); }

    el.addEventListener('click', trigger);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); }
    });
  }

  async function uploadImage(el, key, file) {
    el.classList.add('editor-uploading');
    const fd = new FormData();
    fd.append('file', file);
    fd.append('key', key);

    try {
      const res = await fetch('/adm/upload.php', {
        method: 'POST',
        body: fd,
        credentials: 'include',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { url, error } = await res.json();
      if (error) throw new Error(error);

      if (el.tagName === 'IMG') {
        el.src = url;
        el.removeAttribute('srcset');
      } else {
        el.style.backgroundImage = `url('${url}')`;
      }

      pending[key] = { type: 'image', value: url };
      markChanged();
    } catch (err) {
      alert('Erro ao enviar imagem: ' + err.message);
    } finally {
      el.classList.remove('editor-uploading');
    }
  }

  // ── Publicar ──────────────────────────────────────────────────
  publishBtn.addEventListener('click', async () => {
    if (publishBtn.disabled) return;

    publishBtn.textContent = 'Publicando…';
    publishBtn.disabled = true;

    try {
      const res = await fetch('/adm/save.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(pending),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({}));
        throw new Error(error || `HTTP ${res.status}`);
      }

      publishBtn.textContent = '✓ Publicado';
      for (const k in pending) delete pending[k];

      setTimeout(() => {
        publishBtn.textContent = 'Publicar';
        publishBtn.disabled = true;
      }, 3000);

    } catch (err) {
      publishBtn.textContent = 'Erro — tente novamente';
      publishBtn.disabled = false;
      console.error('Falha ao publicar:', err);
    }
  });

  // ── Descartar ─────────────────────────────────────────────────
  discardBtn.addEventListener('click', () => {
    const dirty = Object.keys(pending).length > 0;
    if (!dirty || confirm('Descartar todas as alterações não publicadas?')) {
      location.reload();
    }
  });

}());
