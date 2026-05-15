"use client";
import { useEffect, useRef, useState } from "react";

// Per-character (or per-word) mask reveal. Each token lives inside an overflow-hidden
// box and rises from translateY(110%) → 0. Selection works because there's no cursor
// tracking on the text itself.

export default function MaskReveal({
  children,
  per = "char",        // "char" | "word"
  stagger = 38,        // ms between tokens
  delay = 0,           // ms before the first token
  duration = 950,
  trigger = "mount",   // "mount" | "view"
  as = "span",
  className = "",
  hoverWave = false,   // adds a subtle on-hover cascade up-then-down
}) {
  const text = typeof children === "string" ? children : "";
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    if (trigger === "mount") {
      const r1 = requestAnimationFrame(() => {
        const r2 = requestAnimationFrame(() => setOn(true));
        ref.current && ref.current.setAttribute("data-raf", String(r2));
      });
      return () => cancelAnimationFrame(r1);
    }
    if (trigger === "view") {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.15) {
            setOn(true);
            io.disconnect();
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: [0, 0.15, 0.5] }
      );
      io.observe(el);
      return () => io.disconnect();
    }
  }, [trigger]);

  const tokens = per === "word" ? text.split(/(\s+)/) : Array.from(text);
  const Tag = as;

  return (
    <Tag
      ref={ref}
      aria-label={text}
      data-on={on ? "true" : "false"}
      data-hover-wave={hoverWave ? "true" : undefined}
      className={`mask-reveal ${className}`}
    >
      {tokens.map((tok, i) => {
        if (tok === " " || /^\s+$/.test(tok)) {
          return <span key={i} aria-hidden>&nbsp;</span>;
        }
        return (
          <span key={i} aria-hidden className="mask-char">
            <span
              className="mask-inner"
              style={{
                "--i": i,
                transitionDelay: `${delay + i * stagger}ms`,
              }}
            >
              {tok}
              {per === "word" ? " " : null}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
