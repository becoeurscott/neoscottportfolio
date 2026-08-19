"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CharReveal, ease } from "./Motion";
import Proof from "./Proof";

const strip = [
  "Pinduoduo",
  "Taobao",
  "1688",
  "Alipay",
  "WeChat",
  "Transitaires",
  "Précommandes",
  "Douane",
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="wrap">
        <motion.div
          className="hero-top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="chip">
            <span className="status-dot" /> Formation filmée · Acheter en Chine toi-même
          </span>
        </motion.div>

        <h1>
          <CharReveal delay={0.12}>Arrête de payer le prix qu&apos;un </CharReveal>
          <span className="accent">
            <CharReveal delay={0.62}>intermédiaire</CharReveal>
          </span>
          <CharReveal delay={0.88}> a décidé pour toi.</CharReveal>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease }}
        >
          <strong>Elite Achat en Chine</strong> te montre — écran filmé, clic par clic — comment
          acheter toi-même en Chine. Sans parler chinois. Sans te faire arnaquer. Sans les erreurs
          qui coûtent une commande entière.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease }}
        >
          <motion.a
            href="#offres"
            className="btn btn-accent btn-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Je veux acheter au vrai prix
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
          transition={{ duration: 0.8, delay: 1.45 }}
        >
          <span>Accès immédiat</span>
          <span>·</span>
          <span>Accès à vie</span>
          <span>·</span>
          <span>Garantie 7 jours</span>
        </motion.div>

        <motion.div
          className="hero-grid"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease }}
        >
          <div className="hero-side">
            <div className="quote-box">
              <div className="big">
                Hier : une commande client de 604 000 F. Ma marge : plus de 150 000 F.
              </div>
              <p style={{ margin: 0, fontSize: 16 }}>
                Sans avoir avancé un seul franc — c&apos;est le client qui paie d&apos;abord.
              </p>
            </div>
            <motion.div style={{ y: yB }}>
              <Proof
                file="colis-recus.jpg"
                label="Suivi de colis — Douala"
                caption="Colis suivi jusqu'à Douala, sans intermédiaire"
                ratio="4 / 3"
              />
            </motion.div>
          </div>

          <motion.div style={{ y: yA }}>
            <Proof src="/images/neo-portrait.jpg" label="Neo Scott" ratio="4 / 5" />
          </motion.div>
        </motion.div>
      </div>

      <div className="strip">
        <div className="marquee">
          <motion.div
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            {[...strip, ...strip].map((s, i) => (
              <span className="strip-item" key={i}>
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
