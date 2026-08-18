'use strict';

/* ─── Carrossel infinito de seguradoras ──────────────── */
(function () {
  /* 11px/s andava de verdade, mas uma logo levava ~115s para cruzar a faixa:
     em 3 segundos de olhar ela se deslocava 33px, abaixo do que o olho registra
     como movimento sem referência fixa ao lado — daí a impressão de fita parada.
     40px/s cruza a mesma faixa em ~32s, que é o ritmo legível para logos. */
  const SPEED_PX_PER_SEC = 40;
  const builtFor = new WeakMap();
  let forcado = false;

  const cloneItem = (el, kind) => {
    const clone = el.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('data-clone', kind);
    return clone;
  };

  const build = (slider) => {
    const track = slider.parentElement;

    /* Os clones saem ANTES de ler os originais: lendo depois, os clones da
       montagem anterior entrariam na lista de originais e a fita cresceria
       a cada remontagem. */
    slider.querySelectorAll('[data-clone]').forEach((n) => n.remove());

    const originals = Array.from(slider.children);
    if (!originals.length) return false;

    const trackWidth = track.getBoundingClientRect().width;
    const baseWidth = slider.getBoundingClientRect().width;
    if (!trackWidth || !baseWidth) return false;

    /* Repete o conjunto até a fita ficar mais larga que a área visível,
       senão sobraria espaço vazio no fim de cada volta. */
    let copies = 1;
    while (baseWidth * copies < trackWidth * 1.2 && copies < 12) copies++;
    for (let i = 1; i < copies; i++) {
      originals.forEach((el) => slider.appendChild(cloneItem(el, 'pad')));
    }

    /* Duplica a fita inteira: a segunda metade é cópia exata da primeira,
       então o translateX(-50%) do keyframe termina num ponto idêntico ao
       início e a emenda do ciclo não aparece. */
    Array.from(slider.children).forEach((el) => slider.appendChild(cloneItem(el, 'half')));

    /* A metade é medida por aritmética, não relendo o DOM: as <img> clonadas
       recarregam de forma assíncrona e teriam largura zero neste instante,
       o que faria a fita andar mais rápido que os SPEED_PX_PER_SEC. Como
       cada cópia é idêntica ao conjunto original, a conta é exata. */
    const halfWidth = baseWidth * copies;
    const duration = Math.max(20, halfWidth / SPEED_PX_PER_SEC);
    slider.style.setProperty('--marquee-duration', duration.toFixed(1) + 's');
    return true;
  };

  const buildAll = (imagensProntas) => {
    document.querySelectorAll('.seguradoras-slider[data-marquee]').forEach((slider) => {
      const section = slider.closest('.seguradoras');
      if (!section) return;

      /* Sem layout ainda (container escondido): medir agora daria zero. Sai
         sem marcar nada, para tentar de novo quando a faixa ganhar largura. */
      const largura = Math.round(slider.parentElement.getBoundingClientRect().width);
      if (!largura) return;

      /* A chave carrega a largura e se as imagens já estavam carregadas, então
         uma montagem provisória é refeita quando elas chegam, e chamadas
         repetidas na mesma condição não fazem nada. */
      const chave = largura + (imagensProntas ? ':ok' : ':parcial');
      if (builtFor.get(slider) === chave) return;

      /* Só memoriza depois do sucesso: marcar antes deixaria a fita presa
         para sempre num build que falhou. */
      if (!build(slider)) return;
      builtFor.set(slider, chave);

      /* Reinicia a animação para ela já nascer com a duração nova: trocar a
         duração com a animação rodando faz a fita saltar. */
      slider.style.animation = 'none';
      void slider.offsetWidth;
      slider.style.animation = '';

      section.classList.add('is-ready');
    });
  };

  /* Medir antes das imagens carregarem daria largura zero, e a fita sairia com
     o número de cópias e a velocidade errados — por isso espera. Se alguma
     imagem nunca resolver, `forcado` monta assim mesmo em vez de deixar a fita
     parada, e a montagem correta acontece quando ela chegar. */
  const tentar = () => {
    const imgs = Array.from(document.querySelectorAll('.seguradoras-slider img'));
    const prontas = imgs.every((img) => img.complete);
    if (!prontas && !forcado) return;
    buildAll(prontas);
  };

  /* Observar a faixa cobre a primeira vez que ela ganha largura e qualquer
     mudança depois. Observamos a faixa, não a fita — a fita muda de largura
     quando clonamos, e isso realimentaria o observer. */
  let resizeTimer;
  const agendarRemontagem = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(tentar, 200);
  };

  const init = () => {
    if (typeof ResizeObserver === 'function') {
      const ro = new ResizeObserver(agendarRemontagem);
      document.querySelectorAll('.seguradoras-track').forEach((t) => ro.observe(t));
    } else {
      window.addEventListener('resize', agendarRemontagem);
    }

    document.querySelectorAll('.seguradoras-slider img').forEach((img) => {
      if (img.complete) return;
      img.addEventListener('load', tentar, { once: true });
      img.addEventListener('error', tentar, { once: true });
    });

    /* Aba aberta em segundo plano: o navegador segura timers e eventos até ela
       aparecer, então tentamos de novo quando o usuário chega nela. */
    document.addEventListener('visibilitychange', tentar);
    window.addEventListener('load', tentar);
    setTimeout(() => { forcado = true; tentar(); }, 5000);

    tentar();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

})();

/* ─── Mobile menu ─────────────────────────────────────── */
(function () {
  const btn = document.querySelector('.header__menu-btn');
  const nav = document.getElementById('main-nav');
  const closeBtn = document.querySelector('.header__nav-close');
  if (!btn || !nav) return;

  const abrir = () => {
    btn.setAttribute('aria-expanded', 'true');
    nav.classList.add('header__nav--open');
    document.body.classList.add('menu-open');
  };

  const fechar = () => {
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('header__nav--open');
    document.body.classList.remove('menu-open');
  };

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    if (isOpen) fechar(); else abrir();
  });

  /* O X fica dentro do painel de tela cheia — sem ele, fechar no toque é
     impossível: o hambúrguer pinta atrás do painel, e não há "fora" para
     tocar já que o painel cobre a tela inteira. */
  if (closeBtn) closeBtn.addEventListener('click', fechar);

  // fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) fechar();
  });

  // fecha ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { fechar(); btn.focus(); }
  });

  // fecha ao clicar em link dentro do menu
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fechar);
  });
})();

/* ─── Salto instantâneo (seções em tela cheia) ───────── */
/* Estas seções ocupam a tela inteira (ver #sobre,#contato no CSS) para o
   clique no menu parecer entrada de página nova, não rolagem. Mas
   `html { scroll-behavior: smooth }` é global e faria a página deslizar até
   lá em ~1s, o que quebra justamente essa sensação. O `behavior:'auto'` do
   scrollIntoView ignora o CSS e pula direto. O #faq continua rolando suave,
   porque lá a rolagem é o comportamento desejado. */
(function () {
  const INSTANTANEAS = ['sobre', 'contato'];

  INSTANTANEAS.forEach((id) => {
    document.querySelectorAll('a[href="#' + id + '"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        /* scrollIntoView respeita o scroll-margin-top do CSS, que é o que
           impede o header sticky de tapar o topo da seção. */
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        history.pushState(null, '', '#' + id);
      });
    });
  });
})();

/* ─── Header scroll ──────────────────────────────────── */
(function () {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('header--scrolled', y > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ─── Fade-up on scroll (IntersectionObserver) ───────── */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-fade-up').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.querySelectorAll('.animate-fade-up').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-fade-up').forEach((el) => {
    observer.observe(el);
  });
})();

/* ─── Counter animation (C2) ─────────────────────────── */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = document.querySelectorAll('.counter[data-target], .stats__number[data-target]');
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const DURATION = prefersReduced ? 0 : 1800;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const value = Math.round(easeOut(progress) * target);
      el.innerHTML = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.innerHTML = target + suffix;
      }
    };

    if (DURATION === 0) {
      el.innerHTML = target + suffix;
    } else {
      requestAnimationFrame(tick);
    }
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
})();

/* ─── FAQ accordion ──────────────────────────────────── */
(function () {
  const btns = Array.from(document.querySelectorAll('.faq__btn'));
  if (!btns.length) return;

  const mouseFino = () => matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Guarda qual pergunta foi aberta por clique/toque. Sem isso, no desktop
     tirar o mouse para selecionar um trecho do texto fecharia a resposta na
     hora — quem clica quer ler com calma, movendo o cursor para fora. */
  let fixado = null;

  const respostaDe = (btn) => document.getElementById(btn.getAttribute('aria-controls'));

  /* As páginas marcam as respostas com `hidden`, que força display:none e
     impediria qualquer transição. Quem esconde agora é o max-height:0 do CSS
     (colapsa igual, mas é animável), então o atributo sai já na carga. */
  btns.forEach((btn) => { const a = respostaDe(btn); if (a) a.hidden = false; });

  const abrir = (btn) => {
    const answer = respostaDe(btn);
    if (!answer) return;
    btns.forEach((outro) => { if (outro !== btn) fechar(outro); });
    btn.setAttribute('aria-expanded', 'true');
    answer.classList.add('is-open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    btn.closest('.faq__item')?.classList.add('faq__item--open');
  };

  const fechar = (btn) => {
    const answer = respostaDe(btn);
    if (!answer) return;
    btn.setAttribute('aria-expanded', 'false');
    answer.classList.remove('is-open');
    answer.style.maxHeight = null;
    btn.closest('.faq__item')?.classList.remove('faq__item--open');
  };

  btns.forEach((btn) => {
    const item = btn.closest('.faq__item');

    btn.addEventListener('click', () => {
      const aberto = btn.getAttribute('aria-expanded') === 'true';
      /* No celular (sem hover) o clique é o único jeito de abrir e fechar —
         aqui ele sempre alterna. No desktop o hover já abre; um clique ali só
         fixa a que já está aberta, e clicar de novo solta a fixação. */
      if (mouseFino() && aberto && fixado === btn) { fechar(btn); fixado = null; return; }
      if (mouseFino() && aberto && fixado !== btn) { fixado = btn; return; }
      if (aberto) { fechar(btn); fixado = null; return; }
      abrir(btn);
      fixado = mouseFino() ? btn : null;
    });

    if (!item) return;

    /* Só dispara em quem tem mouse de verdade: no celular o toque gera
       mouseenter antes do clique, e a resposta abriria e fecharia sozinha a
       cada rolagem da página. */
    item.addEventListener('mouseenter', () => {
      if (!mouseFino()) return;
      abrir(btn);
    });

    item.addEventListener('mouseleave', () => {
      if (!mouseFino()) return;
      if (fixado === btn) return;
      fechar(btn);
    });
  });

  /* Texto justificado reflui de largura diferente: uma resposta aberta antes
     de redimensionar a janela ficaria com altura antiga, cortando a última
     linha (ou sobrando espaço). Só a que está aberta precisa remedir. */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const aberto = btns.find((b) => b.getAttribute('aria-expanded') === 'true');
      if (aberto) abrir(aberto);
    }, 150);
  });

  /* A pergunta que já nasce aberta no HTML (id="faq5-btn" hoje) foi medida
     pelo autor num viewport específico; remedir na carga cobre qualquer
     outro tamanho de tela. */
  const jaAberto = btns.find((b) => b.getAttribute('aria-expanded') === 'true');
  if (jaAberto) abrir(jaAberto);
})();

/* ─── Formulário de contato ──────────────────────────── */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const WHATSAPP = '5511964978014';
  const statusEl = document.getElementById('form-status');
  const resumoErros = document.getElementById('form-resumo-erros');
  const sucessoEl = document.getElementById('form-success');
  const btn = document.getElementById('form-submit-btn');
  const rotuloBtn = btn ? btn.innerHTML : '';

  /* Os ids são os do HTML (em português) — o handler anterior procurava
     #name/#phone/#message, que não existem neste formulário. */
  const campos = [
    { id: 'nome',      erro: 'nome-erro',      rotulo: 'Nome',      valida: (v) => v.trim().length >= 2,                        msg: 'Informe seu nome completo.' },
    { id: 'telefone',  erro: 'telefone-erro',  rotulo: 'WhatsApp',  valida: (v) => v.replace(/\D/g, '').length >= 10,           msg: 'Informe um telefone válido com DDD.' },
    { id: 'email',     erro: 'email-erro',     rotulo: 'E-mail',    valida: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Informe um e-mail válido.' },
    { id: 'interesse', erro: 'interesse-erro', rotulo: 'Interesse', valida: (v) => v.trim() !== '',                             msg: 'Selecione o que você precisa.' },
  ];
  campos.forEach((c) => { c.el = form.querySelector('#' + c.id); });
  const mensagemEl = form.querySelector('#mensagem');

  const telefoneEl = form.querySelector('#telefone');
  if (telefoneEl) {
    telefoneEl.addEventListener('input', () => {
      let v = telefoneEl.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) {
        v = v.length <= 10
          ? v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
          : v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/(\d{2})(\d*)/, '($1) $2');
      }
      telefoneEl.value = v;
    });
  }

  /* O CSS esconde .form__error e .form__success por padrão e revela com
     .is-visible — o handler anterior usava o atributo hidden, que estes
     estilos ignoram. */
  const marcarErro = (campo, mostrar) => {
    if (!campo.el) return;
    const erroEl = document.getElementById(campo.erro);
    if (mostrar) {
      campo.el.setAttribute('aria-invalid', 'true');
      if (erroEl) { erroEl.textContent = campo.msg; erroEl.classList.add('is-visible'); }
    } else {
      campo.el.removeAttribute('aria-invalid');
      if (erroEl) { erroEl.textContent = ''; erroEl.classList.remove('is-visible'); }
    }
  };

  let enviado = false;
  campos.forEach((campo) => {
    if (!campo.el) return;
    const revalidar = () => { if (enviado) marcarErro(campo, !campo.valida(campo.el.value)); };
    campo.el.addEventListener('blur', revalidar);
    campo.el.addEventListener('input', revalidar);
    campo.el.addEventListener('change', revalidar);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    enviado = true;

    const invalidos = campos.filter((campo) => {
      const ruim = campo.el ? !campo.valida(campo.el.value) : false;
      marcarErro(campo, ruim);
      return ruim;
    });

    if (invalidos.length) {
      if (resumoErros) {
        resumoErros.textContent = invalidos.length === 1
          ? 'Corrija 1 campo antes de enviar: ' + invalidos[0].rotulo + '.'
          : 'Corrija ' + invalidos.length + ' campos antes de enviar: ' + invalidos.map((c) => c.rotulo).join(', ') + '.';
      }
      if (invalidos[0].el) invalidos[0].el.focus();
      return;
    }
    if (resumoErros) resumoErros.textContent = '';

    /* O site é estático (GitHub Pages): não há servidor para receber o
       formulário. Em vez de fingir um envio, abrimos o WhatsApp já com os
       dados preenchidos — a mensagem chega de verdade na corretora. */
    const interesseEl = form.querySelector('#interesse');
    const interesseTexto = interesseEl && interesseEl.selectedIndex > -1
      ? interesseEl.options[interesseEl.selectedIndex].text
      : '';
    const linhas = [
      'Olá! Gostaria de uma cotação.',
      '',
      'Nome: ' + form.querySelector('#nome').value.trim(),
      'WhatsApp: ' + form.querySelector('#telefone').value.trim(),
      'E-mail: ' + form.querySelector('#email').value.trim(),
      'Interesse: ' + interesseTexto,
    ];
    const obs = mensagemEl ? mensagemEl.value.trim() : '';
    if (obs) linhas.push('Mensagem: ' + obs);

    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(linhas.join('\n')), '_blank', 'noopener');

    if (sucessoEl) {
      sucessoEl.classList.add('is-visible');
      sucessoEl.setAttribute('aria-hidden', 'false');
    }
    if (statusEl) statusEl.textContent = 'Dados enviados para o WhatsApp da corretora. Se a janela não abrir, chame no (11) 96497-8014.';
    form.reset();
    enviado = false;

    setTimeout(() => {
      if (sucessoEl) {
        sucessoEl.classList.remove('is-visible');
        sucessoEl.setAttribute('aria-hidden', 'true');
      }
      if (statusEl) statusEl.textContent = '';
      if (btn) btn.innerHTML = rotuloBtn;
    }, 8000);
  });
})();

/* ─── Smooth scroll para âncoras ─────────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector('.header')?.offsetHeight ?? 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
      target.focus({ preventScroll: true });
    });
  });
})();

/* ─── Atualiza ano no rodapé ─────────────────────────── */
(function () {
  document.querySelectorAll('#ano-footer, .footer-year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
