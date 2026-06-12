// =====================================================================
// Kurs-Studio — PowerPoint-artiger Folien-Editor (reines Frontend).
// Bewusst unverlinkt: nur direkt unter /cms/ erreichbar.
//
// UX-Modell:
//   links   Filmstrip (Thumbnails, Drag & Drop, Duplizieren)
//   mitte   Bühne — Text direkt in der Folie bearbeiten (contenteditable)
//   rechts  Inspektor — nur Struktur (Listen, Layout, Flags), kein Text
// Drafts in localStorage; Export = ZIP im Plattform-Format.
// =====================================================================
import './cms.css'

const BASE = import.meta.env.BASE_URL || '/'
import engineCss from '../engine/style.css?inline'
import { TEMPLATES, BLOCK_TYPES, renderSlideContent, newSlide, newBlock } from './templates.js'
import { exportZip } from './exporter.js'
import { loadCourses, saveCourses, newCourse } from './store.js'

let courses = loadCourses()
if (courses.length === 0) courses.push(newCourse())
let cur = 0
let sel = { sec: 0, slide: -1 }

const app = document.querySelector('#app')
const esc = (s = '') => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;')

function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms) } }
const save = debounce(() => { saveCourses(courses); flashSaved() }, 500)

function flashSaved() {
  const el = document.getElementById('saved')
  if (!el) return
  el.classList.add('show')
  setTimeout(() => el.classList.remove('show'), 1500)
}

function course() { return courses[cur] }
function fixSel() {
  const c = course()
  if (sel.sec >= c.sections.length) sel.sec = Math.max(0, c.sections.length - 1)
  const slides = c.sections[sel.sec]?.slides || []
  if (sel.slide >= slides.length) sel.slide = slides.length - 1
  if (sel.slide < 0) { // pick first existing slide anywhere
    for (let si = 0; si < c.sections.length; si++) {
      if (c.sections[si].slides.length) { sel = { sec: si, slide: 0 }; return }
    }
    sel = { sec: 0, slide: -1 }
  }
}
function selectedSlide() { return course().sections[sel.sec]?.slides[sel.slide] || null }

function setPath(obj, path, value) {
  const parts = path.split('.')
  let o = obj
  for (let i = 0; i < parts.length - 1; i++) o = o[isNaN(parts[i]) ? parts[i] : +parts[i]]
  o[parts.at(-1)] = value
}
function getPath(obj, path) {
  return path.split('.').reduce((o, p) => o?.[isNaN(p) ? p : +p], obj)
}

// ===== Slide rendering (iframe srcdoc) =====
function slideDoc(slide, edit) {
  const content = renderSlideContent(slide, edit)
  return `<!doctype html><html><head><style>${engineCss}</style><style>
    html,body{overflow:hidden!important}
    ${edit ? `
    [data-edit]{cursor:text;border-radius:3px;outline:1px dashed transparent;transition:outline-color .15s;min-width:8px}
    [data-edit]:hover{outline:1px dashed rgba(255,237,0,.55)}
    [data-edit]:focus{outline:2px solid rgba(255,237,0,.9);outline-offset:2px;background:rgba(255,237,0,.04)}
    a,button:not([data-edit]):not(.bk-del):not(.bk-imgurl){pointer-events:none}
    .bk-drop{transition:background .15s;border-radius:6px}
    .bk-drop-row{height:10px;margin:2px 0}
    .bk-drop-col{width:10px;flex:0 0 10px;align-self:stretch}
    body.bk-dragging .bk-drop{background:rgba(255,237,0,.15);outline:1px dashed rgba(255,237,0,.4)}
    .bk-drop.bk-over{background:rgba(255,237,0,.65)!important}
    .bk-block{position:relative;height:100%}
    .bk-block .bk-tools{position:absolute;top:-11px;right:6px;z-index:5;display:none;gap:6px;background:rgba(0,0,0,.75);border-radius:6px;padding:2px 7px;font-size:11px;color:#fff;align-items:center}
    .bk-block:hover .bk-tools{display:flex}
    .bk-grip{cursor:grab;user-select:none}
    .bk-del{background:none;border:none;color:#ff8a8a;cursor:pointer;font-size:11px;padding:0}
    ` : ''}
  </style></head><body class="self-paced-mode">
  <section class="slide ${slide.theme || ''} ${slide.quiz ? 'quiz-slide' : ''} visible mobile-active" style="display:flex">
    <div class="slide-content">${content}</div>
  </section></body></html>`
}

// ===== Full render =====
function render() {
  fixSel()
  const c = course()
  app.innerHTML = `
    <header class="tb">
      <div class="tb-brand">Kurs<span>-Studio</span></div>
      <div class="menu-wrap">
        <button class="btn" id="btn-menu">☰ Datei</button>
        <div class="menu" id="menu">
          <button data-m="new">＋ Neuer Kurs</button>
          <button data-m="dup-course">⧉ Kurs duplizieren</button>
          <button data-m="settings">⚙ Kurs-Einstellungen…</button>
          <hr>
          <button data-m="json-out">⬇ Als JSON sichern</button>
          <button data-m="json-in">⬆ JSON laden</button>
          <hr>
          <button data-m="del" class="danger">🗑 Kurs löschen</button>
        </div>
      </div>
      <select id="course-select" title="Kurs wechseln">
        ${courses.map((co, i) => `<option value="${i}" ${i === cur ? 'selected' : ''}>${esc(co.emoji)} ${esc(co.title)}</option>`).join('')}
      </select>
      <div class="spacer"></div>
      <span class="tb-saved" id="saved">Gespeichert ✓</span>
      <button class="btn" id="btn-new-slide">＋ Neue Folie</button>
      <a class="btn" href="${BASE}cms/preview.html?id=${c.draftId}" target="_blank" rel="noopener">▶ Vorschau</a>
      <button class="btn btn--primary" id="btn-export">📦 Export ZIP</button>
      <input type="file" id="import-file" accept=".json" style="display:none" />
    </header>
    <div class="main">
      <aside class="strip" id="strip">${stripHtml()}</aside>
      <main class="stage">
        <div class="stage-bar" id="stage-bar"></div>
        <div class="stage-canvas" id="stage-canvas"></div>
      </main>
      <aside class="insp" id="insp"></aside>
    </div>
  `
  fillThumbs()
  renderStage()
  renderInspector()
  bindToolbar()
  bindStrip()
}

// ===== Filmstrip =====
function stripHtml() {
  const c = course()
  let n = 0
  return c.sections.map((sec, si) => `
    <div class="strip-section" data-si="${si}">
      <div class="strip-section-head">
        <input data-secname="${si}" value="${esc(sec.name)}" title="Section umbenennen" />
        <button class="icon-btn" data-act="sec-up" data-si="${si}" title="Section hoch">▲</button>
        <button class="icon-btn" data-act="sec-down" data-si="${si}" title="Section runter">▼</button>
        <button class="icon-btn danger" data-act="sec-del" data-si="${si}" title="Section löschen">✕</button>
      </div>
      <div class="strip-slides" data-si="${si}">
        ${sec.slides.map((sl, li) => {
          n++
          return `
          <div class="thumb ${si === sel.sec && li === sel.slide ? 'active' : ''}" draggable="true" data-si="${si}" data-li="${li}" title="${esc(sl.label)}">
            <div class="thumb-frame"><iframe loading="lazy" tabindex="-1"></iframe></div>
            ${sl.quiz ? '<div class="thumb-badge">Quiz</div>' : sl.desktopOnly ? '<div class="thumb-badge">🖥</div>' : ''}
            <div class="thumb-num">${n}</div>
            <div class="thumb-tools">
              <button class="icon-btn" data-act="dup" data-si="${si}" data-li="${li}" title="Duplizieren">⧉</button>
              <button class="icon-btn danger" data-act="del" data-si="${si}" data-li="${li}" title="Löschen">✕</button>
            </div>
          </div>`
        }).join('')}
      </div>
      <button class="strip-add" data-act="add-slide" data-si="${si}">＋ Folie</button>
    </div>`).join('') +
    `<button class="strip-add strip-add--section" data-act="add-section">＋ Section</button>`
}

function fillThumbs() {
  const c = course()
  document.querySelectorAll('#strip .thumb').forEach(t => {
    const sl = c.sections[+t.dataset.si]?.slides[+t.dataset.li]
    if (sl) t.querySelector('iframe').srcdoc = slideDoc(sl, false)
  })
}
const updateThumb = debounce(() => {
  const t = document.querySelector(`#strip .thumb[data-si="${sel.sec}"][data-li="${sel.slide}"] iframe`)
  const sl = selectedSlide()
  if (t && sl) t.srcdoc = slideDoc(sl, false)
}, 700)

// ===== Stage =====
function renderStage() {
  const canvas = document.getElementById('stage-canvas')
  const bar = document.getElementById('stage-bar')
  const sl = selectedSlide()
  if (!sl) {
    bar.innerHTML = ''
    canvas.innerHTML = `<div class="stage-empty">Noch keine Folien.<br><button class="btn btn--primary" id="empty-add">＋ Erste Folie anlegen</button></div>`
    document.getElementById('empty-add')?.addEventListener('click', () => openLayoutPicker(sel.sec, 0))
    return
  }
  const tpl = TEMPLATES[sl.template]
  bar.innerHTML = `${tpl.icon} <b>${esc(tpl.name)}</b> &nbsp;·&nbsp; Text direkt in der Folie anklicken &amp; tippen &nbsp;·&nbsp; Struktur im Inspektor rechts`
  canvas.innerHTML = `<div class="stage-frame-wrap" id="frame-wrap"><iframe id="stage-frame"></iframe></div>`
  const frame = document.getElementById('stage-frame')
  frame.addEventListener('load', wireStage)
  frame.srcdoc = slideDoc(sl, true)
  scaleStage()
}

function scaleStage() {
  const wrap = document.getElementById('frame-wrap')
  const canvas = document.getElementById('stage-canvas')
  if (!wrap || !canvas) return
  const s = Math.min((canvas.clientWidth - 44) / 1280, (canvas.clientHeight - 44) / 720)
  wrap.style.width = `${1280 * s}px`
  wrap.style.height = `${720 * s}px`
  wrap.querySelector('iframe').style.transform = `scale(${s})`
}
window.addEventListener('resize', debounce(scaleStage, 100))

function wireStage() {
  const frame = document.getElementById('stage-frame')
  const doc = frame?.contentDocument
  if (!doc) return
  doc.querySelectorAll('[data-edit]').forEach(el => {
    el.contentEditable = 'plaintext-only'
    if (el.contentEditable !== 'plaintext-only') el.contentEditable = 'true'
    el.addEventListener('input', () => {
      const sl = selectedSlide()
      if (!sl) return
      setPath(sl.data, el.dataset.edit, el.innerText)
      save(); updateThumb()
    })
  })
  doc.addEventListener('click', e => {
    if (e.target.closest('a, .copy-btn, .mobile-start-btn')) e.preventDefault()
  })

  // ===== Baukasten: Drag & Drop von Blöcken =====
  const sl = selectedSlide()
  if (!sl || !TEMPLATES[sl.template]?.isBlocks) return
  const body = doc.body

  // Drag nur über den ⠿-Griff starten (sonst stört es contenteditable)
  doc.addEventListener('mousedown', (e) => {
    const grip = e.target.closest?.('.bk-grip')
    if (grip) grip.closest('.bk-block').setAttribute('draggable', 'true')
  })
  doc.addEventListener('mouseup', () => {
    doc.querySelectorAll('.bk-block[draggable="true"]').forEach(b => b.setAttribute('draggable', 'false'))
  })
  doc.addEventListener('dragstart', (e) => {
    const blk = e.target.closest?.('.bk-block')
    if (blk) {
      e.dataTransfer.setData('text/plain', 'move:' + blk.dataset.bk)
      e.dataTransfer.effectAllowed = 'move'
      body.classList.add('bk-dragging')
    }
  })
  doc.addEventListener('dragenter', () => body.classList.add('bk-dragging'))
  doc.addEventListener('dragend', () => body.classList.remove('bk-dragging'))
  doc.addEventListener('dragleave', (e) => { if (!e.relatedTarget) body.classList.remove('bk-dragging') })
  doc.addEventListener('dragover', (e) => {
    const zone = e.target.closest?.('.bk-drop')
    doc.querySelectorAll('.bk-over').forEach(z => { if (z !== zone) z.classList.remove('bk-over') })
    if (zone) { e.preventDefault(); zone.classList.add('bk-over') }
  })
  doc.addEventListener('drop', (e) => {
    body.classList.remove('bk-dragging')
    const zone = e.target.closest?.('.bk-drop')
    if (!zone) return
    e.preventDefault()
    const payload = e.dataTransfer.getData('text/plain')
    if (applyBlockDrop(sl.data.rows, payload, zone.dataset.bkdrop)) {
      saveCourses(courses); renderStage(); updateThumb()
    }
  })
  doc.addEventListener('click', (e) => {
    const del = e.target.closest?.('[data-bkdel]')
    if (del) {
      const [ri, ci] = del.dataset.bkdel.split(':').map(Number)
      sl.data.rows[ri].cols.splice(ci, 1)
      if (sl.data.rows[ri].cols.length === 0) sl.data.rows.splice(ri, 1)
      saveCourses(courses); renderStage(); updateThumb()
      return
    }
    const img = e.target.closest?.('.bk-imgurl')
    if (img) {
      const cur = getPath(sl.data, img.dataset.imgpath) || ''
      const url = window.prompt('URL:', cur)
      if (url !== null) {
        setPath(sl.data, img.dataset.imgpath, url.trim())
        saveCourses(courses); renderStage(); updateThumb()
      }
    }
  })
}

// Mutationslogik für Block-Drops: payload 'new:<typ>' | 'move:<ri>:<ci>',
// target 'row:<i>' (neue Zeile) | 'col:<ri>:<pos>' (Spalte in Zeile)
function applyBlockDrop(rows, payload, target) {
  let block = null
  let src = null
  if (payload.startsWith('new:')) {
    if (!BLOCK_TYPES[payload.slice(4)]) return false
    block = newBlock(payload.slice(4))
  } else if (payload.startsWith('move:')) {
    const [ri, ci] = payload.slice(5).split(':').map(Number)
    if (!rows[ri]?.cols[ci]) return false
    src = { ri, ci }
    block = rows[ri].cols[ci]
  } else return false

  const t = target.split(':')
  if (t[0] === 'col') {
    let ri = +t[1], pos = +t[2]
    if (src) {
      if (src.ri === ri) {
        rows[ri].cols.splice(src.ci, 1)
        if (src.ci < pos) pos--
        rows[ri].cols.splice(pos, 0, block)
        return true
      }
      rows[src.ri].cols.splice(src.ci, 1)
      if (rows[src.ri].cols.length === 0) {
        rows.splice(src.ri, 1)
        if (src.ri < ri) ri--
      }
    }
    if (!rows[ri]) { rows.splice(Math.min(ri, rows.length), 0, { cols: [block] }); return true }
    if (rows[ri].cols.length >= 4) return false
    rows[ri].cols.splice(Math.min(pos, rows[ri].cols.length), 0, block)
    return true
  }
  if (t[0] === 'row') {
    let i = +t[1]
    if (src) {
      if (rows[src.ri].cols.length === 1) {
        const [row] = rows.splice(src.ri, 1)
        if (src.ri < i) i--
        rows.splice(Math.min(i, rows.length), 0, row)
        return true
      }
      rows[src.ri].cols.splice(src.ci, 1)
    }
    rows.splice(Math.min(i, rows.length), 0, { cols: [block] })
    return true
  }
  return false
}

// ===== Inspector =====
function renderInspector() {
  const insp = document.getElementById('insp')
  const sl = selectedSlide()
  if (!sl) { insp.innerHTML = '<p class="insp-hint">Keine Folie ausgewählt.</p>'; return }
  const tpl = TEMPLATES[sl.template]
  const themes = [
    ['slide--dark', 'Dunkel'], ['', 'Hell'], ['slide--primary slide--divider', 'Trenner Petrol'],
    ['slide--accent slide--divider', 'Trenner Gelb'], ['slide--dark slide--divider', 'Trenner Dunkel'], ['slide--hero', 'Hero'],
  ]
  insp.innerHTML = `
    <div class="insp-title">Folie</div>
    <p class="insp-hint">${tpl.icon} ${esc(tpl.hint)}</p>
    <div class="f"><label>Name in der Navigation</label><input type="text" data-slide="label" value="${esc(sl.label)}" /></div>
    <div class="f"><label>Hintergrund</label>
      <select data-slide="theme">${themes.map(([v, n]) => `<option value="${v}" ${sl.theme === v ? 'selected' : ''}>${n}</option>`).join('')}</select>
    </div>
    <label class="f-check"><input type="checkbox" data-slide="desktopOnly" ${sl.desktopOnly ? 'checked' : ''} /> Nur Presenter (Desktop)</label>
    <label class="f-check"><input type="checkbox" data-slide="selfPacedOnly" ${sl.selfPacedOnly ? 'checked' : ''} /> Nur Self-Paced</label>
    ${tpl.isBlocks ? `
    <div class="insp-title">Bausteine — in die Folie ziehen</div>
    <div class="pal">
      ${Object.entries(BLOCK_TYPES).map(([k, b]) => `<div class="pal-chip" draggable="true" data-newblock="${k}">${b.icon} ${b.name}</div>`).join('')}
    </div>
    <p class="insp-hint" style="margin-top:8px">An den gelben Zonen ablegen: <strong>zwischen Zeilen</strong> = neue Zeile, <strong>neben einem Block</strong> = neue Spalte (max. 4). Verschieben per ⠿-Griff am Block, Löschen per ✕, Texte direkt in der Folie tippen.</p>
    ` : ''}
    ${inspectorFields(sl, tpl)}
    <div class="insp-title">Technisch</div>
    <div class="f"><label>Slide-ID (URL-Anker)</label><input type="text" data-slide="id" value="${esc(sl.id)}" ${tpl.fixedId ? 'disabled' : ''} /></div>
  `
  bindInspector()
}

function inspectorFields(sl, tpl) {
  const parts = []
  for (const f of tpl.fields) {
    if (f.type === 'list') {
      const items = sl.data[f.key] || []
      const labelKey = f.of.find(s => s.type === 'text')?.key
      parts.push(`
        <div class="insp-title">${esc(f.label)}</div>
        ${items.map((item, i) => `
          <div class="li-row">
            <span class="li-label" title="${esc(item[labelKey] || '')}">${i + 1}. ${esc(item[labelKey] || '…')}</span>
            ${f.of.filter(s => s.type === 'select').map(s => `
              <select data-path="data.${f.key}.${i}.${s.key}" title="${esc(s.label)}">
                ${s.options.map(o => `<option ${String(item[s.key]) === o ? 'selected' : ''}>${o}</option>`).join('')}
              </select>`).join('')}
            ${f.of.filter(s => s.type === 'checkbox').map(s => `
              <label class="li-flag" title="${esc(s.label)}"><input type="checkbox" data-path="data.${f.key}.${i}.${s.key}" ${item[s.key] ? 'checked' : ''} />${esc(s.label)}</label>`).join('')}
            <button class="icon-btn" data-li-act="up" data-list="${f.key}" data-i="${i}">▲</button>
            <button class="icon-btn" data-li-act="down" data-list="${f.key}" data-i="${i}">▼</button>
            <button class="icon-btn danger" data-li-act="del" data-list="${f.key}" data-i="${i}">✕</button>
          </div>`).join('')}
        <button class="li-add" data-li-act="add" data-list="${f.key}">＋ ${esc(f.itemName || 'Eintrag')}</button>
      `)
    } else if (f.inspector && f.type === 'textarea') {
      parts.push(`<div class="insp-title">${esc(f.label)}</div>
        <div class="f"><textarea data-path="data.${f.key}" data-rerender="1" rows="${f.rows || 6}">${esc(sl.data[f.key] ?? '')}</textarea></div>`)
    } else if (f.inspector && f.type === 'text') {
      parts.push(`<div class="f"><label>${esc(f.label)}</label><input type="text" data-path="data.${f.key}" value="${esc(sl.data[f.key] ?? '')}" /></div>`)
    } else if (f.type === 'select') {
      parts.push(`<div class="f"><label>${esc(f.label)}</label>
        <select data-path="data.${f.key}" data-rerender="1">${f.options.map(o => `<option ${String(sl.data[f.key]) === o ? 'selected' : ''}>${o}</option>`).join('')}</select></div>`)
    } else if (f.type === 'checkbox') {
      parts.push(`<label class="f-check"><input type="checkbox" data-path="data.${f.key}" data-rerender="1" ${sl.data[f.key] ? 'checked' : ''} /> ${esc(f.label)}</label>`)
    }
  }
  return parts.join('')
}

const rerenderStageDebounced = debounce(() => { renderStage(); updateThumb() }, 350)

function bindInspector() {
  const insp = document.getElementById('insp')
  insp.addEventListener('dragstart', (e) => {
    const chip = e.target.closest?.('.pal-chip')
    if (chip) {
      e.dataTransfer.setData('text/plain', 'new:' + chip.dataset.newblock)
      e.dataTransfer.effectAllowed = 'copy'
    }
  })
  insp.addEventListener('input', (e) => {
    const el = e.target
    const sl = selectedSlide()
    if (!sl) return
    if (el.dataset.slide) {
      const key = el.dataset.slide
      if (el.type === 'checkbox') { if (el.checked) sl[key] = true; else delete sl[key] }
      else sl[key] = el.value
      if (key === 'theme' || key === 'desktopOnly' || key === 'selfPacedOnly') { renderStage(); updateThumb() }
      if (key === 'label') {
        const t = document.querySelector(`#strip .thumb[data-si="${sel.sec}"][data-li="${sel.slide}"]`)
        if (t) t.title = el.value
      }
      save()
    } else if (el.dataset.path) {
      setPath(sl, el.dataset.path, el.type === 'checkbox' ? el.checked : el.value)
      save()
      if (el.dataset.rerender || el.type === 'checkbox' || el.tagName === 'SELECT') rerenderStageDebounced()
    }
  })
  insp.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-li-act]')
    if (!btn) return
    const sl = selectedSlide()
    const tpl = TEMPLATES[sl.template]
    const field = tpl.fields.find(f => f.key === btn.dataset.list)
    const arr = sl.data[field.key]
    const i = +btn.dataset.i
    const act = btn.dataset.liAct
    if (act === 'add') {
      const item = {}
      field.of.forEach(s => { item[s.key] = s.type === 'checkbox' ? false : s.type === 'select' ? s.options[0] : '' })
      const lk = field.of.find(s => s.type === 'text')
      if (lk) item[lk.key] = `Neuer ${field.itemName || 'Eintrag'}`
      arr.push(item)
    }
    if (act === 'del') arr.splice(i, 1)
    if (act === 'up' && i > 0) [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
    if (act === 'down' && i < arr.length - 1) [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
    saveCourses(courses)
    renderStage(); renderInspector(); updateThumb()
  })
}

// ===== Strip events (select, tools, dnd) =====
function bindStrip() {
  const strip = document.getElementById('strip')

  strip.addEventListener('click', (e) => {
    const actBtn = e.target.closest('[data-act]')
    if (actBtn) {
      const act = actBtn.dataset.act
      const si = +actBtn.dataset.si, li = +actBtn.dataset.li
      const secs = course().sections
      if (act === 'add-slide') { openLayoutPicker(si, secs[si].slides.length); return }
      if (act === 'add-section') { secs.push({ name: `Section ${secs.length + 1}`, slides: [] }) }
      if (act === 'sec-del') {
        if (secs[si].slides.length && !confirm(`Section "${secs[si].name}" samt ${secs[si].slides.length} Folie(n) löschen?`)) return
        secs.splice(si, 1)
        if (secs.length === 0) secs.push({ name: 'Intro', slides: [] })
        sel = { sec: 0, slide: -1 }
      }
      if (act === 'sec-up' && si > 0) [secs[si - 1], secs[si]] = [secs[si], secs[si - 1]]
      if (act === 'sec-down' && si < secs.length - 1) [secs[si + 1], secs[si]] = [secs[si], secs[si + 1]]
      if (act === 'dup') {
        const copy = JSON.parse(JSON.stringify(secs[si].slides[li]))
        if (!TEMPLATES[copy.template]?.fixedId) copy.id = `${copy.template}-${Math.random().toString(36).slice(2, 7)}`
        secs[si].slides.splice(li + 1, 0, copy)
        sel = { sec: si, slide: li + 1 }
      }
      if (act === 'del') {
        secs[si].slides.splice(li, 1)
        if (sel.sec === si && sel.slide >= li) sel.slide = Math.max(-1, sel.slide - 1)
      }
      saveCourses(courses); render()
      return
    }
    const thumb = e.target.closest('.thumb')
    if (thumb) {
      sel = { sec: +thumb.dataset.si, slide: +thumb.dataset.li }
      strip.querySelectorAll('.thumb.active').forEach(t => t.classList.remove('active'))
      thumb.classList.add('active')
      renderStage(); renderInspector()
    }
  })

  strip.addEventListener('input', (e) => {
    if (e.target.dataset.secname !== undefined) {
      course().sections[+e.target.dataset.secname].name = e.target.value
      save()
    }
  })

  // --- Drag & Drop ---
  let drag = null
  let marker = null
  function clearMarker() { marker?.remove(); marker = null }

  strip.addEventListener('dragstart', (e) => {
    const thumb = e.target.closest('.thumb')
    if (!thumb) { e.preventDefault(); return }
    drag = { si: +thumb.dataset.si, li: +thumb.dataset.li }
    thumb.classList.add('dragging')
    e.dataTransfer.effectAllowed = 'move'
  })
  strip.addEventListener('dragend', () => {
    drag = null; clearMarker()
    strip.querySelector('.thumb.dragging')?.classList.remove('dragging')
  })
  strip.addEventListener('dragover', (e) => {
    if (!drag) return
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    clearMarker()
    marker = document.createElement('div')
    marker.className = 'drop-marker'
    const thumb = e.target.closest('.thumb')
    if (thumb) {
      const r = thumb.getBoundingClientRect()
      const before = e.clientY < r.top + r.height / 2
      thumb.parentElement.insertBefore(marker, before ? thumb : thumb.nextSibling)
      marker.dataset.si = thumb.dataset.si
      marker.dataset.at = before ? thumb.dataset.li : +thumb.dataset.li + 1
    } else {
      const zone = e.target.closest('.strip-slides, .strip-section')
      if (zone) {
        const slides = zone.classList.contains('strip-slides') ? zone : zone.querySelector('.strip-slides')
        slides.appendChild(marker)
        marker.dataset.si = slides.dataset.si
        marker.dataset.at = course().sections[+slides.dataset.si].slides.length
      } else { clearMarker() }
    }
  })
  strip.addEventListener('drop', (e) => {
    if (!drag || !marker) return
    e.preventDefault()
    const tsi = +marker.dataset.si
    let at = +marker.dataset.at
    const secs = course().sections
    const [moved] = secs[drag.si].slides.splice(drag.li, 1)
    if (tsi === drag.si && drag.li < at) at--
    secs[tsi].slides.splice(at, 0, moved)
    sel = { sec: tsi, slide: at }
    drag = null; clearMarker()
    saveCourses(courses); render()
  })
}

// ===== Toolbar =====
function bindToolbar() {
  const menu = document.getElementById('menu')
  document.getElementById('btn-menu').addEventListener('click', (e) => { e.stopPropagation(); menu.classList.toggle('open') })

  menu.addEventListener('click', async (e) => {
    const m = e.target.closest('[data-m]')?.dataset.m
    if (!m) return
    menu.classList.remove('open')
    if (m === 'new') { courses.push(newCourse()); cur = courses.length - 1; sel = { sec: 0, slide: -1 }; saveCourses(courses); render() }
    if (m === 'dup-course') {
      const copy = JSON.parse(JSON.stringify(course()))
      copy.draftId = Math.random().toString(36).slice(2, 10)
      copy.title += ' (Kopie)'
      courses.push(copy); cur = courses.length - 1
      saveCourses(courses); render()
    }
    if (m === 'settings') openSettings()
    if (m === 'json-out') {
      const blob = new Blob([JSON.stringify(course(), null, 2)], { type: 'application/json' })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob); a.download = `kurs-${course().draftId}.json`; a.click()
      URL.revokeObjectURL(a.href)
    }
    if (m === 'json-in') document.getElementById('import-file').click()
    if (m === 'del') {
      if (!confirm(`Kurs "${course().title}" wirklich löschen?`)) return
      courses.splice(cur, 1)
      if (courses.length === 0) courses.push(newCourse())
      cur = 0; sel = { sec: 0, slide: -1 }
      saveCourses(courses); render()
    }
  })

  document.getElementById('import-file').addEventListener('change', async (e) => {
    const file = e.target.files[0]
    if (!file) return
    try {
      const data = JSON.parse(await file.text())
      data.draftId = data.draftId || Math.random().toString(36).slice(2, 10)
      courses.push(data); cur = courses.length - 1; sel = { sec: 0, slide: -1 }
      saveCourses(courses); render()
    } catch { alert('Ungültige JSON-Datei.') }
  })

  document.getElementById('course-select').addEventListener('change', (e) => {
    cur = +e.target.value; sel = { sec: 0, slide: -1 }; render()
  })

  document.getElementById('btn-new-slide').addEventListener('click', () => {
    openLayoutPicker(sel.sec, sel.slide + 1)
  })

  document.getElementById('btn-export').addEventListener('click', () => {
    saveCourses(courses)
    exportZip(course()).catch(err => alert('Export fehlgeschlagen: ' + err.message))
  })
}

// ===== Layout picker ("Folienmaster") =====
function openLayoutPicker(si, at) {
  const modal = document.createElement('div')
  modal.className = 'modal'
  modal.innerHTML = `
    <div class="modal-box">
      <h3>Neue Folie — Layout wählen</h3>
      <p class="modal-sub">Alle Layouts nutzen das Design der Kurs-Engine. Texte bearbeitest du danach direkt in der Folie.</p>
      <div class="lay-grid">
        ${Object.entries(TEMPLATES).map(([key, t]) => `
          <button class="lay-card" data-tpl="${key}">
            <div class="lay-prev"><iframe loading="lazy" tabindex="-1" data-prev="${key}"></iframe></div>
            <div class="lay-meta"><div class="n">${t.icon} ${esc(t.name)}</div><div class="h">${esc(t.hint)}</div></div>
          </button>`).join('')}
      </div>
    </div>`
  document.body.appendChild(modal)
  // fill previews + scale to card width
  modal.querySelectorAll('iframe[data-prev]').forEach(f => {
    const key = f.dataset.prev
    f.srcdoc = slideDoc({ template: key, theme: TEMPLATES[key].theme || 'slide--dark', quiz: TEMPLATES[key].quiz, data: TEMPLATES[key].defaults }, false)
    requestAnimationFrame(() => { f.style.transform = `scale(${f.parentElement.clientWidth / 1280})` })
  })
  modal.addEventListener('click', (e) => {
    const card = e.target.closest('[data-tpl]')
    if (card) {
      const c = course()
      if (!c.sections[si]) si = 0
      if (!c.sections.length) c.sections.push({ name: 'Intro', slides: [] })
      const sec = c.sections[si]
      const tplKey = card.dataset.tpl
      if (TEMPLATES[tplKey].fixedId && c.sections.some(s => s.slides.some(sl => sl.id === TEMPLATES[tplKey].fixedId))) {
        alert('Dieses Layout kann nur einmal pro Kurs verwendet werden (feste Slide-ID).')
        return
      }
      const slide = newSlide(tplKey, `s${si + 1}`)
      const pos = Math.min(Math.max(at, 0), sec.slides.length)
      sec.slides.splice(pos, 0, slide)
      sel = { sec: si, slide: pos }
      saveCourses(courses)
      modal.remove(); render()
    } else if (e.target === modal) modal.remove()
  })
}

// ===== Settings modal =====
function openSettings() {
  const c = course()
  const modal = document.createElement('div')
  modal.className = 'modal'
  modal.innerHTML = `
    <div class="modal-box" style="max-width:520px">
      <h3>⚙ Kurs-Einstellungen</h3>
      <p class="modal-sub">Diese Infos landen in der Kurs-Registry und auf der Landing-Page.</p>
      <div class="set-grid">
        <div class="f full"><label>Titel</label><input type="text" data-set="title" value="${esc(c.title)}" /></div>
        <div class="f"><label>Emoji</label><input type="text" data-set="emoji" value="${esc(c.emoji)}" /></div>
        <div class="f"><label>Version</label><input type="text" data-set="version" value="${esc(c.version)}" /></div>
        <div class="f"><label>Dauer</label><input type="text" data-set="duration" value="${esc(c.duration)}" /></div>
        <div class="f"><label>Level</label><input type="text" data-set="level" value="${esc(c.level)}" /></div>
        <div class="f full"><label>Beschreibung</label><textarea data-set="description" rows="3" style="font-family:inherit">${esc(c.description)}</textarea></div>
        <div class="f full"><label>Tags (Komma-getrennt)</label><input type="text" data-set="tags" value="${esc((c.tags || []).join(', '))}" /></div>
      </div>
      <div style="text-align:right;margin-top:12px"><button class="btn btn--primary" id="set-done">Fertig</button></div>
    </div>`
  document.body.appendChild(modal)
  modal.addEventListener('input', (e) => {
    const key = e.target.dataset.set
    if (!key) return
    c[key] = key === 'tags' ? e.target.value.split(',').map(s => s.trim()).filter(Boolean) : e.target.value
    save()
  })
  const close = () => { modal.remove(); render() }
  modal.querySelector('#set-done').addEventListener('click', close)
  modal.addEventListener('click', (e) => { if (e.target === modal) close() })
}

// Esc closes modals/menu; click outside closes menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal')?.remove()
    document.getElementById('menu')?.classList.remove('open')
  }
})
document.addEventListener('click', (e) => {
  if (!e.target.closest('.menu-wrap')) document.getElementById('menu')?.classList.remove('open')
})

render()
