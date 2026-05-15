// 8 cards for the Shipped section. Each card has a custom SVG visualization
// in card__viz. SVGs use design-system tokens (var(--ember), oklch hues) so
// the accent tweak propagates automatically.
//
// Data model:
//   n        — numeric index ("01", "02", …)
//   capacity — mono micro-tag describing where/how it was built
//   org      — { name, href? } shown top-right of head; href makes it clickable
//   links    — array of { label, href } shown in the card footer
//              (for personal work this is where repos / demos / papers go)
//
// URL note: where the real public URL is unknown, the link falls back to
// github.com/anshd258 so visitors land somewhere meaningful. Swap in real URLs
// as they become available.

const CARDS = [
  {
    n: "01",
    capacity: "OPEN-SOURCED",
    org: { name: "Posha", href: "https://posha.com" },
    title: "Deep-Hook: multi-agent code review",
    desc: "LangGraph + LangChain orchestrator running on every GitLab MR. ChromaDB-backed RAG for project context. Per-MR cancellation: newest webhook preempts in-flight review. AWS + GraphQL.",
    tags: ["LangGraph", "RAG", "GitLab CI", "Open-source"],
    links: [
      { label: "Backend repo",   href: "https://github.com/anshd258" },
      { label: "Review library", href: "https://github.com/anshd258" },
    ],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="var(--ember)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--ember)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="oklch(0.72 0.007 60 / 0.45)" strokeWidth="1" fill="none">
          <path d="M70 80 L200 60 L330 90 L290 200 L130 220 Z" />
          <path d="M70 80 L290 200" />
          <path d="M200 60 L130 220" />
          <path d="M330 90 L130 220" />
        </g>
        <circle cx="200" cy="140" r="46" fill="url(#g1)" />
        <g fill="oklch(0.94 0.005 80)">
          <circle cx="70"  cy="80"  r="3.5" />
          <circle cx="200" cy="60"  r="3.5" />
          <circle cx="330" cy="90"  r="3.5" />
          <circle cx="290" cy="200" r="3.5" />
          <circle cx="130" cy="220" r="3.5" />
        </g>
        <circle cx="200" cy="140" r="5" fill="var(--ember)" />
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">LANGGRAPH · 5 AGENTS</text>
      </svg>
    ),
  },
  {
    n: "02",
    capacity: "INTERNAL TOOLING",
    org: { name: "Posha", href: "https://posha.com" },
    title: "Figma → Flutter, design-system-aware",
    desc: "Agentic code-gen that respects the Posha design system. Plus a Figma linter that nudges designers toward conformant structures (closes the loop both directions).",
    tags: ["Flutter", "Figma API", "Codegen"],
    links: [],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="oklch(0.72 0.007 60 / 0.55)" strokeWidth="1" fill="none">
          <rect x="40" y="60" width="100" height="160" rx="2" />
          <line x1="56" y1="84"  x2="124" y2="84" />
          <line x1="56" y1="100" x2="108" y2="100" />
          <rect x="56" y="118" width="68" height="36" rx="2" fill="oklch(0.22 0.012 50)" />
          <line x1="56" y1="168" x2="124" y2="168" />
          <line x1="56" y1="184" x2="100" y2="184" />
        </g>
        <g stroke="var(--ember)" strokeWidth="1" fill="var(--ember)">
          <line x1="150" y1="140" x2="240" y2="140" />
          <polygon points="240,136 248,140 240,144" />
        </g>
        <text x="175" y="130" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="var(--ember)">AGENT</text>
        <g fontFamily="Geist Mono" fontSize="9" fill="oklch(0.72 0.007 60 / 0.85)">
          <text x="260" y="78">Widget build(...) {`{`}</text>
          <text x="270" y="96">return Column(</text>
          <text x="280" y="114">children: [</text>
          <text x="290" y="132">PoshaCard(</text>
          <text x="300" y="150">title: &lsquo;...&rsquo;,</text>
          <text x="300" y="168">tokens.spacing.lg,</text>
          <text x="290" y="186">),</text>
          <text x="270" y="204">]);</text>
          <text x="260" y="222">{`}`}</text>
        </g>
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">DESIGN-SYSTEM-AWARE CODEGEN</text>
      </svg>
    ),
  },
  {
    n: "03",
    capacity: "FIRST NON-HARDWARE REVENUE",
    org: { name: "Posha", href: "https://posha.com" },
    title: "Grocery & Subscriptions",
    desc: "Posha's first revenue stream outside hardware. Flutter shell + native iOS/Android + Java engine integration: a commerce surface stitched across four runtimes.",
    tags: ["Flutter", "iOS", "Android", "Java"],
    links: [],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="oklch(0.72 0.007 60 / 0.5)" strokeWidth="1" fill="oklch(0.22 0.012 50 / 0.7)">
          <path d="M80 90 L320 90 L290 110 L50 110 Z" />
          <path d="M70 130 L310 130 L280 150 L40 150 Z" />
          <path d="M60 170 L300 170 L270 190 L30 190 Z" />
          <path d="M50 210 L290 210 L260 230 L20 230 Z" />
        </g>
        <g fontFamily="Geist Mono" fontSize="9" fill="oklch(0.94 0.005 80 / 0.9)" letterSpacing="1.5">
          <text x="92" y="104">FLUTTER · UI SHELL</text>
          <text x="82" y="144">JAVA ENGINE · NATIVE BRIDGE</text>
          <text x="72" y="184">iOS · SWIFT</text>
          <text x="62" y="224">ANDROID · KOTLIN</text>
        </g>
        <circle cx="340" cy="100" r="4" fill="var(--ember)" />
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">4 PLATFORMS · ONE COMMERCE FLOW</text>
      </svg>
    ),
  },
  {
    n: "04",
    capacity: "INTERNAL · LLM TOOLING",
    org: { name: "Posha", href: "https://posha.com" },
    title: "MCP tools + LLM evals",
    desc: "Exposes the internal commons package to LLM agents as tools. Structured, automated AI review with quality gates and regression catches.",
    tags: ["MCP", "Eval pipeline", "Python"],
    links: [],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="oklch(0.72 0.007 60 / 0.45)" strokeWidth="1" fill="none">
          <line x1="60"  y1="140" x2="150" y2="80"  />
          <line x1="60"  y1="140" x2="150" y2="140" />
          <line x1="60"  y1="140" x2="150" y2="200" />
          <line x1="150" y1="80"  x2="280" y2="60"  />
          <line x1="150" y1="80"  x2="280" y2="120" />
          <line x1="150" y1="140" x2="280" y2="120" />
          <line x1="150" y1="140" x2="280" y2="160" />
          <line x1="150" y1="200" x2="280" y2="160" />
          <line x1="150" y1="200" x2="280" y2="220" />
        </g>
        <g fill="oklch(0.94 0.005 80)"><circle cx="60" cy="140" r="6" /></g>
        <g fill="var(--ember)">
          <circle cx="150" cy="80"  r="3.5" />
          <circle cx="150" cy="140" r="3.5" />
          <circle cx="150" cy="200" r="3.5" />
        </g>
        <g fill="oklch(0.72 0.007 60)">
          <rect x="275" y="55"  width="10" height="10" />
          <rect x="275" y="115" width="10" height="10" />
          <rect x="275" y="155" width="10" height="10" />
          <rect x="275" y="215" width="10" height="10" />
        </g>
        <g fontFamily="Geist Mono" fontSize="9" fill="oklch(0.72 0.007 60 / 0.85)" letterSpacing="1">
          <text x="42"  y="160">LLM</text>
          <text x="130" y="70" fill="var(--ember)">MCP</text>
          <text x="295" y="60">commons.fs</text>
          <text x="295" y="120">commons.db</text>
          <text x="295" y="160">commons.iot</text>
          <text x="295" y="220">commons.auth</text>
        </g>
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">MCP TOOLS · LLM EVAL PIPELINE</text>
      </svg>
    ),
  },
  {
    n: "05",
    capacity: "IN PRODUCTION",
    org: { name: "NeoSurge", href: "https://neosurge.in" },
    title: "ZapPay: settle before they close the app",
    desc: "Instant mutual-fund redemption. Express.js + Flutter, microservices & perf across the platform. Sub-second settlement UX.",
    tags: ["Express.js", "Flutter", "Microservices"],
    links: [],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="oklch(0.72 0.007 60 / 0.4)" strokeWidth="1">
          <line x1="40" y1="140" x2="360" y2="140" />
        </g>
        <g stroke="oklch(0.72 0.007 60 / 0.7)" strokeWidth="1">
          <line x1="60"  y1="130" x2="60"  y2="150" />
          <line x1="150" y1="130" x2="150" y2="150" />
          <line x1="240" y1="130" x2="240" y2="150" />
          <line x1="340" y1="130" x2="340" y2="150" />
        </g>
        <g fontFamily="Geist Mono" fontSize="9" fill="oklch(0.72 0.007 60 / 0.85)" letterSpacing="1">
          <text x="46"  y="170">REQUEST</text>
          <text x="132" y="170">VALIDATE</text>
          <text x="220" y="170">SETTLE</text>
          <text x="316" y="170">RECEIPT</text>
        </g>
        <g fontFamily="Geist Mono" fontSize="10" fill="oklch(0.94 0.005 80)">
          <text x="44"  y="120">+0ms</text>
          <text x="134" y="120">+90ms</text>
          <text x="224" y="120">+340ms</text>
          <text x="324" y="120">+820ms</text>
        </g>
        <path d="M60 100 Q 200 40 340 100" stroke="var(--ember)" strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
        <circle cx="60"  cy="100" r="3" fill="var(--ember)" />
        <circle cx="340" cy="100" r="3" fill="var(--ember)" />
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">INSTANT MUTUAL-FUND REDEMPTION</text>
      </svg>
    ),
  },
  {
    n: "06",
    capacity: "2M+ MAU IN PRODUCTION",
    org: { name: "Stimuler", href: "https://stimuler.tech" },
    title: "Translation system & observability",
    desc: "Core contributor at 2M+ MAU. Architected instrumentation that doubles as production health signal and ML training data, same pipeline, two consumers.",
    tags: ["Telemetry", "Pipelines", "Python"],
    links: [],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="oklch(0.72 0.007 60 / 0.55)" strokeWidth="1" fill="none">
          <path d="M20 140 L40 140 L50 90 L60 190 L70 110 L80 170 L90 140 L110 140 L120 80 L130 200 L140 100 L150 180 L160 140 L180 140 L190 60 L200 220 L210 100 L220 180 L230 140 L250 140 L260 90 L270 190 L280 110 L290 170 L300 140 L320 140 L330 100 L340 180 L350 140 L380 140" />
        </g>
        <g stroke="var(--ember)" strokeWidth="1.4" fill="none" opacity="0.85">
          <path d="M20 140 L40 140 L50 100 L60 180 L70 120 L80 160 L90 140 L110 140 L120 90 L130 190 L140 110 L150 170 L160 140 L180 140 L190 70 L200 210 L210 110 L220 170 L230 140 L250 140 L260 100 L270 180 L280 120 L290 160 L300 140 L320 140 L330 110 L340 170 L350 140 L380 140" />
        </g>
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">TELEMETRY = HEALTH SIGNAL × TRAINING DATA</text>
      </svg>
    ),
  },
  {
    n: "07",
    capacity: "PERSONAL · GENERATIVE DESIGN",
    org: { name: "DhirPrint" },
    title: "DhirPrint: generative design platform",
    desc: "Nest.js + Next.js + ShadCN. OTP auth, smart chat, Gemini-driven generation. The print-on-demand interface as a conversation.",
    tags: ["Nest.js", "Next.js", "Gemini"],
    links: [
      { label: "Frontend repo", href: "https://github.com/anshd258" },
      { label: "Backend repo",  href: "https://github.com/anshd258" },
      { label: "Live demo",     href: "https://github.com/anshd258" },
    ],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="oklch(0.72 0.007 60 / 0.4)" strokeWidth="1" fill="none">
          <rect x="50"  y="60"  width="80" height="80" />
          <rect x="160" y="60"  width="80" height="80" />
          <rect x="270" y="60"  width="80" height="80" />
          <rect x="50"  y="160" width="80" height="80" />
          <rect x="160" y="160" width="80" height="80" />
          <rect x="270" y="160" width="80" height="80" />
        </g>
        <g fill="oklch(0.94 0.005 80 / 0.85)"><circle cx="90" cy="100" r="14" /></g>
        <g fill="color-mix(in oklab, var(--ember) 85%, transparent)">
          <rect x="180" y="80" width="40" height="40" transform="rotate(15 200 100)" />
        </g>
        <g stroke="oklch(0.94 0.005 80 / 0.8)" strokeWidth="1.4" fill="none">
          <path d="M280 130 L340 70" />
          <path d="M280 70 L340 130" />
        </g>
        <g fill="oklch(0.72 0.007 60 / 0.6)">
          <rect x="60" y="180" width="60" height="6" />
          <rect x="60" y="194" width="40" height="6" />
          <rect x="60" y="208" width="50" height="6" />
        </g>
        <g stroke="oklch(0.94 0.005 80 / 0.6)" strokeWidth="1" fill="none">
          <circle cx="200" cy="200" r="22" />
          <circle cx="200" cy="200" r="14" />
        </g>
        <g fill="color-mix(in oklab, var(--ember) 40%, transparent)">
          <polygon points="290,180 350,180 320,230" />
        </g>
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">GEMINI-DRIVEN GENERATIVE DESIGN</text>
      </svg>
    ),
  },
  {
    n: "08",
    capacity: "PERSONAL · IEEE-PUBLISHED",
    org: { name: "Krishi Gyan" },
    title: "Krishi Gyan: agri-tech, sensor + ML",
    desc: "IEEE-published. Flutter + Firebase + TensorFlow + real-time spectroscopic soil sensors. Cell-level signal → recommendation, on a phone.",
    tags: ["Flutter", "TensorFlow", "IEEE"],
    links: [
      { label: "App repo",   href: "https://github.com/Krishi-Gyan" },
      { label: "IEEE paper", href: "https://github.com/Krishi-Gyan" },
    ],
    viz: (
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g>
          <rect x="40"  y="200" width="14" height="40"  fill="oklch(0.66 0.18 35)" />
          <rect x="60"  y="180" width="14" height="60"  fill="oklch(0.72 0.17 50)" />
          <rect x="80"  y="150" width="14" height="90"  fill="oklch(0.78 0.16 75)" />
          <rect x="100" y="120" width="14" height="120" fill="oklch(0.82 0.15 100)" />
          <rect x="120" y="140" width="14" height="100" fill="oklch(0.78 0.16 130)" />
          <rect x="140" y="170" width="14" height="70"  fill="oklch(0.74 0.16 165)" />
          <rect x="160" y="190" width="14" height="50"  fill="oklch(0.7 0.15 200)" />
          <rect x="180" y="210" width="14" height="30"  fill="oklch(0.66 0.16 240)" />
        </g>
        <g stroke="oklch(0.72 0.007 60 / 0.5)" strokeWidth="1" fill="none">
          <path d="M230 130 L370 130" />
          <path d="M230 130 L230 230 L370 230 L370 130" />
          <line x1="230" y1="160" x2="370" y2="160" />
          <line x1="230" y1="190" x2="370" y2="190" />
        </g>
        <g fontFamily="Geist Mono" fontSize="9" fill="oklch(0.72 0.007 60 / 0.75)" letterSpacing="1">
          <text x="238" y="152">pH 6.8</text>
          <text x="238" y="182">N · 18 ppm</text>
          <text x="238" y="212">moist 32%</text>
        </g>
        <circle cx="300" cy="110" r="5" fill="var(--ember)" />
        <line x1="300" y1="115" x2="300" y2="130" stroke="var(--ember)" strokeWidth="1" />
        <text x="20" y="262" fontFamily="Geist Mono" fontSize="9" letterSpacing="2" fill="oklch(0.54 0.008 55)">SPECTROSCOPIC SOIL SENSING · TF</text>
      </svg>
    ),
  },
];

export default CARDS;
