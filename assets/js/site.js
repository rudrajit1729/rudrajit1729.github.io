/* Shared site chrome: nav, footer, theme, reveal-on-scroll, helpers. */
(function () {
  const NAV_ICON = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/></svg>',
    research: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>',
    pubs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5z"/><path d="M8 7h6M8 11h6"/></svg>',
    industry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    talks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
  };
  const PAGES = [
    ['/', 'Home', NAV_ICON.home],
    ['/research/', 'Research', NAV_ICON.research],
    ['/publications/', 'Publications', NAV_ICON.pubs],
    ['/industry/', 'Industry', NAV_ICON.industry],
    ['/talks/', 'Talks & Media', NAV_ICON.talks],
    ['/assets/pdf/R_Choudhuri_CV.pdf', 'CV', NAV_ICON.cv],
  ];

  const ICONS = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h4v4c0 3-2 5-4 6M13 7h4v4c0 3-2 5-4 6"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  };

  // Research-field palette (shared by publications, research, home)
  const FIELDS = {
    'Human-AI Collaboration': '#0a6cff',
    'Trust & Adoption': '#5e5ce6',
    'Future of Work': '#0f9d8a',
    'AI in Education': '#30b0c7',
    'Cognitive Effects': '#7c5cd6',
    'Inclusive Design': '#e0578b',
    'Open Source': '#2e9e4f',
    'Machine Learning & Deep Learning': '#f2a516',
    'Biomedical Image Processing': '#d9534f',
    'Image Processing': '#8e8e93',
    'Computer Vision & Robotics': '#c47f17',
    'Quantum Deep Learning': '#3a3a3f',
  };

  // Paste the full LinkedIn profile URL here to show LinkedIn links across the site.
  const LINKEDIN = 'https://www.linkedin.com/in/rudrajit-choudhuri/';

  const here = location.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/').toLowerCase();

  function renderNav() {
    const el = document.getElementById('site-nav');
    if (!el) return;
    const links = PAGES.map(([href, label, icon]) => {
      const cur = href === here;
      const ext = href.endsWith('.pdf') ? ' target="_blank" rel="noopener"' : '';
      return `<li><a href="${href}"${cur ? ' aria-current="page"' : ''}${ext}>${icon}<span>${label}</span></a></li>`;
    }).join('');
    el.className = 'nav';
    el.innerHTML = `
      <div class="wrap">
        <div class="nav-inner glass glass-strong">
          <a class="brand" href="/" aria-label="Rudrajit Choudhuri, home"><img class="brand-logo" src="/assets/img/logo-rc.png" alt="" width="32" height="32"><span>Rudrajit Choudhuri</span></a>
          <ul class="nav-links" id="nav-links">${links}</ul>
          <button class="icon-btn" id="theme-btn" type="button" aria-label="Toggle dark mode"></button>
          <button class="icon-btn menu-btn" id="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">${ICONS.menu}</button>
        </div>
      </div>`;
    const menu = el.querySelector('#menu-btn');
    menu.addEventListener('click', () => {
      const open = el.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.innerHTML = open ? ICONS.close : ICONS.menu;
    });
    el.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => el.classList.remove('open')));
    setupTheme(el.querySelector('#theme-btn'));
  }

  function currentTheme() {
    const set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function setupTheme(btn) {
    const paint = () => { btn.innerHTML = currentTheme() === 'dark' ? ICONS.sun : ICONS.moon; };
    paint();
    btn.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
    matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', paint);
  }

  function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
      <div class="wrap">
        <div class="foot glass">
          <div>© ${new Date().getFullYear()} Rudrajit Choudhuri · Oregon State University</div>
          <nav aria-label="Elsewhere">
            <a href="https://scholar.google.com/citations?user=Pk9dKAsAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>
            <a href="https://www.linkedin.com/in/rudrajit-choudhuri/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://orcid.org/0000-0001-7168-2107" target="_blank" rel="noopener">ORCID</a>
            <a href="https://github.com/rudrajit1729" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:choudhru@oregonstate.edu">Email</a>
          </nav>
        </div>
      </div>`;
  }


  function setupReveal() {
    const els = [...document.querySelectorAll('.reveal:not(.in)')];
    // anything already on screen shows immediately; the rest fades in on scroll
    els.forEach(e => { if (e.getBoundingClientRect().top < innerHeight) e.classList.add('in'); });
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    els.forEach(e => io.observe(e));
  }

  // ---- helpers exposed to page scripts ----
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmtDate(iso, withDay) {
    const [y, m, d] = iso.split('-').map(Number);
    return withDay && d > 1 ? `${MONTHS[m - 1]} ${d}, ${y}` : `${MONTHS[m - 1]} ${y}`;
  }
  async function getJSON(url) {
    const r = await fetch(url, { cache: 'no-cache' });
    if (!r.ok) throw new Error(url + ' ' + r.status);
    return r.json();
  }
  function boldMe(authors) {
    return esc(authors).replace(/(R\.?\s?Choudhuri|Rudrajit Choudhuri)/g, '<b>$1</b>');
  }
  function toast(msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1800);
  }

  window.Site = { ICONS, FIELDS, esc, fmtDate, getJSON, boldMe, toast, setupReveal };

  function wireLinkedIn() {
    if (!LINKEDIN) return;
    document.querySelectorAll('[data-linkedin]').forEach(el => {
      el.hidden = false;
      (el.tagName === 'A' ? el : el.querySelector('a')).href = LINKEDIN;
    });
  }

  renderNav();
  renderFooter();
  wireLinkedIn();
  setupReveal();
})();
