"use client";
import useRevealOnView from "./useRevealOnView";

const ITEMS = [
  { idx: "04.1", place: "1st",  what: "Lumos Hackathon",                           qual: "winner",                 org: "IIIT-Delhi" },
  { idx: "04.2", place: "2nd",  what: "Solana Hack Delhi",                         qual: "runner-up",              org: "IIT-Delhi" },
  { idx: "04.3", place: "Best", what: "App Developer",                             qual: "annual",                 org: "GDG · GTBIT" },
  { idx: "04.4", place: "Lead", what: "Google Developer Group on Campus",          qual: "Aug ’23 – Aug ’24",      org: "GTBIT" },
  { idx: "04.5", place: "9.0",  what: "B.Tech CSE",                                qual: "CGPA / 10",              org: "GGSIPU · 2021 – 2025" },
];

export default function Signal() {
  const headRef = useRevealOnView(0);
  return (
    <section id="signal" className="section">
      <div className="wrap">
        <div ref={headRef} className="section__head reveal">
          <div>
            <div className="kicker">
              <span className="idx">04</span><span className="dot" />
              SIGNAL · WHEN THE WORK GOT NOTICED
            </div>
            <h2 className="section__title">A short list, in chronological <em>order</em>.</h2>
          </div>
        </div>

        <ol className="signal__list">
          {ITEMS.map((it, i) => (
            <Row key={it.idx} it={it} delay={i * 80} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Row({ it, delay }) {
  const ref = useRevealOnView(delay);
  return (
    <li ref={ref} className="reveal">
      <span className="idx">{it.idx}</span>
      <span className="place">{it.place}</span>
      <span className="what">
        {it.what}
        {it.qual && <small>{it.qual}</small>}
      </span>
      <span className="org">{it.org}</span>
    </li>
  );
}
