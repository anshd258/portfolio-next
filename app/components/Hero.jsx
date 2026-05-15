"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroNetwork from "./HeroNetwork";
import useRevealOnView from "./useRevealOnView";

// Hero — full-viewport stage. Canvas behind, edge rule on the right,
// 3 stacked rows (top meta / giant name / 4 stats). Scroll parallax on the
// inner block: name lifts -40px and inner fades to 0.15 over the first viewport.

const NAME_ROW_1 = "ANSHDEEP";
const NAME_ROW_2 = "SINGH";

const STATS = [
  { v: "4",     u: "repos",  l: "Full-stack ownership · Posha" },
  { v: "2M+",   u: "users",  l: "Translation system · Stimuler" },
  { v: "every", u: "MR",     l: "Multi-agent review · GitLab webhook" },
  { v: "Q1",    u: "2026",   l: "Best quarterly performer · 5 months in" },
];

export default function Hero() {
  const ref = useRef(null);
  // Map first viewport of scroll → name -40px / inner opacity 1→0.15
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const innerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  return (
    <header ref={ref} className="hero">
      <HeroNetwork />

      <div className="hero__edge" aria-hidden="true">
        <span className="tick t1">N · 12.97</span>
        <span className="tick t2">E · 77.59</span>
      </div>

      <motion.div className="hero__inner" style={{ opacity: innerOpacity }}>

        <div className="hero__top">
          <div className="hero__intro">
            <div className="micro micro--ember">◢◣  AGENT 001 / ANSHDEEP</div>
            <div className="role">
              Full-Stack &amp; AI Software Engineer. I design and ship agentic
              systems that run in production: orchestrators, code-gen pipelines,
              and the plumbing that lets LLMs touch real codebases without
              breaking them.
            </div>
          </div>

          <div className="hero__right">
            <span className="micro">CURRENTLY</span>
            <b>SDE-1, POSHA</b>
            <span className="micro">SINCE NOV 2025</span>
            <span style={{ height: 14 }} />
            <span className="micro">BASED IN</span>
            <b>BENGALURU · IN</b>
            <span className="micro">12.9716°N · 77.5946°E</span>
          </div>
        </div>

        <motion.h1
          className="hero__name"
          aria-label={`${NAME_ROW_1} ${NAME_ROW_2}`}
          style={{ y: nameY }}
        >
          <span className="row r1">
            {Array.from(NAME_ROW_1).map((ch, i) => (
              <span
                key={i}
                className="ltr"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                {ch}
              </span>
            ))}
          </span>
          <span className="row r2">
            {Array.from(NAME_ROW_2).map((ch, i) => (
              <span
                key={i}
                className="ltr"
                style={{ animationDelay: `${300 + i * 30}ms` }}
              >
                {ch}
              </span>
            ))}
            <span
              className="ltr accent"
              style={{ animationDelay: "520ms" }}
              aria-hidden="true"
            >
              ●
            </span>
          </span>
        </motion.h1>

        <div className="hero__bottom">
          {STATS.map((s, i) => (
            <Stat key={i} v={s.v} u={s.u} l={s.l} delay={i * 80} />
          ))}
        </div>

      </motion.div>
    </header>
  );
}

function Stat({ v, u, l, delay }) {
  const ref = useRevealOnView(delay);
  return (
    <div ref={ref} className="hero__stat reveal">
      <div className="v">{v}<span className="u"> {u}</span></div>
      <div className="l">{l}</div>
    </div>
  );
}
