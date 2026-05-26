"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  }),
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      custom={delay}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxText({
  children,
  className,
  offset = 80,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ y: isInView ? 0 : offset }}
      transition={{ duration: 1.1, ease }}
    >
      {children}
    </motion.div>
  );
}
