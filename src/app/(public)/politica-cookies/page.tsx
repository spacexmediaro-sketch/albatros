import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Politica de cookie-uri",
  description:
    "Politica de cookie-uri a site-ului Albatros A Service — ce cookie-uri folosim, scopul lor și cum le puteți gestiona.",
  path: "/politica-cookies",
});

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-[#04040A]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#04040A] pt-24 pb-16">
        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FF2D2D]/[0.04] blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-white">
            Politica de cookie-uri
          </h1>
          <p className="mt-2 text-sm text-[#4A4B55]">
            Ultima actualizare: 19 mai 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 text-[#E2E4E9] leading-relaxed">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                1. Ce sunt cookie-urile?
              </h2>
              <p>
                Cookie-urile sunt fișiere text de mici dimensiuni pe care site-urile web le stochează
                pe dispozitivul dumneavoastră (computer, telefon mobil, tabletă) atunci când le
                vizitați. Acestea permit site-ului să rețină informații despre vizita dumneavoastră,
                cum ar fi preferințele de limbă sau alte setări, facilitând astfel vizitele ulterioare
                și făcând site-ul mai util. Cookie-urile nu pot accesa alte date de pe dispozitivul
                dumneavoastră și nu conțin viruși.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                2. Ce cookie-uri folosim
              </h2>
              <p>Site-ul <strong className="text-white">albatrosa.ro</strong> utilizează următoarele categorii de cookie-uri:</p>

              <h3 className="mt-4 mb-2 font-semibold text-[#E2E4E9]">
                a) Cookie-uri strict necesare
              </h3>
              <p>
                Sunt esențiale pentru funcționarea corectă a site-ului. Fără acestea, site-ul nu poate
                funcționa corespunzător. Includ cookie-uri de sesiune pentru autentificare și securitate.
                Nu necesită consimțământ.
              </p>

              <h3 className="mt-4 mb-2 font-semibold text-[#E2E4E9]">
                b) Cookie-uri analitice
              </h3>
              <p>
                Ne permit să înțelegem cum utilizați site-ul, ce pagini vizitați cel mai des, dacă
                întâmpinați erori și alte date statistice agregate. Folosim <strong className="text-white">Google Analytics</strong>{" "}
                pentru a colecta aceste informații în mod anonim. Aceste cookie-uri sunt plasate doar cu
                consimțământul dumneavoastră.
              </p>

              <h3 className="mt-4 mb-2 font-semibold text-[#E2E4E9]">
                c) Cookie-uri funcționale
              </h3>
              <p>
                Rețin preferințele dumneavoastră (de exemplu, consimțământul pentru cookie-uri,
                preferința de temă) pentru a vă oferi o experiență personalizată. Sunt plasate doar cu
                consimțământul dumneavoastră.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                3. Lista cookie-urilor utilizate
              </h2>
              <div className="overflow-x-auto">
                <table className="mt-3 w-full border-collapse border border-white/[0.08] text-sm">
                  <thead>
                    <tr className="bg-[#1A1B25]">
                      <th className="border border-white/[0.08] p-2 text-left text-white">Nume cookie</th>
                      <th className="border border-white/[0.08] p-2 text-left text-white">Furnizor</th>
                      <th className="border border-white/[0.08] p-2 text-left text-white">Scop</th>
                      <th className="border border-white/[0.08] p-2 text-left text-white">Durată</th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#0F1017]">
                    <tr>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">next-auth.session-token</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">albatrosa.ro</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">Autentificare utilizator</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">Sesiune</td>
                    </tr>
                    <tr>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">next-auth.csrf-token</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">albatrosa.ro</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">Protecție CSRF</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">Sesiune</td>
                    </tr>
                    <tr>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">_ga, _ga_*</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">Google Analytics</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">Analiză statistică trafic</td>
                      <td className="border border-white/[0.08] p-2 text-[#E2E4E9]">2 ani</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                4. Cum puteți gestiona cookie-urile
              </h2>
              <p>
                Puteți controla și/sau șterge cookie-urile după preferință. La prima vizită pe site,
                vi se solicită consimțământul pentru cookie-urile care nu sunt strict necesare. Puteți
                revoca acest consimțământ în orice moment.
              </p>
              <p className="mt-3">
                De asemenea, puteți configura browserul dumneavoastră să blocheze sau să șteargă
                cookie-urile. Mai jos găsiți instrucțiuni pentru principalele browsere:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 marker:text-[#E2E4E9]">
                <li>
                  <strong className="text-white">Google Chrome:</strong> Setări &rarr; Confidențialitate și securitate &rarr; Cookie-uri
                </li>
                <li>
                  <strong className="text-white">Mozilla Firefox:</strong> Setări &rarr; Confidențialitate &amp; Securitate &rarr; Cookie-uri
                </li>
                <li>
                  <strong className="text-white">Safari:</strong> Preferințe &rarr; Confidențialitate &rarr; Cookie-uri
                </li>
                <li>
                  <strong className="text-white">Microsoft Edge:</strong> Setări &rarr; Confidențialitate &rarr; Cookie-uri
                </li>
              </ul>
              <p className="mt-3">
                <strong className="text-white">Atenție:</strong> Blocarea sau ștergerea cookie-urilor poate afecta
                funcționalitatea site-ului. Este posibil ca anumite funcții (autentificare, programări)
                să nu funcționeze corect fără cookie-urile necesare.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                5. Cookie-uri de la terți
              </h2>
              <p>
                Anumite cookie-uri sunt plasate de servicii terțe care apar pe paginile noastre.
                Nu controlăm cookie-urile plasate de terți. Vă recomandăm să consultați politicile
                de confidențialitate ale acestor servicii:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 marker:text-[#E2E4E9]">
                <li>
                  <strong className="text-white">Google Analytics:</strong>{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#FF2D2D] underline underline-offset-2 hover:text-[#FF5555]"
                  >
                    policies.google.com/privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                6. Baza legală
              </h2>
              <p>
                Utilizarea cookie-urilor strict necesare se bazează pe interesul legitim al
                operatorului (art. 6 alin. 1 lit. f din GDPR) de a asigura funcționalitatea și
                securitatea site-ului. Cookie-urile analitice și funcționale sunt plasate exclusiv
                pe baza consimțământului dumneavoastră (art. 6 alin. 1 lit. a din GDPR), în
                conformitate cu Directiva 2002/58/CE (ePrivacy) transpusă prin Legea nr. 506/2004
                și OUG nr. 13/2012 din legislația română.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                7. Modificări ale politicii
              </h2>
              <p>
                Ne rezervăm dreptul de a actualiza prezenta politică de cookie-uri periodic.
                Versiunea actualizată va fi publicată pe această pagină cu data ultimei modificări.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                8. Contact
              </h2>
              <p>
                Pentru întrebări legate de utilizarea cookie-urilor pe site-ul nostru, ne puteți
                contacta la:
              </p>
              <ul className="mt-3 space-y-1 pl-2">
                <li>
                  <strong className="text-white">E-mail:</strong>{" "}
                  <a
                    href="mailto:albatros_service@q-service.ro"
                    className="font-medium text-[#FF2D2D] underline underline-offset-2 hover:text-[#FF5555]"
                  >
                    albatros_service@q-service.ro
                  </a>
                </li>
                <li>
                  <strong className="text-white">Telefon:</strong> 0723 177 032
                </li>
                <li>
                  <strong className="text-white">Adresă:</strong> Șoseaua Ploiești-Văleni FN, Blejoi, Prahova, 107070, România
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
