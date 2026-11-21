/* ============================================================
   script.js
   Upgraded to dynamically render pop-up modal panels
   containing structured deep text for both public and clinicians.
   Updated with explicit localized validation and ARIA metrics.
   ============================================================ */

(function () {
  let currentLang = localStorage.getItem('site-lang') || 'en';

  const ICONS = {
    services: ['💬', '🌿', '🧑‍🤝‍🧑', '🏢'],
    topics: ['🌧️', '🌀', '🔥', '🌗', '🔁', '🧭', '🧒', '🕊️']
  };

  const TOPIC_EVIDENCE_IDS = Object.freeze(['depression', 'anxiety', null, 'bipolar', 'ocd', 'substance-use', 'child-adolescent', 'suicide']);

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

  function renderTopics(lang) {
    const wrap = document.getElementById('topicsGrid');
    if (!wrap) return;
    wrap.innerHTML = t(lang).topics.items.map((item, i) => {
      const topicId = TOPIC_EVIDENCE_IDS[i];
      const cardClass = topicId ? 'topic-card' : 'topic-card-static';
      const interaction = topicId ? `data-evidence-topic="${topicId}" role="button" tabindex="0"` : '';
      const action = topicId ? '<span class="topic-card-action">Open evidence-based learning guide →</span>' : '';
      return `
        <div class="card ${cardClass} reveal" ${interaction}>
          <div class="icon">${ICONS.topics[i] || '•'}</div>
          <h3><span class="tag-dot"></span>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.desc)}</p>
          ${action}
        </div>`;
    }).join('');

    wrap.querySelectorAll('.topic-card[data-evidence-topic]').forEach(card => {
      const triggerGuide = () => {
        const topicId = card.dataset.evidenceTopic;
        if (!topicId || typeof evidenceLibrary === 'undefined') return;
        selectedEvidenceTopic = topicId;
        evidenceLevel = 'all';
        evidenceQuery = '';
        const searchInput = document.getElementById('evidenceSearch');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.evidence-filter').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.level === 'all');
        });
        const target = document.getElementById('evidence-library');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        renderEvidenceLibrary();
      };
      card.addEventListener('click', triggerGuide);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerGuide();
        }
      });
    });
  }

  function openDetailModal(index, lang) {
    const data = t(lang).topics.items[index];
    if (!data || !data.detailTitle) return;

    const oldModal = document.getElementById('detailModal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'detailModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(22, 58, 58, 0.45); backdrop-filter: blur(8px);
      z-index: 9999; display: flex; align-items: center; justify-content: center;
      padding: 20px; box-sizing: border-box;
    `;

    const cardHtml = `
      <div class="modal-window" style="background: var(--panel); width: 100%; max-width: 850px; max-height: 85vh; overflow-y: auto; border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-lift); position: relative; animation: modalFadeIn 0.3s ease;">
        <button id="closeModalBtn" aria-label="Close details" style="position: absolute; top: 20px; right: 20px; background: var(--teal-soft); border: none; font-size: 22px; width: 40px; height: 40px; border-radius: 50%; color: var(--teal-deep); cursor: pointer;">×</button>
        
        <h2 style="margin-bottom: 24px; border-bottom: 2px solid var(--teal-soft); padding-bottom: 12px; font-family: var(--font-display); color: var(--teal-deep);">${escapeHtml(data.detailTitle)}</h2>
        
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
    document.body.style.overflow = 'hidden';

    const publicBtn = modal.querySelector('#tabPublic');
    const clinicalBtn = modal.querySelector('#tabClinical');
    const contentBox = modal.querySelector('#modalContentBox');
    const closeBtn = modal.querySelector('#closeModalBtn');

    closeBtn.focus();

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
      const triggers = document.querySelectorAll('.topic-card');
      if (triggers[index]) triggers[index].focus();
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    
    const operationalEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        window.removeEventListener('keydown', operationalEscape);
      }
    };
    window.addEventListener('keydown', operationalEscape);
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
    wrap.innerHTML = t(lang).blog.posts.map(post => `
      <div class="card blog-card reveal">
        <span class="tag">${escapeHtml(post.tag)}</span>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.excerpt)}</p>
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


  let evidenceLevel = 'all';
  let evidenceQuery = '';
  let selectedEvidenceTopic = null;

  function evidenceText(topic) {
    const lang = currentLang;
    const key = ['en','hi','gu'].includes(lang) ? lang : 'en';
    return topic[key] || topic.en || '';
  }

  function renderEvidenceLibrary() {
    const list = document.getElementById('evidenceTopicList');
    const reader = document.getElementById('evidenceReader');
    const sourceList = document.getElementById('evidenceSourceList');
    if (!list || !reader || typeof evidenceLibrary === 'undefined') return;

    const meta = evidenceLibrary.meta;
    const title = document.getElementById('evidenceTitle');
    const subtitle = document.getElementById('evidenceSubtitle');
    if (title) title.textContent = meta.title[currentLang] || meta.title.en;
    if (subtitle) subtitle.textContent = meta.subtitle[currentLang] || meta.subtitle.en;

    const q = evidenceQuery.trim().toLowerCase();
    const filtered = evidenceLibrary.topics.filter(topic => {
      const matchesLevel = evidenceLevel === 'all' || topic.level === evidenceLevel;
      const haystack = [
        topic.title, topic.summary, topic.evidence,
        ...topic.public.flat(), ...topic.clinical.flat()
      ].join(' ').toLowerCase();
      return matchesLevel && (!q || haystack.includes(q));
    });

    list.innerHTML = filtered.length ? filtered.map(topic => {
      const active = topic.id === selectedEvidenceTopic ? ' active' : '';
      return `
        <button class="evidence-topic${active}" data-topic-id="${escapeHtml(topic.id)}">
          <span class="evidence-topic-icon">${topic.icon}</span>
          <span class="evidence-topic-copy">
            <strong>${escapeHtml(topic.title)}</strong>
            <small>${escapeHtml(topic.level)} · Content updated ${escapeHtml(topic.contentUpdated)}</small>
          </span>
        </button>`;
    }).join('') : '<div class="evidence-no-results">No matching learning topic found.</div>';

    list.querySelectorAll('.evidence-topic').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedEvidenceTopic = btn.dataset.topicId;
        renderEvidenceLibrary();
      });
    });

    let selected = evidenceLibrary.topics.find(t => t.id === selectedEvidenceTopic);
    if (!selected && filtered.length) {
      selected = filtered[0];
      selectedEvidenceTopic = selected.id;
    }

    if (!selected) {
      reader.innerHTML = '<div class="evidence-empty"><div class="evidence-empty-icon">🔎</div><h3>No topic matches your search</h3><p>Try a broader term such as depression, psychosis, anxiety or safety.</p></div>';
    } else {
      const renderBlocks = blocks => blocks.map(([heading, body]) => `
        <section class="evidence-block">
          <h4>${escapeHtml(heading)}</h4>
          <p>${escapeHtml(body)}</p>
        </section>`).join('');

      reader.innerHTML = `
        <div class="evidence-reader-head">
          <div>
            <span class="evidence-badge">${escapeHtml(selected.level)}</span>
            <h3>${escapeHtml(selected.title)}</h3>
            <p>${escapeHtml(selected.summary)}</p>
          </div>
          <div class="evidence-review">Content updated: ${escapeHtml(selected.contentUpdated)}</div>
        </div>
        <div class="evidence-tabs">
          <button class="evidence-tab active" data-view="public">Public learning</button>
          <button class="evidence-tab" data-view="clinical">Student / clinician</button>
        </div>
        <div id="evidenceContent" class="evidence-content">
          ${renderBlocks(selected.public)}
        </div>
        <div class="evidence-citation">
          <strong>Evidence base:</strong> ${escapeHtml(selected.evidence)}
        </div>`;

      const content = reader.querySelector('#evidenceContent');
      reader.querySelectorAll('.evidence-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          reader.querySelectorAll('.evidence-tab').forEach(x => x.classList.remove('active'));
          tab.classList.add('active');
          content.innerHTML = renderBlocks(tab.dataset.view === 'clinical' ? selected.clinical : selected.public);
        });
      });
    }

    if (sourceList) {
      sourceList.innerHTML = evidenceLibrary.sources.map(source => `
        <a class="source-chip" href="${source.url}" target="_blank" rel="noopener noreferrer">
          <strong>${escapeHtml(source.name)}</strong><span>${escapeHtml(source.type)}</span>
        </a>`).join('');
    }
  }

  function initEvidenceLibrary() {
    if (typeof evidenceLibrary === 'undefined') return;
    const search = document.getElementById('evidenceSearch');
    if (search) search.addEventListener('input', () => {
      evidenceQuery = search.value;
      selectedEvidenceTopic = null;
      renderEvidenceLibrary();
    });
    document.querySelectorAll('.evidence-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.evidence-filter').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        evidenceLevel = btn.dataset.level;
        selectedEvidenceTopic = null;
        renderEvidenceLibrary();
      });
    });
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
    renderEvidenceLibrary();

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    initReveal();
  }

  function initMobileMenu() {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    const setOpen = (open) => {
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.setAttribute('aria-controls', 'mobileMenu');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        setOpen(false);
        btn.focus();
      }
    });
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
    
    const style = document.createElement('style');
    style.innerHTML = `@keyframes modalFadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }`;
    document.head.appendChild(style);

    initMobileMenu();
    initBackToTop();
    initSmoothScroll();
    initEvidenceLibrary();
    setLanguage(currentLang);
  });
})();
