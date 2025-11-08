// app/layout.js
import "../styles/globals.css";
import "../styles/lavea-additions.css";
import "./globals.css";
import "../styles/footer.css";
import "../styles/responsive.css";

import HeaderClient from "./HeaderClient";
import ConsultModal from "../components/ConsultModal";
import FloatingContacts from "../components/FloatingContacts";
import Footer from "../components/Footer";

// Укажи реальный домен ниже:
const siteUrl = "https://lavea.studio"; // TODO: заменить на прод-домен

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LAVEA — премиальная студия интерьера",
    template: "%s — LAVEA",
  },
  description:
    "Интерьеры премиум-класса без сюрпризов и хаоса: 3D совпадает с реальностью, прозрачные сметы, авторский надзор по SLA. Интерьеры с любовью к деталям.", // из УТП
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "LAVEA — премиальная студия интерьера",
    description:
      "Итальянский люкс и инженерная точность: от концепции и 3D до комплектации и авторского надзора. 3D = реальность.", // из УТП
    siteName: "LAVEA",
    images: [
      {
        url: "/og/lavea-og.jpg", // см. п.5 — положим картинку
        width: 1200,
        height: 630,
        alt: "LAVEA — премиальная студия интерьера",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LAVEA — премиальная студия интерьера",
    description:
      "Интерьеры без стресса: прозрачные сметы, надзор-SLA, системный процесс. Красота, рожденная из точности.", // из УТП
    images: ["/og/lavea-og.jpg"],
  },
  icons: {
    icon: [
      { url: "/fav/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/fav/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "interior design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <HeaderClient />
        <main>{children}</main>
        <Footer />
        <ConsultModal />
        <FloatingContacts />
      </body>
    // в app/layout.js
import Script from "next/script";

// ...

export default function RootLayout({ children }) {
  const siteUrl = "https://lavea.studio"; // тот же, что выше

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LAVEA",
    url: siteUrl,
    logo: `${siteUrl}/fav/apple-touch-icon.png`,
    email: "laveastudio@yandex.ru",
    telephone: "+7 495 215-54-71",
    sameAs: [
      // добавишь свои соцсети при необходимости
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "LAVEA — студия интерьера",
    areaServed: ["Москва", "Московская область", "Европа"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Ильинка, 4",
      addressLocality: "Москва",
      addressCountry: "RU",
    },
    url: siteUrl,
    telephone: "+7 495 215-54-71",
    description:
      "Премиальные интерьеры без хаоса: прозрачные сметы, авторский надзор по SLA, инженерная точность. 3D = реальность.", // УТП
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LAVEA",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  return (
    <html lang="ru">
      <body>
        <HeaderClient />
        <main>{children}</main>
        <Footer />
        <ConsultModal />
        <FloatingContacts />

        {/* JSON-LD */}
        <Script id="ld-org" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Script id="ld-service" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
        <Script id="ld-website" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      </body>
    </html>
  );
}

    </html>
  );
}
