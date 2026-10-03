import { HeroSection } from "@/components/home/HeroSection";
import { AwardsBar } from "@/components/home/AwardsBar";
import { AboutSplit } from "@/components/home/AboutSplit";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AwardsBar />
      <AboutSplit />
      <PracticeAreas />
      <StatsCounter />
      <ProcessTimeline />
      <CTABanner />
    </main>
  );
}
