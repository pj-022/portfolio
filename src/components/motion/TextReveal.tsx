"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap gap-x-[0.28em]", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="overflow-hidden pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
