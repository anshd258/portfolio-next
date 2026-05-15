"use client";
import useRevealOnView from "./useRevealOnView";

// 2-column manifesto. Sticky mono kicker on the left, ember statement
// over muted continuation on the right.

export default function Manifesto() {
  const kickerRef = useRevealOnView(0);
  const h2Ref = useRevealOnView(80);
  return (
    <section className="manifesto section">
      <div className="wrap">
        <div className="inner">
          <div className="label">
            <div ref={kickerRef} className="kicker reveal">
              <span className="idx">00</span>
              <span className="dot" />
              STATEMENT
            </div>
          </div>
          <div>
            <h2 ref={h2Ref} className="reveal">
              I build <em>agents that ship</em>, not demos. <br />
              <span className="mute">
                LangGraph orchestrators reviewing every merge request.
                Figma-to-Flutter code-gen that respects a design system. An MCP
                layer wiring internal packages to LLMs. The boring, production
                parts of AI engineering: webhooks, cancellation, RAG that won&rsquo;t
                lie, evaluation pipelines that catch regressions.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
