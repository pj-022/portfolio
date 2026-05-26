"use client";

import { motion } from "framer-motion";

export function DataFlowIllustration({ accent = "#3b9eff" }: { accent?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="data-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="240" cy="200" r="160" fill="url(#data-glow)" />
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={60 + i * 100}
          y={120 + (i % 2) * 40}
          width="72"
          height="48"
          rx="8"
          stroke="white"
          strokeOpacity={0.15 + i * 0.05}
          fill="white"
          fillOpacity={0.03}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
        />
      ))}
      <motion.path
        d="M132 168 L228 188 L348 148"
        stroke={accent}
        strokeWidth="2"
        strokeOpacity="0.8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.5 }}
      />
      <motion.path
        d="M132 208 L228 228 L348 188"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, delay: 0.7 }}
      />
      <motion.circle
        cx="240"
        cy="280"
        r="56"
        stroke={accent}
        strokeOpacity="0.4"
        fill={accent}
        fillOpacity="0.08"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <text
        x="240"
        y="286"
        textAnchor="middle"
        fill="white"
        fillOpacity="0.5"
        fontSize="11"
        fontFamily="system-ui"
      >
        INSIGHTS
      </text>
    </svg>
  );
}

export function CommerceIllustration({ accent = "#ff6b4a" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 480 400" fill="none" className="h-full w-full" aria-hidden>
      <motion.rect
        x="100"
        y="80"
        width="280"
        height="200"
        rx="20"
        stroke="white"
        strokeOpacity="0.12"
        fill="white"
        fillOpacity="0.02"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
      />
      <motion.rect
        x="130"
        y="110"
        width="220"
        height="24"
        rx="6"
        fill={accent}
        fillOpacity="0.25"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={130 + col * 115}
            y={155 + row * 42}
            width="100"
            height="32"
            rx="6"
            fill="white"
            fillOpacity="0.05"
            stroke="white"
            strokeOpacity="0.08"
          />
        )),
      )}
      <motion.path
        d="M140 320 Q240 260 340 320"
        stroke={accent}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
      <circle cx="140" cy="320" r="6" fill={accent} />
      <circle cx="240" cy="268" r="6" fill={accent} fillOpacity="0.7" />
      <circle cx="340" cy="320" r="6" fill={accent} />
    </svg>
  );
}

export function VoiceIllustration({ accent = "#a78bfa" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 480 400" fill="none" className="h-full w-full" aria-hidden>
      <motion.ellipse
        cx="240"
        cy="200"
        rx="120"
        ry="120"
        stroke={accent}
        strokeOpacity="0.2"
        fill={accent}
        fillOpacity="0.06"
        animate={{ rx: [120, 130, 120], ry: [120, 110, 120] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={228 + i * 14}
          y={160}
          width="6"
          height={40 + Math.abs(i) * 12}
          rx="3"
          fill={accent}
          fillOpacity={0.4 + (3 - Math.abs(i)) * 0.15}
          animate={{ height: [40 + Math.abs(i) * 12, 80 - Math.abs(i) * 8, 40 + Math.abs(i) * 12] }}
          transition={{
            duration: 0.8 + Math.abs(i) * 0.1,
            repeat: Infinity,
            delay: Math.abs(i) * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.path
        d="M80 280 Q160 220 240 250 T400 270"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
    </svg>
  );
}

export function HeroOrb() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 h-[min(80vw,640px)] w-[min(80vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.22)_0%,transparent_68%)] blur-3xl" />
      <div className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(59,158,255,0.15)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute bottom-[15%] left-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.12)_0%,transparent_70%)] blur-2xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
