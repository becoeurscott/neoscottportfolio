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

/* Témoignages vidéo — fichiers convertis dans /public/videos.
   Neo : ajuste les libellés (prénom, ville, produit reçu…). */
export const videoTestimonials = [
  { id: "v1", src: "/videos/temoignage-1.mp4", poster: "/videos/temoignage-1.jpg", label: "Sa commande reçue, racontée par lui" },
  { id: "v2", src: "/videos/temoignage-2.mp4", poster: "/videos/temoignage-2.jpg", label: "Premier achat en Chine, sans intermédiaire" },
  { id: "v3", src: "/videos/temoignage-3.mp4", poster: "/videos/temoignage-3.jpg", label: "Ce qu'il a économisé sur sa commande" },
  { id: "v4", src: "/videos/temoignage-4.mp4", poster: "/videos/temoignage-4.jpg", label: "Son parcours, de la formation au colis" },
  { id: "v5", src: "/videos/temoignage-5.mp4", poster: "/videos/temoignage-5.jpg", label: "Colis reçu à Douala" },
  { id: "v6", src: "/videos/temoignage-6.mp4", poster: "/videos/temoignage-6.jpg", label: "Sa commande, du paiement à la réception" },
  { id: "v7", src: "/videos/temoignage-7.mp4", poster: "/videos/temoignage-7.jpg", label: "Ce qu'il a changé depuis la formation" },
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
    priceNote: "Paiement unique · Accès à vie",
    headline: "Ta première commande en Chine, passée et livrée.",
    checkout: "https://neoscott.shop/en/products/le-guide-pinduoduo-en-30-jour/checkout",
    cta: "Je prends Solo Coach Expert",
    pitch: [
      "Tu veux acheter au vrai prix pour toi — ton téléphone, ton ordinateur, tes affaires. Pas monter un business demain. Juste **arrêter de payer le double**.",
      "**Une seule plateforme, maîtrisée à fond : Pinduoduo.** Celle où le minimum est **1 seul produit**. Tu commandes une pièce, tu la reçois, tu comprends.",
    ],
    chaptersLabel: "Voir les 14 chapitres",
    chapters: [
      {
        title: null,
        items: [
          "Introduction",
          "Les 5 outils secrets pour acheter en Chine",
          "Créer ton compte Pinduoduo",
          "Maîtriser l'interface",
          "Recherche de produits : la méthode des 3 clics",
          "Lire une fiche produit : les 7 informations cachées que 90% des débutants ratent",
          "Trouver un bon fournisseur : les 6 signaux qui distinguent un vrai d'un arnaqueur",
          "Commander plusieurs variantes en une seule commande",
          "Le transit en Chine : comment ça se passe réellement",
          "Trouver un transitaire : éviter les pièges du premier coup",
          "L'adresse de livraison : ton point de réception",
          "Créer et vérifier ton compte Alipay",
          "Recharger ton Alipay depuis l'Afrique",
          "Toutes les méthodes de paiement qui marchent",
        ],
      },
    ],
    bonuses: [
      { icon: "🎁", text: "Ma liste de transitaires" },
      { icon: "🎁", text: "Ma liste d'agents de recharge Alipay" },
    ],
    calc: "Le calcul : un seul achat te fait économiser plus que le prix de cette formation.",
    cover: { src: "/images/tier-solo.jpg", label: "Solo Coach Expert — maîtrisez Pinduoduo en 24h" },
  },
  {
    id: "digital",
    emoji: "⭐",
    name: "ELITE DIGITAL",
    price: "14 900",
    priceNote: "Paiement unique · Accès à vie",
    badge: "Le plus choisi",
    featured: true,
    headline: "Tu ne commandes plus seulement. Tu gagnes de l'argent avec.",
    checkout: "https://neoscott.shop/en/products/le-guide-pinduoduo-en-30-jour-8/checkout",
    cta: "Je prends Elite Digital",
    pitch: [
      "Tes premières centaines de milliers, en parallèle de ce que tu fais déjà.",
      "Le problème de ceux qui essaient : ils achètent du stock, ça ne se vend pas, l'argent dort. **Ici, on fait l'inverse.** Ton client paie d'abord, tu commandes ensuite. **Ton capital reste à zéro.**",
    ],
    includes: "Tout Solo Coach Expert, plus :",
    chaptersLabel: "Voir les chapitres",
    chapters: [
      {
        title: "Les fondations",
        items: [
          "Le vocabulaire de l'import : sourcing, transitaire, agent regroupeur, CBM",
          "Comment circule une commande, de la Chine jusqu'à ta ville",
          "Les erreurs de débutant qui coûtent une commande entière",
          "Où sont les vrais prix — et pourquoi ce n'est pas là où tout le monde regarde",
        ],
      },
      {
        title: "WeChat",
        items: ["Créer ton compte WeChat et les précautions à connaître"],
      },
      {
        title: "La logistique complète",
        items: [
          "Regrouper plusieurs commandes en un seul envoi",
          "Aérien ou maritime : comment choisir selon le colis",
          "Calculer le CBM et ton coût réel au kilo",
          "Douane et récupération du colis à l'arrivée",
        ],
      },
      {
        title: "Le Système de Précommandes",
        items: [
          "Vendre avant d'acheter : le client paie d'abord",
          "Fixer un prix qui garde ta marge, transport compris",
          "Le message de vente et la gestion des délais",
          "Payer ton fournisseur avec l'argent du client — sans sortir un franc de ta poche",
        ],
      },
    ],
    bonuses: [
      { icon: "🎁", text: "Le processus d'achat complet filmé de A à Z — de la recherche jusqu'au colis reçu" },
      { icon: "🎁", text: "Mes transitaires et agents testés — avec leurs tarifs et leurs délais" },
      { icon: "🎁", text: "Le template CBM & coût de revient — tu sais ce que tu gagnes avant de commander" },
      { icon: "🎁", text: "Comment structurer ton business de précommande" },
    ],
    calc: "Le calcul : une seule précommande peut te rapporter plusieurs fois le prix de ce niveau. Ma dernière m'a rapporté 150 000 F.",
    cover: { src: "/images/tier-digital.jpg", label: "Elite Digital — maîtrisez Pinduoduo et lancez votre business" },
  },
  {
    id: "pro",
    emoji: "🔥",
    name: "ELITE DIGITAL PRO",
    price: "24 990",
    priceNote: "Paiement unique · Accès à vie",
    headline: "Les trois plateformes. Et tu n'avances plus jamais seul.",
    checkout: "https://neoscott.shop/en/products/le-guide-pinduoduo-en-30-jour-8-1/checkout",
    cta: "Je prends Elite Digital Pro",
    pitch: [
      "Tu ne veux pas un revenu d'appoint. **Tu veux en vivre.** Commander en volume, avoir tes propres marges, ne dépendre de personne.",
      "Pour ça, Pinduoduo ne suffit plus. Il te faut **1688** — où plus tu commandes, moins tu paies. Et **Taobao**, le plus grand catalogue de Chine.",
    ],
    includes: "Tout Elite Digital, plus :",
    chaptersLabel: "Voir les chapitres",
    chapters: [
      {
        title: "Taobao — le plus grand choix de Chine",
        items: [
          "Créer ton compte Taobao",
          "Maîtriser l'interface",
          "Recherche de produits",
          "Lire une fiche produit",
          "Trouver un bon fournisseur",
          "Commander plusieurs variantes",
        ],
      },
      {
        title: "1688 — les prix usine",
        items: [
          "Créer ton compte même en tant qu'étranger",
          "Maîtriser l'interface",
          "Recherche de produits",
          "Lire une fiche produit et les paliers de prix",
          "Trouver et contacter une usine",
          "Négocier ton tarif et commander en volume",
        ],
      },
    ],
    bonuses: [
      { icon: "👥", text: "Les sessions live — tes blocages débloqués en direct" },
      { icon: "👥", text: "La communauté à vie — des acheteurs actifs, leurs fournisseurs testés, leurs erreurs évitées" },
      { icon: "👥", text: "L'accès prioritaire à mes réponses" },
    ],
    calc: "Tu n'avances plus jamais seul. Jamais.",
    cover: { src: "/images/tier-pro.jpg", label: "Elite Digital Pro — l'achat en Chine sur toutes les plateformes" },
  },
];


/* « Ce que tu sauras faire » — les resultats concrets de la formation */
export const skills = [
  {
    t: "Créer et configurer tous tes comptes",
    d: "Pinduoduo, Alipay, WeChat. Android comme iPhone.",
  },
  {
    t: "Trouver n'importe quel produit en Chine",
    d: "même sans connaître son nom en chinois",
  },
  {
    t: "Repérer un arnaqueur avant de payer",
    d: "les 6 signaux qui distinguent un vrai fournisseur",
  },
  {
    t: "Acheter au prix usine",
    d: "un iPhone 14 vendu **180 000 F** à Douala te revient à **107 000 F** livré. **73 000 F d'écart**, sur un seul produit.",
    highlight: true,
  },
  {
    t: "Payer depuis l'Afrique",
    d: "Mobile Money, carte, Alipay : la méthode qui marche pour toi",
  },
  {
    t: "Faire venir ton colis jusqu'à ta ville",
    d: "transitaire, consolidation, douane",
  },
  {
    t: "Vendre avant d'acheter",
    d: "ton client paie d'abord, tu commandes ensuite. Ma dernière commande client : **604 000 F**, plus de **150 000 F de marge**, sans sortir un franc de ma poche.",
    highlight: true,
  },
];


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
    d: "celles où les Chinois achètent eux-mêmes. (Alibaba ? Tout le monde connaît. C'est justement pour ça que les prix y sont les plus hauts. Je t'explique pourquoi à l'intérieur.)",
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
    a: "Non. Tout repose sur des outils de traduction gratuits, configurés pas-à-pas dans la formation. Tu discutes avec les fournisseurs sans connaître un mot de chinois.",
  },
  {
    q: "Je dois déjà savoir acheter en ligne ?",
    a: "Non. On part de zéro. Chaque clic est filmé, de la création du compte jusqu'à la livraison.",
  },
  {
    q: "Comment je paie mes achats depuis mon pays ?",
    a: "Carte internationale, Visa prépayée ou Mobile Money. La formation te montre toutes les options qui fonctionnent réellement depuis l'Afrique, avec leurs pièges.",
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
    a: "Oui. Android et iPhone sont traités séparément, écran par écran.",
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
