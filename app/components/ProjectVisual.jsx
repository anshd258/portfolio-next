// Inline SVG visuals — one per project. Computational, not photographic.
// Lightweight; respects reduced motion via parent class.

export function DeepHookVisual() {
  // A multi-agent graph: nodes that pulse, edges that flow.
  const nodes = [
    { id: "a", x: 60, y: 80, label: "WH" },
    { id: "b", x: 170, y: 50, label: "DIFF" },
    { id: "c", x: 170, y: 130, label: "RAG" },
    { id: "d", x: 290, y: 80, label: "REV" },
  ];
  const edges = [
    ["a", "b"],
    ["a", "c"],
    ["b", "d"],
    ["c", "d"],
  ];
  const nMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="dh-edge" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.40 0.008 60)" />
          <stop offset="50%" stopColor="oklch(0.78 0.14 65)" />
          <stop offset="100%" stopColor="oklch(0.40 0.008 60)" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => {
        const A = nMap[a], B = nMap[b];
        return (
          <g key={i}>
            <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="oklch(0.30 0.009 60)" strokeWidth="1" />
            <line
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="url(#dh-edge)" strokeWidth="1.5"
              strokeDasharray="4 80"
              style={{
                animation: `dh-flow 2.6s ${i * 0.35}s linear infinite`,
              }}
            />
          </g>
        );
      })}
      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle
            cx={n.x} cy={n.y} r="22"
            fill="oklch(0.20 0.012 60)"
            stroke="oklch(0.40 0.008 60)"
            strokeWidth="1"
          />
          <circle
            cx={n.x} cy={n.y} r="22"
            fill="none"
            stroke="oklch(0.78 0.14 65)"
            strokeWidth="1"
            opacity="0.6"
            style={{
              transformOrigin: `${n.x}px ${n.y}px`,
              animation: `dh-pulse 2.4s ${i * 0.4}s ease-out infinite`,
            }}
          />
          <text
            x={n.x} y={n.y + 4}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="oklch(0.84 0.004 60)"
            letterSpacing="0.05em"
          >
            {n.label}
          </text>
        </g>
      ))}
      <style>{`
        @keyframes dh-flow { 0%{stroke-dashoffset:84} 100%{stroke-dashoffset:0} }
        @keyframes dh-pulse { 0%{transform:scale(1);opacity:0.6} 60%{transform:scale(1.35);opacity:0} 100%{transform:scale(1.35);opacity:0} }
      `}</style>
    </svg>
  );
}

export function DhirPrintVisual() {
  // Stacked rectangles morphing — generative print pieces
  return (
    <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden>
      <g style={{ transformOrigin: "180px 100px", animation: "dp-rot 22s linear infinite" }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={180 - 70 + i * 6}
            y={100 - 50 + i * 4}
            width={140 - i * 12}
            height={100 - i * 8}
            rx="6"
            fill="none"
            stroke={i === 2 ? "oklch(0.78 0.14 65)" : "oklch(0.36 0.008 60)"}
            strokeWidth={i === 2 ? "1.4" : "1"}
            style={{
              transformOrigin: "180px 100px",
              animation: `dp-breathe 4.5s ${i * 0.2}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </g>
      <circle cx="180" cy="100" r="3" fill="oklch(0.78 0.14 65)" />
      <style>{`
        @keyframes dp-rot { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes dp-breathe { from{transform:scale(0.98)} to{transform:scale(1.04)} }
      `}</style>
    </svg>
  );
}

export function KrishiGyanVisual() {
  // Spectroscopic bars — ML signal
  const bars = Array.from({ length: 28 }, (_, i) => ({
    h: 22 + Math.sin(i * 0.7) * 18 + Math.cos(i * 0.3) * 12,
    d: i * 0.04,
  }));
  return (
    <svg viewBox="0 0 360 200" className="h-full w-full" aria-hidden>
      <line x1="30" y1="160" x2="330" y2="160" stroke="oklch(0.30 0.009 60)" strokeWidth="1" />
      {bars.map((b, i) => (
        <rect
          key={i}
          x={30 + i * 10.7}
          y={160 - Math.abs(b.h)}
          width="6"
          height={Math.abs(b.h)}
          rx="1.5"
          fill={i % 6 === 0 ? "oklch(0.78 0.14 65)" : "oklch(0.50 0.006 60)"}
          style={{
            transformOrigin: `${30 + i * 10.7 + 3}px 160px`,
            animation: `kg-grow 3.4s ${b.d}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes kg-grow { 0%{transform:scaleY(0.55)} 100%{transform:scaleY(1)} }
      `}</style>
    </svg>
  );
}

export const visuals = {
  "Deep-Hook": DeepHookVisual,
  "DhirPrint": DhirPrintVisual,
  "Krishi Gyan": KrishiGyanVisual,
};
