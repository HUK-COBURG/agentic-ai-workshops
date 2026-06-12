// 06 – Community & Wissensaustausch
export const communitySlides = [
  // ===== 6.1 CoP & Prompt-Library (🔧 adaptiert, Prompt-Ideen ♻️ aus 07-handson) =====
  {
    id: 'cop-prompt-library',
    theme: 'slide--dark',
    label: 'Community',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Community &amp; Wissensaustausch</span>
      <h2 class="slide-title">Alles hier skaliert nur, wenn wir es teilen</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">AGENTS.md als Team-Artefakt, Prompts als gemeinsame Library &ndash; gepflegt in der CoP</p>
      <div class="two-cols" style="margin-top:14px;grid-template-columns:1fr 1.3fr">
        <div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:11px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">
              &#128218; <strong style="color:var(--color-accent)">AGENTS.md als Team-Artefakt</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Im Repo versioniert, von allen gepflegt (&rarr; Setup-Kapitel). Ein gutes File hilft dem ganzen Team &ndash; jeden Tag.</span>
            </div>
            <div style="padding:11px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">
              &#128221; <strong>Erfolgreiche Prompts dokumentieren</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Was gut funktioniert hat &rarr; Library. Was Murks produzierte &rarr; auch! Gescheiterte Experimente teilen z&auml;hlt genauso.</span>
            </div>
            <div style="padding:11px 14px;border-radius:8px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.25);font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5">
              &#128640; <strong style="color:#4ade80">Ausblick: Prompt-Library in den Model-Prism Developer Tools</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Als Feature angedacht, um genau das besser zu teilen &ndash; <strong style="color:var(--color-text-on-dark)">ein Ort f&uuml;r alles</strong>: Prompts, Patterns, AGENTS.md-Vorlagen. Bis dahin: bestehende Tools nutzen (Wiki/Repo).</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">Starter f&uuml;r die Library &ndash; kopiert &amp; passt an</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Veraltete Doku finden</div>
              <button class="copy-btn copy-btn--icon" title="Prompt kopieren" data-copy="Vergleiche die README.md und die Code-Kommentare mit dem aktuellen Code. Liste alles auf was veraltet oder falsch ist und korrigiere es.">&#128203;</button>
              <div class="code-body" style="padding:8px 12px;font-size:0.68rem"><pre style="margin:0"><span class="code-string">"Vergleiche README und Kommentare
mit dem Code. Was ist veraltet?
Korrigiere es."</span></pre></div>
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Review vorbereiten</div>
              <button class="copy-btn copy-btn--icon" title="Prompt kopieren" data-copy="Reviewe den Diff dieses Branches gegen main wie ein strenger Senior-Entwickler. Prüfe auf Logikfehler, fehlende Tests, Verstöße gegen unsere AGENTS.md und Sicherheitsprobleme. Sortiere Findings nach Schwere.">&#128203;</button>
              <div class="code-body" style="padding:8px 12px;font-size:0.68rem"><pre style="margin:0"><span class="code-string">"Reviewe den Diff gegen main.
Logikfehler, fehlende Tests,
AGENTS.md-Verst&ouml;&szlig;e, Security."</span></pre></div>
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Migration planen</div>
              <button class="copy-btn copy-btn--icon" title="Prompt kopieren" data-copy="Analysiere das Projekt und erstelle einen Plan um von Java 11 auf Java 21 zu migrieren. Liste Breaking Changes, deprecated APIs und nötige Änderungen auf.">&#128203;</button>
              <div class="code-body" style="padding:8px 12px;font-size:0.68rem"><pre style="margin:0"><span class="code-string">"Plan f&uuml;r Migration Java 11 &rarr; 21.
Breaking Changes, deprecated APIs,
n&ouml;tige &Auml;nderungen."</span></pre></div>
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Error Handling verbessern</div>
              <button class="copy-btn copy-btn--icon" title="Prompt kopieren" data-copy="Prüfe das gesamte Error Handling. Finde leere catch-Blöcke, fehlende Fehlerbehandlung und unspezifische Exceptions. Verbessere es.">&#128203;</button>
              <div class="code-body" style="padding:8px 12px;font-size:0.68rem"><pre style="margin:0"><span class="code-string">"Pr&uuml;fe Error Handling. Leere
catch-Bl&ouml;cke, unspezifische
Exceptions. Fixen."</span></pre></div>
            </div>
          </div>
          <div style="margin-top:10px;padding:11px 14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark);line-height:1.5;text-align:center">Kurz: Wenn jemand etwas mit AI l&ouml;st, soll das <strong style="color:var(--color-accent)">n&auml;chste Teammitglied es in 5 Minuten reproduzieren</strong> k&ouml;nnen.</p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 6.2 Ausblick: Skills & Commands (♻️ aus 08-deepdive, komprimiert) =====
  {
    id: 'outlook-skills',
    theme: '',
    label: 'Ausblick',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Ausblick &ndash; der n&auml;chste Reifegrad</span>
      <h2 class="slide-title">Von Prompts zu Skills &amp; Commands</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Bew&auml;hrte Prompts nicht nur sammeln &ndash; sondern als wiederverwendbare Bausteine institutionalisieren</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <div class="code-block" style="margin-top:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/skills/git-release/SKILL.md</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.68rem;line-height:1.55"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-property">name</span>: git-release
<span class="code-property">description</span>: Erstellt konsistente Releases
<span class="code-comment">---</span>

<span class="code-comment">## Was ich tue</span>
- Release Notes aus PRs generieren
- Version Bump vorschlagen
- gh release create Befehl ausgeben

<span class="code-comment">## Wann mich nutzen</span>
Beim Vorbereiten eines Tagged Release.</pre></div>
          </div>
          <p style="font-size:0.75rem;color:var(--color-text-subdued);margin-top:8px;line-height:1.5">SKILL.md-Dateien l&auml;dt der Agent on-demand &ndash; wie Plugins f&uuml;rs Projekt. Dazu Custom Commands f&uuml;r wiederkehrende Abl&auml;ufe: Code Review auf Knopfdruck, Migrationen nach Team-Standard.</p>
        </div>
        <div>
          <ul class="feature-list" style="margin-top:0;font-size:0.85rem">
            <li><span class="check">1</span><span><strong>Prompt-Library</strong> &ndash; Prompts sammeln &amp; teilen (heute starten)</span></li>
            <li><span class="check">2</span><span><strong>Skills &amp; Commands</strong> &ndash; die besten davon als SKILL.md / Commands ins Repo</span></li>
            <li><span class="check">3</span><span><strong>Team-Standard</strong> &ndash; "Code Review nach unserem Standard" ist ein Befehl, kein Copy-Paste</span></li>
          </ul>
          <div style="margin-top:12px;padding:13px 16px;border-radius:10px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light)">
            <p style="font-size:0.85rem;color:var(--color-text);line-height:1.6">Kurz: <strong>Heute Prompt, morgen Skill, &uuml;bermorgen Team-Standard.</strong> Bewusst ein Teaser &ndash; Deep Dive in einer eigenen CoP-Session.</p>
          </div>
          <p style="margin-top:10px;font-size:0.72rem;color:var(--color-text-subdued);line-height:1.6">
            &#127909; <strong>Weiterschauen:</strong> <a href="https://www.youtube.com/watch?v=YNavwk7qk24" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Philipp Kl&ouml;ckner &ndash; "Beyond the AI hype" (OMR 2026)</a> f&uuml;r die Makro-Ebene &middot; <a href="https://www.anthropic.com/engineering/claude-code-best-practices" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Anthropic: Best Practices for Agentic Coding</a> &middot; <a href="https://opencode.ai/docs/de/skills/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">OpenCode Skills-Doku</a>
          </p>
        </div>
      </div>
    `,
  },
];
