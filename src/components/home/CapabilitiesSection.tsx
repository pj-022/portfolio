"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionLabel";
import { capabilities } from "@/lib/content";

const icons: Record<string, React.ReactElement> = {
  compass: (
    <path d="M12 2L4 20l8-3 8 3L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="4" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="2" y="14" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="6" cy="7" r="1" fill="currentColor" />
      <circle cx="6" cy="17" r="1" fill="currentColor" />
    </>
  ),
  cloud: (
    <path
      d="M7 18h11a4 4 0 0 0 0-8 5 5 0 0 0-9.8 1.5A3.5 3.5 0 0 0 7 18z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  ),
  sparkles: (
    <path
      d="M12 3l1.2 4.2L17 8.5l-3.8 1.3L12 14l-1.2-4.2L7 8.5l3.8-1.3L12 3zM5 17l.6 2.1L7.5 20l-1.9.7L5 23l-.6-2.2L2.5 20l1.9-.7L5 17zm14 0l.6 2.1L21.5 20l-1.9.7L19 23l-.6-2.2L16.5 20l1.9-.7L19 17z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </>
  ),
};

export function CapabilitiesSection() {
  return (
    <section className="relative border-y border-white/8 bg-[#08080d] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel>{capabilities.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.08} className="mt-6">
          <SectionTitle>
            {capabilities.title}
            <span className="text-white/35">{capabilities.titleMuted}</span>
          </SectionTitle>
        </Reveal>

        <Stagger className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className="group h-full rounded-sm border border-white/8 bg-transparent p-8 transition-all duration-500 hover:border-white/14">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-white/50 transition-colors group-hover:text-white/80"
                  aria-hidden
                >
                  {icons[cap.icon]}
                </svg>
                <h3 className="mt-6 font-display text-xl font-medium text-white">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {cap.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
