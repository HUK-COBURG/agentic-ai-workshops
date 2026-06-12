// =====================================================================
// Course: Effizient entwickeln mit AI-Tools
// Roter Faden: Kontext und bewusste Entscheidungen schlagen Modellqualität.
// Content lives in ./sections/de/*.js — this file only wires it up.
// =====================================================================
import { initCourse } from '../../engine/engine.js'

import { introSlides } from './sections/de/01-intro.js'
import { setupSlides } from './sections/de/02-setup.js'
import { dosSlides } from './sections/de/03-dos.js'
import { dontsSlides } from './sections/de/04-donts.js'
import { workflowSlides } from './sections/de/05-workflow.js'
import { communitySlides } from './sections/de/06-community.js'
import { qaSlides } from './sections/de/07-qa.js'

initCourse({
  id: 'effizient-mit-ai-tools',
  version: '2.0.0',
  defaultLang: 'de',
  slides: {
    de: [introSlides, setupSlides, dosSlides, dontsSlides, workflowSlides, communitySlides, qaSlides],
  },
  sectionNames: {
    de: ['Intro', 'Setup & Kontext', "Do's", "Don'ts", 'Workflow', 'Community', 'Abschluss'],
  },
  sections: [
    { start: 'hero', nameIdx: 0 },
    { start: 'section-setup', nameIdx: 1 },
    { start: 'section-dos', nameIdx: 2 },
    { start: 'section-donts', nameIdx: 3 },
    { start: 'section-workflow', nameIdx: 4 },
    { start: 'cop-prompt-library', nameIdx: 5 },
    { start: 'discussion', nameIdx: 6 },
  ],
  meta: {
    de: {
      title: 'Effizient entwickeln mit AI-Tools',
      description: "Do's, Don'ts und Workflow-Tipps aus der Praxis: Kontext meistern, AGENTS.md pflegen, die richtige Arbeitsweise wählen – mit reproduzierbarem Space-Invaders-Experiment.",
    },
  },
})
