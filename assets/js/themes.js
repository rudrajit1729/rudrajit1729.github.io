/* Research themes for the home page cards.
   `c` holds one accent per palette so the cards always match the page. */
const ICON = {
  collab: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><rect x="7" y="7" width="10" height="10" rx="3"/><path d="M10 11h.01M14 11h.01M10 14h4"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3a3.5 3.5 0 0 0-3.4 4.3A3.5 3.5 0 0 0 5 14a3.5 3.5 0 0 0 4.5 4.8V3z"/><path d="M14.5 3a3.5 3.5 0 0 1 3.4 4.3A3.5 3.5 0 0 1 19 14a3.5 3.5 0 0 1-4.5 4.8V3z"/></svg>',
  work: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><path d="M17 13v8M13 17h8"/></svg>',
  library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
};

window.THEMES = [
  {
    id: 'human-ai', fields: ['Human-AI Collaboration', 'Trust & Adoption'], icon: ICON.collab,
    c: { graphite: '#0a6cff' },
    title: 'Human–AI collaboration & trust in AI',
    short: 'How do developers and knowledge workers come to trust, adopt, and delegate to AI, and where do they draw the line on AI autonomy?',
    tags: ['Trust & adoption', 'Appropriate reliance', 'AI autonomy'],
    body: 'AI tools are now ubiquitous in software and knowledge work. I study what drives people to trust and adopt them, how much they are willing to delegate, and where they draw the line on autonomy, and I test interface patterns that support appropriate reliance.',
    questions: ['What drives developers’ trust in and adoption of AI agents?', 'Where, why, and how do developers want AI support in their daily work?', 'Where, why, and how do developers stop delegating to AI agents?'],
    reps: ['choudhuri2025guides', 'choudhuri2026attention', 'choudhuri2026ysnp', 'miller2026examples'],
  },
  {
    id: 'cognition', fields: ['AI in Education', 'Cognitive Effects'], icon: ICON.brain,
    c: { graphite: '#5e5ce6' },
    title: 'AI, cognition & learning',
    short: 'What does habitual reliance on AI do to cognitive habits such as reflection and critical thinking, and how can AI support keep people thinking?',
    tags: ['Cognitive science', 'Critical thinking', 'CS education'],
    body: 'Routine reliance on AI can erode reflection and critical thinking. I study how students and professionals learn and work with AI, who is most at risk of cognitive disengagement, and how interfaces and curricula can position AI as a cognitive collaborator rather than a crutch.',
    questions: ['How does routine reliance on AI change students’ cognitive habits?', 'Where and why do students struggle to use AI for learning?', 'Which metacognitive scaffolds curb over-reliance and keep people thinking?'],
    reps: ['choudhuri2026thinking', 'choudhuri2025frontline', 'choudhuri2024far'],
  },
  {
    id: 'future-of-work', fields: ['Future of Work'], icon: ICON.work,
    c: { graphite: '#30b0c7' },
    title: 'Future of work',
    short: 'What makes a great co-worker, human or AI, and how are AI-native workplaces reshaping roles, etiquette, identity, and craft?',
    tags: ['AI-native workplaces', 'AI teammates', 'Developer identity'],
    body: 'AI is changing what knowledge work looks like, who does it, and what it means to be good at it. I study what makes a great co-worker, human and AI, how workers’ identity and craft are shifting, and where AI delivers real value in daily work, so teams can preserve meaningful work.',
    questions: ['What qualities make a great co-worker, human or AI, in an AI-native workplace?', 'How do AI-native developers redefine their work, identity, and craft?', 'Where does AI deliver real value in daily work, and which AI systems do people want built?'],
    reps: ['choudhuri2026coworker', 'choudhuri2026ainative', 'choudhuri2026matters', 'choudhuri2026copilot'],
  },
  {
    id: 'design', fields: ['Interface Design'], icon: ICON.design,
    c: { graphite: '#f2a516' },
    title: 'Designing multi-agent workflows and interfaces for AI',
    short: 'How do we design human-centered and inclusive interfaces and multi-agent workflows for AI tools, from oversight and cognitive-forcing patterns to automated inclusivity checkers and a design cookbook for the UI/UX of AI?',
    tags: ['UI/UX of AI', 'Multi-agent workflows', 'Inclusive design'],
    body: 'I turn empirical findings into design: patterns, guidelines, and tools for human-centered and inclusive AI interfaces. This includes a design cookbook of 80 UI/UX patterns for AI, mapped to 21 human-factors challenges, and multi-agent LLM workflows that find inclusivity bugs automatically.',
    questions: ['Which UI/UX patterns help people work well with AI?', 'How can we detect and fix inclusivity bugs automatically?', 'How do we design for diverse cognitive styles and socio-economic contexts?'],
    reps: ['chou2026vibeguide', 'afroz2026applyxmag', 'chatterjee2024debugging'],
    extra: { label: 'Design Cookbook for UI/UX of AI', href: 'https://aka.ms/design-cookbook' },
  },
];

/* Earlier research, shown on the Research page */
window.EARLIER = {
  id: 'ml-cv', fields: ['Machine Learning & Deep Learning', 'Biomedical Image Processing', 'Image Processing', 'Computer Vision & Robotics', 'Quantum Deep Learning'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/></svg>',
  c: { graphite: '#8e8e93' },
  title: 'Machine learning & computer vision',
  body: 'Before my Ph.D., I built image processing, soft computing, and deep learning methods for biomedical and radiological imaging, satellite imaging, and robotics, including quantum-classical networks for brain MRI and defenses against adversarial attacks on autonomous driving agents.',
  reps: ['halder2026conditional', 'choudhuri2023brain', 'sharma2022structure', 'choudhuri2021adaptive'],
};
