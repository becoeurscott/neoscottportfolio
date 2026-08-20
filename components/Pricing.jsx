"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RT, SwapText, ease } from "./Motion";
import Proof from "./Proof";
import { tiers } from "../lib/site";

function Tier({ t, i }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={"tier" + (t.featured ? " featured" : "")}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay: i * 0.12, ease }}
    >
      {t.badge ? <div className="tier-badge">{t.badge}</div> : null}

      {t.cover ? (
        <Proof className="tier-cover" src={t.cover.src} label={t.cover.label} ratio="3 / 2" />
      ) : null}

      <div className="name">
        <span>{t.emoji}</span> {t.name}
      </div>

      <div className="amount">
        {t.price} <span className="cur">F</span>
      </div>
      {t.priceNote ? <div className="price-note">{t.priceNote}</div> : null}

      <h3 className="tier-headline">{t.headline}</h3>

      <div className="pitch">
        {t.pitch.map((p, k) => (
          <RT key={k}>{p}</RT>
        ))}
      </div>

      {t.includes ? (
        <div className="tier-includes">
          <span className="c">✅</span> <strong>{t.includes}</strong>
        </div>
      ) : null}

      {/* Chapitres repliés par défaut : la promesse, le prix, les bonus et le
          bouton restent visibles sans faire défiler. */}
      <button
        className={"chapters-toggle" + (open ? " is-open" : "")}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <motion.span className="chev" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25, ease }}>
          ▾
        </motion.span>
        {open ? "Masquer le détail" : t.chaptersLabel}
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="chapters"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.4, ease } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.22, ease } }}
          >
            <div className="chapters-inner">
              {t.chapters.map((g, gi) => (
                <div className="chapter-group" key={gi}>
                  {g.title ? <div className="chapter-title">{g.title}</div> : null}
                  <ul>
                    {g.items.map((it, k) => (
                      <li key={k}>
                        <span className="n">{String(k + 1).padStart(2, "0")}</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ul className="bonuses">
        {t.bonuses.map((b, k) => (
          <li key={k}>
            <span className="ico">{b.icon}</span>
            {b.text}
          </li>
        ))}
      </ul>

      <div className="calc">{t.calc}</div>

      <div className="tier-foot">
        <motion.a
          href={t.checkout}
          className={"btn btn-block " + (t.featured ? "btn-accent" : "btn-primary")}
          whileTap={{ scale: 0.98 }}
        >
          <SwapText>{t.cta}</SwapText>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="offres">
      <div className="grid-lines" style={{ opacity: 0.25 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center" }}>
          <Reveal>
            <span className="eyebrow">Les niveaux</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 style={{ margin: "22px 0 14px" }}>
              Trois portes. La tienne dépend de{" "}
              <span className="accent">ce que tu veux en faire.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="muted">
              Accès immédiat après paiement · Accès à vie · Garantie satisfait ou remboursé 7 jours
            </p>
          </Reveal>
        </div>

        <div className="tiers">
          {tiers.map((t, i) => (
            <Tier key={t.id} t={t} i={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="upgrade-note">
            💡 Tu peux monter de niveau plus tard en payant simplement la différence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
