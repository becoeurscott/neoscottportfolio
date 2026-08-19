"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineReveal, ease } from "./Motion";
import Proof from "./Proof";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="grid-lines" />
      <motion.div
        className="glow"
        style={{ width: 620, height: 620, top: -180, left: "-8%", background: "rgba(231,183,87,0.20)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.95, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow"
        style={{ width: 480, height: 480, top: 160, right: "-6%", background: "rgba(53,192,138,0.14)" }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="wrap">
        <motion.div className="hero-grid" style={{ opacity: fade }}>
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="logo-dot" /> Formation · Acheter en Chine, toi-même
            </motion.span>

            <h1 style={{ margin: "24px 0 22px" }}>
              <LineReveal delay={0.12}>Arrête de payer le prix</LineReveal>
              <LineReveal delay={0.22}>
                qu&apos;un <span className="gold">intermédiaire</span>
              </LineReveal>
              <LineReveal delay={0.32}>a décidé pour toi.</LineReveal>
            </h1>

            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              <strong>ELITE ACHAT EN CHINE</strong> te montre — écran filmé, clic par clic —
              comment acheter toi-même en Chine. Sans parler chinois. Sans te faire arnaquer.
              Sans les erreurs qui coûtent une commande entière.
            </motion.p>

            <motion.div
              className="quote-box"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease }}
            >
              <div className="big">
                Hier : une commande client de 604 000 F. Ma marge : plus de 150 000 F.
              </div>
              <div style={{ color: "var(--ink-2)", fontSize: 15 }}>
                Sans avoir avancé un seul franc — c&apos;est le client qui paie d&apos;abord.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.74, ease }}
              style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}
            >
              <motion.a
                href="#offres"
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.035, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                JE VEUX ACHETER AU VRAI PRIX
              </motion.a>
              <div className="price-tag">
                <span className="from">À partir de</span>
                <span className="amount">6 200 F</span>
              </div>
            </motion.div>

            <motion.div
              className="reassure"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span>⚡ Accès immédiat</span>
              <span>♾️ Accès à vie</span>
              <span>🛡️ Garantie 7 jours</span>
            </motion.div>
          </div>

          <div className="hero-media">
            <motion.div style={{ y: yA }} className="hero-media-main">
              <Proof
                src="/images/neo-portrait.jpg"
                label="Neo Scott"
                ratio="3 / 4"
                tilt={-1.2}
              />
            </motion.div>
            <motion.div style={{ y: yB }} className="hero-media-side">
              <Proof
                file="colis-recus.jpg"
                label="Suivi de colis — Douala"
                caption="Colis suivi jusqu'à Douala — sans intermédiaire"
                ratio="3 / 4"
                tilt={2}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
