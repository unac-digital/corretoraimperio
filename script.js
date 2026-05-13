'use strict';

/* ─── Carrossel infinito de seguradoras ──────────────── */
(function () {
  const SPEED_PX_PER_SEC = 11;

  const setupMarquee = (slider) => {
    const section = slider.closest('.seguradoras');
    if (!section) return;
    const track = slider.parentElement;
    const originals = Array.from(slider.children);
    if (!originals.length) return;

    slider.querySelectorAll('[data-clone]').forEach((n) => n.remove());

    const trackWidth = () => track.getBoundingClientRect().width;
    const sliderWidth = () => slider.scrollWidth;

    let safety = 0;
    while (sliderWidth() < trackWidth() * 1.2 && safety < 6) {
      originals.forEach((el) => {
        const clone = el.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('data-clone', 'pad');
        slider.appendChild(clone);
      });
      safety++;
    }

    const halfChildren = Array.from(slider.children);
    halfChildren.forEach((el) => {
      const clone = el.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.setAttribute('data-clone', 'half');
      slider.appendChild(clone);
    });

    const halfWidth = sliderWidth() / 2;
    const duration = Math.max(20, halfWidth / SPEED_PX_PER_SEC);
    slider.style.setProperty('--marquee-duration', duration.toFixed(1) + 's');

    section.classList.add('is-ready');
  };

  const runAll = () => {
    document.querySelectorAll('.seguradoras-slider[data-marquee]').forEach(setupMarquee);
  };

  const onReady = () => {
    const imgs = document.querySelectorAll('.seguradoras-slider img');
    let pending = imgs.length;
    if (!pending) { runAll(); return; }
    imgs.forEach((img) => {
      if (img.complete) {
        if (--pending === 0) runAll();
      } else {
        img.addEventListener('load', () => { if (--pending === 0) runAll(); }, { once: true });
        img.addEventListener('error', () => { if (--pending === 0) runAll(); }, { once: true });
      }
    });
    setTimeout(runAll, 2500);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady, { once: true });
  } else {
    onReady();
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(runAll, 200);
  });

  document.querySelectorAll('.seguradoras').forEach((section) => {
    const btn = section.querySelector('.seguradoras__pause');
    if (!btn) return;
    const label = btn.querySelector('.seguradoras__pause-label');
    btn.addEventListener('click', () => {
      const paused = section.classList.toggle('is-paused');
      btn.setAttribute('aria-pressed', String(paused));
      btn.setAttribute('aria-label', paused ? 'Retomar animação dos logos' : 'Pausar animação dos logos');
      if (label) label.textContent = paused ? 'Retomar' : 'Pausar';
    });
  });
})();

/* ─── Mobile menu ─────────────────────────────────────── */
(function () {
  const btn = document.querySelector('.header__menu-btn');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('header__nav--open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  // fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('header__nav--open');
      document.body.classList.remove('menu-open');
    }
  });

  // fecha ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('header__nav--open');
      document.body.classList.remove('menu-open');
      btn.focus();
    }
  });

  // fecha ao clicar em link dentro do menu
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('header__nav--open');
      document.body.classList.remove('menu-open');
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
  const btns = document.querySelectorAll('.faq__btn');
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(targetId);
      if (!answer) return;

      // fecha os outros
      btns.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherId = otherBtn.getAttribute('aria-controls');
          const otherAnswer = document.getElementById(otherId);
          if (otherAnswer) {
            otherAnswer.hidden = true;
            otherAnswer.classList.remove('is-open');
            otherAnswer.style.maxHeight = null;
          }
          otherBtn.closest('.faq__item')?.classList.remove('faq__item--open');
        }
      });

      btn.setAttribute('aria-expanded', String(!isExpanded));
      answer.hidden = isExpanded;
      answer.classList.toggle('is-open', !isExpanded);
      if (!isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
      btn.closest('.faq__item')?.classList.toggle('faq__item--open', !isExpanded);
    });
  });
})();

/* ─── Formulário de contato ──────────────────────────── */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const errorGlobal = document.getElementById('form-error-global');

  const fields = {
    name: { el: form.querySelector('#name'), errorId: 'name-error', validate: (v) => v.trim().length >= 2, msg: 'Informe seu nome completo.' },
    email: { el: form.querySelector('#email'), errorId: 'email-error', validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Informe um e-mail válido.' },
    phone: { el: form.querySelector('#phone'), errorId: 'phone-error', validate: (v) => v.replace(/\D/g, '').length >= 10, msg: 'Informe um telefone válido com DDD.' },
    message: { el: form.querySelector('#message'), errorId: 'message-error', validate: (v) => v.trim().length >= 10, msg: 'Escreva uma mensagem com pelo menos 10 caracteres.' },
  };

  // máscara de telefone
  const phoneEl = form.querySelector('#phone');
  if (phoneEl) {
    phoneEl.addEventListener('input', () => {
      let v = phoneEl.value.replace(/\D/g, '').slice(0, 11);
      if (v.length <= 10) {
        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else {
        v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      }
      phoneEl.value = v;
    });
  }

  const setError = (field, show) => {
    if (!field.el) return;
    const errorEl = document.getElementById(field.errorId);
    if (show) {
      field.el.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = field.msg;
        errorEl.removeAttribute('hidden');
      }
    } else {
      field.el.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.setAttribute('hidden', '');
      }
    }
  };

  // validação em tempo real (após primeiro submit)
  let submitted = false;
  Object.values(fields).forEach(({ el, ...rest }) => {
    if (!el) return;
    el.addEventListener('blur', () => {
      if (submitted) setError({ el, ...rest }, !rest.validate(el.value));
    });
    el.addEventListener('input', () => {
      if (submitted) setError({ el, ...rest }, !rest.validate(el.value));
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitted = true;

    let hasError = false;
    Object.values(fields).forEach((field) => {
      if (!field.el) return;
      const invalid = !field.validate(field.el.value);
      setError(field, invalid);
      if (invalid) hasError = true;
    });

    if (hasError) {
      if (errorGlobal) {
        errorGlobal.textContent = 'Por favor, corrija os campos indicados antes de enviar.';
        setTimeout(() => { errorGlobal.textContent = ''; }, 5000);
      }
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // simula envio — substitua por fetch() para integração real
    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      btn.textContent = 'Enviando…';
    }

    setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
        btn.innerHTML = '<span class="checkmark" aria-hidden="true">✓</span> Mensagem enviada!';
        btn.classList.add('btn--success');
      }
      if (statusEl) {
        statusEl.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      }
      form.reset();
      submitted = false;

      setTimeout(() => {
        if (btn) {
          btn.textContent = 'Enviar mensagem';
          btn.classList.remove('btn--success');
        }
        if (statusEl) statusEl.textContent = '';
      }, 5000);
    }, 1200);
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
  document.querySelectorAll('.footer-year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
