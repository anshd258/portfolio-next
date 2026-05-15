import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { recognition } from "../lib/data";

export default function Recognition() {
  const { awards, leadership, education } = recognition;

  return (
    <>
      <SectionHeader
        id="recognition"
        index="04"
        kicker="Recognition"
        title="Receipts."
        subtitle="National hackathons, an IEEE paper, and the Google Developer Group at GTBIT — earned, not collected."
      />

      <Reveal>
        <div className="grid grid-cols-12 gap-y-14 gap-x-6 md:gap-x-16 border-t border-[color:var(--hairline)] pt-12">
          {/* Awards */}
          <div className="col-span-12 md:col-span-5">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-ember mb-5">
              Awards
            </h3>
            <ul className="space-y-4">
              {awards.map((a, i) => (
                <li
                  key={a.title}
                  className="flex items-baseline gap-3 pb-4 border-b border-[color:var(--hairline)] last:border-b-0"
                >
                  <span className="font-mono text-[11px] text-ink-600 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="text-ink-100 text-[15.5px] leading-tight">
                      {a.title}
                    </div>
                    <div className="text-ink-500 text-[13px] mt-1 font-mono">
                      {a.org}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-ember mb-5">
              Leadership
            </h3>
            <ul className="space-y-4">
              {leadership.map((l) => (
                <li key={l.title}>
                  <div className="text-ink-100 text-[15.5px] leading-tight">
                    {l.title}
                  </div>
                  <div className="text-ink-500 text-[13px] mt-1 font-mono">
                    {l.org}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-ember mb-5">
              Education
            </h3>
            <div>
              <div className="text-ink-100 text-[15.5px] leading-snug">
                {education.degree}
              </div>
              <div className="text-ink-300 text-[14px] mt-1">
                {education.school}
              </div>
              <div className="flex items-center gap-3 mt-3 font-mono text-[12px]">
                <span className="text-ember">{education.grade}</span>
                <span className="h-px flex-1 bg-[color:var(--hairline)]" />
                <span className="text-ink-500">{education.period}</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
