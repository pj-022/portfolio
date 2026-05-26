"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 48);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-white/8 bg-[#050508]/75 backdrop-blur-xl"
            : "bg-transparent",
        )}
        initial={false}
        animate={{ y: 0 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            href="/"
            className="group flex flex-col leading-none"
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-display text-sm font-semibold tracking-tight text-white md:text-base">
              {site.name}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-white/45 transition-colors group-hover:text-white/70">
              {site.headerSubtitle}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor="pointer"
                  className={cn(
                    "relative text-sm tracking-wide transition-colors",
                    active ? "text-white" : "text-white/55 hover:text-white/90",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-white"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={cn(
                "h-px w-6 bg-white transition-transform",
                menuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-white transition-opacity",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-white transition-transform",
                menuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </motion.header>

      <motion.div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-[#050508] px-8 md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <nav className="flex flex-col gap-8">
          {nav.map((item, i) => (
            <motion.div
              key={item.href}
              initial={false}
              animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -24 }}
              transition={{ delay: menuOpen ? i * 0.08 : 0 }}
            >
              <Link
                href={item.href}
                className="font-display text-4xl font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
