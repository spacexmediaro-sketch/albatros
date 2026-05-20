"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop: vertical tab on right edge */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed right-0 top-1/2 z-40 -translate-y-1/2 hidden md:block"
          >
            <Link
              href="/estimator"
              className="
                group flex flex-col items-center justify-center
                rounded-tl-xl rounded-bl-xl
                bg-[#0F1017]/90 backdrop-blur-xl
                border border-white/[0.08]
                px-3.5 py-7
                text-white font-semibold text-sm
                shadow-lg
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(255,45,45,0.3)]
                hover:border-[#FF2D2D]/30
              "
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {/* Pulsing green dot */}
              <span className="relative mb-3 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>

              <span className="text-[#FF2D2D] font-bold tracking-wide">
                Centru Daune
              </span>
              <span className="mt-1.5 text-white/70 text-xs">
                Estimare Gratuită
              </span>
            </Link>
          </motion.div>

          {/* Mobile: fixed bottom bar */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          >
            <Link
              href="/estimator"
              className="
                flex items-center justify-center
                h-14
                bg-[#0F1017]/90 backdrop-blur-xl
                border-t border-white/[0.08]
                text-white font-semibold text-sm
                shadow-[0_-4px_20px_rgba(0,0,0,0.4)]
                transition-all duration-300
                active:bg-[#0F1017]
              "
            >
              {/* Pulsing green dot */}
              <span className="relative mr-3 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-[#FF2D2D] font-bold mr-2">
                Centru de Daune
              </span>
              <span className="text-white/70">&mdash;</span>
              <span className="ml-2 text-white/70">Estimare Gratuită</span>
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
