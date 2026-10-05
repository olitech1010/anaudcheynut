import type { Metadata } from "next";
import { ActualitesClient } from "@/components/blog/ActualitesClient";

export const metadata: Metadata = {
  title: "Actualités Juridiques Monaco | Cabinet Me Arnaud Cheynut",
  description:
    "Analyses et veille juridique en droit monégasque : jurisprudence, conformité LCB-FT, droit des sociétés, immobilier et résidence en Principauté de Monaco.",
  openGraph: {
    title: "Actualités Juridiques Monaco | Cabinet Me Arnaud Cheynut",
    description:
      "Veille juridique et analyses par Me Arnaud Cheynut, Avocat-Défenseur inscrit à l'Ordre des Avocats de Monaco.",
  },
};

export default function ActualitesPage() {
  return <ActualitesClient />;
}
