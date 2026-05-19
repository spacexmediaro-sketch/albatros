import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Blog - Admin",
  description: "Gestionare articole blog Albatros A Service",
  path: "/admin/blog",
  noIndex: true,
});

const mockPosts = [
  {
    id: "1",
    title: "Cum să-ți pregătești mașina pentru vară: ghid complet",
    category: "Sfaturi",
    published: true,
    date: "2026-05-10",
    views: 342,
  },
  {
    id: "2",
    title: "De ce este importantă revizia la timp? Consecințe și costuri",
    category: "Educație",
    published: true,
    date: "2026-04-28",
    views: 218,
  },
  {
    id: "3",
    title: "Diesel vs. Benzină în 2026: ce motor alegi pentru mașina nouă?",
    category: "Analiză",
    published: false,
    date: "2026-05-15",
    views: 0,
  },
];

export default function BlogAdminPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Blog</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {mockPosts.length} articole
          </p>
        </div>
        <Button>+ Articol nou</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium">Titlu</th>
                  <th className="text-left p-3 font-medium">Categorie</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Data</th>
                  <th className="text-left p-3 font-medium">Views</th>
                  <th className="text-left p-3 font-medium">Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {mockPosts.map((post) => (
                  <tr key={post.id} className="border-b last:border-0">
                    <td className="p-3 font-medium max-w-xs truncate">
                      {post.title}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {post.category}
                    </td>
                    <td className="p-3">
                      <Badge
                        variant="outline"
                        className={
                          post.published
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-yellow-100 text-yellow-800 border-yellow-200"
                        }
                      >
                        {post.published ? "Publicat" : "Ciornă"}
                      </Badge>
                    </td>
                    <td className="p-3 text-muted-foreground">{post.date}</td>
                    <td className="p-3 text-muted-foreground">{post.views}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Editează
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Șterge
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
