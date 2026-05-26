import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadthSection } from "@/components/home/BreadthSection";
import { Reveal } from "@/components/motion/Reveal";
import { HighlightMetrics } from "@/components/ui/MetricsBand";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import {
  breadth,
  projects,
  site,
  stats,
  workPage,
} from "@/lib/content";

export const metadata: Metadata = {
  title: workPage.metaTitle,
  description: site.workIntro,
};

export default function WorkPage() {
  return (
    <>
      <div className="pb-12 pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel>{workPage.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <SectionTitle>
              {workPage.title}
              <span className="text-white/35">{workPage.titleMuted}</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 max-w-3xl">
            <p className="text-lg leading-relaxed text-white/50 md:text-xl">
              {site.workIntro}
            </p>
            <p className="mt-6 text-base text-white/40">{breadth.spotlightNote}</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <HighlightMetrics items={stats.careerHighlights} />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-white/35">
            {workPage.deepDivesLabel}
          </p>
        </Reveal>
        <div className="mt-12 space-y-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                data-cursor="pointer"
                className="group block overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] transition-all hover:border-white/16 hover:bg-white/[0.04]"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px]">
                    <Image
                      src={project.media.hero}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#050508]/80" />
                  </div>
                  <div className="flex flex-col justify-center p-10 md:p-14">
                    <p
                      className="text-xs uppercase tracking-[0.24em]"
                      style={{ color: project.accent }}
                    >
                      Spotlight 0{i + 1} · {project.meta.engagementType}
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-medium text-white md:text-5xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-lg text-white/45">{project.subtitle}</p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <p
                            className="font-display text-xl font-medium md:text-2xl"
                            style={{ color: project.accent }}
                          >
                            {m.value}
                          </p>
                          <p className="mt-1 text-xs text-white/40">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-8 text-sm text-white/55 group-hover:text-white">
                      {workPage.readFullCaseStudy}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <BreadthSection />
    </>
  );
}
