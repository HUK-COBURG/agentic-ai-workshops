// 05 – Workflow: Die richtige Arbeitsweise wählen (Herzstück)
export const workflowSlides = [
  // ===== 5.1 Divider =====
  {
    id: 'section-workflow',
    theme: 'slide--primary slide--divider',
    label: 'Workflow',
    content: `
      <div class="divider-number">&#128736;&#65039;</div>
      <h2 class="slide-title">Workflow-Tipps</h2>
      <p class="slide-subtitle">Eine Entscheidung, aus der alles andere folgt.</p>
    `,
  },

  // ===== 5.2 Vibe vs. Spec (🔧 adaptiert) =====
  {
    id: 'vibe-vs-spec',
    theme: '',
    label: 'Vibe vs. Spec',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Die beiden Pole</span>
      <h2 class="slide-title">Vibe Coding vs. Spec-Driven</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Beides ist AI-Assisted Development &ndash; nur mit unterschiedlichem Grad an Struktur</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <div style="padding:12px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:10px">
            <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-subdued)">
              &#127925; <em>"There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes [...]"</em><br>
              <span style="font-size:0.72rem">&ndash; Andrej Karpathy, <a href="https://x.com/karpathy/status/1886192184808149383" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Tweet, Feb. 2025</a> &middot; Collins Word of the Year 2025</span>
            </p>
          </div>
          <h3 style="color:var(--color-positive);font-size:0.95rem;margin-bottom:6px">St&auml;rken Vibe / Agent-Driven</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.82rem">
            <li><span class="check">&#10003;</span><span><strong>Schnell</strong> &ndash; keine Zeremonie f&uuml;r kleine, klare &Auml;nderungen</span></li>
            <li><span class="check">&#10003;</span><span><strong>Explorativ</strong> &ndash; ideal f&uuml;r Prototypen, Bugfixes, Ausprobieren</span></li>
            <li><span class="check">&#10003;</span><span><strong>Flexibel</strong> &ndash; der Agent plant selbst und passt sich an</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:6px">St&auml;rken Spec-Driven</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.82rem">
            <li><span class="check">&#10003;</span><span><strong>Fr&uuml;h reviewbar</strong> &ndash; Denkfehler werden schon in der Spec gestoppt, nicht erst im 500-Zeilen-Diff</span></li>
            <li><span class="check">&#10003;</span><span><strong>Nachvollziehbar</strong> &ndash; jede Codezeile r&uuml;ckf&uuml;hrbar auf eine Requirement</span></li>
            <li><span class="check">&#10003;</span><span><strong>Testbar</strong> &ndash; Tests werden aus der Spec abgeleitet, nicht nachtr&auml;glich</span></li>
            <li><span class="check">&#10003;</span><span><strong>Kontextfest</strong> &ndash; die Spec &uuml;berlebt jede Session</span></li>
          </ul>
          <div style="margin-top:12px;padding:13px 16px;border-radius:10px;background:var(--color-accent-subdued);border:1px solid var(--color-accent)">
            <p style="font-size:0.88rem;color:var(--color-text);line-height:1.6">
              Kurz: Es gibt kein <em>generell</em> besser &ndash; aber f&uuml;r <strong>jede konkrete Aufgabe gibt es ein richtig</strong>. Schauen wir uns beide kurz in Aktion an.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 5.2b Beispiel: Vibe Coding =====
  {
    id: 'vibe-example',
    theme: 'slide--dark',
    label: 'Vibe-Beispiel',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Beispiel Vibe Coding</span>
      <h2 class="slide-title">Vibe Coding: schnell, iterativ, dr&uuml;berarbeiten</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Ohne Plan, ohne Spec &ndash; das Gespr&auml;ch mit der KI ist der Workflow</p>
      <div class="two-cols" style="margin-top:14px">
        <div style="padding:16px 18px;border-radius:12px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25)">
          <p style="font-weight:700;font-size:0.92rem;color:#4ade80;margin-bottom:8px">&#128126; Heute schon gesehen: der Basic-Lauf</p>
          <p style="font-size:0.84rem;line-height:1.65;color:var(--color-text-on-dark-subdued)">
            <em>"Erstelle Space Invaders als einzelne HTML-Datei"</em> &ndash; ein Prompt, null Kontext, Minuten sp&auml;ter spielbar.<br><br>
            Genau daf&uuml;r ist Vibe Coding gemacht: <strong style="color:var(--color-text-on-dark)">Demos, Prototypen, Wegwerf-Code.</strong> Der Fehlerfall kostet nichts &ndash; im Zweifel l&ouml;scht man die Datei und promptet neu.
          </p>
          <div style="margin-top:10px;padding:10px 13px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12)">
            <p style="font-size:0.8rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">
              &#128260; <strong style="color:var(--color-text-on-dark)">Aber: Vibe Coding ist iterativ.</strong> One-Shot-Perfektion ist die Ausnahme &ndash; man arbeitet dr&uuml;ber: prompten &rarr; anschauen &rarr; nachsteuern &rarr; wieder prompten, bis es passt. Das Gespr&auml;ch <em>ist</em> der Workflow.
            </p>
          </div>
        </div>
        <div style="padding:16px 18px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
          <p style="font-weight:700;font-size:0.92rem;color:var(--color-text-on-dark);margin-bottom:8px">&#128188; Im Alltag sieht das so aus</p>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Edit-Modus, 30 Sekunden</div>
            <div class="code-body" style="padding:10px 12px;font-size:0.72rem;line-height:1.6"><pre style="margin:0"><span class="code-keyword">Du:</span>  <span class="code-string">"Mach den Speichern-Button in der
     Toolbar gelb, wie im Styleguide"</span>
<span class="code-comment">KI:  Diff &uuml;ber 3 Zeilen in Toolbar.tsx</span>
<span class="code-keyword">Du:</span>  pr&uuml;fen &rarr; passt &rarr; 1 Commit. Fertig.</pre></div>
          </div>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:8px;line-height:1.5">Kein Plan, keine Spec, keine Session-Zeremonie &ndash; das w&auml;re hier reine B&uuml;rokratie.</p>
        </div>
      </div>
      <div style="margin-top:14px;padding:13px 18px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text-on-dark)">Kurz: <strong style="color:var(--color-accent)">Vibe Coding ist perfekt, wenn der Fehlerfall billig ist.</strong> Teuer wird es, wenn die Aufgabe heimlich gr&ouml;&szlig;er ist &ndash; dazu gleich.</p>
      </div>
    `,
  },

  // ===== 5.5 Spec-Driven in Aktion (♻️ aus 06-ai-coding, statisch) =====
  {
    id: 'spec-in-action',
    theme: 'slide--dark',
    label: 'Spec-Beispiel',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Beispiel</span>
      <h2 class="slide-title">Spec-Driven in Aktion</h2>
      <p class="slide-subtitle" style="font-size:0.88rem">Prompt: "Baue einen User-Endpoint mit Pagination" &ndash; erst entstehen 3 Dokumente, dann Code</p>
      <div style="display:flex;gap:12px;margin-top:14px">
        <div class="code-block" style="margin-top:0;flex:1">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>requirements.md</div>
          <div class="code-body" style="font-size:0.68rem;line-height:1.5"><pre><span class="code-comment">## User Story</span>
<span class="code-string">Als API-Nutzer m&ouml;chte ich
User-Daten paginiert abrufen.</span>

<span class="code-comment">## Akzeptanzkriterien</span>
<span class="code-keyword">WHEN</span> GET /users?page=1&size=20
<span class="code-keyword">THEN</span> max 20 User zur&uuml;ckgeben
<span class="code-keyword">AND</span> totalPages im Response

<span class="code-keyword">WHEN</span> page > totalPages
<span class="code-keyword">THEN</span> leere Liste, kein Fehler

<span class="code-keyword">WHEN</span> size > 100
<span class="code-keyword">THEN</span> auf 100 begrenzen</pre></div>
        </div>
        <div class="code-block" style="margin-top:0;flex:1">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>design.md</div>
          <div class="code-body" style="font-size:0.68rem;line-height:1.5"><pre><span class="code-comment">## Architektur</span>
<span class="code-string">Spring Boot + JPA
3-Layer: Controller, Service, Repo</span>

<span class="code-comment">## API Design</span>
<span class="code-keyword">GET</span> /api/v1/users
  <span class="code-property">?page</span>=0  <span class="code-comment">(default)</span>
  <span class="code-property">&size</span>=20 <span class="code-comment">(max 100)</span>

<span class="code-comment">## Response</span>
{ <span class="code-property">"content"</span>: [User],
  <span class="code-property">"totalPages"</span>: <span class="code-number">5</span>,
  <span class="code-property">"totalElements"</span>: <span class="code-number">98</span> }</pre></div>
        </div>
        <div class="code-block" style="margin-top:0;flex:1">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>tasks.md</div>
          <div class="code-body" style="font-size:0.68rem;line-height:1.5"><pre><span class="code-comment">## Implementation Tasks</span>
<span class="code-keyword">&#9744; 1:</span> UserEntity
  <span class="code-string">JPA + Flyway Migration</span>
<span class="code-keyword">&#9744; 2:</span> UserRepository
  <span class="code-string">PagingAndSorting</span>
<span class="code-keyword">&#9744; 3:</span> UserService
  <span class="code-string">Pagination + size-Limit</span>
<span class="code-keyword">&#9744; 4:</span> UserController
<span class="code-keyword">&#9744; 5:</span> Tests
  <span class="code-string">Unit + Integration</span></pre></div>
        </div>
      </div>
      <div style="margin-top:12px;padding:12px 16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
        <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5;text-align:center">
          Kurz: <strong style="color:var(--color-accent)">Das Review beginnt schon bei der Spec</strong> &ndash; Denkfehler stoppt ihr, bevor Code entsteht. Der Code wird trotzdem reviewt (Human in the Lead!), aber gegen eine klare Vorgabe geht das deutlich schneller. Und das alles ohne Spezial-Tool &ndash; gleich beim Plan-Workflow.
        </p>
      </div>
    `,
  },

  // ===== 5.3 Die Kernentscheidung: das Spektrum ⭐ =====
  {
    id: 'core-decision',
    theme: 'slide--dark',
    label: 'Spektrum',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Die Kernentscheidung</span>
      <h2 class="slide-title">Jede Aufgabe hat ihren Platz auf dem Spektrum</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Vor dem ersten Prompt: Wo liegt diese Aufgabe?</p>
      <div style="max-width:900px;margin:20px auto 0">
        <div style="display:grid;grid-template-columns:1fr 1.1fr 1fr;gap:12px;align-items:stretch">
          <div style="padding:16px;border-radius:12px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.3)">
            <p style="font-weight:700;font-size:0.95rem;color:#4ade80;margin-bottom:8px">&#127925; Vibe Coding</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.65">
              <em>"Mach den Button gelb"</em><br>
              &rarr; Edit-Modus, direkt machen<br>
              &rarr; pr&uuml;fen, 1 Commit, fertig<br>
              &rarr; Plan w&auml;re reine B&uuml;rokratie
            </p>
          </div>
          <div style="padding:16px;border-radius:12px;background:rgba(255,237,0,0.07);border:2px dashed rgba(255,237,0,0.4)">
            <p style="font-weight:700;font-size:0.95rem;color:var(--color-accent);margin-bottom:8px">&#10067; Die Grauzone</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.65">
              <em>"F&uuml;g dem Formular ein Feld hinzu"</em><br>
              &rarr; klingt klein, ist es oft nicht<br>
              &rarr; hier entscheidet die Heuristik unten<br>
              &rarr; im Zweifel: kurz planen lassen
            </p>
          </div>
          <div style="padding:16px;border-radius:12px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.45)">
            <p style="font-weight:700;font-size:0.95rem;color:#7dd3fc;margin-bottom:8px">&#128203; Spec-Driven</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.65">
              <em>"Migriere das Auth-Modul"</em><br>
              &rarr; Chat/Plan-Modus &rarr; Plan.md<br>
              &rarr; Agent in frischer Session<br>
              &rarr; eigener Branch, kleine Commits
            </p>
          </div>
        </div>
        <div style="height:8px;margin:14px 4px;border-radius:4px;background:linear-gradient(90deg, rgba(37,204,120,0.7), rgba(255,237,0,0.7), rgba(125,211,252,0.7))"></div>
        <div style="display:flex;justify-content:space-between;font-size:0.68rem;color:var(--color-text-on-dark-subdued);padding:0 4px">
          <span>klein &middot; klar &middot; reversibel</span><span>gro&szlig; &middot; unklar &middot; schwer r&uuml;ckg&auml;ngig</span>
        </div>
        <div style="margin-top:16px;padding:14px 18px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25)">
          <p style="font-size:0.9rem;color:var(--color-text-on-dark);line-height:1.6;text-align:center">
            <strong style="color:var(--color-accent)">Die Heuristik &ndash; 3 Fragen:</strong> &nbsp;Wie viele Dateien/Schichten? &nbsp;&middot;&nbsp; Wie reversibel? &nbsp;&middot;&nbsp; Wie klar ist das Ziel?<br>
            <span style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">Je mehr "viele / schwer / unklar" &rarr; desto weiter nach rechts.</span>
          </p>
        </div>
      </div>
    `,
  },

  // ===== 5.4 Die Grauzone =====
  {
    id: 'grey-zone-example',
    theme: 'slide--dark',
    label: 'Grauzone',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Die Grauzone</span>
      <h2 class="slide-title">"F&uuml;g dem Formular ein Feld hinzu"</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Klingt nach 5 Minuten Vibe Coding. Schauen wir genauer hin.</p>
      <div style="max-width:860px;margin:16px auto 0;display:grid;grid-template-columns:repeat(7,1fr);gap:8px">
        <div style="padding:10px 6px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);text-align:center"><div style="font-size:1.2rem">&#129534;</div><p style="font-size:0.66rem;color:var(--color-text-on-dark);margin-top:4px;line-height:1.4"><strong>Frontend</strong><br>Komponente</p></div>
        <div style="padding:10px 6px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);text-align:center"><div style="font-size:1.2rem">&#9989;</div><p style="font-size:0.66rem;color:var(--color-text-on-dark);margin-top:4px;line-height:1.4"><strong>Validierung</strong><br>Client + Server</p></div>
        <div style="padding:10px 6px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);text-align:center"><div style="font-size:1.2rem">&#128230;</div><p style="font-size:0.66rem;color:var(--color-text-on-dark);margin-top:4px;line-height:1.4"><strong>DTO</strong><br>+ Mapping</p></div>
        <div style="padding:10px 6px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);text-align:center"><div style="font-size:1.2rem">&#128225;</div><p style="font-size:0.66rem;color:var(--color-text-on-dark);margin-top:4px;line-height:1.4"><strong>Endpoint</strong><br>API-Vertrag</p></div>
        <div style="padding:10px 6px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);text-align:center"><div style="font-size:1.2rem">&#128451;&#65039;</div><p style="font-size:0.66rem;color:var(--color-text-on-dark);margin-top:4px;line-height:1.4"><strong>Persistenz</strong><br>Entity</p></div>
        <div style="padding:10px 6px;border-radius:8px;background:rgba(255,108,18,0.12);border:1px solid rgba(255,108,18,0.35);text-align:center"><div style="font-size:1.2rem">&#128640;</div><p style="font-size:0.66rem;color:var(--color-text-on-dark);margin-top:4px;line-height:1.4"><strong>Migration</strong><br>Schema!</p></div>
        <div style="padding:10px 6px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);text-align:center"><div style="font-size:1.2rem">&#129514;</div><p style="font-size:0.66rem;color:var(--color-text-on-dark);margin-top:4px;line-height:1.4"><strong>Tests</strong><br>alle Ebenen</p></div>
      </div>
      <p style="max-width:760px;margin:14px auto 0;font-size:0.88rem;color:var(--color-text-on-dark-subdued);line-height:1.6;text-align:center">
        5&ndash;8 Dateien &uuml;ber <strong style="color:var(--color-text-on-dark)">alle Schichten</strong>. Ohne Plan vergisst der Agent garantiert eine &ndash; meist die Migration oder einen Test.
      </p>
      <div style="max-width:760px;margin:14px auto 0;padding:13px 18px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text-on-dark)">Kurz: Heuristik schl&auml;gt an (viele Schichten!) &ndash; <strong style="color:var(--color-accent)">aber wie viel Plan es wirklich braucht, h&auml;ngt von eurem Setup ab.</strong> N&auml;chste Folie.</p>
      </div>
    `,
  },

  // ===== 5.4b Die Grauzone zerlegt: drei Wege für dieselbe Aufgabe =====
  {
    id: 'grey-zone-resolution',
    theme: '',
    label: 'Der Mittelweg',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Dieselbe Aufgabe, drei Wege</span>
      <h2 class="slide-title">Die Grauzone l&ouml;st sich auf, wenn ihr euren Kontext kennt</h2>
      <p class="slide-subtitle" style="font-size:0.88rem">"F&uuml;g dem Formular ein Feld hinzu" &ndash; der richtige Weg h&auml;ngt davon ab, was AGENTS.md &amp; Sub-Agents schon abdecken</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:14px">
        <div style="padding:14px 15px;border-radius:12px;background:rgba(37,204,120,0.07);border:1px solid rgba(37,204,120,0.3)">
          <p style="font-weight:700;font-size:0.88rem;color:var(--color-positive);margin-bottom:7px">&#127925; Agent-Driven reicht</p>
          <p style="font-size:0.76rem;line-height:1.6;color:var(--color-text-subdued)">
            <strong style="color:var(--color-text)">Wenn:</strong> Die AGENTS.md kennt Formular-Konventionen, Validierungs-Patterns und den Migrations-Ablauf &ndash; und Sub-Agents &uuml;bernehmen Tests &amp; Doku.<br><br>
            <strong style="color:var(--color-text)">Dann:</strong> Ein Auftrag, der Agent zieht alle Schichten durch, Tester-/Doku-Agent laufen parallel mit. Kein plan.md n&ouml;tig &ndash; Review pro Diff reicht.
          </p>
        </div>
        <div style="padding:14px 15px;border-radius:12px;background:var(--color-accent-subdued);border:2px dashed var(--color-accent)">
          <p style="font-weight:700;font-size:0.88rem;color:var(--color-text);margin-bottom:7px">&#9878;&#65039; Der Mittelweg</p>
          <p style="font-size:0.76rem;line-height:1.6;color:var(--color-text-subdued)">
            <strong style="color:var(--color-text)">Wenn:</strong> Technik ist abgedeckt, aber die <em>fachliche</em> Frage ist offen: Pflichtfeld? Welche Validierung? Bestandsdaten?<br><br>
            <strong style="color:var(--color-text)">Dann:</strong> Mini-Plan im Chat &ndash; 5 Stichpunkte, kurz lesen, freigeben, Agent los. Keine formale Spec, aber auch kein Blindflug.
          </p>
        </div>
        <div style="padding:14px 15px;border-radius:12px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light)">
          <p style="font-weight:700;font-size:0.88rem;color:var(--color-primary);margin-bottom:7px">&#128203; Spec-Driven n&ouml;tig</p>
          <p style="font-size:0.76rem;line-height:1.6;color:var(--color-text-subdued)">
            <strong style="color:var(--color-text)">Wenn:</strong> AGENTS.md ist d&uuml;nn, Legacy-Schichten h&auml;ngen dran, Anforderungen unklar, mehrere Teams betroffen.<br><br>
            <strong style="color:var(--color-text)">Dann:</strong> plan.md erstellen, selbst reviewen, frische Session, sequentiell abarbeiten &ndash; der volle Workflow.
          </p>
        </div>
      </div>
      <div style="margin-top:12px;padding:11px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
        <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.6;text-align:center">
          Die Fragen daf&uuml;r: <strong style="color:var(--color-text)">Kennt die KI alle Felder &amp; Konventionen (steht es in der AGENTS.md)?</strong> &middot; <strong style="color:var(--color-text)">Habt ihr Sub-Agents f&uuml;r Tests &amp; Doku?</strong> &middot; <strong style="color:var(--color-text)">Wie klar ist die fachliche Anforderung?</strong>
        </p>
      </div>
      <div style="margin-top:10px;padding:13px 18px;border-radius:10px;background:var(--color-accent-subdued);border:1px solid var(--color-accent);text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text);line-height:1.5">Kurz: <strong>Je besser euer statischer Kontext, desto weiter rutscht dieselbe Aufgabe nach links.</strong> Das Investment aus "Setup &amp; Kontext" zahlt hier die Dividende.</p>
      </div>
    `,
  },

  // ===== 5.6 Der Plan-als-.md-Workflow =====
  {
    id: 'plan-md-workflow',
    theme: '',
    label: 'Plan-Workflow',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">So geht's mit jedem Tool</span>
      <h2 class="slide-title">Der Plan-als-.md-Workflow</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Spec-Driven light &ndash; mit Continue, OpenCode oder jedem anderen Agenten</p>
      <div class="two-cols" style="margin-top:10px;grid-template-columns:1.4fr 1fr;align-items:start">
        <div style="display:flex;flex-direction:column;gap:7px">
          <div style="display:flex;gap:12px;align-items:flex-start;padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong style="color:var(--color-primary);font-size:1rem;min-width:20px">1</strong><p style="font-size:0.84rem;line-height:1.5"><strong>Chat-/Plan-Modus:</strong> Aufgabe beschreiben (mit den 4 Prompt-Bausteinen), Plan erstellen lassen.</p></div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong style="color:var(--color-primary);font-size:1rem;min-width:20px">2</strong><p style="font-size:0.84rem;line-height:1.5">Als <code>plan.md</code> / <code>refactoring.md</code> <strong>speichern lassen</strong>.</p></div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:9px 12px;border-radius:8px;background:var(--color-accent-subdued);border:1px solid var(--color-accent)"><strong style="color:var(--color-text);font-size:1rem;min-width:20px">3</strong><p style="font-size:0.84rem;line-height:1.5"><strong>Selbst reviewen.</strong> Hier ist der Hebel &ndash; nicht beim Code-Review hinterher.</p></div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong style="color:var(--color-primary);font-size:1rem;min-width:20px">4</strong><p style="font-size:0.84rem;line-height:1.5"><strong>Neue Session, Agent-Modus</strong>, Plan als Kontext mitgeben.</p></div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong style="color:var(--color-primary);font-size:1rem;min-width:20px">5</strong><p style="font-size:0.84rem;line-height:1.5"><strong>Sequentiell abarbeiten</strong> &ndash; pro Schritt ein <strong>lauff&auml;higer Zwischenstand</strong>, committet. Erledigte Schritte im Plan abhaken lassen.</p></div>
        </div>
        <div>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Prompt f&uuml;r Schritt 1+2</div>
            <button class="copy-btn" data-copy="Erstelle einen detaillierten Umsetzungsplan für folgende Aufgabe: [Aufgabe]. Analysiere zuerst die betroffenen Dateien und Schichten. Schreibe den Plan als nummerierte, einzeln umsetzbare Schritte in eine plan.md – inklusive betroffener Dateien pro Schritt und einem Verifikationsschritt am Ende. Noch keinen Code ändern.">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 12px;font-size:0.7rem"><pre style="margin:0"><span class="code-string">"Erstelle einen Umsetzungsplan f&uuml;r:
[Aufgabe]. Analysiere betroffene
Dateien &amp; Schichten. Schreibe den
Plan als nummerierte Schritte in
eine plan.md. Noch keinen Code
&auml;ndern."</span></pre></div>
          </div>
          <div style="margin-top:10px;padding:13px 16px;border-radius:10px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light)">
            <p style="font-size:0.85rem;color:var(--color-text);line-height:1.6">Kurz: <strong>Der Plan &uuml;berlebt alles, was die Session nicht &uuml;berlebt</strong> &ndash; Kontext voll, Modell-Timeout, Proxy-Fehler mitten im gro&szlig;en Refactoring. Neue Session, Plan laden, beim n&auml;chsten H&auml;kchen weitermachen. <strong>Der Gesamtfortschritt geht nie verloren.</strong></p>
          </div>
          <p style="margin-top:8px;font-size:0.68rem;color:var(--color-text-subdued);opacity:0.8;line-height:1.5">Auch die offizielle Empfehlung des Modellherstellers: <a href="https://www.anthropic.com/engineering/claude-code-best-practices" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">"Explore first, then plan, then code" &ndash; Anthropic Best Practices</a></p>
        </div>
      </div>
    `,
  },

  // ===== 5.7 Modus, Tool & Git folgen der Entscheidung =====
  {
    id: 'mode-tool-git',
    theme: '',
    label: 'Konsequenzen',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Aus der Entscheidung folgt alles</span>
      <h2 class="slide-title">Modus, Tool &amp; Git folgen der Entscheidung</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Erst die Aufgabe einordnen &ndash; dann ergeben sich diese drei von selbst</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:16px">
        <div style="padding:16px;border-radius:12px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light)">
          <p style="font-weight:700;font-size:0.95rem;margin-bottom:8px">&#127899;&#65039; Modus</p>
          <p style="font-size:0.8rem;line-height:1.7;color:var(--color-text-subdued)">
            <strong style="color:var(--color-text)">Edit</strong> f&uuml;r kleine, klare &Auml;nderungen<br>
            <strong style="color:var(--color-text)">Chat/Plan</strong> f&uuml;rs Denken &amp; Verstehen<br>
            <strong style="color:var(--color-text)">Agent</strong> f&uuml;rs Abarbeiten &ndash; mit Plan/Spec als Leitplanke
          </p>
        </div>
        <div style="padding:16px;border-radius:12px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light)">
          <p style="font-weight:700;font-size:0.95rem;margin-bottom:8px">&#129520; Tool</p>
          <p style="font-size:0.8rem;line-height:1.7;color:var(--color-text-subdued)">
            <strong style="color:var(--color-text)">Continue</strong> in der IDE f&uuml;r Inline &amp; Edit<br>
            <strong style="color:var(--color-text)">OpenCode</strong> f&uuml;r agentisches Arbeiten<br>
            <strong style="color:var(--color-text)">Chat</strong> f&uuml;r Konzept &amp; Recherche<br>
            <span style="font-size:0.7rem">(pragmatische Randnotiz &ndash; kein Dogma)</span>
          </p>
        </div>
        <div style="padding:16px;border-radius:12px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light)">
          <p style="font-weight:700;font-size:0.95rem;margin-bottom:8px">&#127795; Git</p>
          <p style="font-size:0.8rem;line-height:1.7;color:var(--color-text-subdued)">
            Je agentischer und gr&ouml;&szlig;er der Scope:<br>
            <strong style="color:var(--color-text)">eigener Branch</strong> &middot; <strong style="color:var(--color-text)">kleine Commits</strong> &middot; <strong style="color:var(--color-text)">sauberer Stand vorher</strong><br>
            Murks? &rarr; <code>git checkout .</code> statt aufr&auml;umen
          </p>
        </div>
      </div>
      <div style="margin-top:16px;padding:13px 18px;border-radius:10px;background:var(--color-accent-subdued);border:1px solid var(--color-accent);max-width:720px;margin-left:auto;margin-right:auto">
        <p style="font-size:0.9rem;color:var(--color-text);text-align:center;line-height:1.5">Kurz: <strong>Je m&auml;chtiger der Modus, desto wichtiger das Sicherheitsnetz.</strong> Git-Disziplin macht mutiges Experimentieren risikofrei.</p>
      </div>
    `,
  },

  // ===== 5.8 Welches Modell für welchen Task? (♻️ aus 08-deepdive, Modelle aktualisiert) =====
  {
    id: 'model-per-task',
    theme: 'slide--dark',
    label: 'Modellwahl',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Das richtige Werkzeug</span>
      <h2 class="slide-title" style="font-size:1.3rem">Welches Modell f&uuml;r welchen Task?</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Nicht jede Aufgabe braucht das st&auml;rkste Modell &ndash; Zuweisung pro Agent, passend zum Job</p>
      <div style="margin-top:12px;overflow-x:auto">
        <table class="comparison" style="font-size:0.72rem;width:100%">
          <thead><tr><th>Task</th><th>Empfehlung</th><th>Warum</th></tr></thead>
          <tbody>
            <tr><td><strong>Komplexes Coding, gro&szlig;e Refactorings</strong></td><td style="color:var(--color-accent);white-space:nowrap">Claude Opus 4.8</td><td>Bestes Reasoning, lange Kontexte, h&auml;lt mehrstufige Aufgaben durch</td></tr>
            <tr><td><strong>Standard Coding</strong></td><td style="color:var(--color-accent);white-space:nowrap">Claude Sonnet 4.6</td><td>Der Allrounder &ndash; stark genug f&uuml;r fast alles im Alltag</td></tr>
            <tr><td><strong>Code Review</strong></td><td style="white-space:nowrap">Claude Sonnet 4.6</td><td>Read-Only, braucht kein Max-Reasoning</td></tr>
            <tr><td><strong>Doku / Explore / Plan</strong></td><td style="white-space:nowrap">Claude Haiku 4.5</td><td>Schnell und fokussiert &ndash; die Qualit&auml;t reicht hier v&ouml;llig</td></tr>
            <tr><td><strong>Titel / Summaries</strong></td><td style="white-space:nowrap">Haiku / Mini-Modelle</td><td>Triviale Tasks &ndash; Antwortzeit schl&auml;gt Tiefe</td></tr>
          </tbody>
        </table>
      </div>
      <div class="two-cols" style="margin-top:10px">
        <div>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; Modelle pro Agent</div>
            <button class="copy-btn" data-copy='{
  "agent": {
    "build":   { "model": "anthropic/claude-sonnet-4-6" },
    "plan":    { "model": "anthropic/claude-haiku-4-5" },
    "explore": { "model": "anthropic/claude-haiku-4-5" },
    "docs":    { "model": "anthropic/claude-haiku-4-5" }
  }
}'>&#128203; Copy</button>
            <div class="code-body" style="padding:6px 10px;font-size:0.62rem"><pre style="margin:0">{
  <span class="code-property">"agent"</span>: {
    <span class="code-property">"build"</span>:   { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-sonnet-4-6"</span> },
    <span class="code-property">"plan"</span>:    { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> },
    <span class="code-property">"explore"</span>: { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> },
    <span class="code-property">"docs"</span>:    { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> }
  }
}</pre></div>
          </div>
          <p style="margin-top:6px;font-size:0.65rem;color:var(--color-text-on-dark-subdued)">Aktueller Modellvergleich live: <a href="https://artificialanalysis.ai" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">artificialanalysis.ai</a></p>
        </div>
        <div>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.78rem;color:rgba(255,255,255,0.75);line-height:1.5">
            <strong style="color:var(--color-accent)">Praxis-Tipp:</strong> Haiku f&uuml;r Explore + Plan + Doku ist schneller und h&auml;lt den Fokus &ndash; Opus/Sonnet dort einsetzen, wo Reasoning wirklich z&auml;hlt.
          </div>
          <div style="margin-top:8px;padding:12px 14px;border-radius:8px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.25);font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.6">
            Kurz &ndash; und damit schlie&szlig;t sich der Kreis zum Experiment: <strong style="color:#4ade80">Mit gutem Kontext liefert auch das kleine Modell. Das Modell war nie der Engpass.</strong>
          </div>
        </div>
      </div>
    `,
  },
];
