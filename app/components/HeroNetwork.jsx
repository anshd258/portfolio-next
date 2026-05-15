"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   Agentic Network — canvas centerpiece.
   Port of reference/network.js. Deliberate static
   topology. Pulses are the only motion. Hand-placed
   nodes with mono labels. Sharp at any DPR.
   ───────────────────────────────────────────── */

// Topology, defined in normalized 0..1 space so it scales.
// [id, x, y, kind, label, size]
const TOPO_NODES = [
  ["ingress",      0.06, 0.50, "in",    ".webhook",        1.0],
  ["orchestrator", 0.20, 0.50, "hub",   ".orchestrator",   1.8],
  ["planner",      0.34, 0.34, "agent", ".plan",           1.3],
  ["router",       0.34, 0.66, "agent", ".route",          1.3],
  ["rag",          0.50, 0.20, "tool",  ".embed · chroma", 1.0],
  ["llm",          0.50, 0.50, "hub",   ".llm · claude",   1.6],
  ["tools",        0.50, 0.80, "tool",  ".tool[k]",        1.0],
  ["critic",       0.68, 0.32, "agent", ".critic",         1.2],
  ["executor",     0.68, 0.68, "agent", ".exec",           1.2],
  ["eval",         0.82, 0.50, "hub",   ".eval",           1.4],
  ["egress",       0.94, 0.50, "out",   ".commit",         1.0],
];

// [fromIdx, toIdx, curveOffset]
const TOPO_EDGES = [
  [0, 1, 0],
  [1, 2, -0.05],
  [1, 3,  0.05],
  [2, 4, -0.04],
  [2, 5,  0.00],
  [3, 5,  0.00],
  [3, 6,  0.04],
  [4, 5,  0.00],
  [5, 7,  0.00],
  [5, 8,  0.00],
  [6, 8,  0.00],
  [7, 9,  0.00],
  [8, 9,  0.00],
  [4, 7,  0.05],
  [6, 8,  0.05],
  [9, 10, 0],
  // feedback loops — the LangGraph signature
  [7, 3, -0.08],
  [8, 2,  0.08],
];

const DEFAULT_ACCENT = { pulse: "0.84 0.18 55", halo: "0.82 0.17 52" };

export default function HeroNetwork({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let nodes = [];
    let edges = [];
    const pulses = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let lastPulse = 0;

    function layout() {
      const padX = W * 0.05, padY = H * 0.16;
      const innerW = W - padX * 2, innerH = H - padY * 2;
      nodes = TOPO_NODES.map(([id, nx, ny, kind, label, size]) => ({
        id, kind, label,
        x: padX + nx * innerW,
        y: padY + ny * innerH,
        r: 3.4 * size,
        hover: 0,
      }));
      edges = TOPO_EDGES.map(([ai, bi, off]) => {
        const a = nodes[ai], b = nodes[bi];
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const dx = b.x - a.x, dy = b.y - a.y;
        const len = Math.hypot(dx, dy);
        const nxn = -dy / len, nyn = dx / len;
        const cx = mx + nxn * off * len;
        const cy = my + nyn * off * len;
        return { a: ai, b: bi, ax: a.x, ay: a.y, bx: b.x, by: b.y, cx, cy, len, off };
      });
    }

    function size() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      layout();
    }

    function onPointerMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = mouse.x > 0 && mouse.x < W && mouse.y > 0 && mouse.y < H;
    }
    function onPointerLeave() { mouse.active = false; }

    function spawnPulse(t) {
      if (REDUCE) return;
      if (t - lastPulse < 240) return;
      if (pulses.length > 14) return;
      const eIdx = (Math.random() * edges.length) | 0;
      pulses.push({ eIdx, birth: t, dur: 700 + Math.random() * 600 });
      lastPulse = t;
    }

    function bezierPt(e, t) {
      const u = 1 - t;
      const x = u * u * e.ax + 2 * u * t * e.cx + t * t * e.bx;
      const y = u * u * e.ay + 2 * u * t * e.cy + t * t * e.by;
      return [x, y];
    }

    function drawDotGrid() {
      const step = 24;
      ctx.fillStyle = "oklch(0.72 0.007 60 / 0.10)";
      for (let y = step / 2; y < H; y += step) {
        for (let x = step / 2; x < W; x += step) {
          ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
        }
      }
    }

    function drawEdges(activeEdges, A) {
      ctx.lineCap = "round";
      for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        const isActive = activeEdges.has(i);
        ctx.strokeStyle = isActive
          ? `oklch(${A.pulse} / 0.65)`
          : "oklch(0.88 0.005 80 / 0.22)";
        ctx.lineWidth = isActive ? 1.3 : 1.0;
        ctx.beginPath();
        ctx.moveTo(e.ax, e.ay);
        if (Math.abs(e.off) > 0.001) {
          ctx.quadraticCurveTo(e.cx, e.cy, e.bx, e.by);
        } else {
          ctx.lineTo(e.bx, e.by);
        }
        ctx.stroke();
      }
    }

    function drawPulses(t, A) {
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const age = t - p.birth;
        const u = age / p.dur;
        if (u >= 1) { pulses.splice(i, 1); continue; }
        const e = edges[p.eIdx];
        const [x, y] = bezierPt(e, u);
        const fade = u < 0.1 ? u / 0.1 : (u > 0.85 ? (1 - u) / 0.15 : 1);
        const tail = Math.max(0, u - 0.18);
        const [tx, ty] = bezierPt(e, tail);
        ctx.strokeStyle = `oklch(${A.pulse} / ${0.85 * fade})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tx, ty); ctx.lineTo(x, y); ctx.stroke();
        ctx.fillStyle = `oklch(${A.halo} / ${0.30 * fade})`;
        ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill();
        const hue = A.pulse.split(" ")[2];
        ctx.fillStyle = `oklch(0.96 0.05 ${hue} / ${0.98 * fade})`;
        ctx.beginPath(); ctx.arc(x, y, 2.6, 0, Math.PI * 2); ctx.fill();
      }
    }

    function drawNodes(A) {
      ctx.font = '10px var(--font-geist-mono), "Geist Mono", ui-monospace, monospace';
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isHub = n.kind === "hub";
        const isIO = n.kind === "in" || n.kind === "out";
        const hv = n.hover;
        if (isHub) {
          ctx.fillStyle = `oklch(${A.halo} / ${0.10 + 0.18 * hv})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 5.5, 0, Math.PI * 2); ctx.fill();
        }
        if (isHub || hv > 0.05) {
          ctx.strokeStyle = `oklch(${A.pulse} / ${isHub ? 0.55 : (0.35 + hv * 0.45)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r * (isHub ? 2.4 : 2.0), 0, Math.PI * 2); ctx.stroke();
        }
        if (isIO) {
          const s = n.r * 1.6;
          ctx.fillStyle = "oklch(0.88 0.005 80 / 0.95)";
          ctx.fillRect(Math.round(n.x - s / 2), Math.round(n.y - s / 2), s, s);
        } else {
          const fillL = isHub ? 0.96 : (0.88 + hv * 0.06);
          ctx.fillStyle = `oklch(${fillL} 0.04 ${A.pulse.split(" ")[2]} / 1)`;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
        }
        const lblOpacity = 0.55 + hv * 0.45;
        ctx.fillStyle = `oklch(0.74 0.006 60 / ${lblOpacity})`;
        let lx, ly;
        if (isHub || isIO) {
          ctx.textAlign = "center";
          lx = n.x; ly = n.y + n.r * 2.8 + 6;
        } else {
          ctx.textAlign = n.x < W * 0.5 ? "right" : "left";
          lx = n.x + (n.x < W * 0.5 ? -n.r * 2.6 : n.r * 2.6);
          ly = n.y;
        }
        ctx.fillText(n.label, lx, ly);
        ctx.textAlign = "left";
      }
    }

    function tick(now) {
      raf = requestAnimationFrame(tick);
      const t = now || performance.now();
      const A = (typeof window !== "undefined" && window.__accent) || DEFAULT_ACCENT;
      ctx.clearRect(0, 0, W, H);

      let nearestIdx = -1, nearestD2 = 60 * 60;
      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < nearestD2) { nearestD2 = d2; nearestIdx = i; }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const target = (i === nearestIdx) ? 1 : 0;
        nodes[i].hover += (target - nodes[i].hover) * 0.10;
      }
      const activeEdges = new Set();
      if (nearestIdx >= 0) {
        for (let i = 0; i < edges.length; i++) {
          if (edges[i].a === nearestIdx || edges[i].b === nearestIdx) {
            activeEdges.add(i);
          }
        }
      }

      drawDotGrid();
      drawEdges(activeEdges, A);
      spawnPulse(t);
      drawPulses(t, A);
      drawNodes(A);
    }

    function start() { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); }
    function stop()  { cancelAnimationFrame(raf); raf = 0; }

    function onResize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      size();
    }

    size();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0 }
    );
    io.observe(canvas);

    if (REDUCE) {
      tick(0); // single frame
    } else {
      start();
    }

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`hero__net ${className}`}
    />
  );
}
