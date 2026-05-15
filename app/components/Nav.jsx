"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 12);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? "" : undefined}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(0px) saturate(100%)",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(0px) saturate(100%)",
        background: scrolled ? "color-mix(in oklch, var(--bg) 72%, transparent)" : "color-mix(in oklch, var(--bg) 0%, transparent)",
        borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        transition:
          "background 460ms var(--ease-out-soft), border-color 460ms var(--ease-out-soft), backdrop-filter 520ms var(--ease-out-soft), -webkit-backdrop-filter 520ms var(--ease-out-soft)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
          <span className="ember-dot" />
          <span className="font-mono text-[13px] tracking-tight text-ink-200 group-hover:text-ink-50">
            anshdeep<span className="text-ember">.</span>singh
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-[13px] text-ink-400 hover:text-ink-50 transition-colors duration-200 ease-[var(--ease-out)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href="mailto:anshd258@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] px-3.5 py-1.5 text-[12.5px] text-ink-100 hover:border-ember hover:text-ember"
              >
                <span className="size-1.5 rounded-full bg-ember shadow-[0_0_8px_var(--ember)]" />
                Open to work
              </a>
            </li>
          </ul>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--hairline)] text-ink-200"
        >
          <span aria-hidden className="font-mono text-[11px]">{open ? "ESC" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--hairline)] bg-[color:var(--bg)]">
          <ul className="mx-auto max-w-[1280px] px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-ink-200 hover:text-ember"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
