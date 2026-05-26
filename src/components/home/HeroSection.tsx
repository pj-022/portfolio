"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroOrb } from "@/components/illustrations/DataFlowIllustration";
import { TextReveal } from "@/components/motion/TextReveal";
import { hero, site } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32">
      <HeroOrb />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-xs uppercase tracking-[0.32em] text-white/45"
        >
          {hero.eyebrow} · {new Date().getFullYear()}
        </motion.p>

        <h1 className="max-w-5xl">
          <span className="sr-only">{site.name}</span>
          <span className="block font-display text-[clamp(2.75rem,9vw,6.5rem)] font-normal leading-[0.95] tracking-tight text-white/50">
            <TextReveal text={hero.line1} delay={0.35} />
          </span>
          <span className="mt-2 block font-display text-[clamp(2.75rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-white">
            <TextReveal text={hero.line2} delay={0.55} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-10 max-w-2xl text-lg leading-[1.7] text-white/55 md:text-xl"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <Link
            href="/work"
            data-cursor="pointer"
            className="group inline-flex items-center gap-3 rounded-sm bg-white px-7 py-3.5 text-sm font-medium text-[#050508] transition-transform hover:scale-[1.02]"
          >
            {hero.primaryCta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/about"
            data-cursor="pointer"
            className="rounded-sm border border-white/20 px-7 py-3.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {hero.secondaryCta}
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 font-mono text-xs tracking-wide text-white/35"
        >
          {hero.footnote}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          {hero.scrollLabel}
        </span>
        <motion.span
          className="block h-10 w-px bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
