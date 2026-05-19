"use client";

import Link from "next/link";

export function FloatingCTA() {
  return (
    <>
      {/* Desktop: vertical tab on right edge */}
      <Link
        href="/estimator"
        className="
          fixed right-0 top-1/2 z-40 -translate-y-1/2
          hidden md:flex flex-col items-center justify-center
          rounded-tl-xl rounded-bl-xl
          bg-gradient-to-b from-[#E63946] to-[#0A2540]
          px-3 py-6
          text-white font-semibold text-sm
          shadow-2xl
          transition-all duration-300
          hover:scale-105 hover:from-[#ff4d5a] hover:to-[#0d3060]
          animate-cta-glow
        "
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        {/* Pulsing dot */}
        <span className="relative mb-3 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>

        <span>Centru Daune</span>
        <span className="mt-1">Estimare Gratuita</span>
      </Link>

      {/* Mobile: fixed bottom bar */}
      <Link
        href="/estimator"
        className="
          fixed bottom-0 left-0 right-0 z-40
          flex md:hidden items-center justify-center
          h-14
          bg-gradient-to-r from-[#E63946] to-[#0A2540]
          text-white font-semibold text-sm
          shadow-2xl
        "
      >
        {/* Pulsing dot */}
        <span className="relative mr-3 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        Centru de Daune &mdash; Estimare Gratuita
      </Link>

      <style jsx global>{`
        @keyframes cta-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(230, 57, 70, 0.4), 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          50% {
            box-shadow: 0 0 30px rgba(230, 57, 70, 0.7), 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        }
        .animate-cta-glow {
          animation: cta-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
