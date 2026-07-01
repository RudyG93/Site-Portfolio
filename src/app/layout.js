import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "../lib/site";
import Background from "../../components/Background";
import ScrollProgress from "../../components/ScrollProgress";
import BackToTop from "../../components/BackToTop";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Rudy Giacomazzo — Développeur full-stack Next.js";
const description =
  "Rudy Giacomazzo, développeur web full-stack (React, Next.js, Node.js) basé à Montpellier, disponible en remote. Applications web performantes et sites sur-mesure pour les artisans.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Rudy Giacomazzo",
  },
  description,
  keywords: [
    "Rudy Giacomazzo",
    "développeur full-stack",
    "développeur web Montpellier",
    "Next.js",
    "React",
    "Node.js",
    "développeur freelance",
    "création de site web artisan",
  ],
  authors: [{ name: "Rudy Giacomazzo", url: siteUrl }],
  creator: "Rudy Giacomazzo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Rudy Giacomazzo",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rudy Giacomazzo",
  url: siteUrl,
  image: `${siteUrl}/rudy.jpg`,
  jobTitle: "Développeur full-stack",
  email: "mailto:giacomazzorudy@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montpellier",
    addressCountry: "FR",
  },
  sameAs: [
    "https://github.com/RudyG93",
    "https://www.linkedin.com/in/rudy-giacomazzo-b8aa55321/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PHP",
    "SEO",
    "Accessibilité web",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-ink text-paper font-body overflow-x-hidden`}
      >
        <Background />
        <ScrollProgress />
        {children}
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
