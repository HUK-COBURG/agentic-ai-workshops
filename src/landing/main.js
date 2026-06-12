import './landing.css'

const BASE = import.meta.env.BASE_URL || '/'
import { courses } from '../courses-registry.js'

const strings = {
  de: {
    heroTitle: 'Interaktive <em>Kurse & Workshops</em><br>direkt im Browser',
    heroSub: 'Präsentationen, Self-Guided Workshops, Quizzes und Hands-On – rund um AI, Agents und Software-Entwicklung.',
    start: 'Kurs starten',
    level: 'Level',
  },
  en: {
    heroTitle: 'Interactive <em>courses & workshops</em><br>right in your browser',
    heroSub: 'Presentations, self-guided workshops, quizzes and hands-on – all about AI, agents and software development.',
    start: 'Start course',
    level: 'Level',
  },
}

function detectLang() {
  const urlLang = new URLSearchParams(location.search).get('lang')
  if (urlLang && strings[urlLang]) return urlLang
  const stored = localStorage.getItem('landing-lang')
  if (stored && strings[stored]) return stored
  return navigator.language?.slice(0, 2) === 'de' ? 'de' : 'en'
}

let lang = detectLang()

function t(obj) {
  return typeof obj === 'string' ? obj : obj[lang] || obj.de || Object.values(obj)[0]
}

function render() {
  const s = strings[lang]
  document.documentElement.lang = lang
  document.querySelector('#app').innerHTML = `
    <div class="landing-wrap">
      <header class="landing-header">
        <div></div>
        <div class="landing-actions">
          <div class="lang-toggle">
            <button data-lang="de" class="${lang === 'de' ? 'active' : ''}">DE</button>
            <button data-lang="en" class="${lang === 'en' ? 'active' : ''}">EN</button>
          </div>
        </div>
      </header>

      <section class="hero">
        <h1>${s.heroTitle}</h1>
        <p>${s.heroSub}</p>
      </section>

      <main class="course-grid">
        ${courses.map(c => `
          <a class="course-card" href="${BASE}${c.path.slice(1)}${c.languages.includes(lang) ? `?lang=${lang}` : ''}">
            <div class="course-card-top">
              <span class="course-emoji">${c.emoji}</span>
              <span class="course-langs">${c.languages.map(l => `<span>${l.toUpperCase()}</span>`).join('')}</span>
            </div>
            <h2>${t(c.title)}</h2>
            <p>${t(c.description)}</p>
            <div class="course-meta">
              <span>${s.level}: <b>${t(c.level)}</b></span>
            </div>
            <div class="course-tags">${c.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            <div class="course-cta">${s.start}</div>
          </a>
        `).join('')}
      </main>

      <footer class="landing-footer">
        <a href="https://github.com/HUK-COBURG" target="_blank" rel="noopener" class="footer-org">
          <img src="https://avatars.githubusercontent.com/HUK-COBURG?size=64" alt="HUK-COBURG" />
          <span>GitHub</span>
        </a>
        <span class="footer-sep">·</span>
        <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener">Apache 2.0 License</a>
      </footer>
    </div>
  `
  document.querySelector('.lang-toggle').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-lang]')
    if (!btn) return
    lang = btn.dataset.lang
    localStorage.setItem('landing-lang', lang)
    render()
  })
}

render()
