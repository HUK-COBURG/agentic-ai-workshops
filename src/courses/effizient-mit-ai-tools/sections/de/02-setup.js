// 02 – Setup & Kontext: statischer Kontext (Kontext-Mechanik, AGENTS.md, Tool-Config)
export const setupSlides = [
  // ===== 2.1 Divider =====
  {
    id: 'section-setup',
    theme: 'slide--primary slide--divider',
    label: 'Setup & Kontext',
    content: `
      <div class="divider-number">&#129513;</div>
      <h2 class="slide-title">Vorbereitung &amp; Setup</h2>
      <p class="slide-subtitle">Kontext, den du einmal hinterlegst, musst du nie wieder prompten.</p>
    `,
  },

  // ===== 2.2 Kontext-Mechanik (♻️ aus 04-basics) =====
  {
    id: 'context-memory',
    theme: 'slide--dark',
    label: 'Kontext-Mechanik',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Kontext: Das "Ged&auml;chtnis" der KI &ndash; und seine Grenzen</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Die KI erinnert sich nur an das, was gerade im Kontextfenster steht &ndash; und ihr seht nicht, was rausf&auml;llt</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Was ist Kontext?</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
              &#128214; <strong>Vergleich: Schreibtisch</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">System-Prompt, Chatverlauf, eingef&uuml;gter Code &ndash; alles liegt auf einem Schreibtisch begrenzter Gr&ouml;&szlig;e. Wenn er voll ist, m&uuml;ssen Dinge runter.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:6px">Wenn es voll wird, greifen Strategien des Systems</h3>
          <p style="font-size:0.82rem;color:var(--color-text-on-dark-subdued);line-height:1.6">
            Sliding Window (&Auml;ltestes fliegt raus) &middot; Zusammenfassung (Details weg, Essenz bleibt) &middot; RAG (nur Relevantes nachladen) &ndash; jede davon <strong style="color:var(--color-text-on-dark)">verliert Nuancen</strong>.
          </p>
        </div>
        <div>
          <h3 style="color:#ff6c12;font-size:1rem;margin-bottom:8px">Das eigentliche Problem</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.85rem">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span>Lange Sessions werden <strong>inkonsistent</strong> &ndash; die KI "vergisst" Konventionen, widerspricht sich</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span>Die Degradierung beginnt <strong>lange bevor</strong> das Fenster voll ist</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Ihr seht nicht, was fehlt</strong> &ndash; die KI signalisiert keinen Kontextverlust</span></li>
          </ul>
          <div style="margin-top:10px;padding:12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
              Kurz: <strong style="color:var(--color-accent)">Kontext ist eine begrenzte Ressource</strong> &ndash; das begr&uuml;ndet Session-Hygiene (Do's) und den Plan-als-.md-Workflow (sp&auml;ter).
            </p>
          </div>
        </div>
      </div>
      <p style="margin-top:10px;font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.75;text-align:center">
        Evidenz: <a href="https://research.trychroma.com/context-rot" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Chroma "Context Rot"</a> &ndash; alle 18 getesteten Frontier-Modelle degradieren mit wachsender Input-L&auml;nge &middot; <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">"Lost in the Middle" (Liu et al.)</a> &ndash; Infos in der Kontext-Mitte werden am schlechtesten genutzt
      </p>
    `,
  },

  // ===== 2.3 AGENTS.md: Das Langzeitgedächtnis (♻️ aus 04-basics) =====
  {
    id: 'agents-md',
    theme: 'slide--dark',
    label: 'AGENTS.md',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">AGENTS.md &ndash; Das Langzeitged&auml;chtnis</h2>
      <p class="slide-subtitle">Eine Datei, die immer im Kontext ist &ndash; egal wie oft komprimiert wird</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Das Prinzip &ndash; ganz einfach</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.95rem;color:var(--color-text-on-dark)">
              <strong>Wenn kalt</strong> &rarr; Warme Kleidung anziehen
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.95rem;color:var(--color-text-on-dark)">
              <strong>Wenn Regen</strong> &rarr; Regenschirm mitnehmen
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25);font-size:0.95rem;color:var(--color-accent)">
              <strong>Wenn Java-Projekt</strong> &rarr; Verhalte dich wie ein Senior Java Dev
            </div>
          </div>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.9rem;line-height:1.5;margin-bottom:12px">
            Jedes Projekt bekommt eine solche Datei. Sie wird bei jeder Konversation automatisch geladen &ndash; egal wie oft der Kontext komprimiert wird.
          </p>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">
            Spezifikation: <a href="https://agents.md" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">agents.md</a> &middot; Auch: CLAUDE.md, .cursorrules, Continue Rules
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Kennt ihr schon: der Pro-Lauf</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              spaceinvaders/AGENTS.md (Auszug)
            </div>
            <button class="copy-btn copy-btn--icon" title="Komplette AGENTS.md kopieren" data-copy="# Retro Arcade Game Agent
## Rolle
Du bist ein Senior Frontend-Entwickler, spezialisiert auf Browser-Games.
Du lieferst produktionsreifen, wartbaren Code – keinen Prototypen.
## Tech-Stack & Rahmen
- Vanilla JavaScript (ES2022+), HTML5 Canvas, CSS – keine externen Libraries
- Alles in EINER HTML-Datei, aber intern sauber getrennt:
  <style>-Block, dann <script>-Block mit klar gegliederten Klassen
- Kein Build-Step, keine externen Assets (keine Bilder, Fonts, Audio-Dateien)
- KEINE Emojis oder Unicode-Zeichen als Spielgrafik – alle Sprites sind Pixel-Art (s. Grafik)
## Architektur
- Klassen strikt nach Verantwortung getrennt:
  Game (Loop & Orchestrierung), Renderer (Zeichnen), SoundEngine (Web Audio),
  InputHandler (Eingaben), Player, EnemyGrid, Enemy, Ufo, Projectile, Shield,
  HUD, GameState (Zustand & Score)
- Game-Loop ausschließlich mit requestAnimationFrame, Delta-Time-basiert
  (Spielgeschwindigkeit unabhängig von der Framerate)
- Kein globaler mutabler State außer der Game-Instanz; keine Magic Numbers –
  Konstanten (Pixelgröße, Farben, Geschwindigkeiten, Frequenzen) in einem
  CONFIG-Objekt am Dateianfang
## Grafik – authentischer 8-Bit-Pixel-Look (Referenz: Space Invaders, 1978)
- Alle Sprites als 2D-Arrays (0/1) im Code definiert und pixelweise per
  fillRect gerendert; Pixelgröße aus CONFIG (ca. 3–4 px pro Sprite-Pixel)
- ctx.imageSmoothingEnabled = false – scharfe Kanten, kein Anti-Aliasing
- Farbschema klassisch: Hintergrund schwarz (#000), Invader weiß (#fff),
  Spieler + Schilde grün (#33ff33), UFO rot (#ff3333), HUD-Text weiß/grün
  in Monospace-/Pixel-Optik (SCORE links oben, LIVES rechts oben als Mini-Kanonen)
- 3 Invader-Typen, je ca. 11×8 Sprite-Pixel:
  - &quot;Squid&quot; (oberste Reihe, 30 Punkte): schmaler Kopf, tentakelartige Beine
  - &quot;Crab&quot; (mittlere Reihen, 20 Punkte): breit, Antennen oben, Zangenarme
  - &quot;Octopus&quot; (untere Reihen, 10 Punkte): rundlich-massiv, breite Füße
- Jeder Invader hat ZWEI Animationsframes (Beine/Arme wechseln die Stellung);
  der Frame wechselt bei jedem Bewegungsschritt des Grids → typischer Krabbel-Effekt
- Spieler-Kanone: ca. 13×8 Pixel, flacher Sockel mit mittigem Kanonenturm
- Schilde: 4 Bunker, je ca. 22×16 Sprite-Pixel, mit Bogen-Aussparung unten;
  Treffer stanzen pixelweise Löcher (Pixel im Trefferradius entfernen),
  bis der Bunker durchlöchert zerfällt
- Projektile: Spieler = 1×4 weißer Strich; Invader = gezackter 3×7-&quot;Blitz&quot;
  mit eigenem 2-Frame-Wackel-Effekt
- Treffer: kurzes Pixel-Explosions-Sprite (1–2 Frames), dann entfernen
- Mystery-UFO: ca. 16×7 Pixel, quert alle 20–30 s den oberen Rand,
  50–300 Zufallspunkte bei Abschuss
## Bewegung & Level-Verhalten
- Grid: 5 Reihen × 11 Spalten (von oben: 1× Squid, 2× Crab, 2× Octopus)
- Das Grid bewegt sich als Ganzes in DISKRETEN Schritten seitwärts
  (taktweise versetzt, KEIN weiches Gleiten); am Rand: eine Stufe nach
  unten (ca. halbe Sprite-Höhe) und Richtungswechsel
- Tempo steigt, je weniger Invader leben: Schrittintervall sinkt pro Abschuss;
  die letzten 2–3 Invader bewegen sich deutlich hektisch
- Invader-Beschuss: zufällig aus dem jeweils untersten Invader einer Spalte,
  Frequenz steigt pro Welle
- Welle geräumt → &quot;WAVE X&quot;-Einblendung, neues Grid startet eine Stufe tiefer
  und mit höherem Grundtempo; Schilde werden NICHT regeneriert
- Game Over: Invader erreichen die Schild-/Spielerebene ODER 3 Leben verloren
- Score: 10/20/30 Punkte je Typ + UFO-Bonus, Extra-Leben bei 1000 Punkten,
  Highscore-Anzeige (in-memory)
- Zustände: Start-Screen, Running, Pause (Esc/P), Game Over mit Restart
## Sound – 8-Bit via Web Audio API (keine Audio-Dateien!)
- Alle Sounds synthetisch: OscillatorNode (square/sawtooth) + GainNode-Hüllkurven,
  gekapselt in der SoundEngine-Klasse
- Marsch-Beat: die ikonische absteigende 4-Ton-Bassfolge (Square, ~55/52/49/46 Hz),
  EIN Ton pro Grid-Schritt → beschleunigt automatisch mit dem Spieltempo
- Spieler-Schuss: kurzer hoher Square-&quot;Pew&quot; mit schnellem Pitch-Drop
- Invader-Treffer: kurzer Noise-/Square-Burst (&quot;Crunch&quot;)
- Spieler-Tod: absteigender Sweep mit Rauschanteil
- UFO: oszillierender Sirenenton, solange es sichtbar ist
- Mute-Toggle auf Taste M; AudioContext erst nach der ersten User-Interaktion
  starten (Browser-Autoplay-Policy)
## Steuerung
- Keyboard: Pfeiltasten/A+D bewegen, Space schießt, Esc/P pausiert
- Touch: linke/rechte Bildschirmhälfte halten = bewegen, Tippen = schießen
- Canvas responsive: skaliert auf Containergröße, bleibt im Seitenverhältnis
## Code-Stil
- JSDoc für jede Klasse und jede öffentliche Methode
- Funktionen unter 30 Zeilen; sprechende Namen; keine auskommentierten Leichen
- const/let, strict mode, keine var
## No-Gos
- Kein setInterval/setTimeout für den Game-Loop
- Keine Emojis/Unicode als Spielgrafik, keine externen CDNs, Fonts, Bilder oder Sounds
- Kein Code außerhalb der definierten Klassen (außer CONFIG + Bootstrap)">&#128203;</button>
            <div class="code-body" style="font-size:0.72rem;line-height:1.55"><pre><span class="code-comment">## Rolle</span>
<span class="code-string">Senior Frontend-Dev, Browser-Games.
Produktionsreifer Code, kein Prototyp.</span>

<span class="code-comment">## Grafik (8-Bit, Referenz 1978)</span>
<span class="code-keyword">-</span> Sprites als 2D-Arrays, fillRect, 11&times;8 px
<span class="code-keyword">-</span> 2 Animationsframes pro Invader
<span class="code-keyword">-</span> Keine Emojis/Unicode als Grafik!

<span class="code-comment">## Bewegung &amp; Sound</span>
<span class="code-keyword">-</span> Grid in diskreten Schritten, kein Gleiten
<span class="code-keyword">-</span> 4-Ton-Marsch-Beat via Web Audio API

<span class="code-comment">## No-Gos</span>
<span class="code-keyword">-</span> Kein setInterval f&uuml;r den Game-Loop
<span class="code-keyword">-</span> Nichts Externes: CDNs, Fonts, Bilder, Audio</pre></div>
          </div>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:8px;line-height:1.5">Genau diese Datei hat aus "Erstelle Space Invaders" die Pro-Version gemacht. Vollst&auml;ndig auf der n&auml;chsten Folie &rarr;</p>
        </div>
      </div>
    `,
  },

  // ===== 2.4 Was gehört rein? =====
  {
    id: 'agents-md-content',
    theme: '',
    label: 'AGENTS.md Inhalt',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Praxis</span>
      <h2 class="slide-title">AGENTS.md: Was geh&ouml;rt rein?</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Kurz, konkret, maschinenlesbar &ndash; und im Team gepflegt</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Die Checkliste</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.85rem">
            <li><span class="check">&#10003;</span><span><strong>Tech-Stack &amp; Versionen</strong> &ndash; Sprache, Framework, Build-Tool</span></li>
            <li><span class="check">&#10003;</span><span><strong>Projektstruktur</strong> &ndash; wo liegt was, welche Module</span></li>
            <li><span class="check">&#10003;</span><span><strong>Coding Standards</strong> &ndash; Naming, Patterns, Formatierung</span></li>
            <li><span class="check">&#10003;</span><span><strong>Architektur-Konventionen</strong> &ndash; Schichten, Verantwortlichkeiten</span></li>
            <li><span class="check">&#10003;</span><span><strong>Test-Anforderungen</strong> &ndash; Frameworks, was getestet werden muss</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.1);color:var(--color-critical)">&#10007;</span><span><strong>No-Gos</strong> &ndash; was die KI nie tun darf</span></li>
          </ul>
          <div style="margin-top:10px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-subdued);line-height:1.5">
              &#127793; <strong style="color:var(--color-primary)">Lebendiges Dokument:</strong> im Repo versionieren, im Team pflegen &ndash; bei jedem "das wusste die KI nicht"-Moment erweitern.<br>
              &#128161; <strong style="color:var(--color-primary)">Meta-Tipp:</strong> "Lass die KI ihre eigene AGENTS.md verbessern."
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Realistisches Beispiel (Business-Projekt)</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>AGENTS.md</div>
            <button class="copy-btn" data-copy="# AGENTS.md

## Tech-Stack
- Backend: Quarkus 3.x (Java 21), Maven, PostgreSQL + Flyway
- Frontend: React 18 + TypeScript, Vite
- Tests: JUnit 5 + Testcontainers, Frontend: Vitest

## Projektstruktur
- /backend: REST-Resources -> Services -> Repositories (Panache)
- /frontend/src/features/<domain>: Feature-Ordner mit Komponenten + Hooks

## Konventionen
- DTOs als Java Records, MapStruct fürs Mapping
- REST: /api/v1/..., Fehler als RFC-7807 Problem Details
- Commits: Conventional Commits (feat/fix/chore)

## Tests
- Jede neue Resource braucht einen Integration-Test (Testcontainers)
- Frontend: Hooks mit Vitest testen, keine Snapshot-Tests

## No-Gos
- Keine neuen Dependencies ohne Rückfrage
- Nie Secrets/Config-Werte hardcoden
- Keine Änderungen an /legacy/** ohne expliziten Auftrag">&#128203; Copy</button>
            <div class="code-body" style="font-size:0.68rem;line-height:1.55"><pre><span class="code-comment"># AGENTS.md</span>
<span class="code-keyword">## Tech-Stack</span>
- Quarkus 3.x (Java 21), Maven, PostgreSQL + Flyway
- React 18 + TypeScript, Vite
- JUnit 5 + Testcontainers &middot; Vitest

<span class="code-keyword">## Konventionen</span>
- DTOs als Records, MapStruct f&uuml;rs Mapping
- REST: /api/v1/..., RFC-7807 Problem Details
- Conventional Commits (feat/fix/chore)

<span class="code-keyword">## Tests</span>
- Neue Resource &rarr; Integration-Test (Testcontainers)

<span class="code-keyword">## No-Gos</span>
- Keine neuen Dependencies ohne R&uuml;ckfrage
- Nie Secrets hardcoden
- /legacy/** nicht ohne Auftrag anfassen</pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 2.4b Kontext-Ebenen: User-Setting vs. AGENTS.md vs. Prompt =====
  {
    id: 'context-levels',
    theme: 'slide--dark',
    label: 'User vs. Projekt',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Welcher Kontext geh&ouml;rt wohin?</span>
      <h2 class="slide-title">Drei Ebenen &ndash; und das Betriebssystem geh&ouml;rt NICHT in die AGENTS.md</h2>
      <p class="slide-subtitle" style="font-size:0.88rem">Die AGENTS.md liegt im Repo und gilt f&uuml;rs ganze Team &ndash; was system-individuell ist, geh&ouml;rt in eure User-Settings</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:14px;max-width:960px;margin-left:auto;margin-right:auto">
        <div style="padding:14px 15px;border-radius:12px;background:rgba(255,237,0,0.07);border:1px solid rgba(255,237,0,0.3)">
          <p style="font-weight:700;font-size:0.88rem;color:var(--color-accent);margin-bottom:7px">&#128100; User-Setting <span style="font-size:0.65rem;opacity:0.7">(pro Person)</span></p>
          <p style="font-size:0.76rem;line-height:1.65;color:var(--color-text-on-dark-subdued)">
            <strong style="color:var(--color-text-on-dark)">Betriebssystem</strong>, Shell, bevorzugte Sprache der Antworten, pers&ouml;nliche Vorlieben.<br><br>
            Ohne OS-Angabe schl&auml;gt die KI <code>apt install</code> auf dem Mac oder <code>rm -rf</code> in der PowerShell vor. <strong style="color:var(--color-text-on-dark)">Einmal zentral hinterlegen &ndash; gilt f&uuml;r jede Session.</strong>
          </p>
        </div>
        <div style="padding:14px 15px;border-radius:12px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.45)">
          <p style="font-weight:700;font-size:0.88rem;color:#7dd3fc;margin-bottom:7px">&#128218; AGENTS.md <span style="font-size:0.65rem;opacity:0.7">(pro Projekt, im Repo)</span></p>
          <p style="font-size:0.76rem;line-height:1.65;color:var(--color-text-on-dark-subdued)">
            Tech-Stack &amp; Versionen, Projektstruktur, Konventionen, Tests, No-Gos &ndash; alles, was <strong style="color:var(--color-text-on-dark)">f&uuml;r jeden im Team gleich</strong> ist.<br><br>
            Hier hat euer privates OS nichts verloren &ndash; der Kollege arbeitet vielleicht auf Windows.
          </p>
        </div>
        <div style="padding:14px 15px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12)">
          <p style="font-weight:700;font-size:0.88rem;color:var(--color-text-on-dark);margin-bottom:7px">&#128172; Prompt <span style="font-size:0.65rem;opacity:0.7">(pro Aufgabe)</span></p>
          <p style="font-size:0.76rem;line-height:1.65;color:var(--color-text-on-dark-subdued)">
            Das Aufgabenspezifische: betroffene Datei, Ziel, Constraints, Format (&rarr; Do #1).<br><br>
            Was schon auf Ebene 1 + 2 hinterlegt ist, m&uuml;sst ihr <strong style="color:var(--color-text-on-dark)">nie wieder tippen</strong>.
          </p>
        </div>
      </div>
      <div class="two-cols" style="margin-top:12px;max-width:960px;margin-left:auto;margin-right:auto;align-items:start">
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>~/.config/opencode/AGENTS.md (global, pro User)</div>
          <button class="copy-btn copy-btn--icon" title="Beispiel kopieren" data-copy="# Mein System
- OS: macOS 15 (Apple Silicon), Shell: zsh
- Paketmanager: brew, Node via nvm
- Antworten auf Deutsch, Befehle immer fürs obige System">&#128203;</button>
          <div class="code-body" style="padding:8px 12px;font-size:0.7rem;line-height:1.6"><pre style="margin:0"><span class="code-comment"># Mein System</span>
- OS: macOS 15 (Apple Silicon), Shell: zsh
- Paketmanager: brew, Node via nvm
- Antworten auf Deutsch, Befehle
  immer f&uuml;rs obige System</pre></div>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25)">
          <p style="font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.6">
            Daf&uuml;r gibt es in den Tools zentrale Configs: <strong style="color:var(--color-accent)">OpenCode</strong> &rarr; globale AGENTS.md / System-Prompts unter <code>~/.config/opencode/</code> &middot; <strong style="color:var(--color-accent)">Continue</strong> &rarr; Rules &amp; System-Prompt in den User-Settings.<br><br>
            Kurz: <strong>System-Individuelles ins User-Setting, Team-Wissen ins Repo.</strong>
          </p>
        </div>
      </div>
    `,
  },

  // ===== 2.5 Sub-Agents: Das Konzept (♻️ aus 04-basics, angepasst) =====
  {
    id: 'subagents',
    theme: '',
    label: 'Sub-Agents',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Ein Level weiter</span>
      <h2 class="slide-title">Sub-Agents &ndash; KI-Spezialisten statt Allesk&ouml;nner</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Jede Projekt-Rolle kann ein eigener Agent sein &ndash; mit eigenem Kontext, eigenen Tools, eigenem Modell</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:10px">Ein Projekt &ndash; welche Rollen braucht es?</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 13px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span>&#128270; <strong>Explorer</strong></span><span style="color:var(--color-text-neutral);font-size:0.78rem">Codebase verstehen</span>
            </div>
            <div style="padding:7px 13px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span>&#127959;&#65039; <strong>Architekt</strong></span><span style="color:var(--color-text-neutral);font-size:0.78rem">Plan erstellen</span>
            </div>
            <div style="padding:7px 13px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);font-size:0.85rem;display:flex;justify-content:space-between">
              <span>&#128187; <strong>Entwickler</strong></span><span style="color:var(--color-primary);font-size:0.78rem;font-weight:600">Code schreiben</span>
            </div>
            <div style="padding:7px 13px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span>&#128269; <strong>Code Reviewer</strong></span><span style="color:var(--color-text-neutral);font-size:0.78rem">Qualit&auml;t pr&uuml;fen</span>
            </div>
            <div style="padding:7px 13px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span>&#129514; <strong>Tester</strong></span><span style="color:var(--color-text-neutral);font-size:0.78rem">Tests schreiben &amp; ausf&uuml;hren</span>
            </div>
            <div style="padding:7px 13px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span>&#128196; <strong>Doku-Schreiber</strong></span><span style="color:var(--color-text-neutral);font-size:0.78rem">Doku &amp; Changelogs generieren</span>
            </div>
          </div>
          <p style="margin-top:10px;font-size:0.78rem;color:var(--color-text-subdued);line-height:1.5">Jede Rolle: eigene AGENTS.md, eigenes Modell, eigene Tools. Der Haupt-Agent orchestriert und verteilt die Arbeit.</p>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:10px">Warum? Die Vorteile</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.85rem">
            <li><span class="check">&#127919;</span><span><strong>Fokus</strong> &ndash; jeder Agent ist Experte f&uuml;r eine Sache. Bessere Ergebnisse als ein "kann alles"-Agent.</span></li>
            <li><span class="check">&#128274;</span><span><strong>Kontext-Isolation</strong> &ndash; der Entwickler-Agent muss nicht die 200 Seiten Recherche kennen, er bekommt nur seinen Auftrag. Kein Kontext-&Uuml;berlauf.</span></li>
            <li><span class="check">&#9889;</span><span><strong>Parallelit&auml;t</strong> &ndash; Explorer, Tester und Doku-Agent arbeiten gleichzeitig, w&auml;hrend ihr weitermacht.</span></li>
            <li><span class="check">&#129520;</span><span><strong>Passendes Modell pro Rolle</strong> &ndash; einfache Rollen auf schnelle kleine Modelle (Haiku), komplexe auf Opus/Sonnet.</span></li>
          </ul>
          <div style="margin-top:12px;padding:13px 16px;border-radius:10px;background:var(--color-accent-subdued);border:1px solid var(--color-accent)">
            <p style="font-size:0.85rem;color:var(--color-text);line-height:1.6">Kurz: <strong>Sub-Agents sind Kontext-Hygiene auf Architektur-Ebene</strong> &ndash; dieselben zwei Hebel wie im ganzen Kurs: nur relevanter Kontext + das richtige Modell pro Aufgabe.</p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 2.6 Sub-Agents in der Praxis (♻️ aus 04-basics, angepasst) =====
  {
    id: 'subagents-praxis',
    theme: 'slide--dark',
    label: 'Sub-Agents Praxis',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">In der Praxis</span>
      <h2 class="slide-title">Sub-Agents in der Praxis</h2>
      <p class="slide-subtitle" style="font-size:0.88rem">Eine .md-Datei pro Spezialist &ndash; das Konzept gibt es in Claude Code, OpenCode &amp; Co.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">So einfach ist die Definition</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              .claude/agents/code-reviewer.md
            </div>
            <button class="copy-btn copy-btn--icon" title="Sub-Agent-Definition kopieren" data-copy="---
name: code-reviewer
tools: Read, Grep, Glob, Bash
model: sonnet
---

Du bist ein Senior Code Reviewer.
Feedback nach Priorität:
- Critical (must fix)
- Warning (should fix)
- Suggestion (nice to have)">&#128203;</button>
            <div class="code-body" style="font-size:0.72rem;line-height:1.55"><pre><span class="code-comment">---</span>
<span class="code-property">name</span>: <span class="code-string">code-reviewer</span>
<span class="code-property">tools</span>: <span class="code-string">Read, Grep, Glob, Bash</span>
<span class="code-property">model</span>: <span class="code-string">sonnet</span>
<span class="code-comment">---</span>

Du bist ein Senior Code Reviewer.
Feedback nach Priorit&auml;t:
<span class="code-string">- Critical (must fix)</span>
<span class="code-string">- Warning (should fix)</span>
<span class="code-string">- Suggestion (nice to have)</span></pre></div>
          </div>
          <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:8px;line-height:1.5">Read-only Tools f&uuml;r den Reviewer = er <em>kann</em> nichts kaputt machen. Berechtigungen pro Rolle &ndash; wie bei echten Kollegen.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:0.75rem;margin-top:8px">
            <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Claude Code Docs</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://opencode.ai/docs/agents/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">OpenCode Agents</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">awesome-subagents</a>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Built-in Sub-Agents (z.B. OpenCode/Claude Code)</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:9px 13px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128270; <strong>Explore</strong> &ndash; Read-only, Haiku: Codebase durchsuchen, ohne euren Kontext zu belasten
            </div>
            <div style="padding:9px 13px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128203; <strong>Plan</strong> &ndash; Read-only: Recherche f&uuml;r den Plan-Modus
            </div>
            <div style="padding:9px 13px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128295; <strong>General/Build</strong> &ndash; alle Tools: die eigentliche Umsetzung
            </div>
          </div>
          <ul class="feature-list" style="margin-top:0;font-size:0.82rem">
            <li><span class="check">&#129504;</span><span><strong>Eigener Kontext</strong> &ndash; der Sub-Agent liest 50 Dateien, zur&uuml;ck kommt nur die Zusammenfassung. Euer Kontext bleibt sauber.</span></li>
            <li><span class="check">&#128176;</span><span><strong>Modell pro Agent</strong> &ndash; Explorer auf Haiku, Reviewer auf Sonnet (&rarr; Modellwahl im Workflow-Kapitel)</span></li>
            <li><span class="check">&#128260;</span><span><strong>Parallel &amp; im Hintergrund</strong> &ndash; mehrere Sub-Agents gleichzeitig</span></li>
          </ul>
          <div style="margin-top:10px;padding:12px 14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">Kurz: <strong style="color:var(--color-accent)">Einstieg ohne Framework-Aufwand</strong> &ndash; eine .md-Datei im Repo gen&uuml;gt. Startet mit einem Code-Reviewer, der Rest kommt von selbst.</p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 2.7 Tool-Konfiguration (🔧 adaptiert) =====
  {
    id: 'tool-config',
    theme: '',
    label: 'Tool-Setup',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Einmal richtig einrichten</span>
      <h2 class="slide-title">Tool-Konfiguration: Continue &amp; OpenCode</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Ihr nutzt die Tools schon &ndash; es geht um <em>gute</em> Konfiguration, nicht um Tool-Werbung</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:14px">
        <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
          <p style="font-weight:700;font-size:0.9rem;margin-bottom:8px">&#129521; Modelle pro Aufgabe</p>
          <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-subdued)">Starkes Modell f&uuml;r Agent-/Edit-Tasks, schnelles g&uuml;nstiges f&uuml;r Autocomplete &amp; triviale Tasks. Zuweisung pro Agent in der Config (Details: Kapitel Workflow).</p>
        </div>
        <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
          <p style="font-weight:700;font-size:0.9rem;margin-bottom:8px">&#128193; Kontext-Quellen</p>
          <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-subdued)">Rules-Files/AGENTS.md einbinden, Codebase-Indexierung aktivieren, Irrelevantes ausschlie&szlig;en (node_modules, build, .env).</p>
        </div>
        <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
          <p style="font-weight:700;font-size:0.9rem;margin-bottom:8px">&#128274; Berechtigungen</p>
          <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-subdued)">Auto-Ausf&uuml;hrung bewusst konfigurieren: Lesen ja &ndash; L&ouml;schen, Pushen, Deployen nur mit Best&auml;tigung.</p>
        </div>
      </div>
      <div class="two-cols" style="margin-top:12px;align-items:start">
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; sinnvolle Defaults</div>
          <button class="copy-btn" data-copy='{
  "instructions": ["AGENTS.md"],
  "permission": { "edit": "allow", "bash": "ask" }
}'>&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.72rem"><pre style="margin:0">{
  <span class="code-property">"instructions"</span>: [<span class="code-string">"AGENTS.md"</span>],
  <span class="code-property">"permission"</span>: {
    <span class="code-property">"edit"</span>: <span class="code-string">"allow"</span>,
    <span class="code-property">"bash"</span>: <span class="code-string">"ask"</span>
  }
}</pre></div>
        </div>
        <div style="padding:14px 18px;border-radius:10px;background:var(--color-accent-subdued);border:1px solid var(--color-accent)">
          <p style="font-size:0.88rem;color:var(--color-text);line-height:1.6">
            Kurz: <strong>Config ist Team-Wissen.</strong> <code>opencode.json</code> bzw. Continue-Config versionieren und im Repo teilen &ndash; gleiche Regeln, gleiche Qualit&auml;t f&uuml;r alle.
          </p>
        </div>
      </div>
    `,
  },
];
