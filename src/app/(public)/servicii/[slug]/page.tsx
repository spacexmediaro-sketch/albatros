import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/seo";

interface ServiceData {
  name: string;
  category: string;
  description: string;
  paragraphs: string[];
  cazuriTipice: { title: string; description: string }[];
  priceFrom: number;
  duration: string;
  faq: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "diagnoza-auto": {
    name: "Diagnoză auto computerizată",
    category: "Diagnoză",
    description:
      "Diagnoză computerizată completă pentru toate mărcile auto. Citire și ștergere coduri de eroare, testare live senzori și actuatori.",
    paragraphs: [
      "Diagnoza auto computerizată este primul pas esențial în identificarea oricărei probleme a mașinii tale. La Albatros A Service folosim echipamente profesionale de diagnoză multimarcă, capabile să comunice cu toate unitățile electronice ale vehiculului: motor, transmisie, ABS, airbag-uri, climatizare și multe altele.",
      "Procesul de diagnoză presupune conectarea la portul OBD-II al mașinii și citirea codurilor de eroare (DTC) stocate în memoria calculatoarelor de bord. Dar nu ne oprim aici — tehnicianul nostru interpretează fiecare cod în contextul simptomelor pe care le descrii, realizând teste suplimentare pentru a identifica cauza reală a problemei.",
      "Folosim echipamente de nivel dealer pentru mărcile cele mai populare: Volkswagen, Audi, BMW, Mercedes-Benz, Opel, Ford, Dacia, Renault, Skoda, Peugeot, Citroen și multe altele. Aceasta ne permite accesul la funcții avansate precum adaptări, codări și programări ale unităților de control.",
      "Diagnoza computerizată este recomandată nu doar atunci când apare un martor pe bord, ci și preventiv — la achiziția unui vehicul second-hand sau periodic, la revizii. O verificare completă poate dezvălui probleme ascunse care, depistate din timp, economisesc reparații costisitoare.",
    ],
    cazuriTipice: [
      {
        title: "Martor Check Engine aprins",
        description:
          "Identificarea cauzei exacte a aprinderii martorului de motor: sondă lambda defectă, catalizator, EGR sau probleme de injecție.",
      },
      {
        title: "Martor ESP/ABS activ",
        description:
          "Diagnoză sistem de stabilitate și frânare: senzori de roată, pompe ABS, unități hidraulice.",
      },
      {
        title: "Inspecție pre-achiziție",
        description:
          "Scanare completă a vehiculului înainte de cumpărare pentru a descoperi erori ascunse, kilometraje modificate sau defecte nemenționate.",
      },
      {
        title: "Martor airbag aprins",
        description:
          "Verificarea sistemului de siguranță pasivă: senzori de impact, pretensionere centuri, modul airbag.",
      },
    ],
    priceFrom: 80,
    duration: "30–60 minute",
    faq: [
      {
        q: "Cât durează o diagnoză auto completă?",
        a: "O diagnoză standard durează între 30 și 60 de minute. În cazuri complexe, care necesită teste suplimentare pe mai multe sisteme, poate dura până la 90 de minute.",
      },
      {
        q: "Ce mărci auto puteți diagnostica?",
        a: "Putem diagnostica toate mărcile auto, atât europene cât și asiatice. Avem echipamente dedicate pentru grupul VAG (VW, Audi, Skoda, Seat), BMW, Mercedes, Opel, Ford, Dacia/Renault, Peugeot/Citroen, Toyota, Hyundai/Kia.",
      },
      {
        q: "Trebuie programare pentru diagnoză?",
        a: "Recomandăm programarea pentru a vă asigura disponibilitatea, dar acceptăm și clienți fără programare în limita locurilor disponibile.",
      },
      {
        q: "Se șterge eroarea la diagnoză?",
        a: "Da, după identificarea și înțelegerea cauzei, putem șterge codurile de eroare. Dacă problema persistă, eroarea va reapărea, indicând necesitatea unei reparații.",
      },
    ],
  },
  "reparatii-motoare-diesel": {
    name: "Reparații motoare diesel",
    category: "Motor",
    description:
      "Reparații complete motoare diesel: turbo, pompe de injecție, distribuție, garnituri chiulasă. Specialiști cu peste 20 ani experiență.",
    paragraphs: [
      "Motoarele diesel moderne sunt sisteme complexe care necesită cunoștințe aprofundate și echipamente specializate pentru diagnosticarea și repararea lor. La Albatros A Service, echipa noastră are peste 20 de ani de experiență în repararea motoarelor diesel, de la motoare aspirate clasice până la cele mai noi unități cu injecție common-rail și turbosuflantă cu geometrie variabilă.",
      "Intervenim pe toate componentele critice ale motorului diesel: sistemul de alimentare (pompe de înaltă presiune, injectoare, rampe comune), sistemul de supraalimentare (turbine, intercoolere, conducte de aer), sistemul de distribuție (lanțuri, curele, tensionere), precum și componentele interne ale motorului (pistoane, segmenți, cuziNeți, arbore cotit).",
      "Un capitol important îl reprezintă sistemele anti-poluare ale motoarelor diesel moderne: filtrul de particule (DPF/FAP), valva EGR, catalizatorul SCR și sistemul AdBlue. Diagnosticăm și rezolvăm probleme precum regenerarea eșuată a filtrului de particule, EGR blocat sau defecțiuni ale sistemului AdBlue.",
      "Folosim piese de calitate OE sau aftermarket premium (Bosch, Delphi, Denso, Continental) și oferim garanție pentru toate lucrările efectuate. Fiecare reparație este urmată de o testare amănunțită pentru a ne asigura că motorul funcționează la parametrii optimi.",
    ],
    cazuriTipice: [
      {
        title: "Pierdere de putere și fum negru",
        description:
          "Cauze frecvente: turbină uzată, injectoare defecte, filtru de aer colmatat sau probleme cu valva EGR.",
      },
      {
        title: "Motor pornește greu la rece",
        description:
          "Verificare bujii incandescente, pompă de alimentare, presiune rampă common-rail și sistem de preîncălzire.",
      },
      {
        title: "Filtru de particule blocat (DPF)",
        description:
          "Diagnoză, regenerare forțată sau curățare profesională a filtrului de particule fără demontare.",
      },
      {
        title: "Zgomot anormal din motor",
        description:
          "Identificare sursă: turbină, lanț/curea distribuție, injectoare cu bătaie, pompe auxiliare.",
      },
    ],
    priceFrom: 300,
    duration: "2–8 ore (în funcție de complexitate)",
    faq: [
      {
        q: "Cât costă o reparație de motor diesel?",
        a: "Costul variază semnificativ în funcție de problema identificată. O reparație simplă (înlocuire bujii incandescente) pornește de la 300 RON, în timp ce o revizie majoră de motor poate ajunge la câteva mii de RON. Oferim întotdeauna un deviz detaliat înainte de începerea lucrării.",
      },
      {
        q: "Oferiți garanție pentru reparații?",
        a: "Da, oferim garanție între 6 și 24 de luni pentru lucrările efectuate, în funcție de tipul intervenției și piesele folosite.",
      },
      {
        q: "Lucrați și pe motoare pe benzină?",
        a: "Da, deși suntem specializați pe diesel, echipa noastră are experiență și pe motoare pe benzină, inclusiv cele cu injecție directă.",
      },
      {
        q: "Cât durează o reparație de motor diesel?",
        a: "De la câteva ore pentru intervenții simple, până la 3-5 zile lucrătoare pentru reparații majore. Vă comunicăm durata estimată odată cu devizul.",
      },
    ],
  },
  "reparatii-injectoare": {
    name: "Reparații injectoare",
    category: "Motor",
    description:
      "Testare, recalibrare și reparații injectoare diesel common-rail. Echipamente de testare profesionale Bosch.",
    paragraphs: [
      "Injectoarele diesel common-rail sunt componente de precizie care funcționează la presiuni extrem de ridicate (până la 2.000 bar) și trebuie să dozeze combustibilul cu exactitate microscopică. Cu timpul, acestea se uzează, își pierd calibrarea sau dezvoltă defecte care afectează performanța motorului, consumul de combustibil și emisiile.",
      "La Albatros A Service, dispunem de un stand profesional de testare injectoare care ne permite să evaluăm cu precizie starea fiecărui injector: debit, punct de deschidere, etanșeitate, calitatea pulverizării și timp de răspuns. Testarea se face comparativ cu valorile nominale ale producătorului.",
      "Reparația injectoarelor presupune demontare, curățare ultrasonică, înlocuirea componentelor uzate (ace, duze, supape), recalibrare pe stand și verificare finală. În multe cazuri, reparația unui injector costă o fracțiune din prețul unuia nou, oferind performanțe similare.",
      "Lucrăm cu injectoare de la toate mărcile principale: Bosch, Delphi, Denso și Siemens/Continental. După montare, realizăm codarea injectoarelor în calculatorul motorului (procedură obligatorie pentru funcționarea corectă) și efectuăm o probă de drum pentru confirmare.",
    ],
    cazuriTipice: [
      {
        title: "Motor merge în trei cilindri",
        description:
          "Injector defect care nu mai pulverizează corect, cauzând rateuri și vibrații. Testare și înlocuire injector afectat.",
      },
      {
        title: "Consum excesiv de motorină",
        description:
          "Injectoare cu debit crescut care supraalimentează cilindrii. Recalibrare sau înlocuire duze.",
      },
      {
        title: "Fum alb/albastru la rece",
        description:
          "Injectoare cu scurgeri interne sau pulverizare defectuoasă la temperaturi scăzute.",
      },
    ],
    priceFrom: 200,
    duration: "3–6 ore",
    faq: [
      {
        q: "Merită reparat un injector sau e mai bine să iau unul nou?",
        a: "În majoritatea cazurilor, reparația este avantajoasă economic — costă 40-60% din prețul unui injector nou. Un injector reparat profesional oferă performanțe comparabile cu unul nou. Recomandăm înlocuirea doar când corpul injectorului este deteriorat fizic.",
      },
      {
        q: "Trebuie schimbate toate injectoarele odată?",
        a: "Nu obligatoriu. Testăm fiecare injector individual și înlocuim/reparăm doar pe cele care nu mai corespund. Totuși, dacă mai multe injectoare arată semne de uzură avansată, poate fi economic să le reparați pe toate simultan.",
      },
      {
        q: "Ce este codarea injectoarelor?",
        a: "Codarea (IMA code) este procedura prin care calculatorul motorului învață parametrii individuali ai fiecărui injector. Este obligatorie după orice înlocuire pentru a asigura dozarea corectă a combustibilului.",
      },
    ],
  },
  "rectificari-chiulase": {
    name: "Rectificări chiulase",
    category: "Motor",
    description:
      "Rectificare profesională chiulase cu echipament specializat. Planare, rodare supape, verificare fisuri.",
    paragraphs: [
      "Chiulasa este una dintre cele mai solicitate piese ale motorului, expusă la temperaturi extreme și presiuni ridicate. Deformarea planului de etanșare, fisurile sau uzura scaunelor de supapă sunt probleme frecvente care necesită intervenție profesională de rectificare.",
      "Procesul de rectificare a chiulasei la Albatros A Service include: demontarea completă, spălarea chimică și curățarea tuturor canalelor, verificarea planității cu comparator digital, verificarea existenței fisurilor (prin presare sau penetrare), planarea suprafeței de etanșare și recondiționarea scaunelor și ghidajelor de supape.",
      "Lucrăm cu echipamente de rectificare de precizie care asigură o planitate sub 0,05 mm, conform specificațiilor producătorilor. Folosim scule de recondiționat scaune de supape cu plăcuțe din carbură, pentru un rezultat de calitate superioară și durabilitate maximă.",
      "După rectificare, chiulasa este asamblată cu supape noi sau recondiționate, arcuri verificate, simeringuri noi și este testată la presiune pentru a confirma etanșeitatea. Montajul final pe motor se realizează cu garnitură nouă și șuruburi de chiulasă noi (acolo unde este recomandat de producător).",
    ],
    cazuriTipice: [
      {
        title: "Garnitură de chiulasă arsă",
        description:
          "Emulsie în ulei, pierdere lichid de răcire, fum alb abundent. Demontare chiulasă, planare și montaj garnitură nouă.",
      },
      {
        title: "Supape arse sau îndoite",
        description:
          "Pierdere compresie pe unul sau mai mulți cilindri. Înlocuire supape, recondiționare scaune, rodare.",
      },
      {
        title: "Chiulasă fisurată",
        description:
          "Verificare și diagnoză fisuri prin testare la presiune. Sudură TIG profesională în cazurile în care reparația este posibilă.",
      },
    ],
    priceFrom: 500,
    duration: "2–5 zile lucrătoare",
    faq: [
      {
        q: "Cât durează rectificarea unei chiulase?",
        a: "Procesul complet — de la demontare la montaj — durează în medie 3-5 zile lucrătoare. Rectificarea propriu-zisă ia 1-2 zile, dar trebuie așteptate piesele de schimb și realizat montajul.",
      },
      {
        q: "Se merită rectificarea sau mai bine cumpăr chiulasă nouă?",
        a: "În 90% din cazuri, rectificarea este soluția optimă economic. O chiulasă nouă poate costa de 3-5 ori mai mult. Rectificarea este recomandată atâta timp cât nu există fisuri majore în corpul chiulasei.",
      },
      {
        q: "Ce cauzează defectarea garniturii de chiulasă?",
        a: "Supraîncălzirea motorului este cauza principală. Alte cauze: montaj incorect anterior, uzură naturală la kilometraje mari, defecte de fabricație ale garniturii.",
      },
    ],
  },
  "tinichigerie-auto": {
    name: "Tinichigerie auto",
    category: "Caroserie",
    description:
      "Reparații caroserie, îndreptare tablă, sudură, tratamente anticorozive. Lucrări de tinichigerie profesională.",
    paragraphs: [
      "Serviciul nostru de tinichigerie auto acoperă întreaga gamă de lucrări de reparație a caroseriei, de la îndreptarea unor lovituri minore (dent repair) până la reconstrucția completă a elementelor de caroserie după accidente. Fiecare lucrare este executată cu atenție la detalii, urmărind redarea formei originale a vehiculului.",
      "Utilizăm tehnici moderne de îndreptare a tablei: tragere cu dispozitive speciale, îndreptare cu ciocan și nicovală, sudură în puncte pentru fixarea elementelor structurale. Pentru loviturile mici, fără afectarea vopselei, oferim și serviciul de PDR (Paintless Dent Repair) — îndreptare fără vopsire.",
      "Un aspect esențial al lucrărilor de tinichigerie este tratamentul anticoroziv. După fiecare reparație, zonele afectate sunt tratate cu grund anticoroziv, izolator și protecție suplimentară pentru a preveni apariția ruginei. Lonjeroanele și elementele structurale primesc tratament special cu ceară sau antigraviTațional.",
      "Lucrăm pe toate tipurile de caroserie: oțel, aluminiu și materiale compozite. Dispunem de bancă de trase pentru aducerea structurii la cotele originale după accidente grave, precum și de echipamente de măsurare pentru verificarea geometriei caroseriei.",
    ],
    cazuriTipice: [
      {
        title: "Lovituri ușoare în parcări",
        description:
          "Îndreptare aripi, portiere sau bare cu minime urme. Posibilă reparație PDR fără revopsire.",
      },
      {
        title: "Accidente cu deformare structurală",
        description:
          "Tragere pe bancă, înlocuire lonjeroane, reparații plafon, praguri și stâlpi.",
      },
      {
        title: "Rugină și coroziune",
        description:
          "Decupare zone ruginite, sudare petice noi, tratament anticoroziv complet.",
      },
      {
        title: "Înlocuire elemente de caroserie",
        description:
          "Montaj aripi, portiere, capote, hayon-uri noi sau second-hand cu ajustare perfectă.",
      },
    ],
    priceFrom: 200,
    duration: "1–5 zile (în funcție de amploare)",
    faq: [
      {
        q: "Cât costă reparația unei lovituri pe portieră?",
        a: "Prețul depinde de dimensiunea și adâncimea loviturii. O lovitură mică (PDR) poate costa de la 200 RON, în timp ce o reparație cu vopsire poate fi între 400-800 RON per element.",
      },
      {
        q: "Lucrați cu asigurările?",
        a: "Da, colaborăm cu toate companiile de asigurări din România. Vă ajutăm cu dosarul de daună și realizăm devizul conform cerințelor asigurătorului.",
      },
      {
        q: "Se vede după reparație?",
        a: "Obiectivul nostru este ca reparația să fie invizibilă. Cu echipamentul și experiența noastră, rezultatele sunt de calitate profesională, comparabile cu standardele producătorilor auto.",
      },
    ],
  },
  "vopsitorie-auto": {
    name: "Vopsitorie auto",
    category: "Caroserie",
    description:
      "Vopsire profesională în cabină dedicată. Potrivire computerizată a culorii, vopsire parțială sau integrală.",
    paragraphs: [
      "Vopsitoria auto Albatros A Service este dotată cu cabină de vopsire profesională cu flux de aer controlat, sistem de încălzire pentru uscare accelerată și iluminare specială pentru evaluarea calității vopsirii. Aceste condiții controlate asigură o calitate superioară a finisajului, fără impurități sau defecte.",
      "Potrivirea culorii se realizează computerizat, folosind spectrofotometru care analizează culoarea originală a mașinii și generează formula exactă de amestecare. Acest lucru este esențial mai ales pentru culorile metalice, perlate sau tricoat, unde diferențele subtile de nuanță pot fi vizibile cu ochiul liber.",
      "Procesul complet de vopsire include: pregătirea suprafeței (șlefuire, chituire, grunduire), aplicarea vopselei în mai multe straturi, aplicarea lacului de protecție și, la final, lustruit profesional. Fiecare etapă este controlată pentru a asigura aderența perfectă și un finisaj impecabil.",
      "Oferim atât vopsire parțială (un element sau o zonă) cât și vopsire integrală a vehiculului. Pentru mașinile clasice sau de colecție, realizăm restaurări complete ale finisajului, inclusiv în culori speciale sau personalizate.",
    ],
    cazuriTipice: [
      {
        title: "Revopsire element după tinichigerie",
        description:
          "Vopsire aripă, portieră sau bară după reparația tablei. Potrivire perfectă cu restul mașinii.",
      },
      {
        title: "Zgârieturi adânci",
        description:
          "Reparație localizată a zgârieturilor care au penetrat lacul și vopseaua, fără revopsirea întregului element.",
      },
      {
        title: "Vopsire integrală",
        description:
          "Schimbare completă de culoare sau reîmprospătare vopsea degradată de soare/intemperii.",
      },
      {
        title: "Vopsire bare plastic",
        description:
          "Vopsire sau revopsire bare, praguri și elemente din plastic cu aderență maximă.",
      },
    ],
    priceFrom: 300,
    duration: "2–5 zile",
    faq: [
      {
        q: "Cât costă vopsirea unei aripi?",
        a: "Vopsirea unui element standard (aripă, portieră) pornește de la 300-500 RON, incluzând pregătirea suprafeței, vopseaua, lacul și lustruit. Prețul variază în funcție de culoare și starea suprafeței.",
      },
      {
        q: "Cât durează uscarea vopselei?",
        a: "În cabina noastră cu sistem de uscare, lacul se întărește în 2-4 ore. Totuși, recomandăm evitarea spălării mașinii timp de 2 săptămâni și a aplicării de ceară timp de o lună.",
      },
      {
        q: "Folosiți vopsea pe bază de apă sau solvent?",
        a: "Folosim vopsele pe bază de apă (waterborne) de la producători premium. Acestea sunt mai prietenoase cu mediul și oferă o potrivire mai bună a culorilor metalice.",
      },
    ],
  },
  "geometrie-roti": {
    name: "Geometrie roți",
    category: "Suspensie",
    description:
      "Geometrie 3D computerizată cu echipament profesional. Aliniere precisă pentru siguranță și economie de anvelope.",
    paragraphs: [
      "Geometria roților (sau alinierea) este reglajul unghiurilor roților conform specificațiilor producătorului auto. O geometrie corectă asigură: direcție stabilă și previzibilă, uzură uniformă a anvelopelor, consum optim de combustibil și siguranță maximă în viraje și la frânare.",
      "La Albatros A Service folosim un sistem de geometrie 3D cu camere de înaltă rezoluție care măsoară cu precizie toate unghiurile: convergența (toe), camber-ul, caster-ul și unghiul de tracțiune. Softul compară automat valorile măsurate cu specificațiile producătorului și indică ajustările necesare.",
      "Verificarea geometriei este recomandată: după înlocuirea pieselor de suspensie sau direcție, după lovirea unui bordur sau groapă, când observi uzura neuniformă a anvelopelor, când mașina trage într-o parte sau când volanul nu stă drept pe drum drept. De asemenea, este indicată la fiecare schimb sezonier de anvelope.",
      "Pe lângă reglajul standard, oferim și geometrie pentru mașini coborâte (tuning), SUV-uri și utilitare. Reglajele sunt efectuate de tehnicieni experimentați care țin cont de stilul de condus și condițiile specifice ale fiecărui client.",
    ],
    cazuriTipice: [
      {
        title: "Uzură neuniformă anvelope",
        description:
          "Anvelopele se uzează pe interior sau exterior din cauza convergenței sau camber-ului incorect.",
      },
      {
        title: "Mașina trage într-o parte",
        description:
          "Tragerea laterală cauzată de diferențe de unghi între roțile din stânga și dreapta.",
      },
      {
        title: "Volan decalat",
        description:
          "Volanul nu stă centrat pe drum drept — reglaj de convergență și centrare volan.",
      },
    ],
    priceFrom: 120,
    duration: "30–60 minute",
    faq: [
      {
        q: "Cât de des trebuie verificată geometria?",
        a: "Recomandăm verificarea de 2 ori pe an (la schimbul sezonier de anvelope) sau ori de câte ori observi simptome precum uzura neuniformă sau tragere laterală.",
      },
      {
        q: "Se face geometria pe toate mărcile?",
        a: "Da, echipamentul nostru 3D are în baza de date specificațiile pentru toate mărcile și modelele auto curente, inclusiv SUV-uri și utilitare.",
      },
      {
        q: "Cât durează o geometrie?",
        a: "Geometria standard durează 30-60 de minute. Dacă sunt necesare înlocuiri de piese de suspensie, durata crește corespunzător.",
      },
      {
        q: "Geometria rezolvă vibrațiile la volan?",
        a: "Vibrațiile la volan sunt de obicei cauzate de echilibrarea incorectă a roților, nu de geometrie. Totuși, verificăm ambele aspecte pentru a identifica cauza reală.",
      },
    ],
  },
  "electrica-auto": {
    name: "Electrică auto",
    category: "Electrică",
    description:
      "Diagnoză și reparații instalație electrică auto. Alternator, electromotor, instalații de cabluri, sisteme de iluminare.",
    paragraphs: [
      "Sistemul electric al mașinii tale este responsabil pentru funcționarea a zeci de componente vitale: pornirea motorului, iluminarea, sistemele de siguranță, confortul în habitaclu și multe altele. O defecțiune electrică poate fi frustrantă și dificil de depistat fără echipamentul potrivit.",
      "La Albatros A Service, tehnicianul nostru electrician auto are experiența și echipamentele necesare pentru a diagnostica și repara orice problemă electrică: de la o simplă siguranță arsă până la defecte complexe ale instalației de cabluri sau ale unităților de control electronic.",
      "Intervenim pe toate componentele electrice: alternator (reparație sau înlocuire), electromotor, baterie (testare și înlocuire), instalație de iluminare (faruri, stopuri, becuri, LED-uri), instalație de cabluri (reparație scurtcircuite, contacte oxidate), sisteme de confort (geamuri electrice, închidere centralizată, alarme), sisteme audio și multimedia.",
      "Oferim și servicii de instalare echipamente suplimentare: senzori de parcare, cameră de mers înapoi, alarme auto, închidere centralizată și alte accesorii electrice. Toate instalațiile respectă standardele de siguranță și nu afectează garanția producătorului.",
    ],
    cazuriTipice: [
      {
        title: "Mașina nu pornește",
        description:
          "Diagnoză sistem de pornire: baterie, electromotor, releu, siguranțe, contact cheie/buton start.",
      },
      {
        title: "Alternator defect",
        description:
          "Baterie descărcată repetat, martor baterie aprins. Testare, reparație sau înlocuire alternator.",
      },
      {
        title: "Probleme cu farurile",
        description:
          "Faruri care nu funcționează, lumină slabă, erori la xenon sau LED. Diagnoză și reparație.",
      },
      {
        title: "Scurtcircuit sau siguranțe arse repetat",
        description:
          "Identificarea și repararea scurtcircuitelor din instalația electrică care cauzează arderea repetată a siguranțelor.",
      },
    ],
    priceFrom: 100,
    duration: "1–4 ore",
    faq: [
      {
        q: "Cum îmi dau seama că alternatorul e defect?",
        a: "Simptomele principale sunt: martorul de baterie aprins, lumini care pâlpâie, baterie descărcată frecvent, zgomot de rulment de la alternator. Testarea pe mașină durează doar câteva minute.",
      },
      {
        q: "Cât costă un alternator nou?",
        a: "Prețul variază între 500-2000 RON în funcție de marcă și model. Alternativ, oferim reparația alternatorului existent (înlocuire diode, rulmenți, perii) la costuri mai reduse.",
      },
      {
        q: "Puteți instala accesorii electrice aftermarket?",
        a: "Da, instalăm senzori de parcare, camere, alarme, sisteme audio și alte echipamente. Toate instalațiile sunt realizate profesional, cu protecție corespunzătoare a circuitelor.",
      },
    ],
  },
  "mecanica-auto": {
    name: "Mecanică auto",
    category: "Mecanică",
    description:
      "Reparații mecanice complete: frâne, ambreiaj, suspensie, distribuție, transmisie. Service multimarcă profesional.",
    paragraphs: [
      "Serviciul de mecanică auto Albatros A Service acoperă toate lucrările mecanice de care mașina ta poate avea nevoie, de la operații de întreținere curentă (revizii, schimb ulei, filtre) până la reparații complexe ale motorului, transmisiei sau suspensiei.",
      "Sistemul de frânare este una dintre componentele critice de siguranță. Efectuăm: înlocuire plăcuțe și discuri de frână, reparații/înlocuire etriere, schimb lichid de frână, reparații frână de mână, diagnoză ABS. Folosim piese de calitate premium (Brembo, TRW, ATE, Bosch) pentru siguranță maximă.",
      "Intervenim pe sistemul de suspensie și direcție: înlocuire amortizoare, arcuri, bucșe, bielete, capete de bară, pivoți, rulmenți roată, fuzete. O suspensie în bună stare asigură confort, stabilitate și siguranță pe orice tip de drum.",
      "Alte lucrări de mecanică frecvente: înlocuire kit de distribuție (curea/lanț, role, pompă apă), schimb ambreiaj (placă, disc, rulment presiune, volantă), reparații cutie de viteze, înlocuire transmisie cardanică și planetare, reparații sistem de răcire (pompe, radiatoare, termostate).",
    ],
    cazuriTipice: [
      {
        title: "Frâne uzate — zgomot la frânare",
        description:
          "Înlocuire plăcuțe și discuri de frână uzate, verificare completă a sistemului de frânare.",
      },
      {
        title: "Ambreiaj patinează",
        description:
          "Înlocuire kit complet ambreiaj: disc, placă de presiune, rulment presiune. La motoarele cu volantă bimasă, verificare și eventual înlocuire.",
      },
      {
        title: "Suspensie — bătăi pe denivelări",
        description:
          "Diagnoză și înlocuire amortizoare, bucșe, bielete stabilizatoare sau alte componente uzate.",
      },
      {
        title: "Kit distribuție — intervalul depășit",
        description:
          "Înlocuire preventivă sau de urgență a curelei/lanțului de distribuție cu toate componentele aferente.",
      },
    ],
    priceFrom: 150,
    duration: "1–6 ore",
    faq: [
      {
        q: "Cât costă schimbul de plăcuțe de frână?",
        a: "Înlocuirea plăcuțelor pe o axă (față sau spate) pornește de la 150-250 RON manoperă, plus costul plăcuțelor (100-400 RON în funcție de calitate și marcă auto).",
      },
      {
        q: "Când trebuie schimbată cureaua de distribuție?",
        a: "Intervalul recomandat variază între 60.000 și 150.000 km sau 5-7 ani, în funcție de producător. Consultați cartea de service sau întrebați-ne pentru recomandarea specifică modelului dvs.",
      },
      {
        q: "Folosiți piese originale sau aftermarket?",
        a: "Oferim ambele variante. Recomandăm piese OE sau aftermarket premium (Sachs, Lemforder, TRW, Brembo) care oferă calitate identică cu originalele la prețuri mai accesibile.",
      },
      {
        q: "Faceți și revizii periodice?",
        a: "Da, efectuăm revizii complete conform specificațiilor producătorului: schimb ulei și filtre, verificare completă a tuturor sistemelor, completare lichide.",
      },
    ],
  },
  "incarcari-aer-conditionat": {
    name: "Încărcări aer condiționat",
    category: "Confort",
    description:
      "Verificare, încărcare freon și dezinfecție sistem de aer condiționat auto. Diagnoză pierderi, reparații compresor.",
    paragraphs: [
      "Sistemul de aer condiționat al mașinii necesită întreținere periodică pentru a funcționa eficient și a oferi un aer curat și răcit. La Albatros A Service, oferim servicii complete de întreținere și reparare a sistemelor de climatizare auto.",
      "Încărcarea freonului este procedura cea mai frecventă. Sistemul AC pierde natural o cantitate mică de agent frigorific în fiecare an (5-10%). Când nivelul scade sub limita minimă, compresorul nu mai pornește sau răcirea este insuficientă. Procedura noastră include: verificarea presiunilor din sistem, evacuarea completă a freonului vechi, vacuum test pentru detectarea pierderilor, încărcarea cu cantitatea exactă specificată de producător și adăugarea uleiului compresorului.",
      "Dezinfecția sistemului de ventilație este la fel de importantă. Evaporatorul AC, fiind permanent umed, poate dezvolta bacterii și mucegaiuri care produc mirosuri neplăcute și pot afecta sănătatea ocupanților. Realizăm dezinfecția cu soluții antibacteriene profesionale care elimină 99.9% din germeni.",
      "Pentru problemele mai complexe ale sistemului AC — compresor defect, condensator spart, evaporator cu scurgeri — oferim diagnoză completă și reparații. Lucrăm cu agentul frigorific R134a și R1234yf (pentru mașinile mai noi), respectând toate normele de protecție a mediului.",
    ],
    cazuriTipice: [
      {
        title: "AC nu mai răcește suficient",
        description:
          "Nivel scăzut de freon din cauza pierderilor naturale sau a unei scurgeri. Încărcare și verificare etanșeitate.",
      },
      {
        title: "Miros neplăcut la pornirea AC",
        description:
          "Bacterii și mucegai pe evaporator. Dezinfecție profesională a sistemului de ventilație.",
      },
      {
        title: "Compresor AC nu pornește",
        description:
          "Diagnoză: nivel freon, presostatul, cuplaj electromagnetic, alimentare electrică. Reparație sau înlocuire compresor.",
      },
    ],
    priceFrom: 150,
    duration: "30–90 minute",
    faq: [
      {
        q: "Cât de des trebuie încărcat aerul condiționat?",
        a: "Recomandăm verificarea și completarea freonului o dată pe an, de preferință primăvara, înainte de sezonul cald. Dacă sistemul pierde freon rapid, poate exista o scurgere care trebuie reparată.",
      },
      {
        q: "Ce tip de freon folosiți?",
        a: "Folosim R134a pentru mașinile fabricate până în 2017 și R1234yf pentru modelele mai noi. Tipul corect este specificat pe eticheta de sub capotă.",
      },
      {
        q: "Cât costă o încărcare de freon?",
        a: "Încărcarea standard cu R134a pornește de la 150 RON. Pentru R1234yf, prețul este mai mare datorită costului agentului frigorific. Dezinfecția se adaugă separat (50-100 RON).",
      },
      {
        q: "Pot folosi AC-ul iarna?",
        a: "Da, este chiar recomandat! AC-ul dezumidifică aerul, prevenind aburirea geamurilor. În plus, utilizarea periodică menține componentele lubrifiate și previne deteriorarea garniturilor.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.name} | Albatros A Service`,
    description: service.description,
    path: `/servicii/${slug}`,
  });
}

function ServiceSchema({ service, slug }: { service: ServiceData; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Ploiești",
    },
    url: `${siteConfig.url}/servicii/${slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "RON",
      price: service.priceFrom,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "RON",
        price: service.priceFrom,
        description: `De la ${service.priceFrom} RON`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema({ faq }: { faq: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceSchema service={service} slug={slug} />
      <FAQSchema faq={service.faq} />

      {/* Breadcrumb */}
      <nav className="border-b border-white/[0.06] bg-[#080808] px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ol className="flex items-center gap-2 text-sm text-[#8B8D97]">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Acasă
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/servicii" className="transition-colors hover:text-white">
                Servicii
              </Link>
            </li>
            <li>/</li>
            <li className="font-medium text-white">{service.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#04040A] px-4 py-16 text-white sm:px-6 lg:px-8">
        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C9A84C]/[0.06] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#C9A84C]/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Badge className="mb-4 border-[#C9A84C]/20 bg-[#C9A84C]/10 text-[#C9A84C] hover:bg-[#C9A84C]/20">
            {service.category}
          </Badge>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#E2E4E9]">
            {service.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-[#E2E4E9]">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              De la {service.priceFrom} RON
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {service.duration}
            </span>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#04040A] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 leading-relaxed text-[#E2E4E9]">
            {service.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Cazuri tipice */}
      <section className="bg-[#080808] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white sm:text-3xl">
            Cazuri tipice
          </h2>
          <p className="mt-2 text-[#8B8D97]">
            Iată câteva dintre cele mai frecvente situații cu care ne întâlnim:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {service.cazuriTipice.map((caz, i) => (
              <Card key={i} className="h-full border border-white/[0.08] bg-[#0F1017] shadow-none rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {caz.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#8B8D97]">{caz.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#04040A] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white sm:text-3xl">
            Întrebări frecvente
          </h2>
          <div className="mt-8 space-y-6">
            {service.faq.map((item, i) => (
              <div key={i} className="border-b border-white/[0.06] pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white">
                  {item.q}
                </h3>
                <p className="mt-2 text-[#8B8D97]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#080808] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        {/* Gradient accent line at top */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white sm:text-3xl">
            Ai nevoie de {service.name.toLowerCase()}?
          </h2>
          <p className="mt-4 text-[#8B8D97]">
            Programează o vizită și beneficiezi de diagnoză gratuită. Prețuri
            transparente, fără surprize.
          </p>
          <Link href="/programare">
            <Button
              size="lg"
              className="mt-8 bg-[#C9A84C] text-[#050505] shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all hover:bg-[#D4AF37] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
            >
              Programează acum
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
