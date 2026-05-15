export const profile = {
  name: "Anshdeep Singh",
  role: "Full-Stack & AI Software Engineer",
  rank: "SDE-1",
  location: "Bengaluru, India",
  email: "anshd258@gmail.com",
  phone: "+91 79824 91262",
  github: "https://github.com/anshd258",
  linkedin: "https://www.linkedin.com/in/ansh-deep/",
  resume: "/Anshdeep_Singh_Resume.pdf",

  identity: [
    "Currently SDE-1 at Posha, Best Quarterly Performer.",
    "I ship agentic systems, multi-agent code review, and AI tooling in production.",
    "Full-stack ownership across Mobile, FastAPI, Next.js, and AWS.",
  ],

  shortBio:
    "I build the boring parts of agentic systems — the parts that actually have to work. Multi-agent orchestration, MCP tools, evaluation pipelines, and the full-stack surface that wraps them.",
};

export const work = [
  {
    company: "Posha",
    role: "SDE-1",
    period: "Nov 2025 — Present",
    location: "Bengaluru",
    summary:
      "Best Quarterly Performer five months in. Full-stack ownership across all four major repos — IoT device, mobile companions, and AI tooling.",
    bullets: [
      "Spearheaded a Figma-to-Flutter agentic, design-system-aware code generation system; built a complementary Figma linter that nudges designers toward design-system-conformant structures.",
      "Designed and shipped an internal multi-agent code review system (similar to Deep-Hook), now in production across every major repo; deployed webhooks and the GraphQL backend on AWS.",
      "Shipped MCP tools that expose the internal commons package to LLM agents, plus an extensible MCP-style evaluation pipeline for structured AI review and quality rules.",
      "Delivered Grocery and Subscriptions end-to-end — the company's first non-hardware revenue stream — spanning Flutter, native iOS/Android, and Java engine integration.",
    ],
    stack: ["Flutter", "Java", "Python", "LangGraph", "MCP", "AWS", "GraphQL"],
  },
  {
    company: "NeoSurge",
    role: "SDE-1 · Short-term",
    period: "Aug 2025 — Nov 2025",
    location: "Remote",
    summary:
      "Microservices, mutual-fund products, and loan-against-MF — across a Node + Flutter stack.",
    bullets: [
      "Drove scalable microservices improvements and performance optimizations across the platform, on JavaScript and the Express.js ecosystem.",
      "Spearheaded ZapPay — instant mutual fund redemption — with robust backend API integration and a Flutter mobile app.",
      "Engineered core TickFunds features for Sernet Tech, including Loan Against Mutual Fund (LAMF) and advanced financial operations on Express and Flutter.",
    ],
    stack: ["Express.js", "JavaScript", "Microservices", "Flutter"],
  },
  {
    company: "Stimuler",
    role: "SDE Intern",
    period: "Dec 2024 — Jul 2025",
    location: "Remote",
    summary:
      "Mobile and generative-AI developer on India's Best AI App of 2023, serving 2M+ users.",
    bullets: [
      "Core contributor on the highly-available translation system; held the production path for 2M+ active users.",
      "Architected app-wide instrumentation and observability telemetry — a production health signal and an ML data source for product decisions.",
    ],
    stack: ["Flutter", "Python", "Generative AI", "Observability"],
  },
];

export const projects = [
  {
    title: "Deep-Hook",
    tagline: "Multi-agent code review platform",
    period: "Mar 2026",
    status: "Open source · in production",
    description:
      "A LangGraph + LangChain orchestration engine that runs structured code review on GitLab merge requests over webhooks. Per-project YAML configs, pluggable MCP servers, ChromaDB-backed RAG for project context, and a singleton task manager keyed on (project_id, mr_iid) so the newest event preempts in-flight reviews.",
    highlights: [
      "Async task lifecycle with per-MR cancellation",
      "Diff-conversion layer (asset filtering, truncation)",
      "Bot-comment state machine: loader → final analysis",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "LangChain", "ChromaDB", "Docker", "uv"],
    links: [
      { label: "Backend repo", href: "https://github.com/anshd258" },
      { label: "Review library", href: "https://github.com/anshd258" },
    ],
  },
  {
    title: "DhirPrint",
    tagline: "Full-stack AI generative platform",
    period: "Sep 2024",
    status: "Live",
    description:
      "An AI-driven generative design engine using Gemini that adapts custom printing outputs to product size and user specifications. Full-stack Nest.js + Next.js with ShadCN UI, OTP login, and smart chat woven into the order flow.",
    highlights: [
      "Gemini-backed design generation",
      "OTP auth + chat in the order flow",
      "ShadCN UI on Next.js, Nest.js backend",
    ],
    stack: ["Next.js", "Nest.js", "Gemini", "ShadCN UI", "TypeScript"],
    links: [{ label: "Live demo", href: "#" }],
  },
  {
    title: "Krishi Gyan",
    tagline: "IEEE-published real-time agri-tech app",
    period: "Aug 2024",
    status: "IEEE paper",
    description:
      "Integrated spectroscopic sensors with a Flutter + Firebase app for real-time soil nutrient analysis. A TensorFlow recommendation engine optimizes crop selection and nutrient management for the readings collected.",
    highlights: [
      "Spectroscopic sensor integration",
      "TensorFlow recommendation engine",
      "Published IEEE paper",
    ],
    stack: ["Flutter", "Firebase", "TensorFlow", "Embedded"],
    links: [{ label: "IEEE paper", href: "#" }],
  },
];

export const stack = {
  Languages: ["Python", "TypeScript", "JavaScript", "Dart", "Java", "C++", "SQL"],
  Backend: [
    "FastAPI",
    "Nest.js",
    "Express.js",
    "Microservices",
    "REST",
    "GraphQL",
    "CI/CD",
  ],
  "Mobile & Frontend": [
    "Flutter",
    "Next.js",
    "React",
    "ShadCN UI",
    "Play Store",
    "App Store",
  ],
  "AI & Agents": [
    "LangChain",
    "LangGraph",
    "MCP",
    "RAG",
    "Semantic Search",
    "ChromaDB",
    "TensorFlow",
    "Gemini",
    "Claude",
    "Ollama",
  ],
  "Infra & Cloud": [
    "Docker",
    "Redis",
    "AWS",
    "ECS",
    "Fargate",
    "EC2",
    "GitHub Actions",
  ],
};

export const recognition = {
  awards: [
    { title: "1st Prize — Lumos Hackathon", org: "IIIT-Delhi" },
    { title: "2nd Prize — Solana Hack Delhi", org: "IIT-Delhi" },
    { title: "Best App Developer", org: "GDG GTBIT" },
  ],
  leadership: [
    {
      title: "Tech Lead, Google Developer Group on Campus",
      org: "GTBIT · Aug 2023 — Aug 2024",
    },
  ],
  education: {
    school: "Guru Gobind Singh Indraprastha University (GTBIT)",
    degree: "B.Tech, Computer Science & Engineering",
    grade: "CGPA 9.0 / 10",
    period: "2021 — 2025",
  },
};

export const stats = [
  { label: "users served in production", value: "2M+" },
  { label: "production repos owned", value: "4" },
  { label: "years shipping", value: "3" },
  { label: "national awards", value: "3" },
];
