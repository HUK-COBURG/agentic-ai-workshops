// =====================================================================
// Full-course preview: reads a CMS draft from localStorage and runs it
// through the real engine — exactly what the exported course will do.
// URL: /cms/preview.html?id=<draft-id>
// =====================================================================
import { initCourse } from '../engine/engine.js'

const BASE = import.meta.env.BASE_URL || '/'
import { renderSlideContent } from './templates.js'
import { loadCourses } from './store.js'

const params = new URLSearchParams(location.search)
const draftId = params.get('id')
const course = loadCourses().find(c => c.draftId === draftId)

if (!course) {
  document.body.innerHTML = '<p style="font-family:system-ui;padding:40px">Draft nicht gefunden. <a href="' + BASE + 'cms/">Zurück zum Kurs-Studio</a></p>'
} else {
  const lang = course.lang || 'de'
  const sections = course.sections.filter(s => s.slides.length > 0)
  const slides = sections.map(sec => sec.slides.map(sl => ({
    id: sl.id,
    theme: sl.theme || '',
    label: sl.label || sl.id,
    ...(sl.quiz ? { quiz: true } : {}),
    ...(sl.desktopOnly ? { desktopOnly: true } : {}),
    ...(sl.mobileOnly ? { mobileOnly: true } : {}),
    ...(sl.selfPacedOnly ? { selfPacedOnly: true } : {}),
    content: renderSlideContent(sl),
  })))

  document.title = `Vorschau: ${course.title}`

  initCourse({
    id: `cms-preview-${draftId}`,
    version: course.version || '0.0.0-draft',
    defaultLang: lang,
    homeLink: false,
    slides: { [lang]: slides },
    sectionNames: { [lang]: sections.map(s => s.name) },
    sections: sections.map((sec, i) => ({ start: sec.slides[0].id, nameIdx: i })),
    meta: { [lang]: { title: `Vorschau: ${course.title}`, description: course.description || '' } },
  })

  // Draft banner
  const banner = document.createElement('a')
  banner.href = BASE + 'cms/'
  banner.textContent = '✎ Entwurf – zurück zum Kurs-Studio'
  banner.style.cssText = 'position:fixed;bottom:14px;left:14px;z-index:2000;background:#ffed00;color:#001631;font:600 12px system-ui;padding:7px 12px;border-radius:8px;text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,0.3)'
  document.body.appendChild(banner)
}
