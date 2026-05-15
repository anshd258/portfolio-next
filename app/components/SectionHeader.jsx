import { Reveal } from "./Reveal";
import MaskReveal from "./MaskReveal";

export default function SectionHeader({ index, kicker, title, subtitle, id }) {
  return (
    <header className="mb-16 md:mb-24">
      <span id={id} className="block -mt-24 pt-24 pointer-events-none" aria-hidden />

      <Reveal className="flex items-center gap-3 mb-7">
        <span className="font-mono text-[11px] text-ink-600 tabular-nums">
          {index}
        </span>
        <span className="h-px w-10 bg-[color:var(--hairline-strong)]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
          {kicker}
        </span>
      </Reveal>

      <h2
        className="font-medium text-ink-50 max-w-[20ch] leading-[0.98] tracking-[-0.035em]"
        style={{ fontSize: "clamp(2.25rem, 5.4vw, 4.5rem)" }}
      >
        <MaskReveal per="word" stagger={70} duration={1000} trigger="view">
          {title}
        </MaskReveal>
      </h2>

      {subtitle && (
        <Reveal>
          <p className="mt-5 md:mt-6 max-w-[58ch] text-ink-400 text-[17px] md:text-[18px] leading-[1.55]">
            {subtitle}
          </p>
        </Reveal>
      )}
    </header>
  );
}
