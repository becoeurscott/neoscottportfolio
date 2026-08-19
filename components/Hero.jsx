"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CharReveal, Marquee, SwapText } from "./Motion";
import { appear } from "../lib/anim";
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
          initial={appear.fromBottom(0.15).initial}
          animate={appear.fromBottom(0.15).animate}
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
          initial={appear.fromBottom(1).initial}
          animate={appear.fromBottom(1).animate}
        >
          <strong>Elite Achat en Chine</strong> te montre — écran filmé, clic par clic — comment
          acheter toi-même en Chine. Sans parler chinois. Sans te faire arnaquer. Sans les erreurs
          qui coûtent une commande entière.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={appear.fromBottom(1.15).initial}
          animate={appear.fromBottom(1.15).animate}
        >
          <motion.a href="#offres" className="btn btn-accent btn-lg" whileTap={{ scale: 0.98 }}>
            <SwapText>Je veux acheter au vrai prix</SwapText>
          </motion.a>
          <div className="price-tag">
            <span className="from">À partir de</span>
            <span className="amount">6 200 F</span>
          </div>
        </motion.div>

        <motion.div
          className="reassure"
          initial={appear.fromBottomSoft(1.4).initial}
          animate={appear.fromBottomSoft(1.4).animate}
        >
          <span>Accès immédiat</span>
          <span>·</span>
          <span>Accès à vie</span>
          <span>·</span>
          <span>Garantie 7 jours</span>
        </motion.div>

        <motion.div
          className="hero-grid"
          initial={appear.rise(1.3).initial}
          animate={appear.rise(1.3).animate}
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
        <Marquee speed={45} direction={-1} gap={18}>
          {strip.map((s) => (
            <span className="strip-item" key={s}>
              {s}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
