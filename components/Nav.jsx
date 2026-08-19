"use client";

import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { site } from "../lib/site";
import { ease } from "./Motion";

export default function Nav() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const [solid, setSolid] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.header
        className="nav"
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.15 }}
        style={{
          background: solid ? "rgba(7,7,10,0.78)" : "transparent",
          borderBottomColor: solid ? "rgba(255,255,255,0.08)" : "transparent",
        }}
      >
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            <span className="logo-dot" />
            {site.brand}
          </a>
          <nav className="nav-links">
            <a href="#methode">La méthode</a>
            <a href="#programme">Le programme</a>
            <a href="#offres">Les niveaux</a>
            <a href="#moi">Qui suis-je</a>
            <a href="#videos">Vidéos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <motion.a
            href="#offres"
            className="btn btn-primary"
            style={{ padding: "12px 20px", fontSize: 14.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Voir les niveaux
          </motion.a>
        </div>
      </motion.header>
    </>
  );
}
