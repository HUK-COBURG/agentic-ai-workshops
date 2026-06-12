# Agentic AI Workshops

Ein Projekt der [HUK-COBURG](https://github.com/HUK-COBURG) · Repo: [HUK-COBURG/agentic-ai-workshops](https://github.com/HUK-COBURG/agentic-ai-workshops)

Interaktive Kurs-Plattform: Präsentationen, Self-Guided Workshops, Quizzes und Hands-On – als reines Frontend (Vite, kein Backend).

## Starten

```bash
npm install
npm run dev
```

| URL | Seite |
|---|---|
| `/` | Landing-Page mit allen Kursen |
| `/courses/agentic-ai-workshop/` | Kurs: Agentic AI Workshop (DE/EN) |
| `/courses/effizient-mit-ai-tools/` | Kurs: Effizient entwickeln mit AI-Tools (DE) |
| `/cms/` | Kurs-Studio – versteckter Folien-Editor (nirgends verlinkt, nur per Direkt-URL) |

## Architektur

```
├── index.html                  # Landing-Page
├── cms/                        # Kurs-Studio (Editor + Vorschau)
├── courses/<kurs-id>/          # Eine HTML-Seite pro Kurs (Vite Multi-Page)
├── public/                     # Geteilte Assets (favicon, img, assets)
└── src/
    ├── engine/                 # Die Slide-Engine (engine.js + style.css)
    ├── landing/                # Landing-Page-Code
    ├── cms/                    # CMS: Editor, Templates, Exporter, Preview
    ├── courses-registry.js     # Kurs-Liste für die Landing-Page
    └── courses/<kurs-id>/
        ├── course.js           # Kurs-Konfiguration → initCourse(...)
        └── sections/<lang>/    # Slides als JS-Module (HTML-Content)
```

**Engine**: `initCourse(config)` rendert einen Kurs komplett – Navigation, Presenter-/Self-Paced-Mode, Mobile-Mode, i18n, Quizzes, Copy-Buttons, Timer, Fortschritt (localStorage), Resume-Modal. Alle Kurse teilen sich Engine + CSS; Features wie Quiz oder Timer aktivieren sich über Markup/Slide-IDs von selbst.

**Slide-Format**: `{ id, theme, label, content: '<html>', quiz?, desktopOnly?, selfPacedOnly?, mobileOnly? }` – Sections sind Arrays solcher Slides.

## Neuen Kurs anlegen

**Variante A – Kurs-Studio:** Unter `/cms/` (bewusst unverlinkt). PowerPoint-artiger Editor: Folien-Thumbnails links mit Drag-and-Drop, Text direkt in der Folie bearbeiten, Layout-Auswahl als Folienmaster (Hero, Karten, Vergleich, Quiz, Code, Diskussions-Timer, freies HTML), Struktur im Inspektor rechts. **Export ZIP** liefert die fertige Ordnerstruktur + `INSTALL.md` mit den zwei Einträgen für Registry und `vite.config.js`. Drafts liegen im localStorage (JSON-Export als Backup).

**Variante B – per Code/AI-Agent:** Ordner `src/courses/<id>/` + `courses/<id>/index.html` anlegen (am besten von `effizient-mit-ai-tools` kopieren), Sections schreiben, Eintrag in `src/courses-registry.js` und `vite.config.js` ergänzen.

## Bedienung (in jedem Kurs)

- `↑/↓/Space` navigieren · `F` Fullscreen · `P`/`Tab` Presenter-Mode · `?presenter` per URL
- Presenter-Mode: Quiz-Slides werden übersprungen, Step-Reveals aktiv, Timer laufen
- Self-Paced: Quizzes, Copy-Buttons, Resume-Modal
- Mobil: Swipe-Navigation, Burger-Menü

## Build & Deploy

```bash
npm run build    # → dist/ (statisch, beliebig hostbar)
npm run preview
```

## Deployment (GitHub Pages)

Push auf `main` baut und deployt automatisch über `.github/workflows/deploy-pages.yml`.
Einmalig aktivieren: Repo → Settings → Pages → Source: **GitHub Actions**.
Die Seite läuft dann unter `https://huk-coburg.github.io/agentic-ai-workshops/`
(Subpath wird über `PAGES_BASE` in der Action gesetzt; bei einer Custom Domain einfach entfernen).

## Lizenz

[Apache 2.0](LICENSE)
