"use client";

import { motion } from "framer-motion";
import { marquee } from "@/lib/content";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...marquee.items, ...marquee.items];
  return (
    <div className="flex overflow-hidden border-y border-white/8 bg-[#06060b] py-5">
      <motion.div
        className="flex shrink-0 gap-12 whitespace-nowrap px-6"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm uppercase tracking-[0.2em] text-white/30"
          >
            {item}
            <span className="mx-6 text-white/15">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section className="relative overflow-hidden">
      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  );
}
