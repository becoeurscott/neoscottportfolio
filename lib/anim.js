/* Réglages d'animation repris tels quels de la référence Framer (Agero).
   Les valeurs viennent du bloc d'animations d'apparition du site mirroré. */

export const easeFramer = [0.44, 0, 0.56, 1];

/* Tween standard : 0.4s, ease Framer */
export const tween = { type: "tween", duration: 0.4, ease: easeFramer };

/* Ressorts de la référence */
export const springHeader = { type: "spring", stiffness: 200, damping: 60, mass: 1 };
export const springContent = { type: "spring", stiffness: 137, damping: 30, mass: 1.4 };
export const springSoft = { type: "spring", stiffness: 52, damping: 16, mass: 1 };
export const springRise = { type: "spring", stiffness: 200, damping: 40, mass: 1 };

/* Variantes d'apparition, avec les mêmes décalages qu'en référence */
export const appear = {
  header: {
    initial: { opacity: 0.001 },
    animate: { opacity: 1, transition: { ...springHeader, delay: 0.6 } },
  },
  notch: {
    initial: { opacity: 0.001 },
    animate: { opacity: 1, transition: { ...tween, delay: 0.7 } },
  },
  fromRight: (delay = 1.4) => ({
    initial: { opacity: 0.001, x: 20 },
    animate: { opacity: 1, x: 0, transition: { ...tween, delay } },
  }),
  fromRightSpring: (delay = 1) => ({
    initial: { opacity: 0.001, x: 20 },
    animate: { opacity: 1, x: 0, transition: { ...springContent, delay } },
  }),
  fromBottom: (delay = 0.6) => ({
    initial: { opacity: 0.001, y: 20 },
    animate: { opacity: 1, y: 0, transition: { ...springContent, delay } },
  }),
  fromBottomSoft: (delay = 1.4) => ({
    initial: { opacity: 0.001, y: 12 },
    animate: { opacity: 1, y: 0, transition: { ...springSoft, delay } },
  }),
  rise: (delay = 0.2) => ({
    initial: { opacity: 0.001, y: 160 },
    animate: { opacity: 1, y: 0, transition: { ...springRise, delay } },
  }),
};
