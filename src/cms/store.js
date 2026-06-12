// localStorage persistence for CMS drafts
const KEY = 'cms-courses-v1'

export function loadCourses() {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
}

export function saveCourses(courses) {
  localStorage.setItem(KEY, JSON.stringify(courses))
}

export function newCourse() {
  return {
    draftId: Math.random().toString(36).slice(2, 10),
    id: '',
    title: 'Neuer Kurs',
    emoji: '📚',
    description: '',
    version: '1.0.0',
    duration: '~45min',
    level: 'Alle',
    tags: [],
    lang: 'de',
    sections: [{ name: 'Intro', slides: [] }],
  }
}
