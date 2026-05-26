"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import type { ProjectMetric } from "@/lib/content";

export function MetricsBand({
  metrics,
  accent,
}: {
  metrics: ProjectMetric[];
  accent: string;
}) {
  return (
    <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {metrics.map((m) => (
        <StaggerItem key={m.label}>
          <div
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8"
            style={{ boxShadow: `0 0 40px -24px ${accent}44` }}
          >
            <p
              className="font-mono text-3xl font-medium md:text-4xl"
              style={{ color: accent }}
            >
              {m.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-white/45">{m.label}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function HighlightMetrics({
  items,
}: {
  items: readonly { metric: string; label: string; context: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 0.06}>
          <div className="rounded-2xl border border-white/8 p-6">
            <p className="font-display text-3xl font-medium text-white">{item.metric}</p>
            <p className="mt-2 text-sm text-white/55">{item.label}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/30">
              {item.context}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
