// 03 – Do's: Regeln, die immer gelten (grün akzentuiert via --color-positive)
export const dosSlides = [
  // ===== 3.1 Divider =====
  {
    id: 'section-dos',
    theme: 'slide--primary slide--divider',
    label: "Do's",
    content: `
      <div class="divider-number">&#9989;</div>
      <h2 class="slide-title">Do's</h2>
      <p class="slide-subtitle">Regeln, die immer gelten &ndash; egal wie gro&szlig; die Aufgabe ist.</p>
    `,
  },

  // ===== 3.2 Anatomie eines guten Prompts =====
  {
    id: 'good-prompts',
    theme: 'slide--dark',
    label: 'Prompts',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Do #1</span>
      <h2 class="slide-title">Anatomie eines guten Prompts</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Vier Bausteine &ndash; mehr braucht es nicht</p>
      <div class="two-cols" style="margin-top:14px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div style="padding:12px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.25)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">&#129513; <strong style="color:#4ade80">Kontext</strong><br><span style="color:var(--color-text-on-dark-subdued);font-size:0.75rem">Stack, betroffene Datei, aktueller Stand</span></p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.25)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">&#127919; <strong style="color:#4ade80">Ziel</strong><br><span style="color:var(--color-text-on-dark-subdued);font-size:0.75rem">Was genau &ndash; und woran erkennbar ist, dass es fertig ist</span></p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.25)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">&#128679; <strong style="color:#4ade80">Constraints</strong><br><span style="color:var(--color-text-on-dark-subdued);font-size:0.75rem">Was nicht angefasst werden darf, Konventionen</span></p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.25)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">&#128196; <strong style="color:#4ade80">Format</strong><br><span style="color:var(--color-text-on-dark-subdued);font-size:0.75rem">Diff, ganze Datei, Plan oder Erkl&auml;rung?</span></p>
          </div>
        </div>
        <div>
          <div style="padding:10px 14px;border-radius:10px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.25);margin-bottom:8px">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.5"><strong style="color:#ff6b6b">&#10060; Vage:</strong> "Optimier die Performance der Liste"</p>
          </div>
          <div style="padding:10px 14px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.3)">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.6"><strong style="color:#4ade80">&#9989; Strukturiert:</strong> "Die Tabelle in <code>OrderOverview.tsx</code> ruckelt ab ~1000 Eintr&auml;gen <em>(Kontext)</em>. Sorge f&uuml;r fl&uuml;ssiges Scrollen <em>(Ziel)</em>. Keine API-&Auml;nderungen, bestehende Komponenten-Library nutzen <em>(Constraints)</em>. Erst Plan, dann Diff <em>(Format)</em>."</p>
          </div>
        </div>
      </div>
      <div style="margin-top:14px;padding:13px 18px;border-radius:10px;background:rgba(37,204,120,0.1);border:1px solid rgba(37,204,120,0.3);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text-on-dark)">Kurz: <strong style="color:#4ade80">Kontext &rarr; Ziel &rarr; Constraints &rarr; Format.</strong> Genau das war der Unterschied im Experiment am Anfang.</p>
      </div>
    `,
  },

  // ===== 3.3 Iterativ arbeiten =====
  {
    id: 'iterate',
    theme: '',
    label: 'Iterativ',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Do #2</span>
      <h2 class="slide-title">Iterativ arbeiten &ndash; kleine Schritte gewinnen</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Nicht <em>"bau mir das ganze Feature"</em> &ndash; sondern in pr&uuml;fbaren Etappen</p>
      <div class="two-cols" style="margin-top:14px;align-items:start">
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;gap:12px;align-items:flex-start;padding:11px 14px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25)"><strong style="color:var(--color-positive);font-size:1.05rem;min-width:22px">1</strong><p style="font-size:0.88rem;line-height:1.5"><strong>Plan/Skizze erstellen lassen</strong> &ndash; noch keinen Code</p></div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:11px 14px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25)"><strong style="color:var(--color-positive);font-size:1.05rem;min-width:22px">2</strong><p style="font-size:0.88rem;line-height:1.5"><strong>Plan pr&uuml;fen &amp; korrigieren</strong> &ndash; der billigste Moment, falsch Abgebogenes zu stoppen</p></div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:11px 14px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25)"><strong style="color:var(--color-positive);font-size:1.05rem;min-width:22px">3</strong><p style="font-size:0.88rem;line-height:1.5"><strong>Schritt f&uuml;r Schritt umsetzen lassen</strong> &ndash; ein Schritt, ein Auftrag</p></div>
          <div style="display:flex;gap:12px;align-items:flex-start;padding:11px 14px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25)"><strong style="color:var(--color-positive);font-size:1.05rem;min-width:22px">4</strong><p style="font-size:0.88rem;line-height:1.5"><strong>Nach jedem Schritt: pr&uuml;fen &amp; committen</strong> &ndash; lauff&auml;hige Zwischenst&auml;nde</p></div>
        </div>
        <div>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(255,108,18,0.07);border:1px solid rgba(255,108,18,0.3)">
            <p style="font-weight:700;font-size:0.92rem;margin-bottom:8px;color:#e8590c">&#128207; Auftr&auml;ge richtig dimensionieren</p>
            <p style="font-size:0.84rem;line-height:1.65;color:var(--color-text-subdued)">
              Nie so gro&szlig;, dass ihr <strong style="color:var(--color-text)">Tage verliert</strong>, wenn die KI falsch abbiegt &ndash; oder die Umsetzung technisch scheitert.<br><br>
              Klassiker aus der Praxis: Die KI baut alles auf Dependency&nbsp;A auf &ndash; aber Dependency&nbsp;A ist bei euch <strong style="color:var(--color-text)">wegen eines CVE gesperrt</strong>. Nach Schritt 1 merkt ihr das sofort. Nach "bau das ganze Feature" erst am Ende.
            </p>
          </div>
        </div>
      </div>
      <div style="margin-top:14px;padding:13px 18px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.3);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text)">Kurz: <strong style="color:var(--color-positive)">Kleine Schritte = kleine Fehler = schnelles Zur&uuml;ckrollen.</strong></p>
      </div>
    `,
  },

  // ===== 3.3b Human in the Lead =====
  {
    id: 'human-in-the-lead',
    theme: 'slide--dark',
    label: 'Human in the Lead',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Do #3</span>
      <h2 class="slide-title">Nicht "Human in the Loop" &ndash; <span style="color:var(--color-accent)">Human in the Lead</span></h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Am Ende haftet nicht die KI. Ihr haftet. Ihr tragt die Verantwortung.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
            <div style="padding:11px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.84rem;line-height:1.55;color:var(--color-text-on-dark-subdued)"><strong style="color:var(--color-text-on-dark)">Human in the Loop</strong> hei&szlig;t: Die KI macht, der Mensch nickt ab. Bei generiertem Code reicht das nicht.</p>
            </div>
            <div style="padding:11px 14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25)">
              <p style="font-size:0.84rem;line-height:1.55;color:var(--color-text-on-dark)"><strong style="color:var(--color-accent)">Human in the Lead</strong> hei&szlig;t: Ihr f&uuml;hrt, die KI arbeitet zu. KI-generierter Code muss zu <strong>100&nbsp;% verstanden und wartbar</strong> sein &ndash; sonst wird er nicht gemerged.</p>
            </div>
          </div>
          <ul class="feature-list" style="margin-top:0;font-size:0.84rem">
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span>Jede generierte Zeile lesen wie den <strong>PR eines neuen Kollegen</strong>: f&auml;hig, aber kennt euer Projekt nicht</span></li>
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span>Tests schreiben (lassen) &ndash; und <strong>selbst verifizieren</strong>, dass sie das Richtige testen. Gr&uuml;ne Tests &ne; korrektes Verhalten</span></li>
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span>Code, den ihr nicht erkl&auml;ren k&ouml;nnt, ist eine Schuld, die beim n&auml;chsten Incident f&auml;llig wird</span></li>
          </ul>
        </div>
        <div>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.35)">
            <p style="font-weight:700;font-size:0.9rem;color:#ff6b6b;margin-bottom:8px">&#9878;&#65039; Das ist keine Theorie &ndash; OLG Hamm, Az. 4 UKl 3/25</p>
            <p style="font-size:0.8rem;line-height:1.65;color:var(--color-text-on-dark-subdued)">
              Eine Praxis lie&szlig; einen KI-Chatbot auf ihrer Website antworten &ndash; der erfand Facharztbezeichnungen. Das Gericht stellte klar:
            </p>
            <ul style="font-size:0.8rem;line-height:1.7;color:var(--color-text-on-dark-subdued);padding-left:16px;margin-top:6px">
              <li>Die KI ist <strong style="color:var(--color-text-on-dark)">kein "Dritter"</strong> &ndash; ihre Aussagen werden dem Betreiber zugerechnet</li>
              <li><strong style="color:var(--color-text-on-dark)">"Die KI war's"</strong> z&auml;hlt nicht &ndash; die Verantwortung bleibt beim Verwender, auch bei automatisiert erstellten Inhalten</li>
            </ul>
            <p style="font-size:0.66rem;color:var(--color-text-on-dark-subdued);opacity:0.7;margin-top:8px">
              Noch nicht rechtskr&auml;ftig, Revision zum BGH zugelassen &ndash; die Richtung ist trotzdem klar. <a href="https://www.gelbe-liste.de/politik-verbaende/glo-news-046-2026-aerzte-ki-chatbots-haftung" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Bericht: Gelbe Liste / OLG Hamm</a>
            </p>
          </div>
          <p style="margin-top:8px;font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.55">
            Was f&uuml;r Chatbot-Aussagen gilt, gilt erst recht f&uuml;r euren Code in Produktion: <strong style="color:var(--color-text-on-dark)">Die Verantwortung wandert nicht zur KI.</strong>
          </p>
        </div>
      </div>
      <div style="margin-top:12px;padding:13px 18px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text-on-dark)">Kurz: <strong style="color:var(--color-accent)">Ihr seid der Experte, der Agent ist euer Werkzeug</strong> &ndash; und gemerged wird nur, was ihr versteht.</p>
      </div>
      <p style="margin-top:8px;font-size:0.68rem;color:var(--color-text-on-dark-subdued);opacity:0.75;text-align:center">
        Ausnahme: dedizierte Projekte, die explizit mit KI verprobt und erstellt werden sollen &ndash; z.&nbsp;B. POCs, MVPs &amp; Co. Aber auch dann gilt: <strong>nehmt Sprachen, die ihr versteht.</strong>
      </p>
    `,
  },

  // ===== 3.4 Artefakte statt nur Code =====
  {
    id: 'md-artifacts',
    theme: '',
    label: 'Artefakte & .mds',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Do #4</span>
      <h2 class="slide-title">Erstellt nicht nur Code &ndash; erstellt Artefakte</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Specs, Pl&auml;ne und Doku als .md-Dateien generieren lassen &ndash; und <strong>committen</strong></p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:8px">Das Artefakt-Set</h3>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:0.82rem">
            <div style="padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);line-height:1.5"><code>AGENTS.md</code> &ndash; <span style="color:var(--color-text-subdued)">Regeln &amp; Konventionen (Setup-Kapitel)</span></div>
            <div style="padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);line-height:1.5"><code>refactoring.md</code> / <code>feature.md</code> &ndash; <span style="color:var(--color-text-subdued)">der Plan f&uuml;r gro&szlig;e Vorhaben, vor der Umsetzung</span></div>
            <div style="padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);line-height:1.5"><code>docs.md</code> / ADRs &ndash; <span style="color:var(--color-text-subdued)">Architektur-Entscheidungen &amp; das Warum dahinter</span></div>
            <div style="padding:9px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);line-height:1.5"><code>CHANGELOG.md</code> &ndash; <span style="color:var(--color-text-subdued)">aus Commits generieren lassen, pro Release pflegen</span></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-positive);font-size:0.95rem;margin-bottom:8px">Warum committen?</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.84rem">
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:var(--color-positive)">&#10003;</span><span><strong>Einheitlicher Stil im Team</strong> &ndash; wer mit denselben .mds generiert, bekommt sehr &auml;hnliche Ergebnisse. Konsistenz per Datei statt per Zufall.</span></li>
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:var(--color-positive)">&#10003;</span><span><strong>Nachhaltigkeit</strong> &ndash; Doku, Entscheidungen und Changes entstehen <em>mit</em> dem Code, nicht Monate sp&auml;ter (nie).</span></li>
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:var(--color-positive)">&#10003;</span><span><strong>Nachvollziehbarkeit</strong> &ndash; bei gro&szlig;en Features liegt der Plan neben dem Code im Repo: Review, Onboarding und "warum ist das so?" werden trivial.</span></li>
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:var(--color-positive)">&#10003;</span><span><strong>Wiederanlauf</strong> &ndash; der niedergeschriebene Plan ist euer Fortschritts-Anker (gleich mehr dazu im Workflow-Kapitel).</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:14px;padding:13px 18px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.3);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text)">Kurz: <strong style="color:var(--color-positive)">Code ist nur die H&auml;lfte des Outputs.</strong> Specs, Doku und Entscheidungen geh&ouml;ren mit ins Repo.</p>
      </div>
    `,
  },

  // ===== 3.5 Session-Hygiene =====
  {
    id: 'session-hygiene',
    theme: 'slide--dark',
    label: 'Sessions',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Do #5</span>
      <h2 class="slide-title">Session-Hygiene</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Frischer Kontext schl&auml;gt langen Kontext &ndash; ihr wisst jetzt, warum</p>
      <ul class="feature-list" style="max-width:760px;margin:18px auto 0;font-size:0.92rem">
        <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span><strong>Neues Thema &rarr; neue Session.</strong> Eine Session = eine Aufgabe. Alter Kontext "verschmutzt" neue Aufgaben mit irrelevanten Annahmen.</span></li>
        <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span><strong>Kontext bewusst steuern.</strong> Gezielt die richtigen Files und Snippets mitgeben &ndash; nicht "alles rein". Weniger, aber relevanter Kontext gewinnt.</span></li>
        <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span><strong>Bei Verdacht auf Kontextverlust: neu starten.</strong> Das Modell "vergisst" Konventionen oder widerspricht sich? Nicht weiterk&auml;mpfen &ndash; Zusammenfassung erzeugen lassen, frische Session.</span></li>
      </ul>
      <div style="max-width:760px;margin:18px auto 0;padding:13px 18px;border-radius:10px;background:rgba(37,204,120,0.1);border:1px solid rgba(37,204,120,0.3);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text-on-dark)">Kurz: <strong style="color:#4ade80">"Ihr seht nicht, was fehlt"</strong> (Kontext-Mechanik) &ndash; deshalb lieber einmal zu oft neu starten.</p>
      </div>
      <p style="margin-top:10px;font-size:0.8rem;color:var(--color-text-on-dark-subdued);text-align:center">
        Und was bei <strong>gro&szlig;en</strong> Aufgaben, die nicht in eine Session passen? &rarr; <span style="color:var(--color-accent)">Kapitel Workflow</span>
      </p>
    `,
  },
];
