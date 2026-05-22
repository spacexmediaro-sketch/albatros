"use client";

import { useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

export function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = v * video.duration;
    }
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.75, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [30, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1], [0.7, 0.45]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[350vh]">
      {/* sticky viewport — video pinned while user scrolls */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#09090b]">
        {/* Video */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />

        {/* Dark overlay — dims as video reveals */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-[#09090b]"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="text-center px-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]/60 mb-4">
              Albatros A Service
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-white">
              Meserie,<br />
              <span className="text-white/30">nu compromis.</span>
            </h2>
          </motion.div>
        </div>

        {/* Scroll indicator — visible only at start */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/20">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="h-5 w-px bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
