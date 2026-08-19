export const site = {
  brand: "ELITE ACHAT EN CHINE",
  author: "Neo Scott",
  // TODO Neo : remplace par ton vrai numéro WhatsApp, format international sans + ni espaces
  whatsapp: "237600000000",
  whatsappMessage:
    "Salut Neo, j'ai une question sur ELITE ACHAT EN CHINE avant de me décider.",
  tiktok: "https://www.tiktok.com/@neoscott",
  youtube: "https://www.youtube.com/@Neoscottofficiel",
};

/* Vidéos de la chaîne — miniatures téléchargées dans /public/youtube */
export const videos = [
  { id: "_vWPSIF3noI", t: "STOP aux prix africains ! Comment j'achète en Chine à -70% sur 1688" },
  { id: "409zQdo81u4", t: "Mon pire achat en Chine (et 4 autres arnaques que j'ai vues)" },
  { id: "0jc2U6_XScw", t: "Unboxing : un 14 Pro Max commandé en Chine" },
  { id: "1WKbbSx_MkI", t: "1688 bloque les étrangers ? Voici comment créer ton compte quand même" },
  { id: "9iKaVRmrSaQ", t: "Recharger ton compte Alipay sans pression inutile" },
  { id: "BhnZvlFQtf4", t: "Trouver des transitaires fiables pour tes achats en Chine" },
  { id: "k8VFTVlHtBg", t: "Trouver un bon fournisseur sur 1688 sans stress" },
  { id: "GYP7JMGlkb4", t: "Dropshipping en Afrique ? Démarrer en précommandes" },
  { id: "4oG8JOACRFk", t: "Étude de cas : ce téléphone acheté 399 yuans sur Xianyu" },
  { id: "OD1PAEdn21c", t: "Maîtriser Xianyu : formation complète (traduction, compte, commande)" },
  { id: "5ZZJmqWynKQ", t: "Personne ne cherche comme ça sur 1688… (méthode cachée)" },
  { id: "kfVwYx2FCOM", t: "30 jours de dropshipping en Afrique : 1 000 000 FCFA" },
];

export const waLink =
  "https://wa.me/" +
  site.whatsapp +
  "?text=" +
  encodeURIComponent(site.whatsappMessage);

export const tiers = [
  {
    id: "solo",
    emoji: "🟢",
    name: "SOLO COACH EXPERT",
    price: "6 200",
    tagline: "Pour acheter au vrai prix. Pour toi. Sans te noyer.",
    // TODO : lien de paiement Chariow / Maketou
    checkout: "#",
    cta: "Je prends Solo Coach Expert",
    pitch: [
      "Tu veux ton téléphone, ton ordinateur, tes affaires — au prix chinois, pas au prix du marché. Tu ne cherches pas à monter un business demain. Tu veux juste **arrêter de payer le double**.",
      "**Une seule plateforme, maîtrisée à fond : Pinduoduo.** Celle où la quantité minimum est **1 seul produit**. Tu commandes une pièce, tu la reçois, tu comprends. Pas 200 informations dont tu n'as pas besoin aujourd'hui.",
    ],
    features: [
      "Accès immédiat et à vie à la plateforme",
      "Modules 1 à 7 + 10 : **plus de 50 vidéos**, chaque clic filmé",
      "**Pinduoduo de A à Z** — recherche, commande, paiement, réception",
      "Alipay et WeChat configurés écran par écran",
      "Toutes les solutions de paiement depuis l'Afrique",
      "La logistique complète jusqu'à ta porte",
      "Android et iPhone",
      "Mises à jour incluses",
    ],
    calc: "Le calcul : un seul achat te fait économiser plus que le prix de cette formation.",
    proof: { file: "eleve-solo.jpg", label: "Capture d'élève — Solo Coach Expert" },
  },
  {
    id: "digital",
    emoji: "⭐",
    name: "ELITE DIGITAL",
    price: "15 000",
    badge: "Le plus choisi",
    featured: true,
    tagline: "Pour te construire une vraie source de revenus à côté.",
    checkout: "#",
    cta: "Je prends Elite Digital",
    pitch: [
      "Tu ne veux pas seulement acheter moins cher. Tu veux **gagner de l'argent avec**. Faire tes premières centaines de milliers, en parallèle de ce que tu fais déjà.",
      "Le problème de ceux qui essaient : ils achètent du stock, ça ne se vend pas, l'argent dort. **Ici, on fait l'inverse.**",
      "**Le Système de Précommandes** : ton client paie **d'abord**, tu commandes **ensuite**. **Tu n'avances jamais l'argent des produits.** Pas de stock. Pas de perte possible.",
    ],
    features: [
      "**TOUT Solo Coach Expert**",
      "**Le Système de Précommandes** — vendre avant d'acheter, commander avec l'argent du client",
      "**Ma liste de transitaires fiables** — des mois de recherche et d'erreurs, évités",
      "**Ma liste d'agents regroupeurs vérifiés**",
      "**Le template CBM & coût de revient** — tu sais exactement ce que tu gagnes avant de commander",
      "**Les ateliers pratiques** (bonus évolutif)",
    ],
    calc: "Le calcul : une seule précommande bien menée peut te rapporter plusieurs fois le prix de ce niveau. Ma dernière m'a rapporté 150 000 F.",
    proof: { file: "precommande-reussie.jpg", label: "Une précommande réussie" },
  },
  {
    id: "pro",
    emoji: "🔥",
    name: "ELITE DIGITAL PRO",
    price: "25 000",
    tagline: "Pour construire un système qui tourne — et en vivre.",
    checkout: "#",
    cta: "Je prends Elite Digital Pro",
    pitch: [
      "Tu ne veux pas un revenu d'appoint. Tu veux **que ça devienne ton activité**. Commander en volume, avoir tes propres marges, ne plus dépendre de personne.",
      "Pour ça, Pinduoduo ne suffit plus. Il te faut **1688** — là où plus tu achètes, moins tu paies. Et **Taobao**, le plus grand catalogue de Chine.",
      "Et il te faut surtout ne plus avancer seul.",
    ],
    features: [
      "**TOUT Elite Digital**",
      "**Taobao** — le plus grand choix de Chine · 9 vidéos",
      "**1688** — les prix usine, le vrai levier du volume · 8 vidéos",
      "**L'accompagnement groupé en live** — tes blocages réels débloqués en direct",
      "**L'accès à la communauté à vie** — des acheteurs actifs, leurs fournisseurs testés, leurs erreurs évitées",
      "**Accès prioritaire** à mes réponses",
      "**Le chapitre « Et après ? »** — ton plan pour passer du premier achat à l'activité",
    ],
    calc: "Tu n'avances plus jamais seul. Jamais.",
    proof: { file: "eleve-avance.jpg", label: "Élève avancé / session live" },
  },
];

export const modules = [
  { n: "Module 1", t: "Les notions de base avant de commencer", v: "7 vidéos", level: "all" },
  { n: "Module 2", t: "Réussir son sourcing", v: "5 vidéos", level: "all" },
  { n: "Module 3.1", t: "Installation & configuration Android", v: "5 vidéos", level: "all" },
  { n: "Module 3.2", t: "Installation & configuration iPhone", v: "3 vidéos", level: "all" },
  { n: "Module 4", t: "Payer depuis l'Afrique : toutes les solutions qui marchent", v: "4 vidéos", level: "all" },
  { n: "Module 5", t: "Alipay, ton portefeuille chinois", v: "10 vidéos", level: "all" },
  { n: "Module 6", t: "WeChat : parler aux fournisseurs sans parler chinois", v: "4 vidéos", level: "all" },
  { n: "Module 7", t: "Pinduoduo : les prix cassés", v: "9 vidéos", level: "all" },
  { n: "Module 10", t: "Consolidation & logistique jusqu'à ta porte", v: "9 vidéos", level: "all" },
  { n: "Module 11", t: "Le Système de Précommandes", v: "6 vidéos", level: "digital" },
  { n: "Module 14", t: "Listes de transitaires et d'agents regroupeurs vérifiés", v: "", level: "digital" },
  { n: "Module 12", t: "Ateliers pratiques", v: "bonus évolutif", level: "digital" },
  { n: "Module 8", t: "Taobao : le plus grand choix de Chine", v: "9 vidéos", level: "pro" },
  { n: "Module 9", t: "1688 : les prix usine", v: "8 vidéos", level: "pro" },
  { n: "Module 13", t: "Accompagnement groupé en live", v: "", level: "pro" },
];

export const levelLabels = {
  all: "Inclus dans tous les niveaux",
  digital: "Elite Digital et Elite Digital Pro",
  pro: "Elite Digital Pro uniquement",
};

export const pains = [
  {
    t: "Tu dépends d'un intermédiaire",
    d: "qui prend sa commission sur chaque commande — souvent sans te le dire.",
  },
  {
    t: "Tu bloques dès la création des comptes",
    d: "parce que personne ne t'a montré les bonnes étapes dans le bon ordre.",
  },
  {
    t: "Tu ne sais pas reconnaître",
    d: "un fournisseur sérieux de celui qui disparaîtra avec ton argent.",
  },
  {
    t: "Tu avances à l'aveugle sur les paiements",
    d: "Alipay, cartes, Mobile Money — la peur au ventre.",
  },
  {
    t: "Tu achètes sur les plateformes « pour étrangers »",
    d: "aux prix gonflés, parce que personne ne t'a montré celles où les Chinois achètent eux-mêmes.",
  },
  {
    t: "Et quand la marchandise arrive",
    d: "la logistique devient un casse-tête que tu découvres trop tard.",
  },
];

export const advantages = [
  {
    t: "Conçue pour les Africains",
    d: "avec nos vraies contraintes : Mobile Money, transitaires, douane, délais.",
  },
  {
    t: "Tout est filmé en direct",
    d: "sur les plateformes. Zéro théorie. Tu vois mon écran, tu reproduis.",
  },
  {
    t: "Les plateformes où sont les VRAIS prix",
    d: "celles où les Chinois achètent eux-mêmes. (Alibaba ? Tout le monde connaît. C'est justement pour ça que les prix y sont les plus hauts. Je t'explique pourquoi dans le Module 2.)",
  },
  { t: "Android ET iPhone", d: "traités séparément. Chacun s'y retrouve." },
  {
    t: "Le processus complet",
    d: "téléphone, comptes, paiement, achat, vérification fournisseur, logistique, douane.",
  },
  {
    t: "Et dans les niveaux supérieurs",
    d: "le Système de Précommandes — vendre AVANT d'acheter, pour ne jamais avancer l'argent des produits.",
  },
];

export const faq = [
  {
    q: "Je ne parle pas chinois. C'est un problème ?",
    a: "Non. Tout repose sur des outils de traduction gratuits, configurés pas-à-pas dans les modules 3.1 et 3.2. Tu discutes avec les fournisseurs sans connaître un mot de chinois.",
  },
  {
    q: "Je dois déjà savoir acheter en ligne ?",
    a: "Non. On part de zéro. Chaque clic est filmé, de la création du compte jusqu'à la livraison.",
  },
  {
    q: "Comment je paie mes achats depuis mon pays ?",
    a: "Carte internationale, Visa prépayée ou Mobile Money. Le Module 4 te montre toutes les options qui fonctionnent réellement depuis l'Afrique, avec leurs pièges.",
  },
  {
    q: "Et si un fournisseur m'arnaque ?",
    a: "C'est exactement ce que la formation t'apprend à éviter : vérifier la fiabilité avant de payer, utiliser les protections de la plateforme, et la procédure de remboursement détaillée.",
  },
  {
    q: "Quelle différence entre les trois niveaux ?",
    a: "Solo Coach Expert : Pinduoduo maîtrisé, pour acheter au vrai prix pour toi. Elite Digital ajoute le Système de Précommandes et mes listes de contacts vérifiés, pour en faire un revenu. Elite Digital Pro ajoute Taobao, 1688 — les prix usine — plus l'accompagnement en live et la communauté à vie.",
  },
  { q: "Je peux monter de niveau plus tard ?", a: "Oui, tu paies simplement la différence." },
  {
    q: "Je suis sur iPhone, ça me concerne ?",
    a: "Oui. Les modules 3.1 et 3.2 traitent Android et iPhone séparément.",
  },
  {
    q: "J'ai accès quand, et pour combien de temps ?",
    a: "Immédiatement après validation du paiement. Et à vie, mises à jour comprises.",
  },
  {
    q: "Et si ce n'est pas pour moi ?",
    a: "Tu testes 7 jours. Si ça ne te convient pas, un message et je te rembourse — sans question. C'est moi qui prends le risque, pas toi.",
  },
];
