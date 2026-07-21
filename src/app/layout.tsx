import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://web24.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WEB24 AI | Páginas web premium creadas por IA en 24 horas",
    template: "%s | WEB24 AI",
  },
  description:
    "Responde unas preguntas y nuestra IA crea una página web premium, exclusiva y optimizada para tu negocio. Diseño, SEO, hosting y dominio. Entrega en menos de 24 horas.",
  keywords: [
    "páginas web con IA",
    "diseño web inteligencia artificial",
    "crear página web",
    "web premium",
    "landing page",
    "web en 24 horas",
    "diseño web profesional",
  ],
  authors: [{ name: "WEB24 AI" }],
  creator: "WEB24 AI",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "WEB24 AI",
    title: "WEB24 AI | Tu web premium creada por IA en menos de 24 horas",
    description:
      "Diseño exclusivo generado por inteligencia artificial. Responde unas preguntas y recibe tu web profesional en menos de 24 horas.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "WEB24 AI — Páginas web premium creadas por IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEB24 AI | Páginas web premium creadas por IA en 24 horas",
    description:
      "Responde unas preguntas y recibe una web premium, exclusiva y optimizada para tu negocio en menos de 24 horas.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WEB24 AI",
  url: SITE_URL,
  description:
    "Páginas web premium creadas por inteligencia artificial y entregadas en menos de 24 horas.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2500",
    bestRating: "5",
  },
  offers: {
    "@type": "Offer",
    category: "Diseño y desarrollo web",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
