# rudrajit1729.github.io

Personal website of Rudrajit Choudhuri. Plain HTML/CSS/JS, no build step.
Design adapted from Anita Sarma's site (asarma.github.io), with a Graphite palette.

```
index.html               Home
research/ publications/  Research areas; searchable publication library
industry/ talks/          Industry roles; talks, media, awards
cv/                       Redirects to assets/pdf/R_Choudhuri_CV.pdf
data/publications.json    All papers (title, authors, venue, tags, methods, links, abstract)
data/news.json            Latest news & talks on the home page
data/metrics.json         Google Scholar numbers shown on the home page
assets/js/themes.js       Research areas (home cards + research page)
build_pages.py            Regenerates research/, publications/, talks/, 404.html
```

Preview locally: `python3 -m http.server 8766` from this folder, then open http://localhost:8766.

Publish: commit and push `master`, then run `./bin/deploy`. GitHub Pages serves the `gh-pages` branch.
The previous al-folio (Jekyll) site is kept on the `al-folio-archive` and `gh-pages-al-folio-archive` branches.
