// 01 – Intro: Hook + Beweis + Agenda
// Roter Faden: Kontext und bewusste Entscheidungen schlagen Modellqualität.
export const introSlides = [
  // ===== 1.1 Titel-Slide =====
  {
    id: 'hero',
    theme: 'slide--hero',
    label: 'Start',
    labelSelfPaced: 'Start',
    content: `
      <div class="desktop-content">
        <div class="hero-badge">CoP &ndash; AI Assisted Coding</div>
        <h1 class="hero-title">Effizient entwickeln<br><span class="highlight">mit AI-Tools</span></h1>
        <p class="hero-subtitle">Do's, Don'ts &amp; Workflow-Tipps aus der Praxis &ndash; damit AI-Tools uns schneller <em>und</em> besser machen.</p>
        <div style="display:flex;gap:24px;justify-content:center;margin-top:32px;flex-wrap:wrap">
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Teil 1</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">Setup &amp; Kontext</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">Kontext-Mechanik, AGENTS.md, Tool-Konfiguration</p>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Teil 2</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">Do's &amp; Don'ts</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">Was funktioniert &ndash; und welche Fallstricke teuer werden</p>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Teil 3</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">Workflow &amp; Community</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">Die richtige Arbeitsweise w&auml;hlen, Wissen teilen</p>
          </div>
        </div>
        <p style="margin-top:24px;font-size:0.8rem;color:var(--color-text-on-dark-subdued);opacity:0.6;text-align:center">
          F&uuml;r Entwickler:innen, die Continue, OpenCode &amp; Co. bereits nutzen
        </p>
      </div>
      <div class="mobile-content" style="text-align:center">
        <div style="font-size:3.5rem;margin-bottom:12px">&#9889;</div>
        <h1 style="font-size:1.8rem;font-weight:800;color:var(--color-text-on-dark);line-height:1.2;margin:16px 0 8px">Effizient entwickeln<br><span style="color:var(--color-accent)">mit AI-Tools</span></h1>
        <p style="font-size:0.95rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:28px">Do's, Don'ts &amp; Workflow-Tipps aus der Praxis.</p>
        <button class="mobile-start-btn" id="mobile-start-btn">Los geht's &#128640;</button>
      </div>
    `,
  },

  // ===== 1.2 Das Experiment: Zwei Prompts, zwei Welten =====
  {
    id: 'hook-experiment',
    theme: 'slide--dark',
    label: 'Das Experiment',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Das Experiment</span>
      <h2 class="slide-title">Zwei Prompts, zwei Welten</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Gleiches Tool, gleicher Tag &ndash; aber: das <strong>Top-Modell ohne Kontext</strong> gegen das <strong>g&uuml;nstigere Modell mit AGENTS.md</strong>.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:#ff6b6b;font-size:1rem;margin-bottom:8px">Lauf 1 &ndash; Claude Opus 4.8, ohne Kontext</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Der komplette Prompt</div>
            <button class="copy-btn" data-copy="Erstelle Space Invaders als einzelne HTML-Datei (HTML, CSS und JavaScript in einer Datei, kein Build-Step).">&#128203; Copy</button>
            <div class="code-body" style="padding:12px 14px;font-size:0.8rem"><pre style="margin:0"><span class="code-string">"Erstelle Space Invaders als einzelne
HTML-Datei (HTML, CSS und JavaScript
in einer Datei, kein Build-Step)."</span></pre></div>
          </div>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);margin-top:8px;line-height:1.5">Sonst nichts. Kein Projektkontext, keine Regeln, keine Anforderungen &ndash; so prompten viele im Alltag.</p>
        </div>
        <div>
          <h3 style="color:#4ade80;font-size:1rem;margin-bottom:8px">Lauf 2 &ndash; Claude Haiku 4.5, mit AGENTS.md</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Derselbe Wunsch + AGENTS.md</div>
            <button class="copy-btn" data-copy="Erstelle Space Invaders als einzelne HTML-Datei (HTML, CSS und JavaScript in einer Datei, kein Build-Step). Lies vorher die AGENTS.md ein und halte dich strikt daran.">&#128203; Copy</button>
            <div class="code-body" style="padding:12px 14px;font-size:0.8rem"><pre style="margin:0"><span class="code-string">"Erstelle Space Invaders als einzelne
HTML-Datei [...]. Lies vorher die
AGENTS.md ein und halte dich strikt
daran."</span></pre></div>
          </div>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);margin-top:8px;line-height:1.5">Die AGENTS.md definiert Architektur, Game-Loop (rAF), Touch + Keyboard, Pause/Game Over, Code-Stil, No-Gos. <span style="color:var(--color-accent)">Komplette Datei: Kapitel "Setup &amp; Kontext".</span></p>
        </div>
      </div>
      <div style="margin-top:14px;padding:14px 18px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25);text-align:center">
        <p style="font-size:1.05rem;color:var(--color-text-on-dark);font-weight:700">Kurz: Nicht das Modell macht den Unterschied. <span style="color:var(--color-accent)">Der Kontext &ndash; also ihr.</span></p>
      </div>
      <p style="margin-top:8px;font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.7;text-align:center">
        Passend dazu: AI-generierter Code enth&auml;lt in 45&nbsp;% der Tests Sicherheitsl&uuml;cken &ndash; &uuml;ber Modellgenerationen hinweg stabil. <a href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Veracode GenAI Code Security Report</a>
      </p>
    `,
  },

  // ===== 1.3a Demo: Basic-Version =====
  {
    id: 'demo-basic',
    theme: '',
    label: 'Demo 1/2',
    content: `
      <span class="slide-label" style="color:var(--color-critical)">Beispiel 1 &ndash; Basic</span>
      <h2 class="slide-title">Spielt es selbst: die Basic-Version</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Das unver&auml;nderte Ergebnis von Lauf 1 (Opus 4.8, 1 Prompt) &ndash; einmal ins Spiel klicken f&uuml;r Tastatur-Fokus</p>
      <div class="two-cols" style="margin-top:14px;grid-template-columns:1.5fr 1fr">
        <div style="border:1px solid var(--color-border);border-radius:12px;overflow:hidden;background:#000;height:460px">
          <iframe src="/demos/spaceinvaders_basic.html" style="width:200%;height:200%;border:0;display:block;transform:scale(0.5);transform-origin:top left" loading="lazy" title="Space Invaders – Basic Run (Opus 4.8)"></iframe>
        </div>
        <div>
          <h3 style="color:var(--color-positive);font-size:0.95rem;margin-bottom:6px">Fair ist fair &ndash; es l&auml;uft</h3>
          <p style="font-size:0.78rem;color:var(--color-text-subdued);line-height:1.55;margin-bottom:10px">
            Ein Prompt, spielbar: sauberer rAF-Loop, Game Over, Pause (P), Wellen, sogar Partikel-Effekte. F&uuml;r 1 Prompt beachtlich.
          </p>
          <h3 style="color:var(--color-critical);font-size:0.95rem;margin-bottom:6px">Aber: die Rumpf-Version</h3>
          <div style="display:flex;flex-direction:column;gap:5px;font-size:0.78rem">
            <div style="padding:7px 11px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.18);line-height:1.45">&#10007; <strong>Keine Schilde</strong>, kein UFO, keine Extra-Leben</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.18);line-height:1.45">&#10007; <strong>Kein Sound</strong> &ndash; null Audio im ganzen Code</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.18);line-height:1.45">&#10007; <strong>Keine Touch-Steuerung</strong>, Canvas fix auf 600&nbsp;px</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.18);line-height:1.45">&#10007; <strong>Keine Pixel-Sprites</strong> &ndash; einfache Formen &amp; Smileys</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.18);line-height:1.45">&#10007; <strong>Keine Struktur:</strong> 405 Zeilen, eine IIFE, 0 Klassen</div>
          </div>
          <p style="margin-top:10px;font-size:0.72rem;color:var(--color-text-subdued)">Nichts davon war "falsch" &ndash; es stand nur nirgends. <strong>Die KI hat geraten, was "Space Invaders" hei&szlig;t.</strong></p>
        </div>
      </div>
    `,
  },

  // ===== 1.3b Demo: Pro-Version =====
  {
    id: 'demo-pro',
    theme: '',
    label: 'Demo 2/2',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Beispiel 2 &ndash; Pro</span>
      <h2 class="slide-title">Und jetzt die Pro-Version</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Derselbe Wunsch, g&uuml;nstigeres Modell (Haiku 4.5) &ndash; aber mit AGENTS.md als Leitplanke</p>
      <div class="two-cols" style="margin-top:14px;grid-template-columns:1.5fr 1fr">
        <div style="border:1px solid var(--color-border);border-radius:12px;overflow:hidden;background:#000;height:460px">
          <iframe src="/demos/spaceinvaders_pro.html" style="width:200%;height:200%;border:0;display:block;transform:scale(0.5);transform-origin:top left" loading="lazy" title="Space Invaders – Pro Run (Haiku 4.5 + AGENTS.md)"></iframe>
        </div>
        <div>
          <h3 style="color:var(--color-positive);font-size:0.95rem;margin-bottom:6px">Alles aus der Spec ist da</h3>
          <div style="display:flex;flex-direction:column;gap:5px;font-size:0.78rem">
            <div style="padding:7px 11px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.2);line-height:1.45">&#10003; <strong>11 Klassen</strong> exakt nach AGENTS.md (Game, Renderer, SoundEngine, &hellip;)</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.2);line-height:1.45">&#10003; <strong>Pixel-Sprites</strong> als 2D-Arrays, 2 Animationsframes</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.2);line-height:1.45">&#10003; <strong>4 Schilde, UFO, 8-Bit-Sound</strong> inkl. Marsch-Beat (Web Audio, Mute: M)</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.2);line-height:1.45">&#10003; <strong>Touch + Keyboard</strong>, Delta-Time-Loop, responsive</div>
            <div style="padding:7px 11px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.25);line-height:1.45">&#9888; Ehrlich: <strong>JSDoc fehlt</strong> trotz Vorgabe &ndash; daf&uuml;r w&auml;re noch eine Korrekturschleife n&ouml;tig. Auch mit .md gilt: reviewen!</div>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin:10px 0 6px">Original-Code: der Game-Loop</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>basic (405 Zeilen) vs. pro (1.119 Zeilen)</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.62rem;line-height:1.5"><pre style="margin:0"><span class="code-comment">// Basic: eine IIFE, fixe Geschwindigkeit</span>
<span class="code-keyword">function</span> <span class="code-function">loop</span>() {
  update(); render();
  requestAnimationFrame(loop);
}

<span class="code-comment">// Pro: State-Machine + Delta-Time + Sound</span>
gameLoop = (now) => {
  <span class="code-keyword">if</span> (<span class="code-keyword">this</span>.gameState.state === <span class="code-string">'running'</span>)
    <span class="code-keyword">this</span>.update(now, deltaTime);
  <span class="code-keyword">this</span>.render();          <span class="code-comment">// u.a. playMarchBeat()</span>
  requestAnimationFrame(<span class="code-keyword">this</span>.gameLoop);
};</pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 1.3c Kosten & Aufwand =====
  {
    id: 'experiment-costs',
    theme: 'slide--dark',
    label: 'Kosten & Aufwand',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Die Abrechnung</span>
      <h2 class="slide-title">Was hat das gekostet?</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Ehrliche Zahlen aus beiden OpenCode-Sessions &ndash; vollst&auml;ndig dokumentiert</p>
      <div class="two-cols" style="margin-top:14px;grid-template-columns:1.4fr 1fr">
        <div style="overflow-x:auto">
          <table class="comparison" style="font-size:0.8rem;width:100%">
            <thead><tr><th></th><th style="color:#ff6b6b">Lauf 1 &ndash; Basic</th><th style="color:#4ade80">Lauf 2 &ndash; Pro</th></tr></thead>
            <tbody>
              <tr><td><strong>Modell</strong></td><td>Claude Opus 4.8<br><span style="font-size:0.65rem;opacity:0.7">Bedrock eu-central-1 &middot; Top-Modell ($5/$25 je 1M)</span></td><td>Claude Haiku 4.5<br><span style="font-size:0.65rem;opacity:0.7">+ AGENTS.md &middot; 5&times; g&uuml;nstiger ($1/$5 je 1M)</span></td></tr>
              <tr><td><strong>Tokens (in / out)</strong></td><td>17.104 / ~3.050*</td><td>~86.000 / ~12.000*</td></tr>
              <tr><td><strong>Ergebnis (Code)</strong></td><td>405 Zeilen, 10,7 kB<br><span style="font-size:0.65rem;opacity:0.7">keine Schilde, kein Sound, kein Touch</span></td><td>1.119 Zeilen, 41,8 kB<br><span style="font-size:0.65rem;opacity:0.7">komplette Spec: Sprites, Schilde, UFO, Sound, Touch</span></td></tr>
              <tr><td><strong>Kosten ($)</strong></td><td>&asymp; $0,16</td><td>&asymp; $0,15</td></tr>
            </tbody>
          </table>
          <p style="font-size:0.65rem;color:var(--color-text-on-dark-subdued);margin-top:6px;line-height:1.5">
            Preisbasis Amazon Bedrock, Standard-Inferenz: Opus 4.8 = $5/$25, Haiku 4.5 = $1/$5 je 1M Tokens. Lauf 1: 17.104&times;$5 + ~3.050&times;$25 je Mio. &asymp; $0,16. Lauf 2: ~86.000&times;$1 + ~12.000&times;$5 je Mio. &asymp; $0,15. <a href="https://aws.amazon.com/bedrock/pricing/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">aws.amazon.com/bedrock/pricing</a><br>
            *Output aus der finalen Dateigr&ouml;&szlig;e gesch&auml;tzt (~3,5 Zeichen/Token bei Code), Lauf-2-Input aus ~98.000 Gesamt-Tokens (Session-Sch&auml;tzung) abgeleitet. Gerundete Sch&auml;tzwerte &ndash; ohne Begleittext des Modells.
          </p>
          <p style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:8px;line-height:1.5">
            &#9878;&#65039; <strong>Fairness-Disclaimer:</strong> n=1, keine Studie &ndash; und bewusst ungleiche Modelle: das <em>Top-Modell ohne Kontext</em> gegen das <em>g&uuml;nstigere Modell mit AGENTS.md</em>. Vollst&auml;ndig reproduzierbar: Prompts &amp; AGENTS.md stehen im Kurs.
          </p>
        </div>
        <div style="text-align:center">
          <div class="big-number" style="font-size:clamp(3rem,7vw,5rem)">2,8&times;</div>
          <p style="font-size:0.9rem;color:var(--color-text-on-dark);line-height:1.5;margin-bottom:14px">mehr Code, komplette Spec erf&uuml;llt &ndash; <strong>f&uuml;rs gleiche Geld</strong> (1.119 vs. 405 Zeilen)</p>
          <div style="padding:12px 14px;border-radius:10px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.25)">
            <p style="font-size:0.88rem;color:var(--color-text-on-dark);line-height:1.5">Kurz: Fast identische Kosten &ndash; aber nur der Lauf <strong style="color:var(--color-accent)">mit AGENTS.md</strong> lieferte das spezifizierte Spiel. <strong style="color:var(--color-accent)">Mit dem 5&times; g&uuml;nstigeren Modell.</strong></p>
          </div>
          <p style="margin-top:10px;font-size:0.72rem;color:var(--color-text-on-dark-subdued)">&#128161; Mit gutem Kontext liefert auch das kleine Modell &ndash; wann welches passt: <span style="color:var(--color-accent)">&rarr; Kapitel Workflow, Modellwahl</span></p>
        </div>
      </div>
    `,
  },

  // ===== 1.4 Agenda =====
  {
    id: 'agenda',
    theme: '',
    label: 'Agenda',
    content: `
      <span class="slide-label">Agenda</span>
      <h2 class="slide-title">Was euch erwartet</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">F&uuml;nf Stationen &ndash; und ihr wisst am Ende, <em>warum</em> die Pro-Version besser wurde</p>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:20px">
        <div style="padding:14px 12px;border-radius:10px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light);text-align:center">
          <div style="font-size:1.5rem">&#129513;</div>
          <p style="font-weight:700;font-size:0.82rem;margin-top:6px">Setup &amp; Kontext</p>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px">Was die KI "wei&szlig;" &ndash; und was nicht</p>
        </div>
        <div style="padding:14px 12px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.3);text-align:center">
          <div style="font-size:1.5rem">&#9989;</div>
          <p style="font-weight:700;font-size:0.82rem;margin-top:6px">Do's</p>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px">Regeln, die immer gelten</p>
        </div>
        <div style="padding:14px 12px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.25);text-align:center">
          <div style="font-size:1.5rem">&#9940;</div>
          <p style="font-weight:700;font-size:0.82rem;margin-top:6px">Don'ts</p>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px">Fallstricke, die teuer werden</p>
        </div>
        <div style="padding:14px 12px;border-radius:10px;background:var(--color-accent-subdued);border:1px solid var(--color-accent);text-align:center">
          <div style="font-size:1.5rem">&#128736;&#65039;</div>
          <p style="font-weight:700;font-size:0.82rem;margin-top:6px">Workflow &#11088;</p>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px">Die richtige Arbeitsweise w&auml;hlen</p>
        </div>
        <div style="padding:14px 12px;border-radius:10px;background:var(--color-primary-subdued);border:1px solid var(--color-primary-light);text-align:center">
          <div style="font-size:1.5rem">&#128101;</div>
          <p style="font-weight:700;font-size:0.82rem;margin-top:6px">Community</p>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px">Wissen teilen &amp; skalieren</p>
        </div>
      </div>
      <div class="tags" style="justify-content:center;margin-top:22px">
        <span class="tag">Do's &amp; Don'ts</span><span class="tag">AGENTS.md</span><span class="tag">Prompting</span><span class="tag">Workflow</span><span class="tag">CoP</span>
      </div>
    `,
  },
];
