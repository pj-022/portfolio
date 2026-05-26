"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function parseMetricValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

export function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { num, prefix, suffix } = parseMetricValue(value);
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => {
    const formatted = Number.isInteger(num) ? Math.round(v).toString() : v.toFixed(1);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) spring.set(num);
  }, [isInView, num, spring]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <motion.p className="font-display text-4xl font-medium text-white md:text-5xl">
        {display}
      </motion.p>
      <p className="mt-2 text-sm text-white/45">{label}</p>
    </div>
  );
}
