import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/seo";

interface ArticleData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  content: string;
}

const articlesData: Record<string, ArticleData> = {
  "cand-schimbi-uleiul-motor": {
    slug: "cand-schimbi-uleiul-motor",
    title: "Când trebuie să schimbi uleiul de motor?",
    excerpt:
      "Ghid complet despre intervalele de schimb ulei în funcție de tipul motorului și stilul de condus.",
    category: "Întreținere",
    date: "2024-12-15",
    readingTime: 5,
    content: `Uleiul de motor este sângele mașinii tale. Fără el, piesele metalice s-ar freca direct între ele, generând căldură excesivă și uzură prematură. Dar cât de des trebuie schimbat? Răspunsul nu este la fel de simplu pe cât pare.

## Intervalele recomandate de producător

Majoritatea producătorilor recomandă schimbarea uleiului la fiecare 10.000–15.000 de kilometri sau o dată pe an, oricare dintre condiții este îndeplinită prima. Totuși, aceste intervale sunt calculate pentru condiții ideale de funcționare — drumuri asfaltate, temperaturi moderate și un stil de condus echilibrat.

## Condiții severe de utilizare

Dacă conduci preponderent în oraș, cu opriri și porniri frecvente, sau dacă efectuezi multe drumuri scurte (sub 10 km), motorul tău funcționează în ceea ce producătorii numesc „condiții severe". În aceste situații, uleiul se degradează mai rapid din cauza condensului și a particulelor de ardere care nu se evaporă complet. Intervalul recomandat scade la 7.500–10.000 km.

Același lucru este valabil dacă tragi o remorcă, conduci pe drumuri de macadam sau în condiții de temperaturi extreme — fie caniculă, fie ger sub -15°C.

## Tipuri de ulei și impactul lor

**Uleiul mineral** are o durată de viață mai scurtă și trebuie schimbat la fiecare 5.000–7.500 km. Este mai ieftin, dar se degradează mai repede sub stres termic.

**Uleiul semisintetic** oferă un compromis bun: rezistă până la 10.000 km în condiții normale și costă cu 30–40% mai puțin decât cel complet sintetic.

**Uleiul sintetic** are cea mai bună rezistență la temperaturi extreme și la degradare. Poate fi folosit până la 15.000 km sau chiar 20.000 km la unele motoare moderne, cu condiția să respecte specificațiile producătorului (de exemplu, VW 504.00/507.00 sau MB 229.51).

## Semne că uleiul trebuie schimbat

Nu te baza doar pe kilometraj. Verifică periodic joja de ulei și fii atent la următoarele semne:

- **Culoarea uleiului**: un ulei nou este chihlimbariu și transparent. Dacă este negru și opac, este timpul pentru o schimbare.
- **Consistența**: dacă uleiul de pe jojă este granulos sau prea vâscos, particulele de ardere s-au acumulat excesiv.
- **Nivel scăzut**: un consum de ulei mai mare de 0,5 litri la 1.000 km poate indica probleme la segmenți sau la garniturile de supape.
- **Zgomot la motor**: un motor care bate sau ticăie la pornire poate semnala lipsa de lubrifiere.

## Filtrul de ulei — la fel de important

La fiecare schimb de ulei, înlocuiește și filtrul de ulei. Filtrul vechi reține impurități care pot contamina uleiul proaspăt. Un filtru de calitate costă între 20 și 60 de lei, iar economia de a-l păstra nu merită riscul.

## Recomandarea Albatros A Service

La Albatros A Service folosim uleiuri omologate de producător și respectăm specificațiile exacte pentru fiecare model. Verificăm întotdeauna și nivelul lichidului de răcire, starea filtrului de aer și presiunea în anvelope la fiecare schimb de ulei — fără costuri suplimentare.

Programează-te online sau sună la 0723 177 032 pentru un schimb de ulei profesional.`,
  },
  "semne-probleme-turbo": {
    slug: "semne-probleme-turbo",
    title: "5 semne că turbina ta are probleme",
    excerpt:
      "Învață să recunoști din timp simptomele unei turbine defecte și evită reparațiile costisitoare.",
    category: "Diagnostic",
    date: "2024-11-28",
    readingTime: 4,
    content: `Turbina (turbosuflanta) este una dintre cele mai solicitate componente ale unui motor modern. Ea funcționează la temperaturi de peste 900°C și la turații de până la 250.000 RPM. Când începe să dea semne de uzură, ignorarea problemei poate duce la avarierea completă a motorului.

## 1. Fum excesiv din eșapament

Cel mai vizibil semn al unei turbine cu probleme este fumul albăstrui sau cenușiu la accelerare. Acest fum apare când uleiul trece prin garniturile uzate ale turbinei și ajunge în camera de ardere.

Atenție: fumul alb la pornirea la rece, iarna, este normal — este vorba de condensul care se evaporă. Dar dacă fumul albăstrui persistă și la motorul cald, turbina are aproape sigur o problemă.

## 2. Pierdere de putere și răspuns întârziat

O turbină sănătoasă oferă un boost de putere perceptibil de la aproximativ 1.800–2.200 RPM. Dacă observi că mașina „nu mai trage" ca înainte, că depășirile durează mai mult sau că pedalei de accelerație îi lipsește reacția, axul turbinei poate fi uzat sau paletele sunt deteriorate.

De asemenea, un răspuns întârziat al turbinei (turbo lag anormal de lung) poate indica depuneri de carbon pe geometria variabilă sau pe supapa wastegate.

## 3. Zgomote neobișnuite — șuierat sau clănțănit metalic

O turbină funcțională produce un ușor șuierat la accelerare — acesta este sunetul normal al aerului comprimat. Dar dacă zgomotul se transformă într-un „whine" strident sau apar sunete metalice de tip clănțănit, ceva nu este în regulă.

Zgomotul metalic poate indica contact între rotor și carcasă din cauza jocului excesiv pe lagăre. Un astfel de zgomot necesită intervenție imediată — continuarea utilizării poate distruge și motorul.

## 4. Consum crescut de ulei

O turbină uzată consumă ulei mai repede decât normal. Dacă nivelul de ulei scade vizibil între două schimburi (mai mult de 0,5l la 1.000 km) și nu există scurgeri vizibile, uleiul se scurge probabil prin garniturile turbinei.

Verifică și furtunurile de intercooler — prezența uleiului în acestea confirmă că turbina pierde etanșare. La Albatros A Service folosim camera endoscopică pentru a inspecta interiorul turbinei fără demontare, economisind timp și bani.

## 5. Lumina „Check Engine" aprinsă și coduri de eroare

Mașinile moderne monitorizează presiunea de supraalimentare prin senzori dedicați. Când turbina nu atinge presiunea setată de ECU, se aprinde martorul de avarie și se înregistrează coduri de eroare precum:

- **P0299** — Presiune turbo sub limită
- **P0234** — Suprapresiune turbo
- **P2263** — Performanță sistem turbo/supercharger

Aceste coduri nu înseamnă neapărat că turbina este distrusă — uneori problema este o furtună fisurată, un senzor defect sau o supapă EGR blocată. Diagnosticarea corectă este esențială pentru a evita înlocuirea inutilă a unei piese scumpe.

## Ce faci dacă ai aceste simptome?

Nu ignora semnele. O turbină reparată la timp costă 500–1.500 lei (recondiționare). O turbină distrusă complet poate costa 2.000–5.000 lei (piesa nouă), iar dacă fragmentele ajung în motor, factura de reparații poate depăși 10.000 lei.

La Albatros A Service diagnosticăm problemele turbinei cu echipament profesional și oferim atât recondiționare, cât și înlocuire cu piese noi sau recondiționare de fabrică. Sună la 0723 177 032 pentru o programare.`,
  },
  "pregatire-masina-iarna": {
    slug: "pregatire-masina-iarna",
    title: "Cum să-ți pregătești mașina pentru iarnă",
    excerpt:
      "Lista completă de verificări și întreținere pentru sezonul rece: anvelope, baterie, antigel, vizibilitate.",
    category: "Sezonier",
    date: "2024-10-20",
    readingTime: 6,
    content: `Iarna pune la încercare fiecare componentă a mașinii tale. Temperaturi sub zero grade, zăpadă, gheață și sare pe carosabil — toate contribuie la uzură accelerată și la riscuri sporite. O pregătire adecvată înainte de sezonul rece poate preveni panele și accidentele.

## Anvelopele de iarnă — obligatorii și esențiale

Din 1 noiembrie și până la 31 martie, legislația din România impune anvelope de iarnă pe drumurile acoperite cu zăpadă sau gheață. Dar dincolo de obligația legală, anvelopele de iarnă fac diferența între siguranță și pericol.

Verifică următoarele:
- **Adâncimea benzii de rulare**: minimul legal este 1,6 mm, dar pentru performanță reală pe zăpadă, recomandat este minimum 4 mm.
- **Vechimea anvelopelor**: chiar dacă au bandă de rulare suficientă, anvelopele mai vechi de 5 ani își pierd elasticitatea și aderența la temperaturi scăzute. Verifică codul DOT de pe flanc (de exemplu, DOT 2321 = săptămâna 23, anul 2021).
- **Presiunea**: la fiecare scădere de 10°C, presiunea în anvelope scade cu aproximativ 0,1 bar. Verifică presiunea lunar pe anvelope reci.

## Bateria — cea mai frecventă cauză de panică iarna

O baterie de mașină pierde până la 50% din capacitate la -20°C. Dacă bateria are mai mult de 4 ani, probabilitatea de a te lăsa pe ger este foarte mare.

Semne că bateria ta este la final:
- Motorul pornește greu, cu sunetul starterului lent
- Farurile se estompează la ralanti
- Martorul bateriei apare intermitent pe bord

La Albatros A Service testăm bateria gratuit cu aparatul de diagnoză — afli pe loc dacă mai rezistă o iarnă sau trebuie înlocuită.

## Lichidul de răcire (antigelul)

Lichidul de răcire trebuie să protejeze motorul până la cel puțin -35°C. Verifică concentrația cu un refractometru — o concentrație de 50% antigel / 50% apă demineralizată oferă protecție până la -37°C.

Nu amesteca niciodată antigel roșu cu antigel verde — au compoziții chimice incompatibile (OAT vs. IAT) și amestecul formează un gel care blochează circulația. Dacă nu știi ce tip ai, cel mai sigur este să golești complet sistemul și să-l umpli cu antigel nou.

## Ștergătoarele și lichidul de parbriz

Ștergătoarele uzate lasă dungi pe parbriz și reduc vizibilitatea în condiții de ploaie sau ninsoare. Înlocuiește-le la fiecare început de sezon rece.

Lichidul de parbriz trebuie să fie cu antigel, rezistent la cel puțin -20°C. Nu folosi niciodată doar apă — îngheață în furtunuri și poate sparge rezervorul.

## Iluminatul — vezi și fii văzut

Zilele scurte de iarnă înseamnă mai multe ore de condus pe întuneric. Verifică:
- Toate becurile funcționează (faruri, stopuri, semnalizări, lumini de ceață)
- Farurile sunt reglate corect — faruri prea sus orbesc traficul din sens opus, prea jos reduc vizibilitatea
- Lentilele farurilor nu sunt mătuite — polish-ul profesional restaurează transparența și îmbunătățește iluminarea cu până la 40%

## Frânele — aderența contează dublu pe gheață

Pe suprafețe alunecoase, distanța de frânare crește de 3–5 ori. Este esențial ca sistemul de frânare să fie în stare perfectă:
- **Plăcuțele de frână**: grosimea minimă recomandată este 3 mm. Sub această valoare, eficiența scade dramatic.
- **Discurile de frână**: verifică uzura și eventualele fisuri. Discurile deformate provoacă vibrații la frânare.
- **Lichidul de frână**: absoarbe umiditate din aer și trebuie înlocuit la fiecare 2 ani. Un lichid degradat are punct de fierbere mai scăzut, ceea ce poate cauza pierderea frânelor la solicitări repetate.

## Kit-ul de urgență pentru iarnă

Ține mereu în portbagaj:
- Cabluri de pornire
- Lopată mică pentru zăpadă
- Lanțuri antiderapante (chiar dacă ai anvelope de iarnă)
- Pătură termică
- Lanternă cu baterii de rezervă
- Spray dezghețare broaște

## Programează un control complet

La Albatros A Service oferim un pachet complet de pregătire pentru iarnă care include verificarea tuturor punctelor menționate mai sus. Durează aproximativ 45 de minute și te scutește de surprize neplăcute pe parcursul sezonului rece.

Sună la 0723 177 032 sau programează-te online.`,
  },
};

const allArticles = Object.values(articlesData);

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    return { title: "Articol negăsit" };
  }

  const url = `${siteConfig.url}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: siteConfig.name,
      locale: "ro_RO",
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  const similarArticles = allArticles.filter((a) => a.slug !== article.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
    articleSection: article.category,
    wordCount: article.content.split(/\s+/).length,
    inLanguage: "ro",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#04040A]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#8B8D97]">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Acasa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-8 space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-[#FF2D2D]/10 text-[#FF2D2D] border border-[#FF2D2D]/20 hover:bg-[#FF2D2D]/20">
                {article.category}
              </Badge>
              <span className="text-sm text-[#8B8D97]">
                {article.readingTime} min citire
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl leading-tight sm:text-4xl text-white">
              {article.title}
            </h1>
            <p className="text-[#8B8D97]">
              Publicat pe{" "}
              {new Date(article.date).toLocaleDateString("ro-RO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>

          {/* Article content */}
          <article className="max-w-none">
            {article.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mt-8 mb-4 text-xl font-semibold text-white sm:text-2xl"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((line) => line.startsWith("- "));
                return (
                  <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-[#E2E4E9]">
                    {items.map((item, j) => (
                      <li
                        key={j}
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace("- ", "")
                            .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>"),
                        }}
                      />
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="my-4 leading-relaxed text-[#E2E4E9]"
                  dangerouslySetInnerHTML={{
                    __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>"),
                  }}
                />
              );
            })}
          </article>

          {/* Similar articles */}
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Articole similare
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {similarArticles.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <div className="group relative h-full rounded-2xl bg-[#0F1017] border border-white/[0.08] overflow-hidden transition-all hover:border-white/[0.15] hover:shadow-lg hover:shadow-black/20">
                    {/* Gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF2D2D] to-[#3B82F6] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-[#FF2D2D]/10 text-[#FF2D2D] border border-[#FF2D2D]/20 hover:bg-[#FF2D2D]/20 text-xs">
                          {related.category}
                        </Badge>
                        <span className="text-xs text-[#8B8D97]">
                          {related.readingTime} min citire
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold leading-tight text-white">
                        {related.title}
                      </h3>
                      <p className="text-sm text-[#8B8D97]">{related.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
