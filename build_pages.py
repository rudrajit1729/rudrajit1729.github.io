"""Writes the inner pages (research, publications, talks) with shared head, nav, and footer.
Run: python3 build_pages.py"""
import pathlib, re
ROOT = pathlib.Path(__file__).parent
V = "41"
FAV = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E"
       "%3Cstop offset='0' stop-color='%230a6cff'/%3E%3Cstop offset='1' stop-color='%235e5ce6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='16' cy='16' r='16' fill='url(%23g)'/%3E"
       "%3Ctext x='16' y='22' font-family='Georgia,serif' font-size='18' fill='white' text-anchor='middle'%3ER%3C/text%3E%3C/svg%3E")

def page(title, desc, body, scripts, extra_css=("pages",)):
    css = "\n".join(f'<link rel="stylesheet" href="/assets/css/{c}.css?v={V}">' for c in ("style", "palettes", "home2", *extra_css))
    js = "\n".join(f'<script src="/assets/js/{s}.js?v={V}"></script>' for s in ("site", *scripts))
    return f'''<!doctype html>
<html lang="en" data-palette="graphite">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · Rudrajit Choudhuri</title>
<meta name="description" content="{desc}">
<link rel="icon" type="image/png" href="/assets/img/favicon-64.png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
{css}
<script>try{{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}}catch(e){{}}</script>
</head>
<body>
<div class="aurora" aria-hidden="true"><span class="b1"></span><span class="b2"></span><span class="b3"></span><span class="b4"></span></div>
<div class="grain" aria-hidden="true"></div>
<header id="site-nav"></header>

<main class="wrap">
{body}
</main>

<footer id="site-footer"></footer>
{js}
</body>
</html>
'''

SLIDE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8"/></svg>'
MEDAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/></svg>'
TROPHY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>'

# ---------------- Research ----------------
research = '''  <section class="page-hero wide reveal">
    <h1>Human-centered AI for <em>AI-native work</em></h1>
    <p>I investigate the <strong>cognitive and socio-technical factors that shape human–AI collaboration</strong>, and use what I learn to <strong>design human-centered AI tools for AI-native knowledge work</strong>. Specifically, I run <strong>large-scale mixed-methods studies</strong> to understand where, why, and how knowledge workers seek or limit AI support, what they are willing to delegate, and how trust, identity, accountability, and cognitive demands drive those choices. I then <strong>translate these findings into design frameworks and guidelines</strong>, and evaluate them with knowledge workers. Another line of my work looks at <strong>AI in education</strong>: how routine reliance on AI reshapes <strong>students’ cognitive habits</strong>, and how <strong>interfaces and curricula</strong> can keep <strong>judgment and critical thinking</strong> in the loop.</p>
    <div class="areas"><span class="label">Fields</span>
    <ul class="fields" aria-label="Research areas">
      <li><a href="/publications/?field=Human-AI%20Collaboration%7CTrust%20%26%20Adoption%7CInclusive%20Design">Human-Centered AI</a></li><li><a href="/publications/?field=Cognitive%20Effects%7CTrust%20%26%20Adoption">Cognitive Science</a></li><li><a href="/publications/?field=AI%20in%20Education">CS Education</a></li><li><a href="/publications/?field=Human-AI%20Collaboration%7COpen%20Source%7CFuture%20of%20Work%7CTrust%20%26%20Adoption">Software Engineering</a></li><li><a href="/publications/?field=Future%20of%20Work">Future of Work</a></li><li><a href="/publications/?field=Machine%20Learning%20%26%20Deep%20Learning%7CBiomedical%20Image%20Processing%7CImage%20Processing%7CComputer%20Vision%20%26%20Robotics%7CQuantum%20Deep%20Learning">Machine Learning &amp; Computer Vision</a></li>
    </ul></div>
  </section>

  <section class="reveal" style="margin-top:-28px">
    <div class="approach glass">
      <span class="label">How I work</span>
      <ul>
        <li><a href="/publications/?method=Large-scale%20surveys">Large-scale surveys</a></li><li><a href="/publications/?method=Controlled%20experiments">Controlled experiments</a></li><li><a href="/publications/?method=Interviews%20%26%20field%20studies">Interviews &amp; field studies</a></li><li><a href="/publications/?method=Mixed%20methods%20analysis">Mixed methods analysis</a></li><li><a href="/publications/?method=Design%20frameworks%20%26%20guidelines">Design frameworks &amp; guidelines</a></li><li><a href="/publications/?method=LLM-based%20tools%20%26%20evaluation">LLM-based tools &amp; evaluation</a></li><li><a href="/publications/?method=Algorithm%20design%2C%20machine%20learning%2C%20and%20computer%20vision">Algorithm design, machine learning, and computer vision</a></li>
      </ul>
    </div>
  </section>

  <section>
    <div class="section-head reveal"><h2>Research areas</h2></div>
    <div class="themes-stack" id="theme-list"></div>
  </section>

  <section class="reveal">
    <div class="threads glass">
      <h2>Current research threads</h2>
      <ol>
        <li>Trust, transparency, and alignment in human–AI collaboration</li>
        <li>Work design for the AI era: safeguarding agency, craft, and meaningful work</li>
        <li>Great co-workers and work etiquette in AI-native workplaces</li>
        <li>AI autonomy, delegation, and oversight in agentic workflows</li>
        <li>Design patterns and guidelines for the UI/UX of AI</li>
        <li>Cognitive impacts of AI in CS education</li>
        <li>Game design and visualization interventions for AI literacy</li>
        <li>Inclusive UX: cognitive and socio-economic aware HCI</li>
      </ol>
    </div>
  </section>

  <section class="reveal">
    <div class="cta-card glass">
      <div><h3>Interested in research along these lines?</h3><p>I’m always happy to talk about collaborations, talks, or research roles.</p></div>
      <a class="btn btn-primary" href="mailto:choudhru@oregonstate.edu">Email me</a>
    </div>
  </section>'''
(ROOT / "research" / "index.html").write_text(page("Research", "Research by Rudrajit Choudhuri on human–AI collaboration, cognition, the future of work, and interfaces for AI.", research, ("themes", "research")))

# ---------------- Publications ----------------
pubs = '''  <div class="page-hero reveal">
    <h1>Publications, by <em>research area</em></h1>
    <p>Search titles, authors, and venues, then narrow by research area, publication type, year, or award. Each paper links to its PDF or publisher page, with data, slides, and a one-click BibTeX citation where available. Citation counts are on <a href="https://scholar.google.com/citations?user=Pk9dKAsAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>.</p>
  </div>

  <div class="search reveal" style="margin-bottom:22px">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    <input id="q" type="search" placeholder="Search e.g. “human-centered AI”, “cognitive”, “ICSE”…" autocomplete="off" aria-label="Search publications">
    <kbd>/</kbd>
  </div>

  <div class="pub-shell">
    <aside class="filters glass reveal" id="filters" aria-label="Filters">
      <button class="btn btn-ghost filter-toggle" id="filter-toggle" type="button" aria-expanded="true">Filters</button>
      <div class="filter-body">
        <div>
          <h4>Research area <button type="button" data-clear="fields">Clear</button></h4>
          <div class="chips stack" id="f-fields"></div>
        </div>
        <div>
          <h4>Type <button type="button" data-clear="types">Clear</button></h4>
          <div class="chips" id="f-types"></div>
        </div>
        <div>
          <h4>Year</h4>
          <div class="hist" id="hist" aria-label="Papers per year"></div>
          <div class="hist-axis"><span id="hmin"></span><span id="hmax"></span></div>
          <div class="range" style="margin-top:12px">
            <select id="from" aria-label="From year"></select><span>to</span><select id="to" aria-label="To year"></select>
          </div>
        </div>
        <div>
          <h4>Venue</h4>
          <select class="select" id="venue" aria-label="Venue"><option value="">All venues</option></select>
        </div>
        <div style="display:grid;gap:12px">
          <label class="switch">Award-winning only <input type="checkbox" id="award"></label>
          <label class="switch">Hide preprints <input type="checkbox" id="archival"></label>
        </div>
      </div>
    </aside>

    <div>
      <div class="results-bar">
        <div class="count" id="count" aria-live="polite"></div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <select class="select" id="sort" aria-label="Sort" style="width:auto">
            <option value="new">Newest first</option>
            <option value="old">Oldest first</option>
          </select>
          <button class="btn btn-ghost" id="export" type="button" style="padding:9px 15px;font-size:14px">Export .bib</button>
        </div>
      </div>
      <div class="active-filters" id="active" style="margin:0 4px 16px"></div>
      <div id="results"></div>
    </div>
  </div>'''
(ROOT / "publications" / "index.html").write_text(page("Publications", "Searchable list of Rudrajit Choudhuri's publications.", pubs, ("publications",), extra_css=()))

# ---------------- Talks & media ----------------
TALKS = [
 ("Aug", "2026", "What Makes a Great Co-Worker in an AI-Native Workplace?", "Internship talk, Tech Futures Group, Microsoft", "great-coworker.pdf"),
 ("Sep", "2025", "AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work", "Internship talk, SAINTES Group, Microsoft Research", "ai-where-it-matters.pdf"),
 ("Jul", "2025", "What Needs Attention? Designing for Appropriate Trust in AI", "Invited talk, Appropriate Reliance Group, Microsoft Research", "TrustGen_Journal.pdf"),
 ("May", "2025", "What Guides Our Choices? Modeling Developers’ Trust and Adoption Towards GenAI", "ICSE 2025, Ottawa", "Trust2025.pdf"),
 ("Apr", "2025", "Insights from the Frontline: GenAI Utilization Among Software Engineering Students", "CSEE&amp;T 2025, Ottawa", "CSEET2025.pdf"),
 ("Nov", "2024", "Cognitive Factors Affecting Trust and Adoption Towards AI", "Invited talk, Colorado State University", "TrustGen_Journal.pdf"),
 ("Apr", "2024", "How Far Are We? The Triumphs and Trials of Generative AI in SE", "ICSE 2024, Lisbon", "ICSE-24-how-far.pdf"),
 ("Dec", "2021", "Adaptive Rough-Fuzzy Kernelized Clustering for Noisy Brain MRI Tissue Segmentation", "CVIP 2021", "CVIP21.pdf"),
]
talks_html = "\n".join(f'''      <article class="talk glass reveal">
        <div class="d">{m}<b>{y}</b></div>
        <div><h3>{t}</h3><small>{v}</small></div>
        <a class="slides" href="/assets/slides/{s}" target="_blank" rel="noopener">{SLIDE}Slides</a>
      </article>''' for m, y, t, v, s in TALKS)
MEDIA = [
 ("KGW TV News", "TV", "AI might be reshaping how college students learn, at the expense of critical thinking", "https://www.instagram.com/reel/DXxGQS1isbu/"),
 ("KATU ABC2", "TV", "OSU study raises concerns about AI’s impact on student thinking skills", "https://www.youtube.com/watch?v=3miv5SsLxcU"),
 ("KOIN 6 News", "News", "OSU study warns of declining cognitive ability as AI use grows in STEM fields", "https://www.koin.com/news/oregon/osu-study-warns-of-declining-cognitive-ability-as-ai-use-grows-in-stem-fields/"),
 ("Jefferson Public Radio", "Radio", "The staggering “cognitive debt” of generative AI in education", "https://www.ijpr.org/podcast/the-jefferson-exchange/2026-05-06/mindblowing-the-staggering-cognitive-debt-of-generative-ai-in-education"),
 ("SAN News", "News", "America’s STEM students are falling into an “AI dependence spiral”", "https://san.com/cc/americas-stem-students-are-falling-into-an-ai-dependence-spiral/"),
 ("The News Guard", "News", "Tech-savvy STEM students prone to letting AI do their thinking for them", "https://www.thenewsguard.com/news/tech-savvy-stem-students-prone-to-letting-ai-do-their-thinking-for-them-osu-study/article_901edad0-1e2f-4f1e-aa41-8ae7a1fdff3a.html"),
 ("Yahoo News", "News", "OSU study warns of declining cognitive ability as AI use grows in STEM fields", "https://www.yahoo.com/news/articles/osu-study-warns-declining-cognitive-011014556.html"),
 ("KGW TV News", "TV", "AI literacy to prevent scams in the AI era", "https://www.youtube.com/watch?v=3m1ZyJx4sic&t=16m"),
]
media_html = "\n".join(f'''      <a class="media glass lift spot reveal" href="{u}" target="_blank" rel="noopener">
        <div class="top"><span class="outlet">{o}</span><span class="badge soft">{k}</span></div>
        <h3>{t}</h3>
        <span class="go">May 2026 · Watch or read →</span>
      </a>''' for o, k, t, u in MEDIA)
AWARDS = [
 ("2026", True, "ACM SIGSOFT Distinguished Paper Award", "ICSE 2026, for “Maybe We Need Some More Examples”"),
 ("2026", True, "IEEE Distinguished Paper Award", "ICSME 2026 Industry Track, for “To Copilot and Beyond”"),
 ("2021", True, "IAPR Distinguished Paper Award", "CVIP 2021"),
 ("2021", True, "Best Paper Award", "ICACA 2021"),
 ("2025", False, "MOSIP Global Impact Inclusive Research Fellowship", "Gates Foundation-funded"),
 ("2025", False, "OpenAI Researcher Access Program Grant", "Sole PI"),
 ("2024–25", False, "NSF Travel Award", "ICSE 2024 and ICSE 2025"),
 ("2020", False, "Gold Medalist, NPTEL (IIT Ropar)", "Rank 1 in college, B.Tech Computer Science"),
]
awards_html = "\n".join(f'''          <li><span class="y">{y}</span><span>{('<span class="award">' + TROPHY + 'Award</span>') if t else ''}<b>{n}</b><small>{d}</small></span></li>''' for y, t, n, d in AWARDS)
INDUSTRY = [
 ("Aug 2026", "Where do developers draw the line on AI autonomy?", "Research-Driven Engineering Leadership (RDEL #158), features “You Shall Not Pass”", "https://rdel.substack.com/p/rdel-158-where-do-developers-draw"),
 ("Jul 2026", "Five studies that are changing how I think about AI in software engineering", "DX Engineering Enablement, Brian Houck, features “AI Where It Matters” and “To Copilot and Beyond”", "https://newsletter.getdx.com/p/five-studies-that-are-changing-how"),
 ("May 2026", "The AI-native developer", "DX Engineering Enablement, Brian Houck, features “The AI-Native Developer” (ACM Queue)", "https://newsletter.getdx.com/p/the-ai-native-developer"),
 ("May 2026", "How does deepening AI fluency change what it means to be a software developer?", "RDEL #143, features “The AI-Native Developer”", "https://rdel.substack.com/p/rdel-143-how-does-deepening-ai-fluency"),
 ("Oct 2025", "Where do developers actually want AI to support their work?", "RDEL #114, features “AI Where It Matters”", "https://rdel.substack.com/p/rdel-114-where-do-developers-actually"),
 ("Sep 2025", "What distinguishes developers who successfully adopt AI tools from those who don’t?", "RDEL #108, features “Maybe We Need Some More Examples”", "https://rdel.substack.com/p/rdel-108-what-distinguishes-developers"),
 ("Mar 2025", "What influences developers’ trust in adopting AI-assisted coding tools?", "RDEL #84, features “What Guides Our Choices?”", "https://rdel.substack.com/p/rdel-84-what-influences-developers"),
]
ind_html = "\n".join(f'''          <li><span class="y">{d}</span><span><a href="{u}" target="_blank" rel="noopener">{t}</a><small>{s}</small></span></li>''' for d, t, s, u in INDUSTRY)
ind_cards = "\n".join(f'''      <a class="media glass lift spot reveal" href="{u}" target="_blank" rel="noopener">
        <div class="top"><span class="outlet">{"DX Engineering Enablement" if "getdx" in u else "RDEL"}</span><span class="badge soft">Newsletter</span></div>
        <h3>{t}</h3>
        <small class="muted" style="font-size:13.5px">{sub}</small>
        <span class="go">{d} · Read →</span>
      </a>''' for d, t, sub, u in INDUSTRY)
award_cards = "\n".join(f'''      <article class="award-card glass reveal{" prize" if t else ""}">
        <div class="top"><span class="ic">{TROPHY if t else MEDAL}</span><span class="y">{y}</span></div>
        <h3>{n}</h3>
        <small>{d}</small>
      </article>''' for y, t, n, d in AWARDS)
talks = f'''  <section class="page-hero reveal">
    <h1>Talks, awards &amp; <em>media</em></h1>
    <p>Coverage on TV, radio, and in the news, invited talks with slides, industry newsletter features, and awards.</p>
  </section>

  <section>
    <div class="section-head reveal"><h2>On TV, radio &amp; in the news</h2></div>
    <div class="media-grid center-last">
{media_html}
    </div>
  </section>

  <section>
    <div class="section-head reveal"><h2>Invited talks</h2></div>
    <div class="talk-grid">
{talks_html}
    </div>
  </section>

  <section>
    <div class="section-head reveal"><h2>Industry newsletters</h2></div>
    <div class="media-grid center-last">
{ind_cards}
    </div>
  </section>

  <section>
    <div class="section-head reveal"><h2>Awards &amp; honors</h2></div>
    <div class="award-grid">
{award_cards}
    </div>
  </section>'''
(ROOT / "talks" / "index.html").write_text(page("Talks & Media", "Invited talks, awards, and media coverage of Rudrajit Choudhuri's research.", talks, ("talks",)))
print("wrote research, publications, talks")

# ---------------- 404 ----------------
nf = '''  <section class="page-hero reveal" style="padding-top:60px">
    <h1>Page not <em>found</em></h1>
    <p>That page doesn’t exist, or it moved when this site was redesigned. Try the <a href="/">home page</a>, <a href="/research/">research</a>, or <a href="/publications/">publications</a>.</p>
  </section>'''
(ROOT / "404.html").write_text(page("Page not found", "Page not found.", nf, ()))
print("wrote 404")
