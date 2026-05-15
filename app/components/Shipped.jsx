"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CARDS from "./ShipCards";

// Shipped — horizontal pinned scroll. Vertical scroll drives a horizontal rail
// translateX. Math identical to the reference: outer.height = innerHeight + travel,
// p = clamp(-outer.top / travel, 0, 1).

export default function Shipped() {
  const outerRef = useRef(null);
  const stickyRef = useRef(null);
  const railRef = useRef(null);
  const [travel, setTravel] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  // Measure travel and set outer height so vertical scroll maps 1:1 to horizontal travel.
  useEffect(() => {
    const measure = () => {
      const rail = railRef.current;
      const sticky = stickyRef.current;
      const outer = outerRef.current;
      if (!rail || !sticky || !outer) return;
      const tr = Math.max(0, rail.scrollWidth - sticky.clientWidth);
      setTravel(tr);
      outer.style.height = `${window.innerHeight + tr}px`;
    };
    measure();
    let id;
    const onResize = () => {
      clearTimeout(id);
      id = setTimeout(measure, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, (p) => -p * travel);

  // Active progress dot — round-nearest index from progress.
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (p) => {
      const i = Math.min(CARDS.length - 1, Math.round(p * (CARDS.length - 1)));
      setActiveIdx(i);
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <section id="shipped" className="section shipped" aria-label="Projects in production">
      <div ref={outerRef} className="shipped__outer">
        <div ref={stickyRef} className="shipped__sticky">
          <div className="shipped__head wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div>
              <div className="kicker">
                <span className="idx">02</span><span className="dot" />
                SHIPPED · IN PRODUCTION
              </div>
              <h2 className="section__title">Eight things you can <em>actually use</em>.</h2>
            </div>
            <div className="shipped__progress" aria-hidden="true">
              {CARDS.map((_, i) => (
                <span key={i} className={i === activeIdx ? "active" : ""} />
              ))}
            </div>
          </div>

          <div className="shipped__track">
            <motion.div ref={railRef} className="shipped__rail" style={{ x }}>
              {CARDS.map((c, i) => (
                <article key={i} className="card">
                  <header className="card__head">
                    <div className="card__head-l">
                      <span className="n">{c.n}</span>
                      <span className="card__cap">{c.capacity}</span>
                    </div>
                    <span className="org">
                      {c.org.href ? (
                        <a
                          className="card__org-link"
                          href={c.org.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${c.org.name} in a new tab`}
                        >
                          {c.org.name}<span aria-hidden="true"> ↗</span>
                        </a>
                      ) : (
                        c.org.name
                      )}
                    </span>
                  </header>
                  <div className="card__viz">{c.viz}</div>
                  <div className="card__body">
                    <h3 className="card__title">{c.title}</h3>
                    <p className="card__desc">{c.desc}</p>
                    <div className="card__meta">
                      {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  {c.links?.length > 0 && (
                    <footer className="card__links">
                      {c.links.map((l) => (
                        <a
                          key={l.label}
                          className="card__link"
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l.label}<span aria-hidden="true"> ↗</span>
                        </a>
                      ))}
                    </footer>
                  )}
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
