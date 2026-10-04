import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arnaudcheynut.com"),
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
    <html lang="fr" className={`${montserrat.variable}`}>
      <body className="font-montserrat antialiased bg-stone-50 text-stone-700 min-h-screen flex flex-col selection:bg-gold-500 selection:text-navy-900">
        <LanguageProvider>
          <EmergencyBanner />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ChatWidget />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}

