import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-[color:var(--hairline)] pt-12 pb-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="leading-[0.85]">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-600 mb-4">
            Built by hand · {new Date().getFullYear()}
          </p>
          <p className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold tracking-tight text-ink-100">
            Anshdeep<span className="text-ember">.</span>
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2.5 text-[13.5px]">
          <a href={`mailto:${profile.email}`} className="text-ink-200 hover:text-ember uline">
            {profile.email}
          </a>
          <div className="flex items-center gap-4 text-ink-500">
            <a href={profile.github} target="_blank" rel="noopener" className="hover:text-ink-100">GitHub</a>
            <span className="text-ink-800">·</span>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-ink-100">LinkedIn</a>
            <span className="text-ink-800">·</span>
            <a href={profile.resume} target="_blank" rel="noopener" className="hover:text-ink-100">Résumé</a>
          </div>
          <p className="text-ink-600 font-mono text-[11px] mt-2">
            {profile.location} · GMT+5:30
          </p>
        </div>
      </div>
    </footer>
  );
}
