"use client";
import { motion, useScroll } from "framer-motion";

// 1px ember bar fixed to the top of the viewport; width tracks scroll progress.
// Spec rule: no springs. `useScroll` is already RAF-driven and reads smooth.

export default function ScrollProgressRail() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="scroll-rail"
      style={{ width: "100%", scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
