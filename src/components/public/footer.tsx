import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] bg-grid-pattern text-white">
      <div className="h-1 bg-gradient-to-r from-[#E63946] via-[#3B82F6] to-[#E63946]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold">Albatros A Service</h3>
            <p className="mt-2 text-sm text-gray-300">
              Service auto multimarca în Blejoi-Ploiești. Membru al rețelei
              Q-SERVICE Romania.
            </p>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="font-semibold">Servicii</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li><Link href="/servicii/diagnoza-auto" className="hover:text-[#E63946] transition-colors duration-300">Diagnoză auto</Link></li>
              <li><Link href="/servicii/reparatii-motoare-diesel" className="hover:text-[#E63946] transition-colors duration-300">Reparații diesel</Link></li>
              <li><Link href="/servicii/tinichigerie-auto" className="hover:text-[#E63946] transition-colors duration-300">Tinichigerie</Link></li>
              <li><Link href="/servicii/vopsitorie-auto" className="hover:text-[#E63946] transition-colors duration-300">Vopsitorie</Link></li>
              <li><Link href="/servicii/geometrie-roti" className="hover:text-[#E63946] transition-colors duration-300">Geometrie roți</Link></li>
              <li><Link href="/servicii/electrica-auto" className="hover:text-[#E63946] transition-colors duration-300">Electrică auto</Link></li>
              <li><Link href="/servicii/mecanica-auto" className="hover:text-[#E63946] transition-colors duration-300">Mecanică auto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>
                <a href="tel:+40244410650" className="hover:text-[#E63946] transition-colors duration-300">
                  0244 410 650
                </a>
              </li>
              <li>
                <a href="tel:+40723177032" className="hover:text-[#E63946] transition-colors duration-300">
                  0723 177 032
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#E63946] transition-colors duration-300">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-1">
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.county}
              </li>
            </ul>
          </div>

          {/* Program */}
          <div>
            <h4 className="font-semibold">Program</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>Luni – Vineri: 08:30 – 17:30</li>
              <li>Sâmbătă: Închis</li>
              <li>Duminică: Închis</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li><Link href="/politica-confidentialitate" className="hover:text-[#E63946] transition-colors duration-300">Politica de confidențialitate</Link></li>
              <li><Link href="/termeni-conditii" className="hover:text-[#E63946] transition-colors duration-300">Termeni și condiții</Link></li>
              <li><Link href="/politica-cookies" className="hover:text-[#E63946] transition-colors duration-300">Politica cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Albatros A Service. Toate
            drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
