/* ============================================================
   script.js
   Handles: language switching, rendering repeated content
   (services/topics/helplines/tips/blog/testimonials) from
   translations.js, mobile menu, smooth scroll, back-to-top,
   scroll reveal, and basic contact-form validation.
   ============================================================ */

(function () {
  let currentLang = localStorage.getItem('site-lang') || 'en';

  const ICONS = {
    services: ['💬', '🌿', '🧑‍🤝‍🧑', '🏢'],
    topics: ['🌧️', '🌀', '🔥', '🌗', '🔁', '🧭', '🧒', '🕊️']
  };

  function t(lang) { return translations[lang] || translations.en; }

  /* ---------- set text for every [data-i18n] element ---------- */
  function applySimpleStrings(lang) {
    const dict = t(lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const path = el.getAttribute('data-i18n').split('.');
      let val = dict;
      for (const key of path) { val = val && val[key]; }
      if (typeof val === 'string') el.textContent = val;
    });
    document.title = dict.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.meta.desc);
    document.documentElement.setAttribute('lang', lang);
  }

  /* ---------- render card grids from arrays ---------- */
  function renderServices(lang) {
    const wrap = document.getElementById('servicesGrid');
    if (!wrap) return;
    wrap.innerHTML = t(lang).services.items.map((item, i) => `
      <div class="card reveal">
        <div class="icon">${ICONS.services[i] || '•'}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>`).join('');
  }

  function renderTopics(lang) {
    const wrap = document.getElementById('topicsGrid');
    if (!wrap) return;
    wrap.innerHTML = t(lang).topics.items.map((item, i) => `
      <div class="card topic-card reveal">
        <div class="icon">${ICONS.topics[i] || '•'}</div>
        <h3><span class="tag-dot"></span>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>`).join('');
  }

  function renderHelplines(lang) {
    const wrap = document.getElementById('helplineList');
    if (!wrap) return;
    wrap.innerHTML = t(lang).resources.helplines.map(h => `
      <div class="helpline-item reveal">
        <div>
          <strong>${escapeHtml(h.name)}</strong>
          <div style="font-size:13px;color:var(--text-soft);margin-top:2px;">${escapeHtml(h.desc)}</div>
        </div>
        <div class="num">${escapeHtml(h.number)}</div>
      </div>`).join('');
  }

  function renderTips(lang) {
    const wrap = document.getElementById('tipsList');
    if (!wrap) return;
    wrap.innerHTML = t(lang).resources.tips.map(tip => `<li>${escapeHtml(tip)}</li>`).join('');
  }

  function renderBlog(lang) {
    const wrap = document.getElementById('blogGrid');
    if (!wrap) return;
    const readMore = t(lang).blog.readMore;
    wrap.innerHTML = t(lang).blog.posts.map(post => `
      <div class="card blog-card reveal">
        <span class="tag">${escapeHtml(post.tag)}</span>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.excerpt)}</p>
        <a href="#" class="readmore" onclick="return false;">${escapeHtml(readMore)} →</a>
      </div>`).join('');
  }

  function renderTestimonials(lang) {
    const wrap = document.getElementById('testiGrid');
    if (!wrap) return;
    wrap.innerHTML = t(lang).testimonials.quotes.map(q => `
      <div class="testi-card reveal">
        <span class="quote-mark">"</span>
        <p>${escapeHtml(q.text)}</p>
        <div class="author">${escapeHtml(q.author)}</div>
      </div>`).join('');
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- language switching ---------- */
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site-lang', lang);
    document.body.classList.remove('lang-en', 'lang-hi', 'lang-gu');
    document.body.classList.add('lang-' + lang);

    applySimpleStrings(lang);
    renderServices(lang);
    renderTopics(lang);
    renderHelplines(lang);
    renderTips(lang);
    renderBlog(lang);
    renderTestimonials(lang);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    initReveal(); // re-observe newly rendered cards
  }

  /* ---------- mobile menu ---------- */
  function initMobileMenu() {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  /* ---------- back to top ---------- */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('show', window.scrollY > 500);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- scroll reveal ---------- */
  let observer;
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  /* ---------- contact form ---------- */
  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#fName');
      const email = form.querySelector('#fEmail');
      let valid = true;
      [name, email].forEach(f => f.style.borderColor = '');
      if (!name.value.trim()) { name.style.borderColor = '#c0533f'; valid = false; }
      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) { email.style.borderColor = '#c0533f'; valid = false; }
      if (!valid) return;

      const successBox = document.getElementById('formSuccess');
      successBox.textContent = t(currentLang).contact.formSuccess;
      successBox.classList.add('show');
      form.reset();
    });
  }

  /* ---------- smooth scroll for in-page anchors ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-switch button, .lang-switch-mobile button').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    initMobileMenu();
    initBackToTop();
    initForm();
    initSmoothScroll();
    setLanguage(currentLang);
  });
})();
