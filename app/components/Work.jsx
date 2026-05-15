"use client";
import { useState } from "react";
import useRevealOnView from "./useRevealOnView";

// Work — three expanding rows. Click toggles a panel via the
// grid-template-rows 0fr → 1fr trick. Only one open at a time.

const ROLES = [
  {
    id: 1,
    idx: "01 / NOW",
    company: "Posha",
    sub: "SDE-1 · Bengaluru",
    role: "Full-stack across IoT, mobile & AI tooling",
    when: "Nov 2025 → Present",
    arc: (
      <>
        <strong>Best Quarterly Performer</strong> within my first five months.
        Full-stack ownership across <strong>four major repos</strong>: the IoT
        cooking device, mobile companion apps (Flutter + native iOS/Android),
        and internal AI tooling. The work bridges hardware constraints with LLM
        agents that have to behave under real production load.
      </>
    ),
    stack: [
      "Python","FastAPI","LangGraph","LangChain","ChromaDB","MCP","AWS","GraphQL","Flutter","iOS","Android","Java",
    ],
    shipped: [
      <>Multi-agent code-review orchestrator on every GitLab MR, open-sourced as <strong>Deep-Hook</strong></>,
      "Figma-to-Flutter agentic code generation, design-system-aware",
      <>Grocery &amp; Subscriptions, the company&rsquo;s <strong>first non-hardware revenue stream</strong></>,
      "Internal MCP tools + an LLM evaluation pipeline for the commons package",
    ],
  },
  {
    id: 2,
    idx: "02",
    company: "NeoSurge",
    sub: "SDE-1 · Short-term",
    role: "Instant mutual-fund redemption, ZapPay",
    when: "Aug 2025 → Nov 2025",
    arc: (
      <>
        Three-month sprint owning <strong>ZapPay</strong> end-to-end: instant
        mutual-fund redemption that settles before the user closes the app.
        Drove microservices boundary work and performance across the platform.
      </>
    ),
    stack: ["Express.js","Flutter","Microservices","REST","Redis","Postgres"],
    shipped: [
      "ZapPay: instant redemption, Express + Flutter, sub-second settlement UX",
      <>Core features for <strong>Sernet Tech / TickFunds</strong> including LAMF (Loan Against Mutual Fund)</>,
      "Microservice splitting + performance work across the platform",
    ],
  },
  {
    id: 3,
    idx: "03",
    company: "Stimuler",
    sub: "SDE Intern · India's Best AI App 2023",
    role: "Translation system & observability · 2M+ MAU",
    when: "Dec 2024 → Jul 2025",
    arc: (
      <>
        Core contributor on a product serving <strong>2M+ monthly active users</strong>.
        The work I&rsquo;m proudest of: app-wide instrumentation + observability
        telemetry that doubled as production health signal <em>and</em> ML
        training-data source. Closing the loop between what users do and what
        the next model learns.
      </>
    ),
    stack: ["Python","Flutter","Observability","Telemetry","ML pipelines"],
    shipped: [
      "Core contributor on translation system at scale",
      "App-wide instrumentation & observability telemetry",
      <>Telemetry doubles as <strong>ML training-data source</strong></>,
    ],
  },
];

export default function Work() {
  const [open, setOpen] = useState(1); // first row open by default
  const headRef = useRevealOnView(0);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div ref={headRef} className="section__head reveal">
          <div>
            <div className="kicker">
              <span className="idx">01</span><span className="dot" />
              WORK · 3 ROLES · 18 MONTHS IN INDUSTRY
            </div>
            <h2 className="section__title">Where the code <em>shipped</em>.</h2>
          </div>
          <div className="micro">CLICK TO EXPAND</div>
        </div>

        <ol className="work__list">
          {ROLES.map((r) => {
            const isOpen = open === r.id;
            return (
              <li key={r.id} style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <button
                  type="button"
                  className={`work__row ${isOpen ? "open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`work-detail-${r.id}`}
                  onClick={() => setOpen(isOpen ? -1 : r.id)}
                >
                  <span className="idx">{r.idx}</span>
                  <span className="co">{r.company}<small>{r.sub}</small></span>
                  <span className="role-line">{r.role}</span>
                  <span className="when">{r.when}</span>
                  <span className="open-arrow">→</span>
                </button>
                <div
                  id={`work-detail-${r.id}`}
                  className={`work__detail ${isOpen ? "open" : ""}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="inner">
                    <div className="pad">
                      <div />
                      <div>
                        <h4>The arc</h4>
                        <p>{r.arc}</p>
                        <h4>Stack</h4>
                        <div className="stack-row">
                          {r.stack.map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4>What shipped</h4>
                        <ul className="ship">
                          {r.shipped.map((s, j) => <li key={j}>{s}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
