"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import { breadth, projects, workPreview } from "@/lib/content";
import { cn } from "@/lib/utils";

export function WorkPreviewSection() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>{workPreview.label}</SectionLabel>
        </Reveal>
        <Reveal
          delay={0.08}
          className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <SectionTitle className="max-w-3xl">
              {workPreview.title}
              <span className="text-white/35">{workPreview.titleMuted}</span>
            </SectionTitle>
            <p className="mt-6 max-w-2xl text-base leading-[1.7] text-white/45 md:text-lg">
              {breadth.spotlightNote}
            </p>
          </div>
          <Link
            href="/work"
            data-cursor="pointer"
            className="shrink-0 text-sm text-white/50 transition-colors hover:text-white"
          >
            {workPreview.viewAllLink}
          </Link>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                data-cursor="pointer"
                className="group block h-full"
              >
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-sm border border-white/8 bg-white/[0.02] transition-all duration-500",
                    "hover:border-white/16 hover:bg-white/[0.04]",
                  )}
                >
                  <div
                    className="h-0.5 w-full shrink-0"
                    style={{ backgroundColor: project.accent }}
                  />
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/8">
                    <Image
                      src={project.media.hero}
                      alt=""
                      fill
                      className="object-cover opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${project.accent}18 0%, transparent 60%)`,
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                      {project.meta.domain}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-white md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-snug text-white/50">
                      {project.tagline}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-4">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <p
                            className="font-mono text-lg font-medium"
                            style={{ color: project.accent }}
                          >
                            {m.value}
                          </p>
                          <p className="mt-0.5 text-[11px] text-white/40">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <motion.span
                      className="mt-auto pt-6 text-sm text-white/55 group-hover:text-white"
                      whileHover={{ x: 4 }}
                    >
                      {workPreview.readCaseStudy} →
                    </motion.span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
