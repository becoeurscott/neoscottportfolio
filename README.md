# ELITE ACHAT EN CHINE — page de vente

Next.js 15 (App Router) + Framer Motion. Page unique, français, mobile-first.

## Lancer

```bash
npm run dev
```

Puis http://localhost:3000 — `npm run build` pour la version de production.

## Ce qu'il te reste à remplir

1. **Les preuves** — dépose tes captures dans `public/preuves/` avec les noms listés dans
   `public/preuves/README.md`. Tant qu'un fichier manque, un cadre pointillé indique
   exactement quelle image va là. Les 8 emplacements sont répartis sur toute la page
   (hero, solution, chaque niveau, qui suis-je, témoignages, CTA final) — ne les regroupe pas.
2. **Ton WhatsApp** — `lib/site.js`, champ `whatsapp` (format international, sans + ni espaces).
3. **Tes liens de paiement** — `lib/site.js`, champ `checkout` de chaque niveau (`#` pour l'instant).
4. **TikTok / YouTube** — `lib/site.js`.

## Structure

| Fichier | Rôle |
|---|---|
| `lib/site.js` | Tout le contenu variable : niveaux, prix, modules, FAQ, liens |
| `app/globals.css` | Design system (couleurs, typo, composants) |
| `components/Motion.jsx` | Primitives d'animation : `Reveal`, `Stagger`, `LineReveal`, `Counter` |
| `components/Hero.jsx` | Hero + parallaxe des preuves + prix visible sans scroller |
| `components/Sections.jsx` | Problème, douleurs, solution, programme, pourquoi si peu cher, qui suis-je, témoignages, CTA final, footer |
| `components/Pricing.jsx` | Les trois niveaux |
| `components/Faq.jsx` | Accordéon |
| `components/StickyCta.jsx` | Barre CTA mobile + bouton WhatsApp flottant |
| `components/Proof.jsx` | Emplacement de preuve (image ou cadre pointillé) |

Les animations respectent `prefers-reduced-motion`.
