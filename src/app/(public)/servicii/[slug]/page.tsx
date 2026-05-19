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
    name: "Diagnoza auto computerizata",
    category: "Diagnoza",
    description:
      "Diagnoza computerizata completa pentru toate marcile auto. Citire si stergere coduri de eroare, testare live senzori si actuatori.",
    paragraphs: [
      "Diagnoza auto computerizata este primul pas esential in identificarea oricarei probleme a masinii tale. La Albatros A Service folosim echipamente profesionale de diagnoza multimarca, capabile sa comunice cu toate unitatile electronice ale vehiculului: motor, transmisie, ABS, airbag-uri, climatizare si multe altele.",
      "Procesul de diagnoza presupune conectarea la portul OBD-II al masinii si citirea codurilor de eroare (DTC) stocate in memoria calculatoarelor de bord. Dar nu ne oprim aici — tehnicianul nostru interpreteaza fiecare cod in contextul simptomelor pe care le descrii, realizand teste suplimentare pentru a identifica cauza reala a problemei.",
      "Folosim echipamente de nivel dealer pentru marcile cele mai populare: Volkswagen, Audi, BMW, Mercedes-Benz, Opel, Ford, Dacia, Renault, Skoda, Peugeot, Citroen si multe altele. Aceasta ne permite accesul la functii avansate precum adaptari, codari si programari ale unitatilor de control.",
      "Diagnoza computerizata este recomandata nu doar atunci cand apare un martor pe bord, ci si preventiv — la achizitia unui vehicul second-hand sau periodic, la revizii. O verificare completa poate dezvalui probleme ascunse care, depistate din timp, economisesc reparatii costisitoare.",
    ],
    cazuriTipice: [
      {
        title: "Martor Check Engine aprins",
        description:
          "Identificarea cauzei exacte a aprinderii martorului de motor: sonda lambda defecta, catalizator, EGR sau probleme de injectie.",
      },
      {
        title: "Martor ESP/ABS activ",
        description:
          "Diagnoza sistem de stabilitate si franare: senzori de roata, pompe ABS, unitati hidraulice.",
      },
      {
        title: "Inspectie pre-achizitie",
        description:
          "Scanare completa a vehiculului inainte de cumparare pentru a descoperi erori ascunse, kilometraje modificate sau defecte nementionate.",
      },
      {
        title: "Martor airbag aprins",
        description:
          "Verificarea sistemului de siguranta pasiva: senzori de impact, pretensionere centuri, modul airbag.",
      },
    ],
    priceFrom: 80,
    duration: "30–60 minute",
    faq: [
      {
        q: "Cat dureaza o diagnoza auto completa?",
        a: "O diagnoza standard dureaza intre 30 si 60 de minute. In cazuri complexe, care necesita teste suplimentare pe mai multe sisteme, poate dura pana la 90 de minute.",
      },
      {
        q: "Ce marci auto puteti diagnostica?",
        a: "Putem diagnostica toate marcile auto, atat europene cat si asiatice. Avem echipamente dedicate pentru grupul VAG (VW, Audi, Skoda, Seat), BMW, Mercedes, Opel, Ford, Dacia/Renault, Peugeot/Citroen, Toyota, Hyundai/Kia.",
      },
      {
        q: "Trebuie programare pentru diagnoza?",
        a: "Recomandam programarea pentru a va asigura disponibilitatea, dar acceptam si clienti fara programare in limita locurilor disponibile.",
      },
      {
        q: "Se sterge eroarea la diagnoza?",
        a: "Da, dupa identificarea si intelegerea cauzei, putem sterge codurile de eroare. Daca problema persista, eroarea va reaparea, indicand necesitatea unei reparatii.",
      },
    ],
  },
  "reparatii-motoare-diesel": {
    name: "Reparatii motoare diesel",
    category: "Motor",
    description:
      "Reparatii complete motoare diesel: turbo, pompe de injectie, distributie, garnituri chiulasa. Specialisti cu peste 20 ani experienta.",
    paragraphs: [
      "Motoarele diesel moderne sunt sisteme complexe care necesita cunostinte aprofundate si echipamente specializate pentru diagnosticarea si repararea lor. La Albatros A Service, echipa noastra are peste 20 de ani de experienta in repararea motoarelor diesel, de la motoare aspirate clasice pana la cele mai noi unitati cu injectie common-rail si turbosuflanta cu geometrie variabila.",
      "Intervenim pe toate componentele critice ale motorului diesel: sistemul de alimentare (pompe de inalta presiune, injectoare, rampe comune), sistemul de supraAlimentare (turbine, intercoolere, conducte de aer), sistemul de distributie (lanturi, curele, tensionere), precum si componentele interne ale motorului (pistoane, segmenti, cuzineti, arbore cotit).",
      "Un capitol important il reprezinta sistemele anti-poluare ale motoarelor diesel moderne: filtrul de particule (DPF/FAP), valva EGR, catalizatorul SCR si sistemul AdBlue. Diagnosticam si rezolvam probleme precum regenerarea esuata a filtrului de particule, EGR blocat sau defectiuni ale sistemului AdBlue.",
      "Folosim piese de calitate OE sau aftermarket premium (Bosch, Delphi, Denso, Continental) si oferim garantie pentru toate lucrarile efectuate. Fiecare reparatie este urmata de o testare amanuntita pentru a ne asigura ca motorul functioneaza la parametrii optimi.",
    ],
    cazuriTipice: [
      {
        title: "Pierdere de putere si fum negru",
        description:
          "Cauze frecvente: turbina uzata, injectoare defecte, filtru de aer colmatat sau probleme cu valva EGR.",
      },
      {
        title: "Motor porneste greu la rece",
        description:
          "Verificare bujii incandescente, pompa de alimentare, presiune rampa common-rail si sistem de preincalzire.",
      },
      {
        title: "Filtru de particule blocat (DPF)",
        description:
          "Diagnoza, regenerare fortata sau curatare profesionala a filtrului de particule fara demontare.",
      },
      {
        title: "Zgomot anormal din motor",
        description:
          "Identificare sursa: turbina, lant/curea distributie, injectoare cu bataie, pompe auxiliare.",
      },
    ],
    priceFrom: 300,
    duration: "2–8 ore (in functie de complexitate)",
    faq: [
      {
        q: "Cat costa o reparatie de motor diesel?",
        a: "Costul variaza semnificativ in functie de problema identificata. O reparatie simpla (inlocuire bujii incandescente) porneste de la 300 RON, in timp ce o revizie majora de motor poate ajunge la cateva mii de RON. Oferim intotdeauna un deviz detaliat inainte de inceperea lucrarii.",
      },
      {
        q: "Oferiti garantie pentru reparatii?",
        a: "Da, oferim garantie intre 6 si 24 de luni pentru lucrarile efectuate, in functie de tipul interventiei si piesele folosite.",
      },
      {
        q: "Lucrati si pe motoare pe benzina?",
        a: "Da, desi suntem specializati pe diesel, echipa noastra are experienta si pe motoare pe benzina, inclusiv cele cu injectie directa.",
      },
      {
        q: "Cat dureaza o reparatie de motor diesel?",
        a: "De la cateva ore pentru interventii simple, pana la 3-5 zile lucratoare pentru reparatii majore. Va comunicam durata estimata odata cu devizul.",
      },
    ],
  },
  "reparatii-injectoare": {
    name: "Reparatii injectoare",
    category: "Motor",
    description:
      "Testare, recalibrare si reparatii injectoare diesel common-rail. Echipamente de testare profesionale Bosch.",
    paragraphs: [
      "Injectoarele diesel common-rail sunt componente de precizie care functioneaza la presiuni extrem de ridicate (pana la 2.000 bar) si trebuie sa dozeze combustibilul cu exactitate microscopica. Cu timpul, acestea se uzeaza, isi pierd calibrarea sau dezvolta defecte care afecteaza performanta motorului, consumul de combustibil si emisiile.",
      "La Albatros A Service, dispunem de un stand profesional de testare injectoare care ne permite sa evaluam cu precizie starea fiecarui injector: debit, punct de deschidere, etanseitate, calitatea pulverizarii si timp de raspuns. Testarea se face comparativ cu valorile nominale ale producatorului.",
      "Reparatia injectoarelor presupune demontare, curatare ultrasonica, inlocuirea componentelor uzate (ace, duze, supape), recalibrare pe stand si verificare finala. In multe cazuri, reparatia unui injector costa o fractiune din pretul unuia nou, oferind performante similare.",
      "Lucram cu injectoare de la toate marcile principale: Bosch, Delphi, Denso si Siemens/Continental. Dupa montare, realizam codarea injectoarelor in calculatorul motorului (procedura obligatorie pentru functionarea corecta) si efectuam o proba de drum pentru confirmare.",
    ],
    cazuriTipice: [
      {
        title: "Motor merge in trei cilindri",
        description:
          "Injector defect care nu mai pulverizeaza corect, cauzand ratei si vibratii. Testare si inlocuire injector afectat.",
      },
      {
        title: "Consum excesiv de motorina",
        description:
          "Injectoare cu debit crescut care supraAlimenteaza cilindrii. Recalibrare sau inlocuire duze.",
      },
      {
        title: "Fum alb/albastru la rece",
        description:
          "Injectoare cu scurgeri interne sau pulverizare defectuoasa la temperaturi scazute.",
      },
    ],
    priceFrom: 200,
    duration: "3–6 ore",
    faq: [
      {
        q: "Merita reparat un injector sau e mai bine sa iau unul nou?",
        a: "In majoritatea cazurilor, reparatia este avantajoasa economic — costa 40-60% din pretul unui injector nou. Un injector reparat profesional ofera performante comparabile cu unul nou. Recomandam inlocuirea doar cand injector corpul este deteriorat fizic.",
      },
      {
        q: "Trebuie schimbate toate injectoarele odata?",
        a: "Nu obligatoriu. Testam fiecare injector individual si inlocuim/reparam doar pe cele care nu mai corespund. Totusi, daca mai multe injectoare arata semne de uzura avansata, poate fi economic sa le reparati pe toate simultan.",
      },
      {
        q: "Ce este codarea injectoarelor?",
        a: "Codarea (IMA code) este procedura prin care calculatorul motorului invata parametrii individuali ai fiecarui injector. Este obligatorie dupa orice inlocuire pentru a asigura dozarea corecta a combustibilului.",
      },
    ],
  },
  "rectificari-chiulase": {
    name: "Rectificari chiulase",
    category: "Motor",
    description:
      "Rectificare profesionala chiulase cu echipament specializat. Planare, rodare supape, verificare fisuri.",
    paragraphs: [
      "Chiulasa este una dintre cele mai solicitate piese ale motorului, expusa la temperaturi extreme si presiuni ridicate. Deformarea planului de etansare, fisurile sau uzura scaunelor de supapa sunt probleme frecvente care necesita interventie profesionala de rectificare.",
      "Procesul de rectificare a chiulasei la Albatros A Service include: demontarea completa, spalarea chimica si curatarea tuturor canalelor, verificarea planitatii cu comparator digital, verificarea existentei fisurilor (prin presare sau penetrare), planarea suprafetei de etansare si reconditionarea scaunelor si ghidajelor de supape.",
      "Lucram cu echipamente de rectificare de precizie care asigura o planitate sub 0,05 mm, conform specificatiilor producatorilor. Folosim scule de reconditionat scaune de supape cu placute din carbura, pentru un rezultat de calitate superioara si durabilitate maxima.",
      "Dupa rectificare, chiulasa este asamblata cu supape noi sau reconditonate, arcuri verificate, simerirguri noi si este testata la presiune pentru a confirma etanseitatea. Montajul final pe motor se realizeaza cu garnitura noua si suruburi de chiulasa noi (acolo unde este recomandat de producator).",
    ],
    cazuriTipice: [
      {
        title: "Garnitura de chiulasa arsa",
        description:
          "Emulsie in ulei, pierdere lichid de racire, fum alb abundent. Demontare chiulasa, planare si montaj garnitura noua.",
      },
      {
        title: "Supape arse sau indoite",
        description:
          "Pierdere compresie pe unul sau mai multi cilindri. Inlocuire supape, reconditionare scaune, rodare.",
      },
      {
        title: "Chiulasa fisurata",
        description:
          "Verificare si diagnoza fisuri prin testare la presiune. Sudura TIG profesionala in cazurile in care reparatia este posibila.",
      },
    ],
    priceFrom: 500,
    duration: "2–5 zile lucratoare",
    faq: [
      {
        q: "Cat dureaza rectificarea unei chiulase?",
        a: "Procesul complet — de la demontare la montaj — dureaza in medie 3-5 zile lucratoare. Rectificarea propriu-zisa ia 1-2 zile, dar trebuie asteptate piesele de schimb si realizat montajul.",
      },
      {
        q: "Se merita rectificarea sau mai bine cumpar chiulasa noua?",
        a: "In 90% din cazuri, rectificarea este solutia optima economic. O chiulasa noua poate costa de 3-5 ori mai mult. Rectificarea este recomandata atata timp cat nu exista fisuri majore in corpul chiulasei.",
      },
      {
        q: "Ce cauzeaza defectarea garniturii de chiulasa?",
        a: "Supraincalzirea motorului este cauza principala. Alte cauze: montaj incorect anterior, uzura naturala la kilometraje mari, defecte de fabricatie ale garniturii.",
      },
    ],
  },
  "tinichigerie-auto": {
    name: "Tinichigerie auto",
    category: "Caroserie",
    description:
      "Reparatii caroserie, indreptare tabla, sudura, tratamente anticorozive. Lucrari de tinichigerie profesionala.",
    paragraphs: [
      "Serviciul nostru de tinichigerie auto acopera intreaga gama de lucrari de reparatie a caroseriei, de la indreptarea unor lovituri minore (dent repair) pana la reconstructia completa a elementelor de caroserie dupa accidente. Fiecare lucrare este executata cu atentie la detalii, urmarind redarea formei originale a vehiculului.",
      "Utilizam tehnici moderne de indreptare a tablei: tragere cu dispozitive speciale, indreptare cu ciocan si nicovala, sudura in puncte pentru fixarea elementelor structurale. Pentru loviturile mici, fara afectarea vopselei, oferim si serviciul de PDR (Paintless Dent Repair) — indreptare fara vopsire.",
      "Un aspect esential al lucrarilor de tinichigerie este tratamentul anticoroziv. Dupa fiecare reparatie, zonele afectate sunt tratate cu grund anticoroziv, izolator si protectie suplimentara pentru a preveni aparitia ruginei. Lonjeroanele si elementele structurale primesc tratament special cu ceara sau antigravitational.",
      "Lucram pe toate tipurile de caroserie: otel, aluminiu si materiale compozite. Dispunem de banca de trase pentru aducerea structurii la cotele originale dupa accidente grave, precum si de echipamente de masurare pentru verificarea geometriei caroseriei.",
    ],
    cazuriTipice: [
      {
        title: "Lovituri usoare in parcari",
        description:
          "Indreptare aripi, portiere sau bare cu minime urme. Posibila reparatie PDR fara revopsire.",
      },
      {
        title: "Accidente cu deformare structurala",
        description:
          "Tragere pe banca, inlocuire lonjeroane, reparatii plafon, praguri si stalpi.",
      },
      {
        title: "Rugina si coroziune",
        description:
          "Decupare zone ruginite, sudare petice noi, tratament anticoroziv complet.",
      },
      {
        title: "Inlocuire elemente de caroserie",
        description:
          "Montaj aripi, portiere, capote, hayon-uri noi sau second-hand cu ajustare perfecta.",
      },
    ],
    priceFrom: 200,
    duration: "1–5 zile (in functie de amploare)",
    faq: [
      {
        q: "Cat costa reparatia unei lovituri pe portiera?",
        a: "Pretul depinde de dimensiunea si adancimea loviturii. O lovitura mica (PDR) poate costa de la 200 RON, in timp ce o reparatie cu vopsire poate fi intre 400-800 RON per element.",
      },
      {
        q: "Lucrati cu asigurarile?",
        a: "Da, colaboram cu toate companiile de asigurari din Romania. Va ajutam cu dosarul de dauna si realizam devizul conform cerintelor asiguratorului.",
      },
      {
        q: "Se vede dupa reparatie?",
        a: "Obiectivul nostru este ca reparatia sa fie invizibila. Cu echipamentul si experienta noastra, rezultatele sunt de calitate profesionala, comparabile cu standardele producatorilor auto.",
      },
    ],
  },
  "vopsitorie-auto": {
    name: "Vopsitorie auto",
    category: "Caroserie",
    description:
      "Vopsire profesionala in cabina dedicata. Potrivire computerizata a culorii, vopsire partiala sau integrala.",
    paragraphs: [
      "Vopsitoria auto Albatros A Service este dotata cu cabina de vopsire profesionala cu flux de aer controlat, sistem de incalzire pentru uscare accelerata si iluminare speciala pentru evaluarea calitatii vopsirii. Aceste conditii controlate asigura o calitate superioara a finisajului, fara impuritati sau defecte.",
      "Potrivirea culorii se realizeaza computerizat, folosind spectrofotometru care analizeaza culoarea originala a masinii si genereaza formula exacta de amestecare. Acest lucru este esential mai ales pentru culorile metalice, perlate sau tricoat, unde diferentele subtile de nuanta pot fi vizibile cu ochiul liber.",
      "Procesul complet de vopsire include: pregatirea suprafetei (slefuire, chituire, grunduire), aplicarea vopselei in mai multe straturi, aplicarea lacului de protectie si, la final, lustruit profesional. Fiecare etapa este controlata pentru a asigura aderenta perfecta si un finisaj impecabil.",
      "Oferim atat vopsire partiala (un element sau o zona) cat si vopsire integrala a vehiculului. Pentru masinile clasice sau de colectie, realizam restaurari complete ale finisajului, inclusiv in culori speciale sau personalizate.",
    ],
    cazuriTipice: [
      {
        title: "Revopsire element dupa tinichigerie",
        description:
          "Vopsire aripa, portiera sau bara dupa reparatia tablei. Potrivire perfecta cu restul masinii.",
      },
      {
        title: "Zgarieturi adanci",
        description:
          "Reparatie localizata a zgarieturilor care au penetrat lacul si vopseaua, fara revopsirea intregului element.",
      },
      {
        title: "Vopsire integrala",
        description:
          "Schimbare completa de culoare sau reimprospatare vopsea degradata de soare/intemperii.",
      },
      {
        title: "Vopsire bare plastic",
        description:
          "Vopsire sau revopsire bare, praguri si elemente din plastic cu aderenta maxima.",
      },
    ],
    priceFrom: 300,
    duration: "2–5 zile",
    faq: [
      {
        q: "Cat costa vopsirea unei aripi?",
        a: "Vopsirea unui element standard (aripa, portiera) porneste de la 300-500 RON, incluzand pregatirea suprafetei, vopseaua, lacul si lustruit. Pretul variaza in functie de culoare si starea suprafetei.",
      },
      {
        q: "Cat dureaza uscarea vopselei?",
        a: "In cabina noastra cu sistem de uscare, lacul se intareste in 2-4 ore. Totusi, recomandam evitarea spalarii masinii timp de 2 saptamani si a aplicarii de ceara timp de o luna.",
      },
      {
        q: "Folositi vopsea pe baza de apa sau solvent?",
        a: "Folosim vopsele pe baza de apa (waterborne) de la producatori premium. Acestea sunt mai prietenoase cu mediul si ofera o potrivire mai buna a culorilor metalice.",
      },
    ],
  },
  "geometrie-roti": {
    name: "Geometrie roti",
    category: "Suspensie",
    description:
      "Geometrie 3D computerizata cu echipament profesional. Aliniere precisa pentru siguranta si economie de anvelope.",
    paragraphs: [
      "Geometria rotilor (sau alinierea) este reglajul unghiurilor rotilor conform specificatiilor producatorului auto. O geometrie corecta asigura: directie stabila si previzibila, uzura uniforma a anvelopelor, consum optim de combustibil si siguranta maxima in viraje si la franare.",
      "La Albatros A Service folosim un sistem de geometrie 3D cu camere de inalta rezolutie care masoara cu precizie toate unghiurile: convergenta (toe), camber-ul, caster-ul si unghiul de tractiune. Softul compara automat valorile masurate cu specificatiile producatorului si indica ajustarile necesare.",
      "Verificarea geometriei este recomandata: dupa inlocuirea pieselor de suspensie sau directie, dupa lovirea unui bordur sau groapa, cand observi uzura neuniforma a anvelopelor, cand masina trage intr-o parte sau cand volanul nu sta drept pe drum drept. De asemenea, este indicata la fiecare schimb sezonier de anvelope.",
      "Pe langa reglajul standard, oferim si geometrie pentru masini coborate (tuning), SUV-uri si utilitare. Reglajele sunt efectuate de tehnicieni experimentati care tin cont de stilul de condus si conditiile specifice ale fiecarui client.",
    ],
    cazuriTipice: [
      {
        title: "Uzura neuniformă anvelope",
        description:
          "Anvelopele se uzeaza pe interior sau exterior din cauza convergentei sau camber-ului incorect.",
      },
      {
        title: "Masina trage intr-o parte",
        description:
          "Tragerea laterala cauzata de diferente de unghi intre rotile din stanga si dreapta.",
      },
      {
        title: "Volan decalat",
        description:
          "Volanul nu sta centrat pe drum drept — reglaj de convergenta si centrare volan.",
      },
    ],
    priceFrom: 120,
    duration: "30–60 minute",
    faq: [
      {
        q: "Cat de des trebuie verificata geometria?",
        a: "Recomandam verificarea de 2 ori pe an (la schimbul sezonier de anvelope) sau ori de cate ori observi simptome precum uzura neuniforma sau tragere laterala.",
      },
      {
        q: "Se face geometria pe toate marcile?",
        a: "Da, echipamentul nostru 3D are in baza de date specificatiile pentru toate marcile si modelele auto curente, inclusiv SUV-uri si utilitare.",
      },
      {
        q: "Cat dureaza o geometrie?",
        a: "Geometria standard dureaza 30-60 de minute. Daca sunt necesare inlocuiri de piese de suspensie, durata creste corespunzator.",
      },
      {
        q: "Geometria rezolva vibratiile la volan?",
        a: "Vibratiile la volan sunt de obicei cauzate de echilibrarea incorecta a rotilor, nu de geometrie. Totusi, verificam ambele aspecte pentru a identifica cauza reala.",
      },
    ],
  },
  "electrica-auto": {
    name: "Electrica auto",
    category: "Electrica",
    description:
      "Diagnoza si reparatii instalatie electrica auto. Alternator, electromotor, instalatii de cabluri, sisteme de iluminare.",
    paragraphs: [
      "Sistemul electric al masinii tale este responsabil pentru functionarea a zeci de componente vitale: pornirea motorului, iluminarea, sistemele de siguranta, confortul in habitaclu si multe altele. O defectiune electrica poate fi frustranta si dificil de depistat fara echipamentul potrivit.",
      "La Albatros A Service, tehnicianul nostru electrician auto are experienta si echipamentele necesare pentru a diagnostica si repara orice problema electrica: de la o simpla siguranta arsa pana la defecte complexe ale instalatiei de cabluri sau ale unitatilor de control electronic.",
      "Intervenim pe toate componentele electrice: alternator (reparatie sau inlocuire), electromotor, baterie (testare si inlocuire), instalatie de iluminare (faruri, stopuri, becuri, LED-uri), instalatie de cabluri (reparatie scurtcircuite, contacte oxidate), sisteme de confort (geamuri electrice, inchidere centralizata, alarme), sisteme audio si multimedia.",
      "Oferim si servicii de instalare echipamente suplimentare: senzori de parcare, camera de mers inapoi, alarme auto, inchidere centralizata si alte accesorii electrice. Toate instalatiile respecta standardele de siguranta si nu afecteaza garantia producatorului.",
    ],
    cazuriTipice: [
      {
        title: "Masina nu porneste",
        description:
          "Diagnoza sistem de pornire: baterie, electromotor, releu, sigurante, contact cheie/buton start.",
      },
      {
        title: "Alternator defect",
        description:
          "Baterie descarcata repetat, martor baterie aprins. Testare, reparatie sau inlocuire alternator.",
      },
      {
        title: "Probleme cu farurile",
        description:
          "Faruri care nu functioneaza, lumina slaba, erori la xenon sau LED. Diagnoza si reparatie.",
      },
      {
        title: "Scurtcircuit sau sigurante arse repetat",
        description:
          "Identificarea si repararea scurtcircuitelor din instalatia electrica care cauzeaza arderea repetata a sigurantelor.",
      },
    ],
    priceFrom: 100,
    duration: "1–4 ore",
    faq: [
      {
        q: "Cum imi dau seama ca alternatorul e defect?",
        a: "Simptomele principale sunt: martorul de baterie aprins, lumini care palpale, baterie descarcata frecvent, zgomot de rulment de la alternator. Testarea pe masina dureaza doar cateva minute.",
      },
      {
        q: "Cat costa un alternator nou?",
        a: "Pretul variaza intre 500-2000 RON in functie de marca si model. Alternativ, oferim reparatia alternatorului existent (inlocuire diode, rulmenti, perii) la costuri mai reduse.",
      },
      {
        q: "Puteti instala accesorii electrice aftermarket?",
        a: "Da, instalam senzori de parcare, camere, alarme, sisteme audio si alte echipamente. Toate instalatiile sunt realizate profesional, cu protectie corespunzatoare a circuitelor.",
      },
    ],
  },
  "mecanica-auto": {
    name: "Mecanica auto",
    category: "Mecanica",
    description:
      "Reparatii mecanice complete: frane, ambreiaj, suspensie, distributie, transmisie. Service multimarca profesional.",
    paragraphs: [
      "Serviciul de mecanica auto Albatros A Service acopera toate lucrarile mecanice de care masina ta poate avea nevoie, de la operatii de intretinere curenta (revizii, schimb ulei, filtre) pana la reparatii complexe ale motorului, transmisiei sau suspensiei.",
      "Sistemul de franare este una dintre componentele critice de siguranta. Efectuam: inlocuire placute si discuri de frana, reparatii/inlocuire etriere, schimb lichid de frana, reparatii frana de mana, diagnoza ABS. Folosim piese de calitate premium (Brembo, TRW, ATE, Bosch) pentru siguranta maxima.",
      "Intervenim pe sistemul de suspensie si directie: inlocuire amortizoare, arcuri, bucse, bielete, capete de bara, pivote, rulmenti roata, fuzete. O suspensie in buna stare asigura confort, stabilitate si siguranta pe orice tip de drum.",
      "Alte lucrari de mecanica frecvente: inlocuire kit de distributie (curea/lant, role, pompa apa), schimb ambreiaj (placa, disc, rulment presiune, volanta), reparatii cutie de viteze, inlocuire transmisie cardanica si planetare, reparatii sistem de racire (pompe, radiatoare, termostete).",
    ],
    cazuriTipice: [
      {
        title: "Frane uzate — zgomot la franare",
        description:
          "Inlocuire placute si discuri de frana uzate, verificare completa a sistemului de franare.",
      },
      {
        title: "Ambreiaj patineaza",
        description:
          "Inlocuire kit complet ambreiaj: disc, placa de presiune, rulment presiune. La motoarele cu volanta bimasa, verificare si eventual inlocuire.",
      },
      {
        title: "Suspensie — batai pe denivelari",
        description:
          "Diagnoza si inlocuire amortizoare, bucse, bielete stabilizatoare sau alte componente uzate.",
      },
      {
        title: "Kit distributie — intervalul depasit",
        description:
          "Inlocuire preventiva sau de urgenta a curelei/lantului de distributie cu toate componentele aferente.",
      },
    ],
    priceFrom: 150,
    duration: "1–6 ore",
    faq: [
      {
        q: "Cat costa schimbul de placute de frana?",
        a: "Inlocuirea placutelor pe o axa (fata sau spate) porneste de la 150-250 RON manopera, plus costul placutelor (100-400 RON in functie de calitate si marca auto).",
      },
      {
        q: "Cand trebuie schimbata cureaua de distributie?",
        a: "Intervalul recomandat variaza intre 60.000 si 150.000 km sau 5-7 ani, in functie de producator. Consultati cartea de service sau intrebati-ne pentru recomandarea specifica modelului dvs.",
      },
      {
        q: "Folositi piese originale sau aftermarket?",
        a: "Oferim ambele variante. Recomandam piese OE sau aftermarket premium (Sachs, Lemforder, TRW, Brembo) care ofera calitate identica cu originalele la preturi mai accesibile.",
      },
      {
        q: "Faceti si revizii periodice?",
        a: "Da, efectuam revizii complete conform specificatiilor producatorului: schimb ulei si filtre, verificare completa a tuturor sistemelor, completare lichide.",
      },
    ],
  },
  "incarcari-aer-conditionat": {
    name: "Incarcari aer conditionat",
    category: "Confort",
    description:
      "Verificare, incarcare freon si dezinfectie sistem de aer conditionat auto. Diagnoza pierderi, reparatii compresor.",
    paragraphs: [
      "Sistemul de aer conditionat al masinii necesita intretinere periodica pentru a functiona eficient si a oferi un aer curat si racit. La Albatros A Service, oferim servicii complete de intretinere si reparare a sistemelor de climatizare auto.",
      "Incarcarea freonului este procedura cea mai frecventa. Sistemul AC pierde natural o cantitate mica de agent frigorific in fiecare an (5-10%). Cand nivelul scade sub limita minima, compresorul nu mai porneste sau racirea este insuficienta. Procedura noastra include: verificarea presiunilor din sistem, evacuarea completa a freonului vechi, vacuum test pentru detectarea pierderilor, incarcarea cu cantitatea exacta specificata de producator si adaugarea uleiului compresorului.",
      "Dezinfectia sistemului de ventilatie este la fel de importanta. Evaporatorul AC, fiind permanent umed, poate dezvolta bacterii si mucegaiuri care produc mirosuri neplacute si pot afecta sanatatea ocupantilor. Realizam dezinfectia cu solutii antibacteriene profesionale care elimina 99.9% din germeni.",
      "Pentru problemele mai complexe ale sistemului AC — compresor defect, condensator spart, evaporator cu scurgeri — oferim diagnoza completa si reparatii. Lucram cu agentul frigorific R134a si R1234yf (pentru masinile mai noi), respectand toate normele de protectie a mediului.",
    ],
    cazuriTipice: [
      {
        title: "AC nu mai raceste suficient",
        description:
          "Nivel scazut de freon din cauza pierderilor naturale sau a unei scurgeri. Incarcare si verificare etanseitate.",
      },
      {
        title: "Miros neplacut la pornirea AC",
        description:
          "Bacterii si mucegai pe evaporator. Dezinfectie profesionala a sistemului de ventilatie.",
      },
      {
        title: "Compresor AC nu porneste",
        description:
          "Diagnoza: nivel freon, presostatul, cuplaj electromagnetic, alimentare electrica. Reparatie sau inlocuire compresor.",
      },
    ],
    priceFrom: 150,
    duration: "30–90 minute",
    faq: [
      {
        q: "Cat de des trebuie incarcat aerul conditionat?",
        a: "Recomandam verificarea si completarea freonului o data pe an, de preferinta primavara, inainte de sezonul cald. Daca sistemul pierde freon rapid, poate exista o scurgere care trebuie reparata.",
      },
      {
        q: "Ce tip de freon folositi?",
        a: "Folosim R134a pentru masinile fabricate pana in 2017 si R1234yf pentru modelele mai noi. Tipul corect este specificat pe eticheta de sub capota.",
      },
      {
        q: "Cat costa o incarcare de freon?",
        a: "Incarcarea standard cu R134a porneste de la 150 RON. Pentru R1234yf, pretul este mai mare datorita costului agentului frigorific. Dezinfectia se adauga separat (50-100 RON).",
      },
      {
        q: "Pot folosi AC-ul iarna?",
        a: "Da, este chiar recomandat! AC-ul dezumidifica aerul, prevenind aburirea geamurilor. De plus, utilizarea periodica mentine componentele lubrifiate si previne deteriorarea garniturilor.",
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
      name: "Ploiesti",
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
                Acasa
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
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#FF2D2D]/[0.06] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Badge className="mb-4 border-[#FF2D2D]/20 bg-[#FF2D2D]/10 text-[#FF2D2D] hover:bg-[#FF2D2D]/20">
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
              <svg className="h-5 w-5 text-[#FF2D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              De la {service.priceFrom} RON
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#FF2D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Iata cateva dintre cele mai frecvente situatii cu care ne intalnim:
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
            Intrebari frecvente
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
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/40 to-transparent" />
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl text-white sm:text-3xl">
            Ai nevoie de {service.name.toLowerCase()}?
          </h2>
          <p className="mt-4 text-[#8B8D97]">
            Programeaza o vizita si beneficiezi de diagnoza gratuita. Preturi
            transparente, fara surprize.
          </p>
          <Link href="/programare">
            <Button
              size="lg"
              className="mt-8 bg-[#FF2D2D] text-[#050505] shadow-[0_0_20px_rgba(255,45,45,0.3)] transition-all hover:bg-[#FF5555] hover:shadow-[0_0_30px_rgba(255,45,45,0.5)]"
            >
              Programeaza acum
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
