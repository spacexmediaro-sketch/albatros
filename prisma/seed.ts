import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // 1. Admin user
  const hashedPassword = await bcrypt.hash("Admin123!", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@albatrosa.ro" },
    update: {},
    create: {
      email: "admin@albatrosa.ro",
      name: "Admin Albatros",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin user created:", admin.email);

  // 2. Services
  const services = [
    {
      slug: "diagnoza-auto",
      name: "Diagnoza Auto",
      shortDesc: "Diagnoza computerizata completa pentru identificarea problemelor vehiculului.",
      fullContent:
        "Serviciul nostru de diagnoza auto utilizeaza echipamente de ultima generatie pentru a identifica rapid si precis orice problema a vehiculului dumneavoastra. Diagnoza computerizata acopera motorul, transmisia, sistemul de franare, ABS, ESP si toate sistemele electronice ale masinii.",
      durationMin: 30,
      priceFrom: 100,
      category: "diagnoza",
    },
    {
      slug: "reparatii-motoare-diesel",
      name: "Reparatii Motoare Diesel",
      shortDesc: "Reparatii complete pentru motoare diesel de toate tipurile.",
      fullContent:
        "Oferim servicii profesionale de reparatii motoare diesel, de la interventii minore pana la reconditionari complete. Echipa noastra are experienta cu motoare diesel de la toate marcile auto.",
      durationMin: 480,
      priceFrom: 500,
      category: "mecanica",
    },
    {
      slug: "reparatii-injectoare",
      name: "Reparatii Injectoare",
      shortDesc: "Testare, curatare si reparatii injectoare diesel si benzina.",
      fullContent:
        "Reparatia injectoarelor este esentiala pentru functionarea optima a motorului. Oferim testare pe stand, curatare cu ultrasunete si reparatii complete pentru injectoare diesel si benzina.",
      durationMin: 240,
      priceFrom: 300,
      category: "mecanica",
    },
    {
      slug: "rectificari-chiulase",
      name: "Rectificari Chiulase",
      shortDesc: "Rectificari si reparatii chiulase pentru toate tipurile de motoare.",
      fullContent:
        "Serviciul de rectificare chiulase include planare, inlocuire supape, ghiduri si garnituri. Utilizam echipamente de precizie pentru a asigura o etansare perfecta.",
      durationMin: 480,
      priceFrom: 400,
      category: "mecanica",
    },
    {
      slug: "tinichigerie-auto",
      name: "Tinichigerie Auto",
      shortDesc: "Reparatii caroserie si tinichigerie auto profesionala.",
      fullContent:
        "Serviciul de tinichigerie auto acopera reparatii indoituri, inlocuire panouri, sudura si reconstructie caroserie. Lucram cu materiale de calitate si garantam rezultate impecabile.",
      durationMin: 480,
      priceFrom: 200,
      category: "caroserie",
    },
    {
      slug: "vopsitorie-auto",
      name: "Vopsitorie Auto",
      shortDesc: "Vopsitorie auto profesionala cu vopsele de inalta calitate.",
      fullContent:
        "Oferim servicii complete de vopsitorie auto: pregatire suprafata, grunduire, vopsire si lustruire. Folosim vopsele auto de cea mai inalta calitate cu potrivire exacta a culorii.",
      durationMin: 480,
      priceFrom: 300,
      category: "caroserie",
    },
    {
      slug: "geometrie-roti",
      name: "Geometrie Roti",
      shortDesc: "Reglaj geometrie roti cu echipament 3D de ultima generatie.",
      fullContent:
        "Geometria corecta a rotilor asigura siguranta in conducere si uzura uniforma a anvelopelor. Folosim echipament 3D Hunter pentru masuratori precise si reglaje perfecte.",
      durationMin: 60,
      priceFrom: 150,
      category: "mecanica",
    },
    {
      slug: "electrica-auto",
      name: "Electrica Auto",
      shortDesc: "Diagnoza si reparatii sisteme electrice auto.",
      fullContent:
        "Serviciul de electrica auto acopera diagnoza si reparatia tuturor sistemelor electrice: alternator, electromotor, instalatie electrica, sisteme de iluminare, senzori si actuatori.",
      durationMin: 120,
      priceFrom: 100,
      category: "electrica",
    },
    {
      slug: "mecanica-auto",
      name: "Mecanica Auto",
      shortDesc: "Servicii complete de mecanica auto pentru toate marcile.",
      fullContent:
        "Oferim servicii complete de mecanica auto: schimb distributie, ambreiaj, suspensii, franare, schimb ulei si filtre. Lucram cu piese originale si aftermarket de calitate.",
      durationMin: 240,
      priceFrom: 150,
      category: "mecanica",
    },
    {
      slug: "incarcari-aer-conditionat",
      name: "Incarcari Aer Conditionat",
      shortDesc: "Incarcare si verificare sistem aer conditionat auto.",
      fullContent:
        "Serviciul de incarcare aer conditionat include verificarea integrala a sistemului, detectia scurgerilor, incarcare cu freon si test de performanta. Asiguram functionarea optima a climatizarii.",
      durationMin: 60,
      priceFrom: 150,
      category: "mecanica",
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }

  console.log(`${services.length} services created.`);

  // 3. Blog posts
  const blogPosts = [
    {
      slug: "cand-sa-schimbi-uleiul-de-motor",
      title: "Cand sa schimbi uleiul de motor?",
      excerpt: "Ghid complet despre intervalele de schimb ulei si semnele ca e timpul pentru un schimb.",
      content:
        "<p>Schimbul de ulei este una dintre cele mai importante operatiuni de intretinere pentru masina ta. In general, se recomanda schimbul la fiecare 10.000-15.000 km sau o data pe an, dar intervalul exact depinde de tipul de ulei folosit si conditiile de conducere.</p><p>Semnele ca trebuie sa schimbi uleiul: culoare inchisa, nivel scazut, zgomote neobisnuite la motor, sau indicatorul de pe bord.</p>",
      coverImage: null,
      category: "intretinere",
      tags: ["ulei motor", "intretinere", "sfaturi"],
      authorId: admin.id,
      published: true,
      publishedAt: new Date("2025-01-15"),
      readingTime: 5,
    },
    {
      slug: "pregatirea-masinii-pentru-iarna",
      title: "Cum sa pregatesti masina pentru iarna",
      excerpt: "Lista completa de verificari si actiuni pentru a fi pregatit de sezonul rece.",
      content:
        "<p>Pregatirea masinii pentru iarna este esentiala pentru siguranta ta. Verifica anvelopele de iarna, lichidul de parbriz antigel, starea bateriei si sistemul de incalzire.</p><p>Nu uita de lanturile de zapada si de un kit de urgenta in portbagaj cu: patura, lanterna, cablu tractare si lopata mica.</p>",
      coverImage: null,
      category: "sfaturi",
      tags: ["iarna", "siguranta", "anvelope"],
      authorId: admin.id,
      published: true,
      publishedAt: new Date("2025-02-01"),
      readingTime: 4,
    },
    {
      slug: "semne-ca-trebuie-sa-schimbi-placutele-de-frana",
      title: "5 semne ca trebuie sa schimbi placutele de frana",
      excerpt: "Afla cand e momentul sa inlocuiesti placutele de frana pentru siguranta ta.",
      content:
        "<p>Placutele de frana sunt esentiale pentru siguranta ta in trafic. Iata 5 semne ca trebuie inlocuite:</p><ol><li>Scartaitul la franare</li><li>Distanta de franare crescuta</li><li>Vibratii la pedale</li><li>Indicatorul de uzura pe bord</li><li>Grosimea placutelor sub 3mm</li></ol><p>Nu amana inlocuirea placutelor de frana - siguranta ta depinde de ele!</p>",
      coverImage: null,
      category: "siguranta",
      tags: ["frane", "siguranta", "intretinere"],
      authorId: admin.id,
      published: true,
      publishedAt: new Date("2025-03-10"),
      readingTime: 3,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  console.log(`${blogPosts.length} blog posts created.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
