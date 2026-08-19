"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ease } from "./Motion";

/**
 * Emplacement de preuve.
 * Dépose simplement le fichier dans /public/preuves/<file> :
 * l'image remplace automatiquement le cadre pointillé.
 */
export default function Proof({ file, src: srcProp, label, caption, ratio, className, tilt = 0 }) {
  const [failed, setFailed] = useState(false);
  const src = srcProp || `/preuves/${file}`;

  return (
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
        <div className="proof" style={ratio ? { aspectRatio: ratio } : undefined}>
          <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />
        </div>
      )}
      {caption ? (
        <figcaption className="proof-cap">
          <span className="gold">▸</span> {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
