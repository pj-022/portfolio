"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageGallery, VideoShowcase } from "@/components/media/VideoShowcase";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { MetricsBand } from "@/components/ui/MetricsBand";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import {
  caseStudyLabels,
  projects,
  type Project,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export function CaseStudy({ project }: { project: Project }) {
  const labels = caseStudyLabels;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const { media: projectMedia } = project;

  return (
    <article>
      <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden pb-20 pt-28 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src={projectMedia.hero}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-[#050508]/70 to-[#050508]" />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
            project.gradient,
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{project.meta.domain}</SectionLabel>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                {labels.spotlightBadge}
              </span>
            </div>
          </Reveal>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-white">
            <TextReveal text={project.title} />
          </h1>
          <Reveal delay={0.2} className="mt-6 max-w-2xl">
            <p className="text-xl text-white/60 md:text-2xl">{project.tagline}</p>
          </Reveal>
          <Reveal delay={0.25} className="mt-4">
            <p className="text-sm text-white/40">{project.meta.engagementType}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-8 text-sm text-white/40">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em]">{labels.scopeLabel}</p>
              <p className="mt-1 text-white/70">{project.meta.scope}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em]">
                {labels.contributionLabel}
              </p>
              <p className="mt-1 text-white/70">{project.meta.role}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#07070c] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <MetricsBand metrics={project.metrics} accent={project.accent} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <VideoShowcase
            poster={projectMedia.hero}
            caption={projectMedia.videoCaption}
            loomEmbedId={projectMedia.loomEmbedId}
            accent={project.accent}
            title={`${project.title} — walkthrough`}
          />
        </Reveal>
      </section>

      <section className="border-t border-white/8 bg-[#0a0a0f] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel>{labels.overviewLabel}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <p className="max-w-prose text-2xl leading-[1.7] text-white/70 md:text-3xl">
              {project.overview}
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-12">
            <p className="max-w-2xl text-base text-white/40">{labels.overviewNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel>{labels.interfaceLabel}</SectionLabel>
          </Reveal>
          <div className="mt-10">
            <ImageGallery images={projectMedia.gallery} alt={project.title} />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <SectionLabel>{labels.challengeLabel}</SectionLabel>
              <p className="mt-8 text-lg leading-relaxed text-white/55 md:text-xl">
                {project.challenge}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div
                className="relative aspect-square overflow-hidden rounded-3xl border border-white/8"
                style={{ boxShadow: `0 0 120px -40px ${project.accent}40` }}
              >
                <Image
                  src={projectMedia.hero}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#08080d] py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel>{labels.approachLabel}</SectionLabel>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <SectionTitle className="text-4xl md:text-5xl">
              {labels.approachTitle}
            </SectionTitle>
          </Reveal>

          <div className="mt-20 space-y-4">
            {project.approach.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 0.06}>
                <div className="group rounded-2xl border border-white/8 bg-white/[0.02] p-8 transition-colors hover:border-white/14 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                    <span
                      className="font-display text-4xl font-medium md:text-5xl"
                      style={{ color: `${project.accent}99` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-white md:text-3xl">
                        {phase.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel>{labels.capabilitiesLabel}</SectionLabel>
          </Reveal>
          <Stagger className="mt-12 grid gap-3 sm:grid-cols-2">
            {project.capabilities.map((cap) => (
              <StaggerItem key={cap}>
                <div
                  className="flex items-center gap-4 rounded-xl border border-white/8 px-5 py-4"
                  style={{ borderColor: `${project.accent}22` }}
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                  <span className="text-white/70">{cap}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-20">
            <SectionLabel>{labels.stackLabel}</SectionLabel>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/55"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#0a0a0f] py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel>{labels.outcomesLabel}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <SectionTitle className="text-4xl md:text-5xl lg:text-6xl">
              {labels.outcomesTitle}
            </SectionTitle>
          </Reveal>
          <ul className="mt-16 space-y-8">
            {project.outcomes.map((outcome, i) => (
              <Reveal key={outcome} delay={i * 0.08}>
                <li className="flex gap-6 border-b border-white/8 pb-8">
                  <span
                    className="font-display text-3xl font-medium"
                    style={{ color: `${project.accent}55` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-2xl text-lg text-white/60 md:text-xl">{outcome}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-white/35">
              {labels.nextSpotlightLabel}
            </p>
            <Link
              href={`/work/${nextProject.slug}`}
              data-cursor="pointer"
              className="group mt-6 block"
            >
              <h2 className="font-display text-4xl font-medium text-white transition-colors group-hover:text-white/80 md:text-6xl">
                {nextProject.title}
                <span className="ml-4 inline-block transition-transform group-hover:translate-x-2">
                  →
                </span>
              </h2>
              <p className="mt-3 text-lg text-white/45">{nextProject.subtitle}</p>
            </Link>
            <Link
              href="/work"
              data-cursor="pointer"
              className="mt-10 inline-block text-sm text-white/40 hover:text-white"
            >
              {labels.allWorkLink}
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
