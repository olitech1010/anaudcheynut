import type { Metadata } from "next";
import { FeesClient } from "@/components/fees/FeesClient";

export const metadata: Metadata = {
  title: "Honoraires et Modes de Facturation | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Transparence des honoraires du Cabinet Me Arnaud Cheynut. Forfait, facturation au temps passé et honoraires de résultat. Convention d'honoraires préalable obligatoire.",
  openGraph: {
    title: "Honoraires | Cabinet Me Arnaud Cheynut Monaco",
    description:
      "Modes de facturation transparents et convention d'honoraires systématique pour chaque mandat confié au Cabinet.",
  },
};

export default function HonorairesPage() {
  return <FeesClient />;
}
