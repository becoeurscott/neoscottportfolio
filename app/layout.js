import "./globals.css";

export const metadata = {
  title: "ELITE ACHAT EN CHINE — Achète en Chine au vrai prix, sans intermédiaire",
  description:
    "Apprends à acheter en Chine au vrai prix, sans intermédiaire. Plus de 1000 personnes formées.",
  metadataBase: new URL("https://elite-achat-en-chine.com"),
  openGraph: {
    title: "ELITE ACHAT EN CHINE — Achète en Chine au vrai prix",
    description:
      "Apprends à acheter en Chine au vrai prix, sans intermédiaire. Plus de 1000 personnes formées.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Sans JavaScript, les éléments animés resteraient invisibles */}
        <noscript>
          <style>{`.notch,.nav-inner,.hero-top,.hero-sub,.hero-actions,.reassure,.hero-grid,
            .statement span,.mod-card,.tier,.adv,.pain{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
