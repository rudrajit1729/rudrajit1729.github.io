/* Talks & media page: reveal on scroll and cursor spotlight on media cards. */
(function () {
  window.Site.setupReveal();
  document.addEventListener('pointermove', e => {
    const el = e.target.closest('.spot'); if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
})();
