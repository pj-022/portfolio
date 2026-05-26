import type { Metadata } from "next";
import Link from "next/link";
import { BreadthSection } from "@/components/home/BreadthSection";
import { StatsSection } from "@/components/home/StatsSection";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import { aboutPage, breadth, site } from "@/lib/content";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <div className="pb-12 pt-28 md:pt-36">
        <section className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <SectionLabel>{aboutPage.label}</SectionLabel>
          </Reveal>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1.05] tracking-tight text-white">
            <TextReveal text={aboutPage.headline} />
          </h1>
        </section>

        <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <Reveal>
              <div className="space-y-8 text-lg leading-relaxed text-white/55 md:text-xl">
                {aboutPage.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                  {aboutPage.connectLabel}
                </p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href={site.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="font-display text-2xl text-white transition-opacity hover:opacity-70"
                    >
                      {aboutPage.githubLabel}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="font-display text-2xl text-white transition-opacity hover:opacity-70"
                    >
                      {aboutPage.linkedinLabel}
                    </a>
                  </li>
                </ul>
                <div className="mt-10 border-t border-white/8 pt-10">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                    {aboutPage.locationLabel}
                  </p>
                  <p className="mt-2 text-lg text-white/70">{site.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-10">
          <Reveal>
            <SectionLabel>{aboutPage.deliveryFootprintLabel}</SectionLabel>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {breadth.deliveryTypes.map((d) => (
              <Reveal key={d.title}>
                <div className="rounded-2xl border border-white/8 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-indigo-400/80">
                    {d.count}
                  </p>
                  <p className="mt-2 font-medium text-white">{d.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-10">
          <Reveal>
            <SectionLabel>{aboutPage.principlesLabel}</SectionLabel>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <SectionTitle className="text-4xl md:text-5xl">
              {aboutPage.principlesTitle}
            </SectionTitle>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {aboutPage.principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/8 p-8">
                  <h3 className="font-display text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/45">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-7xl px-6 md:mt-40 md:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 p-10 md:p-16">
              <h2 className="font-display text-3xl font-medium text-white md:text-4xl">
                {aboutPage.ctaTitle}
              </h2>
              <p className="mt-4 max-w-lg text-white/50">{aboutPage.ctaDescription}</p>
              <Link
                href="/work"
                data-cursor="pointer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050508]"
              >
                {aboutPage.ctaButton}
              </Link>
            </div>
          </Reveal>
        </section>
      </div>

      <StatsSection />
      <BreadthSection />
    </>
  );
}
