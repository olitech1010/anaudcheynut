import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Me Arnaud Cheynut | Avocat-Défenseur à la Cour d'Appel de Monaco",
  description:
    "Cabinet d'Avocat-Défenseur à Monaco. Représentation et conseil juridique de premier ordre en Droit Pénal, Droit des Affaires, Litiges Civils, Référés d'Urgence et Droit Immobilier Monégasque.",
  keywords: [
    "avocat monaco",
    "avocat-defenseur monaco",
    "me arnaud cheynut",
    "droit penal monaco",
    "ordre des avocats monaco",
    "contentieux monaco",
    "garde a vue monaco",
    "droit des affaires monaco",
  ],
  authors: [{ name: "Me Arnaud Cheynut" }],
  creator: "Cabinet Me Arnaud Cheynut",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arnaud-cheynut.com"),
  openGraph: {
    title: "Me Arnaud Cheynut | Avocat-Défenseur à la Cour d'Appel de Monaco",
    description:
      "Cabinet d'Avocat-Défenseur à Monaco. Excellence juridique, rigueur procédurale et stricte confidentialité au service de vos intérêts en Principauté.",
    locale: "fr_MC",
    type: "website",
    siteName: "Cabinet Me Arnaud Cheynut Monaco",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-700 min-h-screen flex flex-col selection:bg-gold-500 selection:text-navy-900">
        <EmergencyBanner />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
