// 04 – Don'ts: Fallstricke (rot akzentuiert via --color-critical)
export const dontsSlides = [
  // ===== 4.1 Divider =====
  {
    id: 'section-donts',
    theme: 'slide--primary slide--divider',
    label: "Don'ts",
    content: `
      <div class="divider-number">&#9940;</div>
      <h2 class="slide-title">Don'ts</h2>
      <p class="slide-subtitle">Die Fallstricke, in die wir alle schon getappt sind.</p>
    `,
  },

  // ===== 4.2 Vage Prompts =====
  {
    id: 'vague-prompts',
    theme: 'slide--dark',
    label: 'Vage Prompts',
    content: `
      <span class="slide-label" style="color:#ff6b6b">Don't #1</span>
      <h2 class="slide-title">"Mach weiter" / "Pass das an"</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Das h&auml;ufigste Muster, das man in der Praxis beobachtet &ndash; und was das Modell daraus macht</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:#ff6b6b;font-size:0.95rem;margin-bottom:8px">Nachgebauter Beispiel-Dialog</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>So geht es schief</div>
            <div class="code-body" style="font-size:0.74rem;line-height:1.6"><pre><span class="code-keyword">Du:</span>  <span class="code-string">"Pass das an"</span>
<span class="code-comment">KI:  Anpassen woran? Sie r&auml;t: refactort
     die Methode, die sie zuletzt sah.</span>
<span class="code-keyword">Du:</span>  <span class="code-string">"Nein, das Formular!"</span>
<span class="code-comment">KI:  Welches Feld? Welche Regel? Sie r&auml;t
     wieder &ndash; selbstbewusst und falsch.</span>
<span class="code-keyword">Du:</span>  <span class="code-string">"Mach weiter"</span>
<span class="code-comment">KI:  ...baut in die falsche Richtung
     weiter. 4 Runden sp&auml;ter: Murks +
     voller Kontext + 0 Fortschritt.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:#ff6b6b;font-size:0.95rem;margin-bottom:8px">Die verwandten S&uuml;nden</h3>
          <div style="display:flex;flex-direction:column;gap:7px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.3);font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">
              <strong style="color:#ff6b6b">Blindes &Uuml;bernehmen</strong> &ndash; generierter Code sieht <em>immer</em> plausibel aus. Ungelesen im PR hei&szlig;t: niemand versteht diese Stelle.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.3);font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">
              <strong style="color:#ff6b6b">Halluzinationen glauben</strong> &ndash; erfundene Libraries, APIs, Config-Optionen. Bei Dependencies: kurz in der offiziellen Doku gegenpr&uuml;fen.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.3);font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">
              <strong style="color:#ff6b6b">AI als Ersatz f&uuml;rs Verstehen</strong> &ndash; wer Code merged, den er nicht erkl&auml;ren kann, zahlt beim n&auml;chsten Incident.
            </div>
          </div>
        </div>
      </div>
      <p style="margin-top:12px;font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.75;text-align:center">
        Branchenweit messbar: Copy/Paste-Anteil im Code stieg von 8,3&nbsp;% (2021) auf 12,3&nbsp;% (2024), Refactoring brach ein, Duplikate ~8&times; h&auml;ufiger. <a href="https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">GitClear AI Code Quality Research</a>
      </p>
    `,
  },

  // ===== 4.3 Faulheit kostet Geld (Don't #2) =====
  {
    id: 'lazy-stop',
    theme: '',
    label: 'Faulheit',
    content: `
      <span class="slide-label" style="color:var(--color-critical)">Don't #2</span>
      <h2 class="slide-title">Faulheit kostet Geld</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Der Agent hat gerade ein Feature gebaut &ndash; und ehe man sich versieht, tippt man:</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px">
        <span style="padding:9px 16px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;font-style:italic">"starte mal den Dev-Server"</span>
        <span style="padding:9px 16px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;font-style:italic">"committe das"</span>
        <span style="padding:9px 16px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;font-style:italic">"pushe es"</span>
      </div>
      <div class="two-cols" style="margin-top:18px;max-width:820px;margin-left:auto;margin-right:auto">
        <div style="padding:14px 16px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.25)">
          <p style="font-weight:700;font-size:0.9rem;color:var(--color-critical);margin-bottom:6px">&#129302; Als Prompt an den Agenten</p>
          <p style="font-size:0.84rem;line-height:1.6;color:var(--color-text-subdued)">Kostet <strong style="color:var(--color-text)">Tokens, Zeit und Kontext</strong>: Das Modell liest erst die ganze Session, "denkt" &uuml;ber euren Befehl nach &ndash; und f&uuml;hrt ihn dann aus. F&uuml;r ein <code>git push</code>.</p>
        </div>
        <div style="padding:14px 16px;border-radius:10px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25)">
          <p style="font-weight:700;font-size:0.9rem;color:var(--color-positive);margin-bottom:6px">&#9000;&#65039; Selbst ins Terminal getippt</p>
          <p style="font-size:0.84rem;line-height:1.6;color:var(--color-text-subdued)"><code>npm run dev</code> &middot; <code>git push</code> &ndash; <strong style="color:var(--color-text)">kostenlos, sofort, deterministisch.</strong> Und euer Agenten-Kontext bleibt sauber f&uuml;r die echte Arbeit.</p>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px 18px;border-radius:12px;background:rgba(255,108,18,0.08);border:2px solid rgba(255,108,18,0.3);max-width:820px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:1.15rem;color:#e8590c;font-weight:700">Man wird erstaunlich schnell faul.</p>
        <p style="font-size:0.88rem;color:var(--color-text-subdued);margin-top:6px">
          Faustregel: <strong style="color:var(--color-text)">Befehle, die ihr auswendig k&ouml;nnt, geh&ouml;ren ins Terminal</strong> &ndash; nicht in den Agenten. Der denkt sonst auch noch dr&uuml;ber nach.
        </p>
      </div>
    `,
  },

  // ===== 4.4 Secrets & Sicherheit (♻️ aus 07-handson) =====
  {
    id: 'secrets-security',
    theme: 'slide--dark',
    label: 'Sicherheit',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Don't #3 &ndash; der teuerste</span>
      <h2 class="slide-title" style="font-size:1.4rem">&#9888; Secrets, Tokens &amp; Sicherheit</h2>
      <p class="slide-subtitle" style="font-size:0.88rem">Der Agent hat dieselben Rechte wie dein Token &ndash; und dein Prompt verl&auml;sst das Haus</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">Frag dich bei jedem Tool</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128269; Was kann das Tool alles?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">Liest es nur &ndash; oder kann es auch schreiben, l&ouml;schen, ver&auml;ndern?</span>
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128272; Was kann mit meinen Berechtigungen passieren?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">Der Agent hat <strong>dieselben Rechte wie dein Token</strong>. Admin-Token = Agent ist Admin.</span>
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128165; Was ist der Worst Case?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">Akzeptabel &rarr; go. Nicht akzeptabel &rarr; Token einschr&auml;nken oder Sandbox.</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">Die 4 Regeln</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.85rem">
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#ff6b6b">&#10007;</span><span><strong>Keine Secrets/Kundendaten in Prompts</strong> &ndash; auch nicht "kurz zum Debuggen". Vorher anonymisieren.</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#ff6b6b">&#10007;</span><span><strong>Keine globalen Tokens</strong> &ndash; projektspezifische Env-Vars, Read-Only wo m&ouml;glich, nie Prod-Zugriff.</span></li>
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span><strong><code>.env</code> &amp; Co. vom Tool-Kontext ausschlie&szlig;en</strong> &ndash; Indexierung und File-Zugriff begrenzen.</span></li>
            <li><span class="check" style="background:rgba(37,204,120,0.15);color:#4ade80">&#10003;</span><span><strong>Sandbox ist bei uns Pflicht</strong> &ndash; Agenten laufen grunds&auml;tzlich in der Sandbox (Docker/isoliertes Verzeichnis), nur der Projekt-Ordner wird gemountet.</span></li>
          </ul>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(37,204,120,0.08);border:2px solid rgba(37,204,120,0.25);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
            <strong style="color:var(--color-positive)">Faustregel:</strong> Der Agent ist ein neuer Praktikant &ndash; mit <strong>deinen Zugangsdaten</strong>. W&uuml;rdest du ihm Admin-Zugang zu Produktion geben?
          </div>
        </div>
      </div>
    `,
  },
  // ===== 4.5 Endlos-Sessions (Don't #4) =====
  {
    id: 'endless-sessions',
    theme: '',
    label: 'Endlos-Sessions',
    content: `
      <span class="slide-label" style="color:var(--color-critical)">Don't #4</span>
      <h2 class="slide-title">Endlos-Sessions mit &uuml;berladenem Kontext</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Die Session, die seit Stunden l&auml;uft, wird nicht besser &ndash; sie wird teurer und d&uuml;mmer</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-critical);font-size:0.95rem;margin-bottom:8px">Die Symptome</h3>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:0.82rem">
            <div style="padding:9px 13px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.2);line-height:1.5">&#128260; Die KI <strong>wiederholt sich</strong> oder dreht sich im Kreis</div>
            <div style="padding:9px 13px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.2);line-height:1.5">&#129335; Sie <strong>"vergisst" Konventionen</strong>, die vorhin noch galten, und widerspricht sich</div>
            <div style="padding:9px 13px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.2);line-height:1.5">&#128201; Die Qualit&auml;t sinkt sp&uuml;rbar &ndash; <strong>lange bevor</strong> das Kontextfenster voll ist</div>
          </div>
          <p style="margin-top:10px;font-size:0.8rem;color:var(--color-text-subdued);line-height:1.55">
            Warum das passiert, kennt ihr aus der Kontext-Mechanik: Komprimierung verliert Nuancen &ndash; und <strong style="color:var(--color-text)">ihr seht nicht, was fehlt</strong>. Weiterk&auml;mpfen verbrennt nur Zeit.
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-positive);font-size:0.95rem;margin-bottom:8px">Der Ausweg &ndash; frischer Kontext statt mehr Kontext</h3>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:0.82rem">
            <div style="padding:9px 13px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25);line-height:1.5">&#9989; <strong>Neu starten:</strong> Zusammenfassung erzeugen lassen, frische Session (&rarr; Session-Hygiene)</div>
            <div style="padding:9px 13px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25);line-height:1.5">&#128064; <strong>Frische Augen holen:</strong> Review-Agents (z.&nbsp;B. GitLab Review Agents &amp; Co. in den AI-Tools) schauen mit sauberem Kontext auf euren Stand &ndash; statt dass die m&uuml;de Session sich selbst reviewt</div>
            <div style="padding:9px 13px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.25);line-height:1.5">&#128218; <strong>Inspiration aus bestehenden Repos:</strong> wie haben andere Projekte das Problem gel&ouml;st? Referenz zeigen statt in einer Session alles neu erfinden</div>
          </div>
        </div>
      </div>
      <div style="margin-top:14px;padding:13px 18px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.25);text-align:center">
        <p style="font-size:0.92rem;color:var(--color-text)">Kurz: <strong style="color:var(--color-critical)">Eine m&uuml;de Session rettet man nicht &ndash; man ersetzt sie.</strong></p>
      </div>
    `,
  },
];
