"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import { process } from "@/lib/content";

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>{process.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08} className="mt-6">
          <SectionTitle>
            {process.title}
            <span className="text-white/35">{process.titleMuted}</span>
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.15} className="mt-6 max-w-2xl">
          <p className="text-lg text-white/50">{process.description}</p>
        </Reveal>

        <div className="relative mt-24">
          <div className="absolute left-[19px] top-0 hidden h-full w-px overflow-hidden bg-white/10 md:left-1/2 md:block md:-translate-x-px">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-indigo-400 via-violet-400 to-transparent"
              style={{ scaleY: lineScale }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {process.steps.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 0.05}
                className={`relative flex flex-col gap-4 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:mr-auto md:pr-16 md:text-right"
                    : "md:ml-auto md:pl-16 md:text-left"
                }`}
              >
                <span className="font-mono text-5xl font-medium text-white/10 md:text-6xl">
                  {item.step}
                </span>
                <h3 className="font-display text-2xl font-medium text-white md:text-3xl">
                  {item.label}
                </h3>
                <p className="text-base text-white/45">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
