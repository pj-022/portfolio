"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import { philosophy } from "@/lib/content";

export function PhilosophySection() {
  return (
    <section className="relative border-y border-white/8 bg-[#0a0a0f] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>{philosophy.label}</SectionLabel>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal delay={0.08}>
            <SectionTitle className="text-4xl md:text-5xl lg:text-6xl">
              {philosophy.title}
              <br />
              <span className="text-white/35">{philosophy.titleMuted}</span>
            </SectionTitle>
          </Reveal>
          <div className="space-y-8">
            {philosophy.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.12 + i * 0.08}>
                <p className="text-lg leading-[1.75] text-white/55 md:text-xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
