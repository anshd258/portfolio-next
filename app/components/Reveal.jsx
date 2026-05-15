"use client";
import { useEffect, useRef, useState } from "react";

// IntersectionObserver tuned for "smooth arrival" — element must be ~15% visible
// and have crossed up from the bottom edge before it reveals. Less preemptive.
const IO_OPTS = { rootMargin: "0px 0px -12% 0px", threshold: [0, 0.15, 0.4] };

function useReveal(once = true) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
          setOn(true);
          if (once) io.disconnect();
        } else if (!once) {
          setOn(false);
        }
      },
      IO_OPTS
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  // Drop will-change once the animation has finished — keeps the GPU layer count low
  // and avoids the slight blur some browsers apply to compositor-promoted layers.
  useEffect(() => {
    if (!on) return;
    const t = setTimeout(() => setSettled(true), 1400);
    return () => clearTimeout(t);
  }, [on]);

  return { ref, on, settled };
}

export function Reveal({ children, as = "div", className = "", once = true }) {
  const { ref, on, settled } = useReveal(once);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      data-reveal={on ? "on" : undefined}
      data-settled={on && settled ? "" : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function Stagger({ children, as = "div", className = "" }) {
  const { ref, on } = useReveal(true);
  const Tag = as;
  return (
    <Tag ref={ref} data-stagger={on ? "on" : "off"} className={className}>
      {children}
    </Tag>
  );
}
