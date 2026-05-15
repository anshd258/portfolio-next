"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work",     idx: "01", label: "WORK" },
  { href: "#shipped",  idx: "02", label: "SHIPPED" },
  { href: "#stack",    idx: "03", label: "STACK" },
  { href: "#signal",   idx: "04", label: "SIGNAL" },
  { href: "#transmit", idx: "05", label: "TRANSMIT" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <span className="mark" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="3"  cy="9"  r="1.5" fill="currentColor" />
            <circle cx="15" cy="9"  r="1.5" fill="currentColor" />
            <circle cx="9"  cy="3"  r="1.5" fill="currentColor" />
            <circle cx="9"  cy="15" r="1.5" fill="currentColor" />
            <path
              d="M3 9 L9 3 L15 9 L9 15 Z"
              stroke="currentColor"
              strokeWidth="0.6"
              opacity="0.55"
              fill="none"
            />
          </svg>
        </span>
        A.S. · PORTFOLIO ’26
      </div>

      <div className="nav__links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            <span>{l.idx}</span>{l.label}
          </a>
        ))}
      </div>

      <div className="nav__meta">
        <Clock />
        <span className="status">
          <span className="status-dot" />
          AVAILABLE
        </span>
      </div>
    </nav>
  );
}

function Clock() {
  const [time, setTime] = useState("IST --:--");
  useEffect(() => {
    const fmt = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(`IST ${t}`);
    };
    fmt();
    const id = setInterval(fmt, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}
