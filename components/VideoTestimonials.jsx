"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, ease } from "./Motion";
import { videoTestimonials } from "../lib/site";

function VideoCard({ item, index, activeId, setActiveId }) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);
  const playing = activeId === item.id;

  // Une seule vidéo à la fois : dès qu'une autre démarre, celle-ci s'arrête
  useEffect(() => {
    const v = ref.current;
    if (v && !playing && !v.paused) v.pause();
  }, [playing]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setActiveId(null);
      return;
    }
    // Le son est le but : on démarre non muet, au volume plein
    v.muted = false;
    v.volume = 1;
    v.currentTime = v.currentTime || 0;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
    setActiveId(item.id);
  };

  if (failed) {
    return (
      <div className="vtesti">
        <div className="proof-ph" style={{ aspectRatio: "9 / 16" }}>
          <span style={{ fontSize: 22 }}>🎬</span>
          <strong style={{ fontSize: 13.5 }}>{item.label}</strong>
          <span className="file">/public{item.src}</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={"vtesti" + (playing ? " is-playing" : "")}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.07, 0.35), ease }}
      whileHover={{ y: -6 }}
    >
      <button className="vtesti-frame" onClick={toggle} aria-label={playing ? `Mettre en pause : ${item.label}` : `Lire avec le son : ${item.label}`}>
        <video
          ref={ref}
          src={item.src}
          poster={item.poster}
          playsInline
          preload="none"
          onEnded={() => setActiveId(null)}
          onError={() => setFailed(true)}
        />
        {!playing ? (
          <span className="vtesti-play">
            <span className="dot">▶</span>
            <span className="txt">Écouter</span>
          </span>
        ) : (
          <span className="vtesti-pause">❚❚</span>
        )}
      </button>
      <div className="vtesti-meta">{item.label}</div>
    </motion.div>
  );
}

export default function VideoTestimonials() {
  const railRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  const scrollBy = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 460), behavior: "smooth" });
  };

  return (
    <section id="temoignages-video">
      <div className="wrap">
        <div className="rail-head">
          <div>
            <Reveal>
              <span className="eyebrow">Ils l&apos;ont fait</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 style={{ margin: "22px 0 10px" }}>
                Écoute-les <span className="accent">le raconter eux-mêmes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="muted" style={{ margin: 0 }}>
                Clique sur une vidéo pour la lancer avec le son
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <div className="rail-arrows">
              <button onClick={() => scrollBy(-1)} aria-label="Témoignages précédents">
                ←
              </button>
              <button onClick={() => scrollBy(1)} aria-label="Témoignages suivants">
                →
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="rail" ref={railRef}>
        <div className="rail-inner">
          {videoTestimonials.map((v, i) => (
            <VideoCard key={v.id} item={v} index={i} activeId={activeId} setActiveId={setActiveId} />
          ))}
        </div>
      </div>
    </section>
  );
}
