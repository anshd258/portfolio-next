"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { work } from "../lib/data";

export default function Work() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <SectionHeader
        id="work"
        index="01"
        kicker="Work"
        title="Three years of shipping."
        subtitle="From IEEE-published agri-tech to 2M-user AI products to multi-agent systems in production. Click a role to expand."
      />

      <Reveal className="border-t border-[color:var(--hairline)]">
        {work.map((w, i) => {
          const isOpen = open === i;
          return (
            <article
              key={w.company}
              className="border-b border-[color:var(--hairline)] group"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full grid grid-cols-12 gap-4 md:gap-8 items-start text-left py-8 md:py-10"
              >
                <div className="col-span-12 md:col-span-2 font-mono text-[12px] text-ink-500 tabular-nums pt-1">
                  {w.period}
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-ink-50 text-2xl md:text-3xl font-medium leading-tight">
                    {w.company}{" "}
                    <span className="text-ink-500 font-light">· {w.role}</span>
                  </h3>
                  <p className="mt-2 text-ink-400 text-[15.5px] max-w-[60ch] leading-[1.55]">
                    {w.summary}
                  </p>
                </div>
                <div className="hidden md:flex col-span-3 justify-end pt-2">
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--hairline-strong)] text-ink-300 group-hover:border-ember group-hover:text-ember transition-colors duration-200 ease-[var(--ease-out)]"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 260ms var(--ease-out)",
                      }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </div>
              </button>

              <div
                className="grid overflow-hidden"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 720ms var(--ease-out-expo)",
                }}
              >
                <div
                  className="min-h-0"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                    transition:
                      "opacity 520ms var(--ease-out-soft) 120ms, transform 620ms var(--ease-out-expo) 120ms",
                  }}
                >
                  <div className="grid grid-cols-12 gap-4 md:gap-8 pb-9 md:pb-12">
                    <div className="hidden md:block col-span-2" />
                    <ul className="col-span-12 md:col-span-7 space-y-3.5">
                      {w.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-ink-300 text-[15px] leading-[1.6]"
                          style={{
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(0)" : "translateY(4px)",
                            transition: `opacity 520ms var(--ease-out-soft) ${180 + j * 60}ms, transform 620ms var(--ease-out-expo) ${180 + j * 60}ms`,
                          }}
                        >
                          <span className="font-mono text-[11px] text-ember mt-1.5 select-none">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="col-span-12 md:col-span-3 flex flex-wrap content-start gap-1.5">
                      {w.stack.map((t, k) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] text-ink-400 border border-[color:var(--hairline)] rounded-full px-2.5 py-1"
                          style={{
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(0) scale(1)" : "translateY(4px) scale(0.96)",
                            transition: `opacity 460ms var(--ease-out-soft) ${260 + k * 36}ms, transform 520ms var(--ease-out-expo) ${260 + k * 36}ms`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </Reveal>
    </>
  );
}
