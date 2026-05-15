"use client";
import useRevealOnView from "./useRevealOnView";

// 4-col dense grid. Italicized dim items (the .dim class) create rhythm.

const COLS = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "Dart", "Java", { t: "JavaScript", dim: true }, { t: "C++", dim: true }, { t: "SQL", dim: true }],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Nest.js", "Express.js", "GraphQL · REST", "Microservices", { t: "CI/CD", dim: true }],
  },
  {
    title: "AI & Agents",
    items: ["LangChain", "LangGraph", "MCP", "RAG · ChromaDB", "TensorFlow", { t: "Gemini · Claude · Ollama", dim: true }],
  },
  {
    title: "Infra & Frontend",
    items: ["AWS · ECS · Fargate", "Docker · Redis", "Flutter · Next.js · React", { t: "ShadCN · GitHub Actions", dim: true }],
  },
];

export default function Stack() {
  const headRef = useRevealOnView(0);
  return (
    <section id="stack" className="section">
      <div className="wrap">
        <div ref={headRef} className="section__head reveal">
          <div>
            <div className="kicker">
              <span className="idx">03</span><span className="dot" />
              STACK · OPINIONATED · IN ROTATION
            </div>
            <h2 className="section__title">What I reach for <em>by default</em>.</h2>
          </div>
        </div>

        <div className="stack__grid">
          {COLS.map((col, i) => (
            <Col key={col.title} col={col} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Col({ col, delay }) {
  const ref = useRevealOnView(delay);
  return (
    <div ref={ref} className="stack__col reveal">
      <h4>{col.title}</h4>
      <ul>
        {col.items.map((it, j) => {
          const isObj = typeof it === "object";
          const t = isObj ? it.t : it;
          const dim = isObj && it.dim;
          return <li key={j} className={dim ? "dim" : ""}>{t}</li>;
        })}
      </ul>
    </div>
  );
}
