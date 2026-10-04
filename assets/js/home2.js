/* Redesigned home page: palette switcher, research cards, Scholar metrics with
   count-up, filterable news feed, selected papers, cursor spotlight. */
(async function () {
  const { esc, fmtDate, getJSON, boldMe, ICONS, setupReveal } = window.Site;
  const root = document.documentElement;
  const DATA = '/data/';
  const PUBS_PAGE = '/publications/';

  const current = 'graphite';
  root.dataset.palette = current;

  /* ---------- Research cards ---------- */
  const themesEl = document.getElementById('themes');
  const cards = window.THEMES;
  themesEl.innerHTML = cards.map((t, i) => `
    <a class="theme-card glass lift spot reveal" data-i="${i}" href="/research/#${t.id}">
      <span class="ic">${t.icon}</span>
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.short)}</p>
      ${t.tags ? `<div class="tag-row">${t.tags.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
      <span class="more">Learn more →</span>
    </a>`).join('');
  function paintCards() {
    themesEl.querySelectorAll('.theme-card').forEach(el => el.style.setProperty('--c', cards[+el.dataset.i].c[current]));
    document.querySelectorAll('.fields li').forEach((li, i) => li.style.setProperty('--dot', cards[i % 4].c[current]));
    document.querySelectorAll('.mentors2 .av').forEach((el, i) => el.style.setProperty('--c', cards[i % 4].c[current]));
  }
  paintCards();
  document.querySelectorAll('.hero2 .reveal').forEach(e => e.classList.add('in')); // hero is always visible on load
  setupReveal();

  /* ---------- Cursor spotlight ---------- */
  document.addEventListener('pointermove', e => {
    const el = e.target.closest('.spot');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });

  /* ---------- Count-up for the impact band ---------- */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el) {
    const target = +el.dataset.to, suffix = el.dataset.suffix || '';
    const fmt = n => n.toLocaleString('en-US') + suffix;
    if (reduce) { el.textContent = fmt(target); return; }
    const t0 = performance.now(), dur = 1400;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * e));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const band = document.querySelector('.impact');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { band.querySelectorAll('[data-to]').forEach(countUp); io.disconnect(); }
    }), { threshold: 0.3 });
    io.observe(band);
  }

  /* ---------- Scholar metrics ---------- */
  try {
    const m = await getJSON(DATA + 'metrics.json');
    document.getElementById('stat-cites').dataset.to = Math.floor(m.citations / 100) * 100;
    document.getElementById('stat-h').textContent = m.hIndex;
    document.getElementById('stat-i10').textContent = m.i10;
    if (m.updated) document.getElementById('stats-src').innerHTML =
      `<a href="${esc(m.profile)}" target="_blank" rel="noopener">Google Scholar</a> metrics · updated ${fmtDate(m.updated, true)}`;
  } catch (e) { /* keep baked-in numbers */ }

  /* ---------- News feed with filters ---------- */
  const GROUPS = {
    all: () => true,
    research: n => ['Paper', 'Award'].includes(n.type),
    media: n => ['TV', 'Radio', 'Press', 'Newsletter'].includes(n.type),
    talks: n => ['Talk', 'Role'].includes(n.type),
  };
  let news = [];
  function renderNews(group) {
    const list = news.filter(GROUPS[group]);
    document.getElementById('latest').innerHTML = list.map(n => {
      const attrs = n.url ? ` href="${esc(n.url)}" target="_blank" rel="noopener"` : ' href="#"';
      return `<a${attrs}>
        <span class="d">${fmtDate(n.date)}</span>
        <span class="t">${esc(n.title)}<span class="o">${esc(n.outlet || '')}</span></span>
        <span class="badge soft" data-k="${esc(n.type)}">${esc(n.type)}</span>
      </a>`;
    }).join('');
    document.getElementById('latest').scrollTop = 0;
  }
  document.getElementById('news-filter').addEventListener('click', e => {
    const b = e.target.closest('button[data-g]'); if (!b) return;
    document.querySelectorAll('#news-filter button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    renderNews(b.dataset.g);
  });

  try {
    const [n, pubs] = await Promise.all([getJSON(DATA + 'news.json'), getJSON(DATA + 'publications.json')]);
    news = n.sort((a, b) => b.date.localeCompare(a.date));
    renderNews('all');
    document.getElementById('stat-pubs').dataset.to = Math.floor(pubs.length / 10) * 10;

    const ids = ['choudhuri2026copilot', 'miller2026examples', 'choudhuri2026thinking', 'choudhuri2026attention',
      'choudhuri2026matters', 'choudhuri2026coworker', 'choudhuri2026ysnp', 'choudhuri2026ainative',
      'choudhuri2025guides', 'choudhuri2025frontline', 'choudhuri2024far', 'halder2026conditional'];
    const sel = ids.map(id => pubs.find(p => p.id === id)).filter(Boolean);
    document.getElementById('selected').innerHTML = sel.map(p => `
      <article class="paper-card glass lift spot">
        <div class="meta"><span class="badge">${esc(p.venueShort)}</span><span class="muted" style="font-size:13px">${p.year}</span>
          ${p.award ? `<span class="award">${ICONS.trophy}${esc(p.award)}</span>` : ''}</div>
        <h3>${esc(p.title)}</h3>
        <div class="au">${boldMe(p.authors)}</div>
        <div class="links">
          ${p.pdf ? `<a href="${esc(p.pdf)}" target="_blank" rel="noopener">PDF</a>` : ''}
          ${p.data ? `<a href="${esc(p.data)}" target="_blank" rel="noopener">Data</a>` : ''}
        </div>
      </article>`).join('');
  } catch (e) {
    document.getElementById('latest').innerHTML = '<div style="padding:22px" class="muted">News could not be loaded. Open this page through a local web server.</div>';
  }
  setupReveal();
})();

/* Experience carousel arrows */
(function () {
  const track = document.getElementById('xp-track');
  if (!track) return;
  document.querySelectorAll('.xp-nav button').forEach(b => b.addEventListener('click', () => {
    const card = track.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    track.scrollBy({ left: step * Number(b.dataset.dir) * 2, behavior: 'smooth' });
  }));
})();
