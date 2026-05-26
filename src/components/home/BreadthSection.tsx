"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import { breadth } from "@/lib/content";

export function BreadthSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>{breadth.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08} className="mt-6">
          <SectionTitle>
            {breadth.title}
            <span className="text-white/35">{breadth.titleMuted}</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.15} className="mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-white/50 md:text-xl">
            {breadth.spotlightNote}
          </p>
        </Reveal>

        <Stagger className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {breadth.deliveryTypes.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-7">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400/80">
                  {item.count}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/45">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-24">
          <p className="text-xs uppercase tracking-[0.28em] text-white/35">
            {breadth.industriesLabel}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {breadth.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55"
              >
                {industry}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <p className="text-xs uppercase tracking-[0.28em] text-white/35">
            {breadth.alsoShippedLabel}
          </p>
          <ul className="mt-8 columns-1 gap-x-12 text-white/45 sm:columns-2 lg:columns-3">
            {breadth.additionalWork.map((item, i) => (
              <motion.li
                key={item}
                className="mb-3 flex items-start gap-3 text-sm leading-relaxed"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400/60" />
                {item}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
