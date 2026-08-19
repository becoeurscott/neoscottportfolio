"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, ease } from "./Motion";
import { faq } from "../lib/site";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-alt">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <Reveal>
          <span className="eyebrow">FAQ</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ margin: "22px 0 0" }}>Les questions qu&apos;on me pose le plus</h2>
        </Reveal>

        <div className="faq-list">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={Math.min(i * 0.04, 0.25)} y={16}>
                <div className="faq-item">
                  <button
                    className="faq-q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-n">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f.q}</span>
                    <motion.span
                      className="faq-icon"
                      animate={{ rotate: isOpen ? 45 : 0, borderColor: isOpen ? "rgba(231,183,87,0.6)" : "rgba(255,255,255,0.16)" }}
                      transition={{ duration: 0.3, ease }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        className="faq-a"
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                      >
                        <p>{f.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
