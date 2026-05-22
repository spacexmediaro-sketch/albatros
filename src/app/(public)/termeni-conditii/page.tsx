import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Termeni și condiții",
  description:
    "Termenii și condițiile de utilizare a site-ului Albatros A Service — servicii auto, programări online, garanții și obligații.",
  path: "/termeni-conditii",
});

export default function TermeniConditiiPage() {
  return (
    <div className="min-h-screen bg-[#04040A]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#04040A] pt-24 pb-16">
        {/* Grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C9A84C]/[0.04] blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-white">
            Termeni și condiții
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
                1. Informații generale
              </h2>
              <p>
                Prezentul document stabilește termenii și condițiile de utilizare a site-ului web
                <strong className="text-white"> albatrosa.ro</strong> (denumit în continuare &ldquo;Site-ul&rdquo;),
                administrat de <strong className="text-white">ALBATROS A S.R.L.</strong>, cu sediul în Blejoi, Județul
                Prahova, România (denumită în continuare &ldquo;Albatros&rdquo; sau
                &ldquo;Prestatorul&rdquo;). Prin accesarea și utilizarea Site-ului, confirmați că
                ați citit, înțeles și acceptat în totalitate acești termeni și condiții. Dacă nu
                sunteți de acord cu oricare dintre prevederi, vă rugăm să nu utilizați Site-ul.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                2. Serviciile oferite
              </h2>
              <p>
                Albatros A Service este un service auto multimarcă, membru al rețelei Q-SERVICE
                Romania, specializat în următoarele categorii de servicii:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 marker:text-[#E2E4E9]">
                <li>Diagnoză auto computerizată</li>
                <li>Reparații motoare diesel, injectoare și turbine</li>
                <li>Tinichigerie și vopsitorie auto profesională</li>
                <li>Geometrie roți 3D</li>
                <li>Electrică auto</li>
                <li>Mecanică generală (frâne, suspensie, distribuție, ambreiaj)</li>
                <li>Încărcări aer condiționat</li>
                <li>Estimare orientativă a costurilor de reparație prin AI (estimator online)</li>
              </ul>
              <p className="mt-3">
                Serviciile propriu-zise se prestează exclusiv la sediul fizic al service-ului din
                Blejoi, Șoseaua Ploiești-Văleni FN, pe baza unei inspecții directe a vehiculului.
                Informațiile prezentate pe Site au caracter informativ și nu constituie o ofertă
                fermă sau un contract.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                3. Programări online
              </h2>
              <p>
                Site-ul oferă posibilitatea de a realiza programări online pentru servicii auto.
                Completarea formularului de programare nu constituie un contract de prestări servicii,
                ci reprezintă o solicitare de rezervare. Programarea devine efectivă după confirmarea
                transmisă de Albatros prin e-mail sau telefon. Ne rezervăm dreptul de a refuza sau
                reprograma o solicitare în funcție de disponibilitatea agendei, a pieselor sau a
                echipamentelor necesare. Anularea sau modificarea unei programări se poate face cu cel
                puțin 24 de ore înainte de data stabilită, prin telefon la 0723 177 032 sau prin
                e-mail la albatros_service@q-service.ro.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                4. Estimatorul AI de avarii
              </h2>
              <p>
                Estimatorul AI disponibil pe Site generează estimări orientative de cost pe baza
                fotografiilor și informațiilor furnizate de utilizator. Aceste estimări{" "}
                <strong className="text-white">nu constituie ofertă fermă</strong>, deviz oficial sau angajament contractual.
                Prețul final al reparației se stabilește exclusiv în urma inspecției fizice a
                vehiculului la sediul service-ului. Albatros nu își asumă responsabilitatea pentru
                diferențele dintre estimarea AI și costul real al reparației.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                5. Garanții
              </h2>
              <p>
                Serviciile de reparații prestate de Albatros beneficiază de garanție conform
                legislației române în vigoare. Durata și condițiile garanției sunt specificate în
                documentele emise la finalizarea fiecărei lucrări (proces-verbal de predare-primire,
                factură fiscală). Garanția acoperă exclusiv lucrările efectuate și piesele furnizate
                de Albatros. Garanția nu se aplică în următoarele situații: utilizare necorespunzătoare
                a vehiculului, intervenții ulterioare realizate de terți neautorizați, accidente sau
                avarii survenite după reparație, nerespectarea instrucțiunilor de utilizare și
                întreținere. Piesele furnizate de client nu sunt acoperite de garanția Albatros.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                6. Prețuri și plăți
              </h2>
              <p>
                Prețurile afișate pe Site au caracter informativ și orientativ. Prețul final se
                comunică clientului înainte de efectuarea lucrărilor, pe baza devizului aprobat.
                Plata se efectuează la ridicarea vehiculului, prin numerar, card bancar sau transfer
                bancar. Albatros emite factură fiscală pentru toate serviciile prestate.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                7. Limitarea răspunderii
              </h2>
              <p>
                Albatros depune toate eforturile pentru a asigura exactitatea și actualitatea
                informațiilor prezentate pe Site. Cu toate acestea, nu garantăm că Site-ul va fi
                disponibil permanent, fără întreruperi sau erori. Albatros nu este responsabil pentru:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 marker:text-[#E2E4E9]">
                <li>Daune directe sau indirecte rezultate din utilizarea sau imposibilitatea utilizării Site-ului.</li>
                <li>Informații inexacte sau incomplete furnizate de utilizatori în formulare.</li>
                <li>Conținutul site-urilor terțe către care se face trimitere prin link-uri de pe Site.</li>
                <li>Pierderi financiare bazate exclusiv pe estimările AI fără inspecție fizică.</li>
                <li>Întreruperi ale serviciului cauzate de factori externi (atacuri cibernetice, probleme de hosting, forță majoră).</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                8. Proprietate intelectuală
              </h2>
              <p>
                Toate elementele Site-ului — texte, imagini, grafice, logo-uri, design, cod sursă,
                structura bazei de date și orice alt conținut — sunt proprietatea ALBATROS A S.R.L.
                sau sunt utilizate cu licență validă și sunt protejate de legislația română și
                internațională privind drepturile de autor și proprietatea intelectuală. Este
                interzisă reproducerea, distribuirea, modificarea sau utilizarea în orice mod
                comercial a conținutului Site-ului fără acordul scris prealabil al Albatros.
                Logo-urile și denumirile comerciale aparținând terților (Q-SERVICE, mărcile auto etc.)
                sunt proprietatea respectivilor deținători.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                9. Obligațiile utilizatorului
              </h2>
              <p>Prin utilizarea Site-ului, vă angajați:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6 marker:text-[#E2E4E9]">
                <li>Să furnizați informații corecte și complete în formularele de pe Site.</li>
                <li>Să nu utilizați Site-ul în scopuri ilegale sau care pot aduce prejudicii Albatros sau terților.</li>
                <li>Să nu încercați accesarea neautorizată a sistemelor informatice ale Site-ului.</li>
                <li>Să nu transmiteți conținut malițios (viruși, malware, spam).</li>
                <li>Să respectați prezentii termeni și condiții în integralitate.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                10. Protecția datelor personale
              </h2>
              <p>
                Prelucrarea datelor dumneavoastră personale se realizează în conformitate cu
                Regulamentul (UE) 2016/679 (GDPR). Informații detaliate sunt disponibile în{" "}
                <a
                  href="/politica-confidentialitate"
                  className="font-medium text-[#C9A84C] underline underline-offset-2 hover:text-[#D4AF37]"
                >
                  Politica de confidențialitate
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                11. Modificări ale termenilor
              </h2>
              <p>
                Albatros își rezervă dreptul de a modifica prezentii termeni și condiții în orice
                moment, fără notificare prealabilă. Versiunea actualizată va fi publicată pe această
                pagină cu data ultimei modificări. Continuarea utilizării Site-ului după publicarea
                modificărilor constituie acceptul dumneavoastră implicit al noilor condiții. Vă
                recomandăm să consultați periodic această pagină.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                12. Legea aplicabilă și jurisdicția
              </h2>
              <p>
                Prezentii termeni și condiții sunt guvernați de legislația din România. Orice litigii
                decurgând din utilizarea Site-ului sau din prestarea serviciilor vor fi soluționate
                pe cale amiabilă. În cazul în care o rezolvare amiabilă nu este posibilă, litigiile
                vor fi supuse spre soluționare instanțelor judecătorești competente de la sediul
                Albatros A S.R.L. din Blejoi, Județul Prahova, România.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                13. Contact
              </h2>
              <p>
                Pentru orice întrebări sau clarificări privind prezentii termeni și condiții, ne
                puteți contacta la:
              </p>
              <ul className="mt-3 space-y-1 pl-2">
                <li>
                  <strong className="text-white">E-mail:</strong>{" "}
                  <a
                    href="mailto:albatros_service@q-service.ro"
                    className="font-medium text-[#C9A84C] underline underline-offset-2 hover:text-[#D4AF37]"
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
