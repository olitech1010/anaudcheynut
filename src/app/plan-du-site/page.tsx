import type { Metadata } from "next";
import { PlanDuSiteClient } from "@/components/sitemap/PlanDuSiteClient";

export const metadata: Metadata = {
  title: "Plan du Site | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Plan du site du Cabinet Me Arnaud Cheynut, Avocat-Défenseur à Monaco. Accès rapide à toutes les pages du site.",
};

export default function PlanDuSitePage() {
  return <PlanDuSiteClient />;
}
