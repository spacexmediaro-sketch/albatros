import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { Phone, Mail, MapPin, Shield, Star, Wrench } from "lucide-react";

const servicii = [
  { name: "Diagnoză auto", href: "/servicii/diagnoza-auto" },
  { name: "Reparații diesel", href: "/servicii/reparatii-motoare-diesel" },
  { name: "Tinichigerie", href: "/servicii/tinichigerie-auto" },
  { name: "Vopsitorie", href: "/servicii/vopsitorie-auto" },
  { name: "Geometrie roți", href: "/servicii/geometrie-roti" },
  { name: "Electrică auto", href: "/servicii/electrica-auto" },
  { name: "Mecanică auto", href: "/servicii/mecanica-auto" },
];

const navigatie = [
  { name: "Acasă", href: "/" },
  { name: "Programare", href: "/programare" },
  { name: "Estimator AI", href: "/estimator" },
  { name: "Blog", href: "/blog" },
  { name: "Despre", href: "/despre" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Politica de confidențialitate", href: "/politica-confidentialitate" },
  { name: "Termeni și condiții", href: "/termeni-conditii" },
  { name: "Politica cookies", href: "/politica-cookies" },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      {/* Top accent line */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #FF2D2D30 30%, #FF2D2D50 50%, #FF2D2D30 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="text-xl font-bold text-white">Albatros</span>{" "}
              <span className="text-xl font-bold text-[#FF2D2D]">A Service.</span>
            </div>

            <p className="text-sm leading-relaxed text-[#8B8D97]">
              Service auto multimarca în Blejoi-Ploiești, specializat în
              reparații motoare diesel, tinichigerie și vopsitorie auto. Membru
              al rețelei Q-SERVICE Romania.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[#8B8D97]">
                <Shield className="h-3.5 w-3.5 text-[#FF2D2D]" />
                Q-SERVICE
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[#8B8D97]">
                <Star className="h-3.5 w-3.5 text-[#FF2D2D]" />
                20+ ani
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[#8B8D97]">
                <Wrench className="h-3.5 w-3.5 text-[#FF2D2D]" />
                Multimarca
              </span>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+40244410650"
                className="flex items-center gap-2 text-sm text-[#8B8D97] transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#FF2D2D]" />
                0244 410 650
              </a>
              <a
                href="tel:+40723177032"
                className="flex items-center gap-2 text-sm text-[#8B8D97] transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#FF2D2D]" />
                0723 177 032
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-[#8B8D97] transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#FF2D2D]" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-[#8B8D97]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF2D2D]" />
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.county}
              </div>
            </div>

            {/* Program */}
            <div className="space-y-1 text-sm text-[#8B8D97]">
              <p>Luni – Vineri: 08:30 – 17:30</p>
              <p>Sâmbătă – Duminică: Închis</p>
            </div>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E2E4E9]">
              Servicii
            </h4>
            <ul className="mt-5 space-y-3">
              {servicii.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8B8D97] transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E2E4E9]">
              Navigație
            </h4>
            <ul className="mt-5 space-y-3">
              {navigatie.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8B8D97] transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#E2E4E9]">
              Legal
            </h4>
            <ul className="mt-5 space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8B8D97] transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-[#8B8D97]">
            &copy; 2024–2026 Albatros A Service. Toate drepturile rezervate.
          </p>

          <div className="flex items-center gap-6">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-[#8B8D97] transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <span className="flex items-center gap-1.5 text-xs text-[#8B8D97]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D2D] shadow-[0_0_6px_#FF2D2D]" />
              Operațional
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
