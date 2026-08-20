"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "./Motion";

/**
 * Emplacement de preuve.
 * Dépose simplement le fichier dans /public/preuves/<file> :
 * l'image remplace automatiquement le cadre pointillé.
 * Un clic ouvre l'image en grand (lecture des chiffres à l'écran).
 */
export default function Proof({
  file,
  src: srcProp,
  label,
  caption,
  ratio,
  className,
  tilt = 0,
  zoomable = true,
}) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const src = srcProp || `/preuves/${file}`;

  // Échap pour fermer, et on bloque le défilement pendant la vue agrandie
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const canZoom = zoomable && !failed;

  return (
    <>
      <motion.figure
        className={className}
        style={{ margin: 0 }}
        initial={{ opacity: 0, y: 30, rotate: tilt * 1.6 }}
        whileInView={{ opacity: 1, y: 0, rotate: tilt }}
        whileHover={{ y: -6, rotate: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
      >
        {failed ? (
          <div className="proof-ph" style={ratio ? { aspectRatio: ratio } : undefined}>
            <span style={{ fontSize: 22 }}>🖼️</span>
            <strong style={{ fontSize: 13.5 }}>{label}</strong>
            <span className="file">/public{srcProp || `/preuves/${file}`}</span>
          </div>
        ) : (
          <div
            className={"proof" + (canZoom ? " is-zoomable" : "")}
            style={ratio ? { aspectRatio: ratio } : undefined}
            onClick={canZoom ? () => setOpen(true) : undefined}
            role={canZoom ? "button" : undefined}
            tabIndex={canZoom ? 0 : undefined}
            onKeyDown={
              canZoom
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpen(true);
                    }
                  }
                : undefined
            }
            aria-label={canZoom ? `Voir en grand : ${label}` : undefined}
          >
            <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />
            {canZoom ? (
              <span className="proof-view">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Voir
              </span>
            ) : null}
          </div>
        )}
        {caption ? (
          <figcaption className="proof-cap">
            <span className="gold">▸</span> {caption}
          </figcaption>
        ) : null}
      </motion.figure>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={src}
              alt={label}
              initial={{ scale: 0.94, y: 14 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, ease }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="lightbox-bar" onClick={(e) => e.stopPropagation()}>
              <span>{caption || label}</span>
              <button onClick={() => setOpen(false)} aria-label="Fermer">
                ✕
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
