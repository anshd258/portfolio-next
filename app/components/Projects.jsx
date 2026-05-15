"use client";
import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects } from "../lib/data";
import { visuals } from "./ProjectVisual";

export default function Projects() {
  return (
    <>
      <SectionHeader
        id="projects"
        index="02"
        kicker="Selected projects"
        title="Three I’m proud of."
        subtitle="A multi-agent code review engine, a generative-print platform, and an IEEE-published agri-tech system. Each one shipped — none of them demos."
      />

      <div className="flex flex-col gap-24 md:gap-36">
        {projects.map((p, i) => {
          const Visual = visuals[p.title];
          const flip = i % 2 === 1;
          return (
            <Reveal key={p.title}>
              <article className="project-row grid grid-cols-12 gap-6 md:gap-10 items-start">
                {/* Visual */}
                <div
                  className={`col-span-12 md:col-span-7 ${flip ? "md:order-2" : ""}`}
                >
                  <div className="relative aspect-[16/9] rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--bg-elev)] overflow-hidden">
                    {/* Index watermark — typographic, generous */}
                    <div className="absolute top-4 left-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-600">
                      {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </div>
                    <div className="absolute top-4 right-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                      {p.status}
                    </div>
                    <div className="absolute inset-0 grid place-items-center px-6 py-12">
                      {Visual && <Visual />}
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div className={`col-span-12 md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-mono text-[11px] text-ink-500 tabular-nums">{p.period}</span>
                    <span className="h-px flex-1 bg-[color:var(--hairline)]" />
                  </div>
                  <h3 className="project-title text-ink-100 text-3xl md:text-4xl font-medium leading-[1.05] tracking-tight transition-colors duration-300 ease-[var(--ease-out)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-ember text-[14px] font-mono">
                    {p.tagline}
                  </p>
                  <p className="mt-5 text-ink-300 text-[15.5px] leading-[1.6]">
                    {p.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-ink-400 text-[14.5px]"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" className="mt-1 flex-none text-ember" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] text-ink-400 border border-[color:var(--hairline)] rounded-full px-2.5 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex items-center gap-2 text-ink-100 hover:text-ember text-[14px]"
                      >
                        <span className="uline">{l.label}</span>
                        <svg
                          width="13" height="13" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="project-arrow transition-transform duration-300 ease-[var(--ease-out)]"
                        >
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
