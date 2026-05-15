"use client";
import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { stack } from "../lib/data";

export default function Stack() {
  // Marquee strip — flatten all tech for the running ribbon.
  const all = Object.values(stack).flat();
  const ribbon = [...all, ...all]; // doubled for seamless loop

  return (
    <>
      <SectionHeader
        id="stack"
        index="03"
        kicker="Stack"
        title="What I reach for."
        subtitle="A working set I’ve shipped with — not a list of things I’ve seen on a slide."
      />

      <Reveal>
        <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-10 border-t border-[color:var(--hairline)] pt-12">
          {Object.entries(stack).map(([category, items], i) => (
            <div
              key={category}
              className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-5"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-ink-600 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-ember">
                  {category}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 text-ink-200 text-[16px] leading-[1.35]">
                {items.map((item, k) => (
                  <li key={item} className="font-medium">
                    {item}
                    {k < items.length - 1 && (
                      <span className="text-ink-700 ml-3 select-none">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Ribbon — linear constant motion is the right easing for marquee */}
      <div className="marquee-wrap mt-24 md:mt-28 -mx-6 md:-mx-10 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />
        <div className="marquee-track flex gap-10 whitespace-nowrap py-6 select-none">
          {ribbon.map((t, i) => (
            <span
              key={i}
              className={`font-mono text-[28px] md:text-[36px] tracking-tight ${
                i % 7 === 3 ? "text-ember" : "text-ink-800"
              }`}
            >
              {t}
              <span className="text-ink-900 ml-10">/</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
