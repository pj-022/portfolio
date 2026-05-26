import { BreadthSection } from "@/components/home/BreadthSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WorkPreviewSection } from "@/components/home/WorkPreviewSection";

/** Section order follows insights/portfolio-design-brief.md */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <PhilosophySection />
      <WorkPreviewSection />
      <BreadthSection />
      <CapabilitiesSection />
      <ProcessSection />
    </>
  );
}
