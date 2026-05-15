"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Stagger } from "./Reveal";
import MaskReveal from "./MaskReveal";
import { profile, stats } from "../lib/data";

export default function Hero() {
  const reduced = useReducedMotion();
  // Spring is decorative now — moves the ember glow behind the text, not the text itself.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 22, mass: 0.9 });
  const sy = useSpring(my, { stiffness: 40, damping: 22, mass: 0.9 });
  const ref = useRef(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      // Bigger travel here is fine; it's behind everything.
      mx.set(x * 90);
      my.set(y * 60);
    };
    const onLeave = () => { mx.set(0); my.set(0); };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my, reduced]);

  return (
    <section ref={ref} className="relative pt-32 md:pt-44 pb-16 md:pb-24">
      {/* Cursor-following glow — decorative, behind text, never blocks selection */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] overflow-hidden pointer-events-none">
        <motion.div
          aria-hidden
          style={{ x: sx, y: sy, willChange: "transform" }}
          className="absolute left-1/2 top-[-180px] h-[540px] w-[760px] -translate-x-1/2"
        >
          <div
            className="h-full w-full rounded-full opacity-[0.22]"
            style={{
              background:
                "radial-gradient(closest-side, var(--ember) 0%, transparent 70%)",
              filter: "blur(46px)",
            }}
          />
        </motion.div>
      </div>

      {/* Eyebrow — quick, single fade */}
      <div
        className="flex items-center gap-3 mb-9 md:mb-12"
        style={{ animation: "page-rise 700ms var(--ease-out-soft) 100ms both" }}
      >
        <span className="ember-dot" />
        <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-ink-500">
          {profile.location} · Available for Sr / SDE-II roles
        </span>
      </div>

      {/* Name — per-letter mask reveal; selection works because the spring moved to the glow */}
      <h1
        className="text-display-xl font-medium text-ink-50 mb-10 md:mb-12 leading-[0.92] tracking-[-0.04em]"
      >
        <MaskReveal
          per="char"
          stagger={42}
          delay={120}
          duration={1000}
          hoverWave
          className="font-extrabold mr-3"
        >
          Anshdeep
        </MaskReveal>
        <MaskReveal
          per="char"
          stagger={42}
          delay={480}
          duration={1000}
          hoverWave
          className="text-ink-500 font-light italic"
        >
          Singh
        </MaskReveal>
      </h1>

      {/* Everything below the name uses the Stagger primitive */}
      <Stagger className="flex flex-col gap-8 md:gap-10">
        <p className="max-w-[58ch] text-ink-300 text-[19px] md:text-[22px] leading-[1.45]">
          Full-Stack &amp; AI Software Engineer.{" "}
          <span className="text-ink-100">
            I build agentic systems that survive production
          </span>{" "}
          — multi-agent code review, MCP tooling, and the full-stack surface that
          wraps them. Currently SDE-1 at Posha, Best Quarterly Performer.
        </p>

        <ul className="grid gap-2 max-w-[60ch] text-[14.5px]">
          {profile.identity.map((line, i) => (
            <li key={i} className="flex gap-3 text-ink-400">
              <span className="font-mono text-ink-700 mt-1 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-[1.55]">{line}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="mailto:anshd258@gmail.com?subject=Role%20opportunity"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink-50 text-ink-950 px-5 py-3 text-[14px] font-medium hover:bg-white"
            data-press
          >
            Let&rsquo;s talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--hairline-strong)] text-ink-100 px-5 py-3 text-[14px] hover:border-ember hover:text-ember"
            data-press
          >
            <span className="font-mono text-[11px] text-ink-500">PDF</span>
            Résumé
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener"
            className="ml-1 inline-flex items-center gap-2 text-[14px] text-ink-400 hover:text-ink-100 uline"
          >
            github.com/anshd258
          </a>
        </div>

        <dl className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 border-t border-[color:var(--hairline)] pt-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                {s.label}
              </dt>
              <dd className="text-ink-50 text-2xl md:text-3xl font-medium tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Stagger>

      <div className="hidden md:flex absolute bottom-6 right-6 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-600">
        <span className="h-px w-8 bg-[color:var(--hairline-strong)]" />
        Scroll
      </div>
    </section>
  );
}
