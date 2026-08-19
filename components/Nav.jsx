"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ease } from "./Motion";
import { waLink } from "../lib/site";

const links = [
  { href: "#methode", t: "La méthode" },
  { href: "#programme", t: "Programme" },
  { href: "#offres", t: "Niveaux" },
  { href: "#moi", t: "Qui suis-je" },
  { href: "#videos", t: "Vidéos" },
  { href: "#faq", t: "FAQ" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.header
        className="nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
      >
        <div className="wrap">
          <div className="nav-inner">
            <a href="#top" className="logo" onClick={() => setOpen(false)}>
              <span className="logo-dot" />
              Elite Achat en Chine
            </a>

            <nav className="nav-links">
              {links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.t}
                </a>
              ))}
            </nav>

            <span className="status">
              <span className="status-dot" /> Accès immédiat
            </span>

            <motion.a
              href="#offres"
              className="btn btn-primary nav-cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Voir les niveaux
            </motion.a>

            <button
              className="nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease }} />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
              <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease }} />
            </button>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                className="nav-panel"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.32, ease }}
              >
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.04 * i, ease }}
                  >
                    {l.t}
                  </motion.a>
                ))}
                <div className="nav-panel-foot">
                  <a href="#offres" className="btn btn-accent btn-block" onClick={() => setOpen(false)}>
                    Voir les niveaux
                  </a>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-block"
                    onClick={() => setOpen(false)}
                  >
                    Écris-moi sur WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
