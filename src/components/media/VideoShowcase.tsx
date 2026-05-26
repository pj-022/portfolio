"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { caseStudyLabels, getLoomEmbedUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

type VideoShowcaseProps = {
  poster: string;
  caption: string;
  loomEmbedId: string | null;
  accent?: string;
  title?: string;
};

export function VideoShowcase({
  poster,
  caption,
  loomEmbedId,
  accent = "#6366f1",
  title = "Product walkthrough",
}: VideoShowcaseProps) {
  const [open, setOpen] = useState(false);
  const hasLoom = Boolean(loomEmbedId);

  return (
    <>
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <div className="relative aspect-video">
          <Image
            src={poster}
            alt={caption}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
          <button
            type="button"
            data-cursor="pointer"
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            aria-label={
              hasLoom ? caseStudyLabels.watchWalkthrough : caseStudyLabels.viewPreview
            }
          >
            <motion.span
              className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: `0 0 60px -10px ${accent}88` }}
            >
              <span
                className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent"
                style={{ borderLeftColor: accent }}
              />
            </motion.span>
            <span className="text-sm uppercase tracking-[0.24em] text-white/70">
              {hasLoom
                ? caseStudyLabels.watchWalkthrough
                : caseStudyLabels.viewPreview}
            </span>
          </button>
        </div>
        <div className="border-t border-white/8 px-6 py-4 md:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-white/35">{title}</p>
          <p className="mt-1 text-sm text-white/55">{caption}</p>
          {!hasLoom && (
            <p className="mt-2 text-xs text-white/30">{caseStudyLabels.loomHint}</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className={cn(
                "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]",
                hasLoom ? "max-w-5xl aspect-video" : "max-w-4xl",
              )}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              {hasLoom && loomEmbedId ? (
                <iframe
                  src={getLoomEmbedUrl(loomEmbedId)}
                  allowFullScreen
                  className="aspect-video h-full w-full"
                  title={caption}
                />
              ) : (
                <div className="relative aspect-video">
                  <Image src={poster} alt={caption} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 p-8">
                    <p className="text-white/60">{caption}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ImageGallery({
  images,
  alt,
}: {
  images: readonly string[];
  alt: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {images.map((src, i) => (
        <div
          key={src}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-white/8",
            i === 0 && images.length > 1 && "aspect-video md:col-span-2 md:aspect-[21/9]",
            images.length === 1 && "aspect-video",
          )}
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      ))}
    </div>
  );
}
