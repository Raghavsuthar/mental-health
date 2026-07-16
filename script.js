/* ============================================================
   script.js
   Upgraded to dynamically render pop-up modal panels
   containing structured deep text for both public and clinicians.
   ============================================================ */

(function () {
  let currentLang = localStorage.getItem('site-lang') || 'en';

  const ICONS = {
    services: ['💬', '🌿', '🧑‍🤝‍🧑', '🏢'],
    topics: ['🌧️', '🌀', '🔥', '🌗', '🔁', '🧭', '🧒', '🕊️']
  };

  function t(lang) { return translations[lang] || translations.en; }

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

  /* Upgraded to make topic cards trigger the modal view */
  function renderTopics(lang) {
    const wrap = document.getElementById('topicsGrid');
    if (!wrap) return;
    wrap.innerHTML = t(lang).topics.items.map((item, i) => `
      <div class="card topic-card reveal" data-index="${i}">
        <div class="icon">${ICONS.topics[i] || '•'}</div>
        <h3><span class="tag-dot"></span>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
        <span style="color:var(--teal); font-size:13px; font-weight:600; display:block; margin-top:14px;">Click to read layout →</span>
      </div>`).join('');

    // Attach click triggers
    wrap.querySelectorAll('.topic-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = card.getAttribute('data-index');
        openDetailModal(idx, lang);
      });
    });
  }

  /* Dynamic Modal Generation for Public and Clinical Frameworks */
  function openDetailModal(index, lang) {
    const data = t(lang).topics.items[index];
    if (!data || !data.detailTitle) return;

    // Remove old modal instance if active
    const oldModal = document.getElementById('detailModal');
    if (oldModal) oldModal.remove();

    // Create Modal Layout HTML Elements
    const modal = document.createElement('div');
    modal.id = 'detailModal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(22, 58, 58, 0.45); backdrop-filter: blur(8px);
      z-index: 9999; display: flex; align-items: center; justify-content: center;
      padding: 20px; box-sizing: border-box;
    `;

    const cardHtml = `
      <div style="background: var(--panel); width: 100%; max-width: 850px; max-height: 85vh; overflow-y: auto; border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-lift); position: relative; animation: modalFadeIn 0.3s ease;">
        <button id="closeModalBtn" style="position: absolute; top: 20px; right: 20px; background: var(--teal-soft); border: none; font-size: 22px; width: 40px; height: 40px; border-radius: 50%; color: var(--teal-deep); cursor: pointer;">×</button>
        
        <h2 style="margin-bottom: 24px; border-bottom: 2px solid var(--teal-soft); padding-bottom: 12px; font-family: var(--font-display); color: var(--teal-deep);">${escapeHtml(data.detailTitle)}</h2>
        
        <!-- Toggle Tabs Layout for Public vs Medical Expert -->
        <div style="display: flex; gap: 10px; margin-bottom: 24px; border-bottom: 1px solid var(--sage);">
          <button id="tabPublic" style="padding: 10px 20px; background: var(--teal); color: white; border: none; border-radius: 8px 8px 0 0; font-weight: 600; cursor: pointer;">Public Guide</button>
          <button id="tabClinical" style="padding: 10px 20px; background: var(--teal-soft); color: var(--teal-deep); border: none; border-radius: 8px 8px 0 0; font-weight: 600; cursor: pointer;">Clinician Guide</button>
        </div>

        <div id="modalContentBox" style="font-family: var(--font-body); line-height: 1.65; color: var(--text);">
          ${data.publicSection}
        </div>
      </div>
    `;

    modal.innerHTML = cardHtml;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // Lock base scroll

    // Modal Interaction Handlers
    const publicBtn = modal.querySelector('#tabPublic');
    const clinicalBtn = modal.querySelector('#tabClinical');
    const contentBox = modal.querySelector('#modalContentBox');

    publicBtn.addEventListener('click', () => {
      publicBtn.style.background = 'var(--teal)'; publicBtn.style.color = 'white';
      clinicalBtn.style.background = 'var(--teal-soft)'; clinicalBtn.style.color = 'var(--teal-deep)';
      contentBox.innerHTML = data.publicSection;
    });

    clinicalBtn.addEventListener('click', () => {
      clinicalBtn.style.background = 'var(--teal)'; clinicalBtn.style.color = 'white';
      publicBtn.style.background = 'var(--teal-soft)'; publicBtn.style.color = 'var(--teal-deep)';
      contentBox.innerHTML = data.clinicianSection;
    });

    const closeModal = () => {
      modal.remove();
      document.body.style.overflow = '';
    };

    modal.querySelector('#closeModalBtn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
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
    initReveal();
  }

  function initMobileMenu() {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('show', window.scrollY > 500);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

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
    
    // Add custom structural CSS animation for modal popup panel dynamically
    const style = document.createElement('style');
    style.innerHTML = `@keyframes modalFadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }`;
    document.head.appendChild(style);

    initMobileMenu();
    initBackToTop();
    initForm();
    initSmoothScroll();
    setLanguage(currentLang);
  });
})();
