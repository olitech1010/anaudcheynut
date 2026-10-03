import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { PracticePreview } from "@/components/home/PracticePreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { AboutBrief } from "@/components/home/AboutBrief";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PracticePreview />
      <ProcessTimeline />
      <AboutBrief />
    </>
  );
}
