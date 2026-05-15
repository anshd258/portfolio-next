"use client";
import { useState } from "react";
import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
import { profile } from "../lib/data";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      subject: form.subject.value || "Hello from your portfolio",
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Network error");
      const json = await res.json();
      if (json.error) throw new Error(json.error.message || "Send failed");
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4500);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Try emailing me directly.");
    }
  };

  return (
    <>
      <SectionHeader
        id="contact"
        index="05"
        kicker="Contact"
        title="Let’s build something."
        subtitle="SDE-I roles, AI-infra teams, or anything that lives at the intersection of agentic systems and full-stack craft."
      />

      <Reveal>
        <div className="grid grid-cols-12 gap-y-14 gap-x-6 md:gap-x-16 border-t border-[color:var(--hairline)] pt-12">
          {/* Direct */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                Direct
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="block mt-3 text-ink-50 text-[26px] md:text-[32px] font-medium tracking-tight uline w-fit"
              >
                {profile.email}
              </a>
              <p className="mt-3 text-ink-400 text-[14.5px] max-w-[42ch] leading-[1.55]">
                Fastest way. I read every message and reply within a day.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-[14.5px]">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between py-3 border-b border-[color:var(--hairline)] text-ink-200 hover:text-ember group"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-ink-600">01</span>
                  LinkedIn
                </span>
                <span className="text-ink-500 group-hover:text-ember">linkedin.com/in/ansh-deep ↗</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between py-3 border-b border-[color:var(--hairline)] text-ink-200 hover:text-ember group"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-ink-600">02</span>
                  GitHub
                </span>
                <span className="text-ink-500 group-hover:text-ember">github.com/anshd258 ↗</span>
              </a>
              <div className="flex items-center justify-between py-3 text-ink-200">
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-ink-600">03</span>
                  Phone
                </span>
                <span className="text-ink-500 font-mono text-[13px]">{profile.phone}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="col-span-12 md:col-span-7 flex flex-col gap-5">
            <Field label="Your email" name="email" type="email" placeholder="you@company.com" required />
            <Field label="Subject" name="subject" type="text" placeholder="role at Acme — quick chat?" />
            <Field
              label="Message"
              name="message"
              as="textarea"
              placeholder="A line or two on the role, the team, what you’re trying to ship."
              required
            />

            <div className="flex items-center gap-4 mt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-ink-50 text-ink-950 px-6 py-3 text-[14px] font-medium hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                data-press
              >
                <span className="transition-opacity duration-200" style={{ opacity: status === "sending" ? 0 : 1 }}>
                  {status === "sent" ? "Sent — talk soon" : "Send message"}
                </span>
                {status === "sending" && (
                  <span className="absolute inset-0 grid place-items-center text-[13px]">
                    Sending…
                  </span>
                )}
                <svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </button>

              <div
                aria-live="polite"
                className="text-[13px] font-mono"
                style={{
                  color: status === "error" ? "oklch(0.72 0.13 25)" : "var(--ember)",
                  opacity: status === "sent" || status === "error" ? 1 : 0,
                  transition: "opacity 240ms var(--ease-out)",
                }}
              >
                {status === "sent" && "Message received."}
                {status === "error" && (errorMsg || "Couldn’t send — try email directly.")}
              </div>
            </div>
          </form>
        </div>
      </Reveal>
    </>
  );
}

function Field({ label, name, type = "text", as = "input", placeholder, required }) {
  const id = `f-${name}`;
  const Cmp = as;
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
        {label}{required && <span className="text-ember"> *</span>}
      </span>
      <Cmp
        id={id}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? 5 : undefined}
        placeholder={placeholder}
        required={required}
        className="bg-transparent border-b border-[color:var(--hairline-strong)] focus:border-ember text-ink-50 placeholder:text-ink-700 text-[16px] py-2.5 outline-none transition-colors duration-200 ease-[var(--ease-out)] resize-none"
        style={{ borderRadius: 0 }}
      />
    </label>
  );
}
