// =====================================================================
// Course Registry — single source of truth for the landing page.
// New course? Add an entry here + a folder under /courses and /src/courses.
// (The CMS export tells you exactly what to paste.)
// =====================================================================

export const courses = [
  {
    id: 'agentic-ai-workshop',
    path: '/courses/agentic-ai-workshop/',
    emoji: '\u{1F916}',
    languages: ['de', 'en'],
    duration: '~4h',
    level: { de: 'Einsteiger bis Fortgeschritten', en: 'Beginner to advanced' },
    title: { de: 'Agentic AI Workshop', en: 'Agentic AI Workshop' },
    description: {
      de: 'AI Agents, LLMs und AI-Assisted Coding – von 70 Jahren KI-Geschichte über Tokens, Kontext und MCP bis zum Hands-On mit OpenCode. Mit Quizzes, Architecture Builder und Spiele-Bauen.',
      en: 'AI agents, LLMs and AI-assisted coding – from 70 years of AI history through tokens, context and MCP to hands-on with OpenCode. With quizzes, architecture builder and game building.',
    },
    tags: ['LLMs', 'AI Agents', 'MCP', 'OpenCode', 'Hands-On'],
  },
  {
    id: 'effizient-mit-ai-tools',
    path: '/courses/effizient-mit-ai-tools/',
    emoji: '⚡',
    languages: ['de'],
    duration: '~60min',
    level: { de: 'Entwickler:innen', en: 'Developers' },
    title: { de: 'Effizient entwickeln mit AI-Tools', en: 'Efficient development with AI tools' },
    description: {
      de: "Do's, Don'ts und Workflow-Tipps aus dem Daily Business: Kontext geben, AGENTS.md pflegen, iterativ arbeiten, typische Fallstricke vermeiden – und Wissen in der Community teilen.",
      en: "Do's, don'ts and workflow tips from daily business: providing context, maintaining AGENTS.md, working iteratively, avoiding common pitfalls – and sharing knowledge in the community.",
    },
    tags: ["Do's & Don'ts", 'AGENTS.md', 'Prompting', 'Workflow', 'CoP'],
  },
];
