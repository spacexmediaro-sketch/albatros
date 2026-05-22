import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate ALBATROS A SRL — cum colectăm, procesăm și protejăm datele dumneavoastră personale conform GDPR.",
  path: "/politica-confidentialitate",
});

export default function PoliticaConfidentialitatePage() {
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
            Politica de confidențialitate
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
                1. Cine suntem
              </h2>
              <p>
                Operatorul de date cu caracter personal este <strong className="text-white">ALBATROS A S.R.L.</strong>, cu
                sediul social în Blejoi, Județul Prahova, România, înregistrată la Registrul
                Comerțului sub nr. J29/XXXX/XXXX, CUI: XXXXXXX (denumită în continuare
                &ldquo;Albatros&rdquo;, &ldquo;noi&rdquo; sau &ldquo;Operatorul&rdquo;). Prezenta
                politică de confidențialitate descrie modul în care colectăm, utilizăm, stocăm și
                protejăm datele dumneavoastră personale atunci când vizitați site-ul nostru web
                <strong className="text-white"> albatrosa.ro</strong> sau când apelați la serviciile noastre de reparații auto.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                2. Cadrul legal
              </h2>
              <p>
                Prezenta politică este elaborată în conformitate cu <strong className="text-white">Regulamentul (UE)
                2016/679</strong> al Parlamentului European și al Consiliului din 27 aprilie 2016
                privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter
                personal și privind libera circulație a acestor date (denumit în continuare
                &ldquo;GDPR&rdquo; sau &ldquo;Regulamentul general privind protecția datelor&rdquo;),
                precum și cu legislația națională aplicabilă, inclusiv Legea nr. 190/2018 privind
                măsuri de punere în aplicare a Regulamentului (UE) 2016/679.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                3. Ce date personale colectăm
              </h2>
              <p>În funcție de interacțiunea dumneavoastră cu site-ul și serviciile noastre, putem colecta următoarele categorii de date:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#E2E4E9]">
                <li>
                  <strong className="text-white">Date de identificare:</strong> nume, prenume, adresă de e-mail, număr de
                  telefon — furnizate de dumneavoastră la completarea formularelor de contact sau
                  programare.
                </li>
                <li>
                  <strong className="text-white">Date referitoare la vehicul:</strong> marca, modelul, anul de fabricație,
                  numărul de înmatriculare, seria VIN — necesare pentru prestarea serviciilor de
                  reparații auto.
                </li>
                <li>
                  <strong className="text-white">Date tehnice de navigare:</strong> adresa IP, tipul browserului, sistemul de
                  operare, paginile vizitate, durata vizitei, sursa de referință — colectate automat
                  prin cookie-uri și instrumente analitice.
                </li>
                <li>
                  <strong className="text-white">Imagini încărcate:</strong> fotografii ale avariilor auto, încărcate
                  voluntar prin estimatorul AI — procesate exclusiv pentru furnizarea estimării.
                </li>
                <li>
                  <strong className="text-white">Date de comunicare:</strong> conținutul mesajelor transmise prin formularul
                  de contact, e-mail sau telefon.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                4. Scopurile prelucrării datelor
              </h2>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#E2E4E9]">
                <li>Procesarea și confirmarea programărilor online pentru servicii auto.</li>
                <li>Furnizarea serviciilor solicitate, inclusiv comunicări legate de statusul reparațiilor.</li>
                <li>Răspunsul la solicitările și întrebările dumneavoastră transmise prin formularul de contact.</li>
                <li>Generarea estimărilor de cost prin intermediul estimatorului AI de avarii.</li>
                <li>Îmbunătățirea site-ului web, a serviciilor și a experienței utilizatorilor prin analiză statistică agregată.</li>
                <li>Respectarea obligațiilor legale și fiscale aplicabile.</li>
                <li>Trimiterea de comunicări comerciale (newsletter, oferte) — exclusiv cu consimțământul dumneavoastră prealabil.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                5. Baza legală a prelucrării
              </h2>
              <p>Prelucrarea datelor dumneavoastră personale se bazează, în funcție de situație, pe:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#E2E4E9]">
                <li>
                  <strong className="text-white">Consimțământul dumneavoastră</strong> (art. 6 alin. 1 lit. a din GDPR) — pentru cookie-uri analitice, comunicări de marketing și încărcarea fotografiilor în estimator.
                </li>
                <li>
                  <strong className="text-white">Executarea unui contract</strong> (art. 6 alin. 1 lit. b din GDPR) — pentru procesarea programărilor și prestarea serviciilor de reparații auto.
                </li>
                <li>
                  <strong className="text-white">Interesul legitim</strong> (art. 6 alin. 1 lit. f din GDPR) — pentru asigurarea securității site-ului, prevenirea fraudei și îmbunătățirea serviciilor.
                </li>
                <li>
                  <strong className="text-white">Obligația legală</strong> (art. 6 alin. 1 lit. c din GDPR) — pentru respectarea cerințelor fiscale, contabile și legale aplicabile.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                6. Durata stocării datelor
              </h2>
              <p>
                Datele personale sunt păstrate atât timp cât este necesar pentru îndeplinirea scopurilor
                pentru care au fost colectate. Datele legate de programări și servicii prestate se
                păstrează pe durata relației contractuale și pentru o perioadă suplimentară de 3 ani
                după încetarea acesteia, sau conform cerințelor legale aplicabile (de exemplu, 10 ani
                pentru documente fiscale). Datele colectate prin formularul de contact se șterg în
                termen de 12 luni de la finalizarea conversației. Cookie-urile analitice expiră conform
                politicii de cookie-uri.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                7. Drepturile dumneavoastră
              </h2>
              <p>
                În conformitate cu GDPR, aveți următoarele drepturi privind datele dumneavoastră
                personale:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#E2E4E9]">
                <li><strong className="text-white">Dreptul de acces</strong> — de a obține confirmarea prelucrării datelor și o copie a acestora.</li>
                <li><strong className="text-white">Dreptul la rectificare</strong> — de a solicita corectarea datelor inexacte sau incomplete.</li>
                <li><strong className="text-white">Dreptul la ștergere</strong> (&ldquo;dreptul de a fi uitat&rdquo;) — de a solicita eliminarea datelor, în condițiile prevăzute de lege.</li>
                <li><strong className="text-white">Dreptul la restricționarea prelucrării</strong> — de a solicita limitarea prelucrării în anumite situații.</li>
                <li><strong className="text-white">Dreptul la portabilitatea datelor</strong> — de a primi datele într-un format structurat, utilizat în mod curent și care poate fi citit automat.</li>
                <li><strong className="text-white">Dreptul la opoziție</strong> — de a vă opune prelucrării datelor bazate pe interesul legitim.</li>
                <li><strong className="text-white">Dreptul de a nu face obiectul unei decizii automate</strong> — de a nu fi supus unor decizii bazate exclusiv pe prelucrare automatizată.</li>
                <li><strong className="text-white">Dreptul de a depune o plângere</strong> — la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), cu sediul în București, B-dul G-ral Gheorghe Magheru 28-30, sector 1, www.dataprotection.ro.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                8. Cookie-uri
              </h2>
              <p>
                Site-ul nostru utilizează cookie-uri pentru a asigura funcționalitatea corectă și
                pentru a analiza traficul web. Informații detaliate despre tipurile de cookie-uri
                utilizate, scopul acestora și modalitățile de gestionare sunt disponibile în{" "}
                <a
                  href="/politica-cookies"
                  className="font-medium text-[#C9A84C] underline underline-offset-2 hover:text-[#D4AF37]"
                >
                  Politica de cookie-uri
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                9. Partajarea datelor cu terți
              </h2>
              <p>
                Datele dumneavoastră personale pot fi partajate cu următoarele categorii de terți,
                exclusiv în scopurile descrise în prezenta politică:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#E2E4E9]">
                <li>
                  <strong className="text-white">Google Analytics</strong> — pentru analiza statistică a traficului web. Google procesează date în conformitate cu politica proprie de confidențialitate (policies.google.com/privacy).
                </li>
                <li>
                  <strong className="text-white">Furnizori de hosting și infrastructură</strong> — pentru stocarea și transmiterea datelor în condiții de siguranță.
                </li>
                <li>
                  <strong className="text-white">Autorități publice</strong> — atunci când există o obligație legală de comunicare.
                </li>
              </ul>
              <p className="mt-3">
                Nu vindem, nu închiriem și nu comercializăm datele dumneavoastră personale către terți
                în scopuri de marketing.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                10. Securitatea datelor
              </h2>
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor
                personale împotriva accesului neautorizat, pierderii, distrugerii sau divulgării, inclusiv:
                criptare TLS/SSL pentru toate conexiunile, acces restricționat pe bază de roluri,
                actualizări regulate de securitate și backup-uri periodice. Cu toate acestea, nicio
                metodă de transmitere prin internet nu este 100% sigură, iar noi nu putem garanta
                securitatea absolută a datelor.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                11. Contact DPO
              </h2>
              <p>
                Pentru orice întrebări sau solicitări privind prelucrarea datelor dumneavoastră
                personale, sau pentru exercitarea drepturilor prevăzute de GDPR, ne puteți contacta la:
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
                  <strong className="text-white">Adresă:</strong> Șoseaua Ploiești-Văleni FN, Blejoi, Prahova, 107070, România
                </li>
                <li>
                  <strong className="text-white">Telefon:</strong> 0723 177 032
                </li>
              </ul>
              <p className="mt-3">
                Vom răspunde solicitărilor dumneavoastră în cel mult 30 de zile calendaristice de la
                primirea cererii.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-white">
                12. Modificări ale politicii
              </h2>
              <p>
                Ne rezervăm dreptul de a actualiza prezenta politică de confidențialitate periodic,
                pentru a reflecta modificările legislative sau operaționale. Versiunea actualizată va fi
                publicată pe această pagină, cu menționarea datei ultimei actualizări. Vă recomandăm
                să consultați periodic această pagină pentru a fi la curent cu eventualele modificări.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
