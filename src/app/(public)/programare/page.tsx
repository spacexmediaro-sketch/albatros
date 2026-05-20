import { generatePageMetadata } from "@/lib/seo";
import { ProgramareForm } from "./programare-form";

export const metadata = generatePageMetadata({
  title: "Programare online",
  description:
    "Programează-te online la Albatros A Service Ploiești. Alege serviciul, data și ora potrivită. Confirmare rapidă.",
  path: "/programare",
});

export default function ProgramarePage() {
  return (
    <div className="relative min-h-screen bg-[#04040A] overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 z-0 h-[500px] w-[500px] rounded-full bg-[#FF2D2D]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 z-0 h-[400px] w-[400px] rounded-full bg-[#FF2D2D]/5 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          {/* Badge with pulsing dot */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D2D] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D2D]" />
            </span>
            <span className="text-xs font-medium text-[#8B8D97]">
              Programari disponibile
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Programare online
          </h1>
          <p className="mt-3 text-[#8B8D97]">
            Completeaza formularul si te contactam pentru confirmare in maxim 2 ore.
          </p>
        </div>

        <ProgramareForm />
      </div>
    </div>
  );
}
