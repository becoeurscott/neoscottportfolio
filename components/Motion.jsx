"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ease = [0.16, 1, 0.3, 1];

/* Rich-text helper : **gras** -> <strong> */
export function RT({ children, as: Tag = "p", className }) {
  const parts = String(children).split(/(\*\*[^*]+\*\*)/g);
  return (
    <Tag className={className}>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </Tag>
  );
}

/* Reveal : fade + montée au scroll */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  once = true,
  className,
  style,
  as = "div",
}) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </M>
  );
}

/* Stagger : anime les enfants les uns après les autres */
export function Stagger({ children, className, gap = 0.08, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export function Item({ children, className, style }) {
  return (
    <motion.div variants={itemVariants} className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* Titre révélé ligne par ligne (masque + translation) */
export function LineReveal({ children, delay = 0 }) {
  return (
    <span className="line">
      <motion.span
        style={{ display: "block" }}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.95, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Compteur animé quand la section entre à l'écran */
export function Counter({ to, suffix = "", prefix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <span ref={ref}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <CountNumber to={to} run={inView} duration={duration} />
      </motion.span>
      {suffix}
    </span>
  );
}

function CountNumber({ to, run, duration }) {
  const ref = useRef(null);
  const started = useRef(false);

  if (run && !started.current && typeof window !== "undefined") {
    started.current = true;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      if (ref.current) {
        ref.current.textContent = Math.round(to * eased).toLocaleString("fr-FR");
      }
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  return <span ref={ref}>0</span>;
}

export { motion };
