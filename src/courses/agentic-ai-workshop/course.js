// =====================================================================
// Course: Agentic AI Workshop
// Content lives in ./sections/<lang>/*.js — this file only wires it up.
// =====================================================================
import { initCourse } from '../../engine/engine.js'

import { introSlides as introDE } from './sections/de/01-intro.js'
import { geschichteSlides as geschichteDE } from './sections/de/02-geschichte.js'
import { kiInternetSlides as kiInternetDE } from './sections/de/03-ki-internet.js'
import { basicsSlides as basicsDE } from './sections/de/04-basics.js'
import { handoutSlides as handoutDE } from './sections/de/05-handout.js'
import { aiCodingSlides as aiCodingDE } from './sections/de/06-ai-coding.js'
import { diskussionSlides as diskussionDE } from './sections/de/06b-diskussion.js'
import { agenticSlides as agenticDE } from './sections/de/06c-agentic.js'
import { handsonSlides as handsonDE } from './sections/de/07-handson.js'
import { deepDiveSlides as deepDiveDE } from './sections/de/08-deepdive.js'
import { abschlussSlides as abschlussDE } from './sections/de/09-abschluss.js'

import { introSlides as introEN } from './sections/en/01-intro.js'
import { geschichteSlides as geschichteEN } from './sections/en/02-geschichte.js'
import { kiInternetSlides as kiInternetEN } from './sections/en/03-ki-internet.js'
import { basicsSlides as basicsEN } from './sections/en/04-basics.js'
import { handoutSlides as handoutEN } from './sections/en/05-handout.js'
import { aiCodingSlides as aiCodingEN } from './sections/en/06-ai-coding.js'
import { diskussionSlides as diskussionEN } from './sections/en/06b-diskussion.js'
import { agenticSlides as agenticEN } from './sections/en/06c-agentic.js'
import { handsonSlides as handsonEN } from './sections/en/07-handson.js'
import { deepDiveSlides as deepDiveEN } from './sections/en/08-deepdive.js'
import { abschlussSlides as abschlussEN } from './sections/en/09-abschluss.js'

initCourse({
  id: 'workshop', // keeps the original localStorage keys (workshop-lang, workshop-progression)
  version: '1.9.9',
  defaultLang: 'en',
  slides: {
    de: [introDE, geschichteDE, kiInternetDE, basicsDE, handoutDE, aiCodingDE, diskussionDE, agenticDE, handsonDE, deepDiveDE, abschlussDE],
    en: [introEN, geschichteEN, kiInternetEN, basicsEN, handoutEN, aiCodingEN, diskussionEN, agenticEN, handsonEN, deepDiveEN, abschlussEN],
  },
  sectionNames: {
    de: ['Intro', 'Geschichte', 'KI – Internet 2.0', 'Basics', 'Handout', 'AI Coding', 'Diskussion', 'Agentic AI', 'Hands-On', 'Deep Dive', 'Abschluss'],
    en: ['Intro', 'History', 'AI – The New Internet', 'Basics', 'Handout', 'AI Coding', 'Discussion', 'Agentic AI', 'Hands-On', 'Deep Dive', 'Closing'],
  },
  sections: [
    { start: 'welcome', nameIdx: 0 },
    { start: 'section-history', nameIdx: 1 },
    { start: 'section-everyone', nameIdx: 2 },
    { start: 'section-basics', nameIdx: 3 },
    { start: 'handout', nameIdx: 4, noDots: true },
    { start: 'section-coding', nameIdx: 5 },
    { start: 'discussion', nameIdx: 6, noDots: true },
    { start: 'section-agentic', nameIdx: 7 },
    { start: 'handson-setup', nameIdx: 8 },
    { start: 'section-deepdive', nameIdx: 9 },
    { start: 'section-closing', nameIdx: 10 },
  ],
  meta: {
    de: {
      title: 'Agentic AI Workshop',
      description: 'Interaktive Präsentation und Self-Guided Workshop über AI Agents, LLMs und AI-Assisted Coding. Von der Geschichte der KI bis zum Hands-On mit OpenCode.',
    },
    en: {
      title: 'Agentic AI Workshop',
      description: 'Interactive presentation and self-guided workshop about AI Agents, LLMs and AI-Assisted Coding. From the history of AI to hands-on with OpenCode.',
    },
  },
})
