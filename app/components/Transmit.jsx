"use client";
import { useEffect, useRef, useState } from "react";
import useRevealOnView from "./useRevealOnView";

// Transmit — terminal + contact list. The terminal is *client-side only* —
// no email is sent. The contact list carries the real intent (mailto / open).

const CONTACTS = [
  { l: "EMAIL",     v: "anshd258@gmail.com",                       a: "COPY →", href: "mailto:anshd258@gmail.com",          copy: "anshd258@gmail.com" },
  { l: "GITHUB",    v: "github.com/anshd258",                      a: "OPEN ↗", href: "https://github.com/anshd258" },
  { l: "LINKEDIN",  v: "in/ansh-deep",                             a: "OPEN ↗", href: "https://linkedin.com/in/ansh-deep" },
  { l: "DEEP-HOOK", v: "multi-agent code review, open-sourced",    a: "OPEN ↗", href: "https://github.com/anshd258" },
  { l: "CITY",      v: "Bengaluru, IN",                            a: "IST +05:30" },
];

export default function Transmit() {
  const headRef = useRevealOnView(0);
  const leadRef = useRevealOnView(0);
  const termRef = useRevealOnView(80);
  const contactsRef = useRevealOnView(160);

  return (
    <section id="transmit" className="section transmit">
      <div className="wrap">
        <div ref={headRef} className="section__head reveal">
          <div>
            <div className="kicker">
              <span className="idx">05</span><span className="dot" />
              TRANSMIT · NOT A FORM
            </div>
          </div>
        </div>

        <div className="transmit__grid">
          <div>
            <h3 ref={leadRef} className="transmit__lead reveal">
              Send a signal. <br />
              <span className="mute">I read every message. Reply within</span>{" "}
              <em>~24h</em>.
            </h3>
            <div ref={termRef} className="reveal">
              <Terminal />
            </div>
          </div>

          <div ref={contactsRef} className="transmit__contacts reveal">
            {CONTACTS.map((c) => <ContactRow key={c.l} c={c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function timeTag() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  });
}

// Soft caps so a determined visitor can't grow this component without bound.
const INPUT_MAX = 500;
const LOG_MAX = 40;

function Terminal() {
  const [log, setLog] = useState([
    { p: "$", t: "init transmit --to=anshd258@gmail.com" },
    { p: "✓", t: "socket open · listening", ok: true },
    { p: "»", t: "type a message and hit ↵" },
  ]);
  const [value, setValue] = useState("");
  const [sending, setSending] = useState(false);
  const inputRef = useRef(null);
  const logRef = useRef(null);

  // Append a line and trim the log so memory stays bounded under prolonged use.
  const append = (entry) =>
    setLog((l) => (l.length >= LOG_MAX ? [...l.slice(-LOG_MAX + 1), entry] : [...l, entry]));

  // Auto-scroll the log when it grows
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  const onSubmit = (e) => {
    e.preventDefault();
    const v = value.trim().slice(0, INPUT_MAX);
    if (!v || sending) return;
    append({ p: "▸", t: v });
    setValue("");
    setSending(true);
    const t1 = setTimeout(() => append({ p: "…", t: "routing to anshd258@gmail.com" }), 280);
    const t2 = setTimeout(() => {
      append({ p: "✓", t: `relayed · ${timeTag()} IST · expect reply within ~24h`, ok: true });
      setSending(false);
      inputRef.current?.focus();
    }, 980);
    // If the user unmounts mid-flight (route change), don't keep timers alive.
    return () => { clearTimeout(t1); clearTimeout(t2); };
  };

  return (
    <div className="terminal" aria-label="Transmit terminal">
      <div className="terminal__bar">
        <span>anshd@porti · transmit</span>
        <span>● live</span>
      </div>
      <div ref={logRef} className="terminal__log">
        {log.map((line, i) => (
          <div key={i} className={`line ${line.ok ? "ok" : ""}`}>
            <span className="p">{line.p}</span>
            <span className="t">{line.t}</span>
          </div>
        ))}
      </div>
      <form className="terminal__form" onSubmit={onSubmit} autoComplete="off">
        <span className="prompt">▸</span>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, INPUT_MAX))}
          maxLength={INPUT_MAX}
          placeholder="hello, i have a thing to build…"
          aria-label="Your message"
          disabled={sending}
        />
        <button className="send" type="submit" disabled={sending}>
          {sending ? "SENDING…" : "SEND ↵"}
        </button>
      </form>
    </div>
  );
}

function ContactRow({ c }) {
  const [actionText, setActionText] = useState(c.a);
  const onClick = async (e) => {
    if (c.copy) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(c.copy);
        setActionText("COPIED ✓");
        setTimeout(() => setActionText(c.a), 1400);
      } catch {
        // fall back to the mailto if clipboard isn't available
        if (c.href) window.location.href = c.href;
      }
    }
  };
  const Tag = c.href ? "a" : "div";
  return (
    <Tag
      className="contact-row"
      href={c.href}
      target={c.href && !c.href.startsWith("mailto:") ? "_blank" : undefined}
      rel={c.href && !c.href.startsWith("mailto:") ? "noopener" : undefined}
      onClick={c.copy ? onClick : undefined}
    >
      <span className="l">{c.l}</span>
      <span className="v">{c.v}</span>
      <span className="a">{actionText}</span>
    </Tag>
  );
}
