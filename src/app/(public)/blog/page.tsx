import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Blog auto",
  description:
    "Sfaturi intretinere auto, ghiduri reparatii si noutati din lumea auto. Blog Albatros A Service Ploiesti.",
  path: "/blog",
});

// Placeholder articles - will come from DB
const articles = [
  {
    slug: "cand-schimbi-uleiul-motor",
    title: "Cand trebuie sa schimbi uleiul de motor?",
    excerpt: "Ghid complet despre intervalele de schimb ulei in functie de tipul motorului si stilul de condus.",
    category: "Intretinere",
    date: "2024-12-15",
    readingTime: 5,
  },
  {
    slug: "semne-probleme-turbo",
    title: "5 semne ca turbina ta are probleme",
    excerpt: "Invata sa recunosti din timp simptomele unei turbine defecte si evita reparatiile costisitoare.",
    category: "Diagnostic",
    date: "2024-11-28",
    readingTime: 4,
  },
  {
    slug: "pregatire-masina-iarna",
    title: "Cum sa-ti pregatesti masina pentru iarna",
    excerpt: "Lista completa de verificari si intretinere pentru sezonul rece: anvelope, baterie, antigel, vizibilitate.",
    category: "Sezonier",
    date: "2024-10-20",
    readingTime: 6,
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Blog Auto</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sfaturi, ghiduri si noutati pentru intretinerea optima a masinii tale
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">{article.readingTime} min citire</span>
                </div>
                <h2 className="text-lg font-semibold leading-tight">{article.title}</h2>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
