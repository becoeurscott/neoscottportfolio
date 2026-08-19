"use client";

import { motion } from "framer-motion";
import { Reveal, RT, ease } from "./Motion";
import Proof from "./Proof";
import { tiers } from "../lib/site";

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
              <span className="gold">ce que tu veux en faire.</span>
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
            <motion.div
              key={t.id}
              className={"tier" + (t.featured ? " featured" : "")}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.75, delay: i * 0.12, ease }}
              whileHover={{ y: -8 }}
            >
              {t.badge ? <div className="tier-badge">{t.badge}</div> : null}

              <div className="name">
                <span>{t.emoji}</span> {t.name}
              </div>

              <div className="amount">
                {t.price} <span className="cur">F</span>
              </div>

              <div className="tagline">{t.tagline}</div>

              <div className="pitch">
                {t.pitch.map((p, k) => (
                  <RT key={k}>{p}</RT>
                ))}
              </div>

              <hr />

              <div style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 14 }}>
                Ce que tu reçois
              </div>

              <ul className="feat">
                {t.features.map((f, k) => (
                  <motion.li
                    key={k}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.05 * k, ease }}
                  >
                    <span className="c">✓</span>
                    <RT as="span">{f}</RT>
                  </motion.li>
                ))}
              </ul>

              <div className="calc">{t.calc}</div>

              {t.proof ? (
                <div style={{ marginBottom: 20 }}>
                  <Proof file={t.proof.file} label={t.proof.label} ratio="4 / 3" />
                </div>
              ) : null}

              <div className="tier-foot">
                <motion.a
                  href={t.checkout}
                  className={"btn btn-block " + (t.featured ? "btn-primary" : "btn-ghost")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.cta}
                </motion.a>
              </div>
            </motion.div>
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
