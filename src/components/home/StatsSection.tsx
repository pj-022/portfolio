"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedMetric } from "@/components/ui/AnimatedNumber";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/lib/content";

export function StatsSection() {
  return (
    <section className="relative border-y border-white/8 bg-[#07070c] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>{stats.label}</SectionLabel>
          <p className="mt-4 max-w-2xl text-lg text-white/45">{stats.description}</p>
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {stats.siteStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <AnimatedMetric
                value={`${stat.value}${stat.suffix}`}
                label={stat.label}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
