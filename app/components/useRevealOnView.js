"use client";
import { useEffect, useRef } from "react";

// Shared reveal-on-view hook. Pair with the global `.reveal` class — the hook
// just toggles `.in` once the element crosses ~12% into the viewport.
// Optional staggered delay maps to a `transition-delay` on the element.

export default function useRevealOnView(delayMs = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delayMs > 0) el.style.transitionDelay = `${delayMs}ms`;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);
  return ref;
}
