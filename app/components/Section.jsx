// One central spacing system. Variant controls vertical breathing room —
// matches narrative weight, not a uniform py- token everywhere.
//
// Rhythm:
//   showcase  → Hero, Projects, Contact (entrances + destinations)
//   normal    → Work (the spine of the page)
//   reference → Stack, Recognition (denser, more compact)

const variants = {
  showcase: "pt-20 md:pt-32 pb-24 md:pb-40",
  normal:   "pt-12 md:pt-20 pb-20 md:pb-28",
  reference:"pt-16 md:pt-24 pb-16 md:pb-24",
};

export default function Section({ children, variant = "normal", className = "", id }) {
  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      {children}
    </section>
  );
}

// Lightweight typographic break between major movements. Lines draw outward
// from the ember dot when the break enters the viewport.
export function SectionBreak({ from, to }) {
  return (
    <div
      aria-hidden
      className="section-break flex items-center gap-4 py-4 md:py-6 select-none"
    >
      <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-ink-700">
        end · {from}
      </span>
      <span className="section-break-rule left flex-1 h-px bg-[color:var(--hairline)]" />
      <span className="ember-dot" />
      <span className="section-break-rule right flex-1 h-px bg-[color:var(--hairline)]" />
      <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-ink-500">
        next · {to}
      </span>
    </div>
  );
}
