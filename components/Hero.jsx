"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CharReveal, Marquee, SwapText } from "./Motion";
import { appear } from "../lib/anim";
import Proof from "./Proof";

/* Logos des plateformes couvertes par la formation (dossier /public/logos) */
const strip = [
  { src: "/logos/pinduoduo.png", alt: "Pinduoduo" },
  { src: "/logos/taobao.png", alt: "Taobao" },
  { src: "/logos/1688.png", alt: "1688" },
  { src: "/logos/alipay.png", alt: "Alipay" },
  { src: "/logos/wechat.png", alt: "WeChat" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yCutout = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="wrap">
        <div className="hero-copy">
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

        {/* Découpe détourée : sous l'en-tête à droite sur grand écran,
            devant la fin du texte sur mobile */}
        <motion.img
          className="hero-cutout"
          src="/images/neo-cutout.webp"
          alt=""
          aria-hidden="true"
          initial={appear.rise(0.35).initial}
          animate={appear.rise(0.35).animate}
          style={{ y: yCutout }}
        />
        </div>

        <motion.div
          className="hero-grid"
          initial={appear.rise(1.3).initial}
          animate={appear.rise(1.3).animate}
        >
          <motion.div className="quote-box" style={{ y: yA }}>
            <div className="big">
              Hier : une commande client de 604 000 F. Ma marge : plus de 150 000 F.
            </div>
            <p style={{ margin: 0, fontSize: 16 }}>
              Sans avoir avancé un seul franc — c&apos;est le client qui paie d&apos;abord.
            </p>
          </motion.div>

          <motion.div style={{ y: yB }}>
            <Proof
              file="colis-recus.jpg"
              label="Suivi de colis — Douala"
              caption="Colis suivi jusqu'à Douala, sans intermédiaire"
              ratio="16 / 10"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="strip">
        <Marquee speed={45} direction={-1} gap={14}>
          {strip.map((s) => (
            <span className="strip-logo" key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
