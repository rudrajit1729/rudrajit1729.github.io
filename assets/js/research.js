/* Research page: one block per topic, in the style of asarma.github.io/research.html:
   a tinted side panel (icon, title, paper count) and a main panel (summary, questions, papers). */
(async function () {
  const { esc, getJSON, ICONS, setupReveal } = window.Site;
  let pubs = [];
  try { pubs = await getJSON('/data/publications.json'); } catch (e) {}
  const byId = Object.fromEntries(pubs.map(p => [p.id, p]));

  const block = t => {
    const c = t.c.graphite;
    const n = pubs.filter(p => (p.tags || []).some(tag => (t.fields || []).includes(tag))).length;
    const href = '/publications/?field=' + encodeURIComponent((t.fields || []).join('|'));
    const reps = (t.reps || []).map(id => byId[id]).filter(Boolean).map(p => `
      <a href="${esc(p.url || p.pdf || '/publications/')}" target="_blank" rel="noopener"><span>${esc(p.venueShort)} ${p.year}</span>${esc(p.title)}${p.award ? ` <em class="rep-award" title="${esc(p.award)}">${ICONS.trophy}</em>` : ''}</a>`).join('');
    return `
    <article class="theme-block glass reveal" id="${t.id}" style="--c:${c}">
      <div class="side">
        <span class="ic">${t.icon}</span>
        <h2>${esc(t.title)}</h2>
        ${n ? `<a class="link-arrow" href="${href}">${n} paper${n === 1 ? '' : 's'} in this area</a>` : ''}
      </div>
      <div class="main">
        <p>${esc(t.body)}</p>
        ${t.questions ? `<ul class="qs">${t.questions.map(q => `<li>${esc(q)}</li>`).join('')}</ul>` : ''}
        <div class="reps">${reps}</div>
        ${t.extra ? `<a class="link-arrow extra" href="${esc(t.extra.href)}" target="_blank" rel="noopener">${esc(t.extra.label)}</a>` : ''}
      </div>
    </article>`;
  };
  document.getElementById('theme-list').innerHTML = [...window.THEMES, window.EARLIER].map(block).join('');
  setupReveal();
  if (location.hash) { const el = document.querySelector(location.hash); if (el) setTimeout(() => el.scrollIntoView({ block: 'start' }), 60); }
})();
