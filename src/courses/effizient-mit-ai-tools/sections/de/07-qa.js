// 07 – Q&A / Diskussion + Quellen
export const qaSlides = [
  // ===== 7.1 Diskussionsrunde (🔧 adaptiert aus 06b-diskussion, mit 15-Min-Timer) =====
  {
    id: 'discussion',
    theme: 'slide--accent slide--divider',
    label: 'Q&A',
    desktopOnly: true,
    content: `
      <div style="max-width:720px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.6rem;margin-bottom:4px">&#128172; Q&amp;A &amp; Diskussion</h2>
        <p style="font-size:0.95rem;color:var(--color-text-subdued)">Keine offene "Fragen?"-Runde &ndash; drei konkrete Einstiege:</p>
      </div>
      <div class="pause-timer discussion-timer" id="discussion-timer" data-duration="900" style="background:#001631;border:1px solid rgba(0,22,49,0.3)">
        <span class="pause-timer-icon">&#128172;</span>
        <span class="pause-timer-display" id="discussion-timer-display" style="color:#ffed00">15:00</span>
        <span class="pause-timer-label" style="color:rgba(255,255,255,0.7)">Diskussion</span>
      </div>
      <div style="max-width:660px;margin:14px auto 0;display:flex;flex-direction:column;gap:9px;text-align:left">
        <div style="padding:13px 18px;border-radius:10px;background:rgba(0,22,49,0.08);border:1px solid rgba(0,22,49,0.2);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128165;</span>
          <p style="font-size:0.9rem;color:var(--color-text);line-height:1.45"><strong>Wer hat ein Beispiel, wo Vibe Coding schiefging?</strong> Was h&auml;tte die Heuristik gesagt?</p>
        </div>
        <div style="padding:13px 18px;border-radius:10px;background:rgba(0,22,49,0.08);border:1px solid rgba(0,22,49,0.2);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128218;</span>
          <p style="font-size:0.9rem;color:var(--color-text);line-height:1.45"><strong>Was geh&ouml;rt in unsere gemeinsame AGENTS.md?</strong> Sammeln wir direkt die ersten Regeln.</p>
        </div>
        <div style="padding:13px 18px;border-radius:10px;background:rgba(0,22,49,0.08);border:1px solid rgba(0,22,49,0.2);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#11088;</span>
          <p style="font-size:0.9rem;color:var(--color-text);line-height:1.45"><strong>Welcher Prompt hat bei euch zuletzt richtig gut funktioniert?</strong> &rarr; erster Eintrag f&uuml;r die Library.</p>
        </div>
      </div>
      <p style="max-width:660px;margin:14px auto 0;text-align:center;font-size:0.82rem;color:var(--color-text-subdued)">
        N&auml;chste Schritte: Prompt-Library-Ort festlegen &middot; AGENTS.md je Projekt starten &middot; n&auml;chster CoP-Termin <strong>(TODO: Datum)</strong>
      </p>
    `,
  },

  // ===== 7.2 Handout / Cheat-Sheet =====
  {
    id: 'cheatsheet',
    theme: 'slide--dark',
    label: 'Handout',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Handout &ndash; zum Mitnehmen</span>
      <h2 class="slide-title" style="font-size:1.35rem;margin-bottom:10px">Alles auf einer Folie</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:980px;margin:0 auto">
        <div style="padding:12px 14px;border-radius:10px;background:rgba(37,204,120,0.07);border:1px solid rgba(37,204,120,0.3)">
          <p style="font-weight:700;font-size:0.85rem;color:#4ade80;margin-bottom:6px">&#9989; Do's</p>
          <ul style="font-size:0.74rem;line-height:1.65;color:var(--color-text-on-dark-subdued);padding-left:16px">
            <li><strong style="color:var(--color-text-on-dark)">Kontext zuerst:</strong> Stack, Ziel, Constraints, Format &ndash; AGENTS.md pflegen &amp; im Repo teilen</li>
            <li><strong style="color:var(--color-text-on-dark)">Iterativ &amp; klein:</strong> Plan &rarr; pr&uuml;fen &rarr; Schritt f&uuml;r Schritt; nie Tage Arbeit riskieren</li>
            <li><strong style="color:var(--color-text-on-dark)">Human in the Lead:</strong> nur mergen, was ihr versteht &ndash; ihr haftet, nicht die KI (OLG Hamm)</li>
            <li><strong style="color:var(--color-text-on-dark)">Artefakte committen:</strong> plan.md, docs.md, CHANGELOG &ndash; Code ist nur die H&auml;lfte</li>
            <li><strong style="color:var(--color-text-on-dark)">Session-Hygiene:</strong> neues Thema = neue Session</li>
          </ul>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(191,6,67,0.08);border:1px solid rgba(191,6,67,0.3)">
          <p style="font-weight:700;font-size:0.85rem;color:#ff6b6b;margin-bottom:6px">&#9940; Don'ts</p>
          <ul style="font-size:0.74rem;line-height:1.65;color:var(--color-text-on-dark-subdued);padding-left:16px">
            <li>"Mach weiter" / "Pass das an" ohne Kontext &ndash; die KI r&auml;t</li>
            <li>Blind &uuml;bernehmen; Halluzinationen (Libraries, APIs) ungepr&uuml;ft glauben</li>
            <li>Endlos-Sessions mit &uuml;berladenem Kontext weiterquälen</li>
            <li>Secrets, Tokens, Kundendaten in Prompts &ndash; niemals</li>
            <li>Bekannte Befehle (npm run dev, git push) vom Agenten tippen lassen</li>
          </ul>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.25)">
          <p style="font-weight:700;font-size:0.85rem;color:var(--color-accent);margin-bottom:6px">&#128736;&#65039; Arbeitsweise &ndash; wann nehme ich was?</p>
          <ul style="font-size:0.74rem;line-height:1.65;color:var(--color-text-on-dark-subdued);padding-left:16px">
            <li><strong style="color:var(--color-text-on-dark)">Klein, klar, reversibel</strong> &rarr; Edit-Modus, direkt machen, 1 Commit</li>
            <li><strong style="color:var(--color-text-on-dark)">Grauzone</strong> (mehrere Dateien/Schichten?) &rarr; kurz planen lassen, Plan pr&uuml;fen</li>
            <li><strong style="color:var(--color-text-on-dark)">Gro&szlig; / unklar</strong> &rarr; Chat &rarr; plan.md &rarr; review &rarr; frische Session, Agent arbeitet sequentiell ab; Branch + lauff&auml;hige Zwischenst&auml;nde committen</li>
            <li>Die 3 Fragen: Wie viele Dateien? Wie reversibel? Wie klar das Ziel?</li>
          </ul>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.45)">
          <p style="font-weight:700;font-size:0.85rem;color:#7dd3fc;margin-bottom:6px">&#129504; Wann welches Modell?</p>
          <ul style="font-size:0.74rem;line-height:1.65;color:var(--color-text-on-dark-subdued);padding-left:16px">
            <li><strong style="color:var(--color-text-on-dark)">Opus</strong> &rarr; komplexes Coding, schwieriges Reasoning, gro&szlig;e Refactorings</li>
            <li><strong style="color:var(--color-text-on-dark)">Sonnet</strong> &rarr; Standard-Coding, Code Review &ndash; der Allrounder</li>
            <li><strong style="color:var(--color-text-on-dark)">Haiku</strong> &rarr; Explore, Plan, Doku, Summaries &ndash; schnell &amp; fokussiert</li>
            <li>Zuweisung pro Agent in opencode.json / Tool-Config</li>
            <li><strong style="color:var(--color-accent)">Faustregel: Guter Kontext schl&auml;gt gro&szlig;es Modell</strong> &ndash; siehe Experiment</li>
          </ul>
        </div>
      </div>
      <div style="max-width:980px;margin:12px auto 0;padding:10px 16px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25);text-align:center">
        <p style="font-size:0.85rem;color:var(--color-text-on-dark)">Kurz: <strong style="color:var(--color-accent)">Kontext meistern &middot; bewusst entscheiden &middot; alles reviewen &middot; Wissen teilen.</strong> &nbsp;Dieser Kurs ist &ouml;ffentlich &ndash; Link teilen erlaubt &amp; erw&uuml;nscht.</p>
      </div>
    `,
  },

  // ===== 7.3 Quellen & Links =====
  {
    id: 'sources',
    theme: 'slide--dark',
    label: 'Quellen',
    content: `
      <span class="slide-label">Quellen &amp; Links</span>
      <h2 class="slide-title" style="font-size:1.4rem;margin-bottom:12px">Alle Quellen &amp; verwendeten Ressourcen</h2>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;font-size:0.74rem">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">Studien &amp; Research</h3>
          <div style="display:flex;flex-direction:column;gap:4px">
            <a href="https://research.trychroma.com/context-rot" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Chroma: Context Rot</a>
            <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Lost in the Middle (Liu et al., arXiv)</a>
            <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">METR: AI &amp; Developer Productivity</a>
            <a href="https://arxiv.org/abs/2507.09089" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">METR Paper (arXiv 2507.09089)</a>
            <a href="https://metr.org/blog/2026-02-24-uplift-update/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">METR Update (Feb 2026)</a>
            <a href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Veracode GenAI Code Security Report</a>
            <a href="https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">GitClear: AI Code Quality</a>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">Talks &amp; Einordnung</h3>
          <div style="display:flex;flex-direction:column;gap:4px">
            <a href="https://www.youtube.com/watch?v=YNavwk7qk24" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Kl&ouml;ckner: Beyond the AI hype (OMR 2026)</a>
            <a href="https://x.com/karpathy/status/1886192184808149383" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Karpathy: Vibe-Coding-Tweet</a>
            <a href="https://www.anthropic.com/engineering/claude-code-best-practices" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">Anthropic: Agentic Coding Best Practices</a>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin:12px 0 6px;text-transform:uppercase;letter-spacing:0.05em">Das Experiment</h3>
          <div style="display:flex;flex-direction:column;gap:4px">
            <span style="color:var(--color-text-on-dark-subdued)">Beide Prompts + AGENTS.md: in diesem Kurs (Copy-Buttons)</span>
            <span style="color:var(--color-text-on-dark-subdued)">Demos: /demos/spaceinvaders_basic.html &amp; _pro.html</span>
            <span style="color:var(--color-text-on-dark-subdued)">TODO: Session-Stats-Screenshots verlinken</span>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.78rem;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.05em">Tools &amp; Specs</h3>
          <div style="display:flex;flex-direction:column;gap:4px">
            <a href="https://agents.md" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">agents.md (Spezifikation)</a>
            <a href="https://opencode.ai" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">opencode.ai</a>
            <a href="https://continue.dev" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">continue.dev</a>
            <a href="https://artificialanalysis.ai" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">artificialanalysis.ai (Modellvergleich)</a>
            <a href="https://kiro.dev" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">kiro.dev (Spec-Driven)</a>
            <a href="https://opencode.ai/docs/de/skills/" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:none">OpenCode Skills-Doku</a>
          </div>
          <div style="margin-top:14px;padding:10px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);line-height:1.6">Dieser Kurs ist &ouml;ffentlich &amp; reproduzierbar (Apache 2.0) &ndash; Feedback und Erg&auml;nzungen gerne in die CoP. Danke! &#128591;<br>Kurs &amp; Plattform: <a href="https://github.com/weisser-dev" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/weisser-dev</a></p>
          </div>
        </div>
      </div>
    `,
  },
];
