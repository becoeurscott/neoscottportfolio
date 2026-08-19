"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { SwapText } from "./Motion";
import { appear, tween, springContent } from "../lib/anim";
import { waLink } from "../lib/site";

const links = [
  { href: "#methode", t: "La méthode" },
  { href: "#programme", t: "Programme" },
  { href: "#offres", t: "Niveaux" },
  { href: "#moi", t: "Qui suis-je" },
  { href: "#videos", t: "Vidéos" },
  { href: "#faq", t: "FAQ" },
];

function NavLink({ href, children, onClick }) {
  return (
    <motion.a href={href} className="nav-link" onClick={onClick} initial="rest" whileHover="hover" animate="rest">
      <span>{children}</span>
      <motion.span
        className="nav-underline"
        variants={{ rest: { opacity: 0, scaleX: 0.4 }, hover: { opacity: 1, scaleX: 1 } }}
        transition={tween}
      />
    </motion.a>
  );
}

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="nav">
        <div className="wrap">
          {/* « Notch » : la pastille de statut, comme sur la référence */}
          <motion.div className="notch" initial={appear.notch.initial} animate={appear.notch.animate}>
            <span className="status-dot" />
            Accès immédiat · Accès à vie · Garantie 7 jours
          </motion.div>

          <motion.header
            className={"nav-inner" + (open ? " is-open" : "")}
            initial={appear.header.initial}
            animate={appear.header.animate}
            layout
            transition={springContent}
          >
            <motion.div className="nav-bar" layout="position">
              <a href="#top" className="logo" onClick={() => setOpen(false)}>
                <span className="logo-dot" />
                Elite Achat en Chine
              </a>

              <button
                className="nav-burger"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
              >
                <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} transition={tween} />
                <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
                <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} transition={tween} />
              </button>
            </motion.div>

            <nav className="nav-links">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href}>
                  {l.t}
                </NavLink>
              ))}
            </nav>

            <motion.a href="#offres" className="btn btn-primary nav-cta" whileTap={{ scale: 0.97 }}>
              <SwapText>Voir les niveaux</SwapText>
            </motion.a>

            {/* Sur mobile, l'en-tête s'agrandit sur place : les liens se
                empilent dessous, comme la variante « ouverte » de la référence. */}
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  className="nav-drop"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, transition: { ...springContent } }}
                  exit={{ height: 0, opacity: 0, transition: { duration: 0.22, ease: tween.ease } }}
                >
                  <div className="nav-drop-inner">
                    {links.map((l, i) => (
                      <motion.a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...tween, delay: 0.05 + i * 0.045 }}
                      >
                        {l.t}
                      </motion.a>
                    ))}
                    <div className="nav-drop-foot">
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
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.header>
        </div>
      </div>
    </>
  );
}
