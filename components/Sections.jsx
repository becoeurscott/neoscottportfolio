"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Stagger, Item, Counter, Marquee, ease } from "./Motion";
import Proof from "./Proof";
import { pains, advantages, modules, levelLabels, site, waLink, videos } from "../lib/site";

/* ---------------- SECTION 2 — LE PROBLÈME ---------------- */

export function Problem() {
  return (
    <section id="methode">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <Reveal>
          <span className="eyebrow">Le vrai problème</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ margin: "22px 0 24px" }}>
            Tu y as déjà pensé.
            <br />
            <span className="gold">Tu ne l&apos;as jamais fait.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="lead">
            Acheter directement en Chine. Des prix 2 à 5 fois plus bas. Un choix que le marché
            local n&apos;aura jamais.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="lead">
            Sauf qu&apos;entre les applications en chinois, les comptes qui refusent de se créer,
            les fournisseurs impossibles à vérifier et la peur — bien réelle — d&apos;envoyer ton
            argent dans le vide… tu as remis ça à plus tard.
          </p>
        </Reveal>
        <div className="split" style={{ marginTop: 34 }}>
          <Reveal>
            <p style={{ fontSize: "clamp(19px,2.6vw,26px)", color: "var(--ink)", fontFamily: "var(--font-display)", letterSpacing: "-0.02em", margin: 0 }}>
              Et pendant ce temps, à chaque achat, une partie de ta marge part chez{" "}
              <span className="gold">quelqu&apos;un d&apos;autre.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Proof
              src="/images/acheteur-terrain.jpg"
              label="Acheter depuis son téléphone"
              ratio="4 / 3"
              tilt={1.2}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3 — SANS MÉTHODE ---------------- */

export function Pains() {
  return (
    <section className="section-alt">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <Reveal>
          <span className="eyebrow">Ce qui se passe sans méthode</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ margin: "22px 0 0" }}>
            Voici ce qui arrive concrètement, tous les jours :
          </h2>
        </Reveal>

        <Stagger className="pain-list">
          {pains.map((p) => (
            <Item key={p.t} className="pain">
              <span className="x">✕</span>
              <p>
                <strong>{p.t}</strong> {p.d}
              </p>
            </Item>
          ))}
        </Stagger>

        <div className="verdict">
          <Reveal>
            <p style={{ fontSize: 17 }}>
              Ce n&apos;est pas un manque de volonté. Ce n&apos;est pas un manque
              d&apos;opportunités.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="gold">C&apos;est un manque de méthode.</h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 4 — LA SOLUTION ---------------- */

export function Solution() {
  return (
    <section>
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">La solution</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ margin: "22px 0 18px", maxWidth: 720 }}>
            De la création de ton compte jusqu&apos;au{" "}
            <span className="gold">colis dans tes mains.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="lead">Pourquoi cette formation n&apos;est pas comme les autres :</p>
        </Reveal>

        <Stagger className="adv-grid" gap={0.07}>
          {advantages.map((a) => (
            <Item key={a.t}>
              <motion.div
                className="adv"
                whileHover={{ y: -5, borderColor: "rgba(231,183,87,0.35)" }}
                transition={{ duration: 0.3, ease }}
                style={{ height: "100%" }}
              >
                <div className="tick">✓</div>
                <h4>{a.t}</h4>
                <p>{a.d}</p>
              </motion.div>
            </Item>
          ))}
        </Stagger>

        <div className="split" style={{ marginTop: 46 }}>
          <Reveal>
            <Proof
              file="pinduoduo-prix.jpg"
              label="Les vrais prix, sur la plateforme chinoise"
              caption="Ce que tu vois sur l'écran d'un acheteur en Chine — pas d'un revendeur"
              ratio="3 / 4"
              tilt={-1.2}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Proof
              src="/images/neo-studio.jpg"
              label="Formation filmée en direct"
              caption="Tout est filmé sur mon écran. Tu regardes, tu reproduis."
              ratio="3 / 4"
              tilt={1.2}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 5 — LE PROGRAMME ---------------- */

export function Program() {
  const railRef = useRef(null);
  const [open, setOpen] = useState(null);

  const scrollBy = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 460), behavior: "smooth" });
  };

  const current = open === null ? null : modules[open];

  return (
    <section id="programme" className="section-alt">
      <div className="wrap">
        <div className="rail-head">
          <div>
            <Reveal>
              <span className="eyebrow">Le programme</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 style={{ margin: "22px 0 10px" }}>Tout ce que tu vas savoir faire</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="muted" style={{ margin: 0 }}>
                Fais défiler les modules · clique sur un module pour voir ce qu&apos;il contient
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <div className="rail-arrows">
              <button onClick={() => scrollBy(-1)} aria-label="Modules précédents">
                ←
              </button>
              <button onClick={() => scrollBy(1)} aria-label="Modules suivants">
                →
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="rail" ref={railRef}>
        <div className="rail-inner">
          {modules.map((m, i) => {
            const isOpen = open === i;
            return (
              <motion.button
                key={m.n + m.t}
                className={"mod-card" + (isOpen ? " is-open" : "")}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: Math.min(i * 0.04, 0.3), ease }}
                whileHover={{ y: -4 }}
              >
                <span className="lvl">{levelLabels[m.level]}</span>
                <span className="n">{m.n}</span>
                <span className="t">{m.t}</span>
                <span className="foot">
                  {m.v ? <span className="v">{m.v}</span> : <span />}
                  <motion.span
                    className="plus"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease }}
                  >
                    +
                  </motion.span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="wrap">
        <AnimatePresence initial={false} mode="wait">
          {current ? (
            <motion.div
              key={current.n}
              className="mod-detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1, transition: { duration: 0.4, ease } }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease } }}
            >
              <div className="mod-detail-inner">
                <div className="mod-detail-head">
                  <div>
                    <span className="n">{current.n}</span>
                    <h3>{current.t}</h3>
                  </div>
                  <button onClick={() => setOpen(null)} aria-label="Fermer le module">
                    ✕
                  </button>
                </div>
                <ul>
                  {(current.points || []).map((p, k) => (
                    <motion.li
                      key={k}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.06 * k, ease }}
                    >
                      <span className="c">✓</span> {p}
                    </motion.li>
                  ))}
                </ul>
                <p className="muted" style={{ margin: 0 }}>
                  {levelLabels[current.level]}
                  {current.v ? ` · ${current.v}` : ""}
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Reveal delay={0.1}>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <motion.a
              href="#offres"
              className="btn btn-accent btn-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Rejoindre le programme
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 7 — POURQUOI SI PEU CHER ---------------- */

export function WhyCheap() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 820 }}>
        <Reveal>
          <div className="card" style={{ padding: "38px 34px" }}>
            <h3 style={{ marginBottom: 18 }}>
              « C&apos;est trop peu cher. <span className="gold">Où est le piège ?</span> »
            </h3>
            <p>
              Il n&apos;y en a pas. Fais le calcul toi-même :{" "}
              <strong>
                un seul intermédiaire, sur une seule commande, te prend souvent plus que le prix du
                niveau le plus élevé.
              </strong>
            </p>
            <p>
              Je préfère te prouver ma valeur d&apos;abord. Un élève qui reçoit sa première
              commande grâce à cette formation, c&apos;est quelqu&apos;un qui me fait confiance pour
              la suite — et c&apos;est ma meilleure publicité.
            </p>
            <p style={{ marginBottom: 0 }}>C&apos;est aussi simple que ça.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTION 8 — QUI SUIS-JE ---------------- */

export function About() {
  return (
    <section id="moi" className="section-alt">
      <div className="wrap">
        <div className="about-grid">
          <Reveal>
            <Proof
              src="/images/neo-salon.jpg"
              label="Neo Scott"
              caption="Neo Scott — Douala, Cameroun"
              ratio="3 / 4"
              tilt={-1.2}
            />
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">Qui suis-je</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 style={{ margin: "22px 0 20px" }}>
                Il y a peu, j&apos;étais <span className="gold">vigile sur un chantier.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead">
                Je m&apos;appelle <strong>Neo Scott</strong>. Aujourd&apos;hui, j&apos;ai généré{" "}
                <strong>plus de 8 millions de FCFA en ligne</strong> grâce à une seule compétence :
                acheter en Chine au vrai prix.
              </p>
            </Reveal>

            <Stagger className="stat-row" gap={0.09}>
              <Item className="stat">
                <div className="v">
                  <Counter to={3000000} /> F
                </div>
                <div className="l">sur Chariow</div>
              </Item>
              <Item className="stat">
                <div className="v">
                  <Counter to={600000} /> F
                </div>
                <div className="l">sur Maketou</div>
              </Item>
              <Item className="stat">
                <div className="v">
                  <Counter to={1000} />+
                </div>
                <div className="l">personnes formées</div>
              </Item>
              <Item className="stat">
                <div className="v">
                  <Counter to={20000} />
                </div>
                <div className="l">abonnés TikTok</div>
              </Item>
            </Stagger>

            <Reveal delay={0.1}>
              <p style={{ color: "var(--ink)", fontWeight: 600 }}>Et tu peux tout vérifier :</p>
              <ul className="check-list">
                <li>
                  <span className="c">▸</span> Le reste en précommandes — tous les déballages sont
                  sur ma page TikTok
                </li>
                <li>
                  <span className="c">▸</span> Hier encore : une commande client de 604 000 F, plus
                  de 150 000 F de marge
                </li>
                <li>
                  <span className="c">▸</span> 4 000 abonnés sur YouTube · Cameroun, Gabon, Côte
                  d&apos;Ivoire, Togo
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="calc" style={{ marginTop: 24 }}>
                <strong>Ma mission :</strong> que plus aucun Africain ne paie le prix qu&apos;un
                intermédiaire a décidé pour lui.
              </div>
            </Reveal>
          </div>
        </div>

        <Stagger className="adv-grid" gap={0.08} delay={0.1}>
          {[
            { file: "dashboard-chariow.jpg", label: "Dashboard Chariow", cap: "3 000 000 F sur Chariow" },
            { file: "dashboard-maketou.jpg", label: "Dashboard Maketou", cap: "600 000 F sur Maketou" },
            { file: "commande-604000.jpg", label: "La commande à 604 000 F", cap: "Commande client — 604 000 F" },
          ].map((p, i) => (
            <Item key={p.file}>
              <Proof file={p.file} label={p.label} caption={p.cap} ratio="4 / 5" tilt={i % 2 ? 1 : -1} />
            </Item>
          ))}
          <Item>
            <Proof
              src="/images/neo-sourire.jpg"
              label="Neo Scott"
              caption="Cameroun, Gabon, Côte d'Ivoire, Togo — plus de 1 000 personnes formées"
              ratio="4 / 5"
              tilt={1}
            />
          </Item>
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- VIDÉOS — la chaîne YouTube ---------------- */

export function Videos() {
  return (
    <section id="videos">
      <div className="wrap">
        <div className="split" style={{ alignItems: "end", gap: 18 }}>
          <div>
            <Reveal>
              <span className="eyebrow">La chaîne</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 style={{ margin: "22px 0 12px" }}>
                Tu peux déjà voir <span className="gold">comment j&apos;enseigne.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lead" style={{ margin: 0 }}>
                Des dizaines de vidéos gratuites sur 1688, Xianyu, Alipay, les transitaires et les
                précommandes. La formation, c&apos;est la même chose — en ordre, complet, et sans
                rien laisser de côté.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div style={{ textAlign: "right" }}>
              <motion.a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                ▶ Voir la chaîne
              </motion.a>
            </div>
          </Reveal>
        </div>

      </div>

      <div className="video-rail">
        <Marquee speed={38} direction={1} gap={16}>
          {videos.map((v) => (
            <motion.a
              key={v.id}
              className="video-card"
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease }}
            >
              <div className="video-thumb">
                <img src={`/youtube/${v.id}.jpg`} alt={v.t} loading="lazy" />
                <div className="video-play">
                  <span>▶</span>
                </div>
              </div>
              <div className="meta">{v.t}</div>
            </motion.a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

/* ---------------- SECTION 9 — TÉMOIGNAGES ---------------- */

export function Testimonials() {
  const shots = [
    { file: "temoignage-1.jpg", label: "Témoignage WhatsApp 1" },
    { file: "temoignage-2.jpg", label: "Témoignage WhatsApp 2" },
    { file: "temoignage-3.jpg", label: "Témoignage WhatsApp 3" },
    { file: "temoignage-4.jpg", label: "Témoignage WhatsApp 4" },
  ];

  return (
    <section>
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Témoignages</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ margin: "22px 0 8px" }}>Ce que mes élèves m&apos;envoient</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="muted" style={{ marginBottom: 30 }}>
            Nom de famille, numéro et photo floutés. Prénom, message, produit et date visibles.
          </p>
        </Reveal>
      </div>

      <Marquee speed={28} direction={-1} gap={16}>
        {shots.map((s, i) => (
          <div className="testi" key={i}>
            <Proof file={s.file} label={s.label} ratio="9 / 16" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- SECTION 11 — CTA FINAL ---------------- */

export function FinalCta() {
  return (
    <section className="final section-dark">
      <div className="wrap final-inner">
        <Reveal>
          <div className="season">
            <span className="status-dot" /> Septembre → Décembre : la meilleure période de
            l&apos;année
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2>
            Chaque semaine qui passe, c&apos;est une marge de plus qui reste{" "}
            <span className="gold">chez quelqu&apos;un d&apos;autre.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="lead" style={{ margin: "24px auto 0" }}>
            Rentrée, fêtes, fin d&apos;année — tout le monde achète. Et pendant ce temps, la Chine
            casse ses prix.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ color: "var(--ink)", fontWeight: 600, fontSize: 18 }}>
            La demande monte ici. Les coûts descendent là-bas. La marge s&apos;ouvre des deux côtés.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="lead" style={{ margin: "0 auto" }}>
            Ceux qui sont prêts maintenant vont encaisser cette période. Les autres la regarderont
            passer et repartiront de zéro en janvier. Tu as déjà l&apos;envie. Il te manquait la
            méthode.
          </p>
        </Reveal>

        <div className="split" style={{ maxWidth: 760, margin: "34px auto 30px", textAlign: "left" }}>
          <Proof src="/images/neo-pointe.jpg" label="Neo Scott" ratio="4 / 5" tilt={-1.2} />
          <Proof file="preuve-finale.jpg" label="Dernière preuve" ratio="4 / 5" tilt={1.2} />
        </div>

        <Reveal delay={0.1}>
          <motion.a
            href="#offres"
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.035, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            JE COMMENCE MAINTENANT
          </motion.a>
          <p className="muted" style={{ marginTop: 18 }}>
            Une question avant de te décider ?{" "}
            <a href={waLink} target="_blank" rel="noreferrer" className="gold">
              Écris-moi sur WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "space-between", alignItems: "center" }}>
          <span className="logo">
            <span className="logo-dot" />
            {site.brand}
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href={site.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href={site.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href={waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <p style={{ marginTop: 26, color: "var(--ink-3)", fontSize: 13.5 }}>
          Tous droits réservés 2026 © {site.author}
        </p>
        <p className="disclaimer">
          Ce site ne fait pas partie du site Facebook ou de Meta Platforms, Inc. et n&apos;est pas
          endossé par Facebook. Facebook est une marque déposée de Meta Platforms, Inc.
        </p>
      </div>
    </footer>
  );
}
