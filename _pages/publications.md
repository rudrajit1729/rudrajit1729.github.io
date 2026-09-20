---
layout: page
permalink: /publications/
title: Publications
description: 33 publications and 4 distinguished paper awards. Filter by theme, or search by title, author, or venue.
years: [2026, 2025, 2024, 2023, 2022, 2021]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

<p class="pub-scholar">Full list and citation counts on <a href="https://scholar.google.com/citations?user=Pk9dKAsAAAAJ&hl=en">Google Scholar</a>.</p>

<div class="pub-filter">
  <input type="search" id="pub-search" class="form-control" placeholder="Search title, author, or venue..." aria-label="Search publications">
  <div class="pub-tags" id="pub-tags">
    <button type="button" class="pub-tag-btn active" data-tag="">All</button>
    <button type="button" class="pub-tag-btn" data-tag="Human-AI Collaboration">Human-AI Collaboration</button>
    <button type="button" class="pub-tag-btn" data-tag="Trust & Adoption">Trust &amp; Adoption</button>
    <button type="button" class="pub-tag-btn" data-tag="Future of Work">Future of Work</button>
    <button type="button" class="pub-tag-btn" data-tag="AI in Education">AI in Education</button>
    <button type="button" class="pub-tag-btn" data-tag="Cognitive Effects">Cognitive Effects</button>
    <button type="button" class="pub-tag-btn" data-tag="Inclusive Design">Inclusive Design</button>
    <button type="button" class="pub-tag-btn" data-tag="Open Source">Open Source</button>
    <button type="button" class="pub-tag-btn" data-tag="Machine Learning & Deep Learning">Machine Learning &amp; Deep Learning</button>
    <button type="button" class="pub-tag-btn" data-tag="Biomedical & Radiological Imaging">Biomedical &amp; Radiological Imaging</button>
    <button type="button" class="pub-tag-btn" data-tag="Image Processing">Image Processing</button>
    <button type="button" class="pub-tag-btn" data-tag="Computer Vision & Robotics">Computer Vision &amp; Robotics</button>
    <button type="button" class="pub-tag-btn" data-tag="Quantum Deep Learning">Quantum Deep Learning</button>
  </div>
  <div class="pub-count" id="pub-count"></div>
</div>

<div class="publications">

{%- for y in page.years %}
  <h2 class="year" data-year="{{y}}">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<script>
(function () {
  var search = document.getElementById('pub-search');
  var buttons = document.querySelectorAll('.pub-tag-btn');
  var count = document.getElementById('pub-count');
  var activeTag = '';

  function apply() {
    var q = (search.value || '').toLowerCase().trim();
    var entries = document.querySelectorAll('.pub-entry');
    var shown = 0;
    entries.forEach(function (row) {
      var tags = (row.getAttribute('data-tags') || '').split(',').map(function (t) { return t.trim(); });
      var text = row.textContent.toLowerCase();
      var okTag = !activeTag || tags.indexOf(activeTag) !== -1;
      var okText = !q || text.indexOf(q) !== -1;
      var li = row.closest('li') || row;
      li.style.display = (okTag && okText) ? '' : 'none';
      if (okTag && okText) shown++;
    });
    // hide year headings with no visible entries
    document.querySelectorAll('.publications h2.year').forEach(function (h) {
      var list = h.nextElementSibling;
      var visible = list ? list.querySelectorAll('li:not([style*="display: none"])').length : 0;
      h.style.display = visible ? '' : 'none';
      if (list) list.style.display = visible ? '' : 'none';
    });
    count.textContent = shown + ' of ' + entries.length + ' publications';
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      buttons.forEach(function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      activeTag = b.getAttribute('data-tag');
      apply();
    });
  });
  // clicking a tag badge on an entry filters by that tag
  document.addEventListener('click', function (e) {
    if (e.target.classList && e.target.classList.contains('paper-tag')) {
      var t = e.target.getAttribute('data-tag');
      buttons.forEach(function (x) { x.classList.toggle('active', x.getAttribute('data-tag') === t); });
      activeTag = t;
      apply();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
  search.addEventListener('input', apply);
  apply();
})();
</script>
