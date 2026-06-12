// =====================================================================
// CMS Slide Layouts ("Folienmaster")
// Each layout: { name, icon, hint, defaults, fields, render(data, E) }
//
// render(data, E): E is the edit-helper —
//   E('path')  -> ' data-edit="path"' in edit mode, '' otherwise
//   E.edit     -> boolean (edit mode active?)
// Text marked with data-edit becomes directly editable on the canvas.
// Export & preview render WITHOUT edit attributes → clean course HTML.
//
// fields drive the right-hand inspector. Text fields are edited on the
// canvas; only structure (lists, checkboxes, selects) lives in the
// inspector. `inspector: true` forces a text field into the inspector
// (e.g. mobile-only strings that are invisible on the desktop canvas).
// =====================================================================

const esc = (s = '') => String(s)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

const br = (s = '') => esc(s).replaceAll('\n', '<br>')

export const TEMPLATES = {
  hero: {
    name: 'Titelfolie',
    icon: '🏔️',
    hint: 'Großer Einstieg mit Badge, Titel und Agenda-Karten',
    theme: 'slide--hero',
    defaults: {
      badge: 'Workshop 2026',
      title: 'Mein neuer',
      highlight: 'Kurs',
      subtitle: 'Eine Zeile, die neugierig macht.',
      startLabel: "Los geht's 🚀",
      parts: [
        { tag: 'Teil 1', heading: 'Thema A', text: 'Kurzbeschreibung' },
        { tag: 'Teil 2', heading: 'Thema B', text: 'Kurzbeschreibung' },
      ],
    },
    fields: [
      { key: 'startLabel', label: 'Start-Button (mobil)', type: 'text', inspector: true },
      { key: 'parts', label: 'Agenda-Karten', type: 'list', itemName: 'Karte', of: [
        { key: 'tag', label: 'Tag', type: 'text' },
        { key: 'heading', label: 'Überschrift', type: 'text' },
        { key: 'text', label: 'Text', type: 'text' },
      ]},
    ],
    render: (d, E) => `
      <div class="desktop-content">
        ${d.badge || E.edit ? `<div class="hero-badge"${E('badge')}>${esc(d.badge)}</div>` : ''}
        <h1 class="hero-title"><span${E('title')}>${esc(d.title)}</span>${d.highlight || E.edit ? `<br><span class="highlight"${E('highlight')}>${esc(d.highlight)}</span>` : ''}</h1>
        <p class="hero-subtitle"${E('subtitle')}>${esc(d.subtitle)}</p>
        ${(d.parts || []).length ? `<div style="display:flex;gap:24px;justify-content:center;margin-top:32px;flex-wrap:wrap">
          ${(d.parts || []).map((p, i) => `
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em"${E(`parts.${i}.tag`)}>${esc(p.tag)}</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px"${E(`parts.${i}.heading`)}>${esc(p.heading)}</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px"${E(`parts.${i}.text`)}>${esc(p.text)}</p>
          </div>`).join('')}
        </div>` : ''}
      </div>
      <div class="mobile-content" style="text-align:center">
        <h1 style="font-size:1.8rem;font-weight:800;color:var(--color-text-on-dark);line-height:1.2;margin:16px 0 8px">${esc(d.title)}<br><span style="color:var(--color-accent)">${esc(d.highlight)}</span></h1>
        <p style="font-size:0.95rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:28px">${esc(d.subtitle)}</p>
        <button class="mobile-start-btn" id="mobile-start-btn">${esc(d.startLabel)}</button>
      </div>`,
  },

  divider: {
    name: 'Kapitel-Trenner',
    icon: '📑',
    hint: 'Großes Emoji + Titel — leitet eine neue Section ein',
    theme: 'slide--primary slide--divider',
    defaults: { emoji: '📖', title: 'Neues Kapitel', subtitle: 'Worum geht es hier?' },
    fields: [],
    render: (d, E) => `
      <div class="divider-number"${E('emoji')}>${esc(d.emoji)}</div>
      <h2 class="slide-title"${E('title')}>${esc(d.title)}</h2>
      <p class="slide-subtitle"${E('subtitle')}>${esc(d.subtitle)}</p>`,
  },

  cards: {
    name: 'Karten-Grid',
    icon: '🃏',
    hint: '2–3 Spalten mit Emoji-Karten — der Brot-und-Butter-Slide',
    theme: 'slide--dark',
    defaults: {
      title: 'Überschrift',
      subtitle: 'Untertitel',
      columns: '2',
      cards: [
        { emoji: '💡', heading: 'Punkt 1', text: 'Beschreibung', accent: true },
        { emoji: '🔧', heading: 'Punkt 2', text: 'Beschreibung', accent: false },
        { emoji: '🚀', heading: 'Punkt 3', text: 'Beschreibung', accent: false },
        { emoji: '🎯', heading: 'Punkt 4', text: 'Beschreibung', accent: false },
      ],
    },
    fields: [
      { key: 'columns', label: 'Spalten', type: 'select', options: ['2', '3'] },
      { key: 'cards', label: 'Karten', type: 'list', itemName: 'Karte', of: [
        { key: 'emoji', label: 'Emoji', type: 'text' },
        { key: 'heading', label: 'Überschrift', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
        { key: 'accent', label: 'Gelb', type: 'checkbox' },
      ]},
    ],
    render: (d, E) => `
      <div style="max-width:820px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="margin-bottom:4px"${E('title')}>${esc(d.title)}</h2>
        <p class="slide-subtitle" style="font-size:0.9rem"${E('subtitle')}>${esc(d.subtitle)}</p>
      </div>
      <div style="max-width:820px;margin:18px auto 0;display:grid;grid-template-columns:repeat(${d.columns === '3' ? 3 : 2},1fr);gap:12px">
        ${(d.cards || []).map((c, i) => `
        <div style="padding:14px 16px;border-radius:10px;background:${c.accent ? 'rgba(255,237,0,0.06)' : 'rgba(255,255,255,0.05)'};border:1px solid ${c.accent ? 'rgba(255,237,0,0.15)' : 'rgba(255,255,255,0.1)'}">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            <span${E(`cards.${i}.emoji`)}>${esc(c.emoji)}</span> <strong${c.accent ? ' style="color:var(--color-accent)"' : ''}${E(`cards.${i}.heading`)}>${esc(c.heading)}</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem"${E(`cards.${i}.text`)}>${br(c.text)}</span>
          </p>
        </div>`).join('')}
      </div>`,
  },

  compare: {
    name: 'Vergleich ❌/✅',
    icon: '⚖️',
    hint: 'Anti-Pattern links, bessere Variante rechts',
    theme: 'slide--dark',
    defaults: {
      title: 'So nicht vs. besser',
      subtitle: 'Untertitel',
      badLabel: '❌ So nicht',
      badText: 'Das Anti-Pattern…',
      goodLabel: '✅ Besser',
      goodText: 'Die bessere Variante…',
      footer: 'Optionale Fußzeile — leer lassen zum Ausblenden',
    },
    fields: [],
    render: (d, E) => `
      <div style="max-width:820px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="margin-bottom:4px"${E('title')}>${esc(d.title)}</h2>
        ${d.subtitle || E.edit ? `<p class="slide-subtitle" style="font-size:0.9rem"${E('subtitle')}>${esc(d.subtitle)}</p>` : ''}
      </div>
      <div style="max-width:820px;margin:18px auto 0;display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div style="padding:16px 18px;border-radius:12px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.25)">
          <p style="font-weight:700;font-size:0.95rem;color:#ff6b6b;margin-bottom:10px"${E('badLabel')}>${esc(d.badLabel)}</p>
          <p style="font-size:0.82rem;line-height:1.65;color:var(--color-text-on-dark-subdued)"${E('badText')}>${br(d.badText)}</p>
        </div>
        <div style="padding:16px 18px;border-radius:12px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.3)">
          <p style="font-weight:700;font-size:0.95rem;color:#4ade80;margin-bottom:10px"${E('goodLabel')}>${esc(d.goodLabel)}</p>
          <p style="font-size:0.82rem;line-height:1.65;color:var(--color-text-on-dark-subdued)"${E('goodText')}>${br(d.goodText)}</p>
        </div>
      </div>
      ${d.footer || E.edit ? `<div style="max-width:820px;margin:14px auto 0;padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
        <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5;text-align:center"${E('footer')}>${esc(d.footer)}</p>
      </div>` : ''}`,
  },

  numberedList: {
    name: 'Liste / Takeaways',
    icon: '🔢',
    hint: 'Nummerierte Punkte untereinander — ideal als Abschluss',
    theme: 'slide--dark',
    defaults: {
      title: 'Die Takeaways',
      subtitle: 'Untertitel',
      items: [
        { bold: 'Punkt eins', text: 'Beschreibung', accent: true },
        { bold: 'Punkt zwei', text: 'Beschreibung', accent: false },
        { bold: 'Punkt drei', text: 'Beschreibung', accent: false },
      ],
    },
    fields: [
      { key: 'items', label: 'Einträge', type: 'list', itemName: 'Punkt', of: [
        { key: 'bold', label: 'Fett', type: 'text' },
        { key: 'text', label: 'Text', type: 'textarea' },
        { key: 'accent', label: 'Gelb', type: 'checkbox' },
      ]},
    ],
    render: (d, E) => `
      <div style="max-width:780px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="margin-bottom:4px"${E('title')}>${esc(d.title)}</h2>
        ${d.subtitle || E.edit ? `<p class="slide-subtitle" style="font-size:0.9rem"${E('subtitle')}>${esc(d.subtitle)}</p>` : ''}
      </div>
      <div style="max-width:660px;margin:20px auto 0;display:flex;flex-direction:column;gap:9px">
        ${(d.items || []).map((it, i) => `
        <div style="padding:13px 18px;border-radius:10px;background:${it.accent ? 'rgba(255,237,0,0.08)' : 'rgba(255,255,255,0.05)'};border:1px solid ${it.accent ? 'rgba(255,237,0,0.25)' : 'rgba(255,255,255,0.1)'};display:flex;align-items:center;gap:14px">
          <strong style="color:var(--color-accent);font-size:1.1rem">${i + 1}</strong>
          <p style="font-size:0.88rem;color:var(--color-text-on-dark);line-height:1.45"><strong${E(`items.${i}.bold`)}>${esc(it.bold)}</strong> – <span${E(`items.${i}.text`)}>${br(it.text)}</span></p>
        </div>`).join('')}
      </div>`,
  },

  quiz: {
    name: 'Quiz',
    icon: '❓',
    hint: 'Wissens-Check — wird im Presenter-Mode übersprungen',
    theme: 'slide--dark',
    quiz: true,
    defaults: {
      counter: 'Wissens-Check',
      questions: [
        { q: 'Die Frage?', a1: 'Antwort A', a2: 'Antwort B (richtig)', a3: 'Antwort C', correct: '2' },
      ],
    },
    fields: [
      { key: 'questions', label: 'Fragen', type: 'list', itemName: 'Frage', of: [
        { key: 'q', label: 'Frage', type: 'text' },
        { key: 'a1', label: 'Antwort 1', type: 'text' },
        { key: 'a2', label: 'Antwort 2', type: 'text' },
        { key: 'a3', label: 'Antwort 3', type: 'text' },
        { key: 'correct', label: 'Richtig ist', type: 'select', options: ['1', '2', '3'] },
      ]},
    ],
    render: (d, E) => {
      const Tag = E.edit ? 'div' : 'button'
      return `
      <div class="quiz-container">
        <div class="quiz-counter"${E('counter')}>${esc(d.counter)}</div>
        ${(d.questions || []).map((q, i, arr) => `
        <div${i < arr.length - 1 ? ' style="margin-bottom:32px"' : ''}>
          <p class="quiz-question">${i + 1}. <span${E(`questions.${i}.q`)}>${esc(q.q)}</span></p>
          <div class="quiz-options">
            ${['a1', 'a2', 'a3'].map((k, ai) => (q[k] || E.edit)
              ? `<${Tag} class="quiz-option" data-correct="${String(ai + 1) === String(q.correct)}"${E(`questions.${i}.${k}`)}>${esc(q[k])}</${Tag}>`
              : '').join('')}
          </div>
          <div class="quiz-feedback"></div>
        </div>`).join('')}
      </div>`
    },
  },

  code: {
    name: 'Code / Befehle',
    icon: '💻',
    hint: 'Code-Block mit Copy-Button',
    theme: 'slide--dark',
    defaults: {
      title: 'So sieht das aus',
      subtitle: 'Untertitel',
      code: '# Beispiel\nnpm install\nnpm run dev',
      footer: 'Optionale Fußzeile — leer lassen zum Ausblenden',
    },
    fields: [],
    render: (d, E) => `
      <div style="max-width:760px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="margin-bottom:4px"${E('title')}>${esc(d.title)}</h2>
        ${d.subtitle || E.edit ? `<p class="slide-subtitle" style="font-size:0.9rem"${E('subtitle')}>${esc(d.subtitle)}</p>` : ''}
      </div>
      <div style="max-width:760px;margin:16px auto 0;position:relative">
        <div style="font-family:var(--font-mono);font-size:0.78rem;line-height:1.7;color:var(--color-code-text);background:var(--color-code-bg);border-radius:12px;padding:18px 20px;text-align:left;border:1px solid rgba(255,255,255,0.1);white-space:pre-wrap"${E('code')}>${esc(d.code)}</div>
        <button class="copy-btn" data-copy="${esc(d.code)}" style="position:absolute;top:12px;right:12px">📋 Copy</button>
      </div>
      ${d.footer || E.edit ? `<p style="max-width:700px;margin:14px auto 0;text-align:center;font-size:0.8rem;color:var(--color-text-on-dark-subdued)"${E('footer')}>${esc(d.footer)}</p>` : ''}`,
  },

  discussion: {
    name: 'Diskussion + Timer',
    icon: '💬',
    hint: '15-Min-Countdown im Presenter-Mode (max. 1× pro Kurs)',
    theme: 'slide--dark',
    desktopOnly: true,
    fixedId: 'discussion',
    defaults: {
      title: '💬 Q&A & Diskussion',
      subtitle: 'Jetzt seid ihr dran',
      points: [
        { emoji: '🧑‍💻', bold: 'Eure Erfahrungen:', text: 'Was funktioniert bei euch?', accent: false },
        { emoji: '🚀', bold: 'Nächste Schritte:', text: 'Wie machen wir weiter?', accent: true },
      ],
    },
    fields: [
      { key: 'points', label: 'Diskussionspunkte', type: 'list', itemName: 'Punkt', of: [
        { key: 'emoji', label: 'Emoji', type: 'text' },
        { key: 'bold', label: 'Fett', type: 'text' },
        { key: 'text', label: 'Text', type: 'text' },
        { key: 'accent', label: 'Gelb', type: 'checkbox' },
      ]},
    ],
    render: (d, E) => `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.5rem;margin-bottom:4px"${E('title')}>${esc(d.title)}</h2>
        <p class="slide-subtitle" style="font-size:0.9rem"${E('subtitle')}>${esc(d.subtitle)}</p>
      </div>
      <div class="pause-timer discussion-timer" id="discussion-timer" data-duration="900">
        <span class="pause-timer-icon">💬</span>
        <span class="pause-timer-display" id="discussion-timer-display">15:00</span>
        <span class="pause-timer-label">Diskussion</span>
      </div>
      <div style="max-width:650px;margin:12px auto 0;display:flex;flex-direction:column;gap:8px">
        ${(d.points || []).map((p, i) => `
        <div style="padding:12px 16px;border-radius:10px;background:${p.accent ? 'rgba(255,237,0,0.06)' : 'rgba(47,108,122,0.12)'};border:1px solid ${p.accent ? 'rgba(255,237,0,0.15)' : 'rgba(47,108,122,0.25)'};display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem"${E(`points.${i}.emoji`)}>${esc(p.emoji)}</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong${p.accent ? ' style="color:var(--color-accent)"' : ''}${E(`points.${i}.bold`)}>${esc(p.bold)}</strong> <span${E(`points.${i}.text`)}>${esc(p.text)}</span></p>
        </div>`).join('')}
      </div>`,
  },

  raw: {
    name: 'Freies HTML',
    icon: '🛠️',
    hint: 'Volle Kontrolle — HTML im Inspektor rechts bearbeiten',
    theme: 'slide--dark',
    defaults: {
      html: '<div style="max-width:800px;margin:0 auto;text-align:center">\n  <h2 class="slide-title">Eigenes HTML</h2>\n  <p class="slide-subtitle">Gleiche CSS-Variablen wie alle Kurse.</p>\n</div>',
    },
    fields: [
      { key: 'html', label: 'HTML', type: 'textarea', rows: 18, inspector: true },
    ],
    render: (d) => d.html || '',
  },
}

// =====================================================================
// Baukasten-Blöcke — frei kombinierbare Bausteine für das
// "Baukasten"-Layout. Jeder Block: { name, icon, defaults, render }.
// render(data, E, path): path = Daten-Pfad für Inline-Editing.
// =====================================================================
export const BLOCK_TYPES = {
  text: {
    name: 'Text', icon: '📝',
    defaults: { heading: 'Überschrift', body: 'Beschreibender Text – direkt in der Folie editierbar.' },
    render: (b, E, p) => `
      <div style="padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);height:100%">
        ${b.heading || E.edit ? `<p style="font-weight:700;font-size:0.92rem;color:var(--color-text-on-dark);margin-bottom:6px"${E(`${p}.heading`)}>${esc(b.heading)}</p>` : ''}
        <p style="font-size:0.82rem;line-height:1.65;color:var(--color-text-on-dark-subdued)"${E(`${p}.body`)}>${br(b.body)}</p>
      </div>`,
  },
  code: {
    name: 'Code', icon: '💻',
    defaults: { label: 'beispiel.js', code: '// Code hier\nconsole.log("hallo")', desc: '', showLabel: true },
    render: (b, E, p) => `
      <div style="height:100%">
        <div class="code-block" style="margin:0;position:relative">
          ${b.showLabel !== false ? `<div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div><span${E(`${p}.label`)}>${esc(b.label)}</span></div>` : ''}
          <button class="copy-btn" data-copy="${esc(b.code)}" style="position:absolute;top:${b.showLabel !== false ? '6px' : '8px'};right:8px">📋 Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.74rem;line-height:1.6"><pre style="margin:0;white-space:pre-wrap"${E(`${p}.code`)}>${esc(b.code)}</pre></div>
        </div>
        ${b.desc || E.edit ? `<p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-top:6px;line-height:1.5"${E(`${p}.desc`)}>${esc(b.desc)}</p>` : ''}
      </div>`,
  },
  image: {
    name: 'Bild', icon: '🖼️',
    defaults: { url: '', caption: 'Bildunterschrift' },
    render: (b, E, p) => `
      <div style="height:100%;text-align:center">
        <div style="border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04)">
          ${b.url
            ? `<img src="${esc(b.url)}" alt="${esc(b.caption)}" style="width:100%;display:block;max-height:340px;object-fit:contain" />`
            : `<div style="padding:40px 16px;color:var(--color-text-on-dark-subdued);font-size:0.8rem">🖼️ Kein Bild${E.edit ? ' – Bild-URL über den Button unten setzen' : ''}</div>`}
        </div>
        ${E.edit ? `<button class="bk-imgurl" data-imgpath="${p}.url" style="margin-top:6px;font-size:0.68rem;padding:4px 10px;border-radius:6px;border:1px dashed rgba(255,237,0,0.5);background:transparent;color:var(--color-accent);cursor:pointer">🖼 Bild-URL ändern</button>` : ''}
        ${b.caption || E.edit ? `<p style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:6px"${E(`${p}.caption`)}>${esc(b.caption)}</p>` : ''}
      </div>`,
  },
  card: {
    name: 'Karte', icon: '🃏',
    defaults: { emoji: '💡', heading: 'Punkt', text: 'Beschreibung', accent: false },
    render: (b, E, p) => `
      <div style="padding:14px 16px;border-radius:10px;background:${b.accent ? 'rgba(255,237,0,0.06)' : 'rgba(255,255,255,0.05)'};border:1px solid ${b.accent ? 'rgba(255,237,0,0.2)' : 'rgba(255,255,255,0.1)'};height:100%">
        <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
          <span${E(`${p}.emoji`)}>${esc(b.emoji)}</span> <strong${b.accent ? ' style="color:var(--color-accent)"' : ''}${E(`${p}.heading`)}>${esc(b.heading)}</strong><br>
          <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem"${E(`${p}.text`)}>${br(b.text)}</span>
        </p>
      </div>`,
  },
  quote: {
    name: 'Zitat / Quelle', icon: '💬',
    defaults: { text: 'Das Zitat oder die Kernaussage.', source: 'Quelle, Jahr', url: '' },
    render: (b, E, p) => `
      <div style="padding:14px 18px;border-radius:10px;background:rgba(47,108,122,0.15);border-left:4px solid var(--color-primary);height:100%">
        <p style="font-size:0.9rem;line-height:1.6;color:var(--color-text-on-dark);font-style:italic"${E(`${p}.text`)}>${br(b.text)}</p>
        <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-top:8px">&ndash; ${b.url && !E.edit ? `<a href="${esc(b.url)}" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline"${E(`${p}.source`)}>${esc(b.source)}</a>` : `<span${E(`${p}.source`)}>${esc(b.source)}</span>`}</p>
        ${E.edit ? `<button class="bk-imgurl" data-imgpath="${p}.url" style="margin-top:4px;font-size:0.64rem;padding:3px 8px;border-radius:6px;border:1px dashed rgba(255,237,0,0.5);background:transparent;color:var(--color-accent);cursor:pointer">🔗 Link ${b.url ? 'ändern' : 'setzen'}</button>` : ''}
      </div>`,
  },
  bignumber: {
    name: 'Big Number', icon: '🔢',
    defaults: { number: '45 %', caption: 'Was die Zahl bedeutet' },
    render: (b, E, p) => `
      <div style="text-align:center;padding:10px;height:100%;display:flex;flex-direction:column;justify-content:center">
        <div class="big-number" style="font-size:clamp(2.5rem,6vw,4.5rem);margin-bottom:8px"${E(`${p}.number`)}>${esc(b.number)}</div>
        <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5"${E(`${p}.caption`)}>${esc(b.caption)}</p>
      </div>`,
  },
  fazit: {
    name: 'Fazit-Box', icon: '⭐',
    defaults: { text: 'Kurz: Die eine Botschaft dieser Folie.' },
    render: (b, E, p) => `
      <div style="padding:13px 18px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25);text-align:center;height:100%;display:flex;align-items:center;justify-content:center">
        <p style="font-size:0.92rem;color:var(--color-text-on-dark);line-height:1.5;font-weight:600"${E(`${p}.text`)}>${br(b.text)}</p>
      </div>`,
  },
}

export function newBlock(type) {
  return { type, data: JSON.parse(JSON.stringify(BLOCK_TYPES[type].defaults)) }
}

function renderBlockWrapped(col, E, ri, ci) {
  const bt = BLOCK_TYPES[col.type]
  const inner = bt ? bt.render(col.data, E, `rows.${ri}.cols.${ci}.data`) : ''
  if (!E.edit) return inner
  return `
    <div class="bk-block" draggable="false" data-bk="${ri}:${ci}">
      <div class="bk-tools"><span class="bk-grip" title="Ziehen zum Verschieben">⠿ ${bt?.icon || ''}</span><button class="bk-del" data-bkdel="${ri}:${ci}" title="Block löschen">✕</button></div>
      ${inner}
    </div>`
}

TEMPLATES.blocks = {
  name: 'Baukasten (frei)',
  icon: '🧱',
  hint: 'Bausteine aus der Palette rechts per Drag & Drop in die Folie ziehen – Code, Text, Bilder, Zitate, beliebig in Spalten kombiniert',
  theme: 'slide--dark',
  isBlocks: true,
  defaults: {
    title: 'Überschrift',
    subtitle: 'Untertitel',
    rows: [
      { cols: [newBlock('text'), newBlock('code')] },
      { cols: [newBlock('fazit')] },
    ],
  },
  fields: [],
  render: (d, E) => `
    <div style="max-width:880px;margin:0 auto;text-align:center">
      <h2 class="slide-title" style="margin-bottom:4px"${E('title')}>${esc(d.title)}</h2>
      ${d.subtitle || E.edit ? `<p class="slide-subtitle" style="font-size:0.9rem"${E('subtitle')}>${esc(d.subtitle)}</p>` : ''}
    </div>
    <div style="max-width:880px;margin:14px auto 0">
      ${E.edit ? `<div class="bk-drop bk-drop-row" data-bkdrop="row:0"></div>` : ''}
      ${(d.rows || []).map((row, ri) => `
        <div style="display:flex;gap:14px;align-items:stretch;margin-bottom:12px">
          ${E.edit ? `<div class="bk-drop bk-drop-col" data-bkdrop="col:${ri}:0"></div>` : ''}
          ${row.cols.map((col, ci) => `
            <div style="flex:1;min-width:0">${renderBlockWrapped(col, E, ri, ci)}</div>
            ${E.edit ? `<div class="bk-drop bk-drop-col" data-bkdrop="col:${ri}:${ci + 1}"></div>` : ''}
          `).join('')}
        </div>
        ${E.edit ? `<div class="bk-drop bk-drop-row" data-bkdrop="row:${ri + 1}"></div>` : ''}
      `).join('')}
    </div>`,
}

const NO_EDIT = () => ''
NO_EDIT.edit = false

export function renderSlideContent(slide, edit = false) {
  const tpl = TEMPLATES[slide.template]
  if (!tpl) return slide.data?.html || slide.content || ''
  let E = NO_EDIT
  if (edit) {
    E = (path) => ` data-edit="${path}"`
    E.edit = true
  }
  return tpl.render(slide.data || tpl.defaults, E)
}

export function newSlide(templateKey, idHint) {
  const tpl = TEMPLATES[templateKey]
  const slide = {
    id: tpl.fixedId || `${idHint || templateKey}-${Math.random().toString(36).slice(2, 7)}`,
    label: tpl.name,
    template: templateKey,
    theme: tpl.theme || 'slide--dark',
    data: JSON.parse(JSON.stringify(tpl.defaults)),
  }
  if (tpl.quiz) slide.quiz = true
  if (tpl.desktopOnly) slide.desktopOnly = true
  return slide
}
