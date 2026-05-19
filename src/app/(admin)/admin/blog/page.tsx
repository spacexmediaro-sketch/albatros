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
    title: "Cum s\u0103-\u021Bi preg\u0103te\u0219ti ma\u0219ina pentru var\u0103: ghid complet",
    category: "Sfaturi",
    published: true,
    date: "2026-05-10",
    views: 342,
  },
  {
    id: "2",
    title: "De ce este important\u0103 revizia la timp? Consecin\u021Be \u0219i costuri",
    category: "Educa\u021Bie",
    published: true,
    date: "2026-04-28",
    views: 218,
  },
  {
    id: "3",
    title: "Diesel vs. Benzin\u0103 \u00een 2026: ce motor alegi pentru ma\u0219ina nou\u0103?",
    category: "Analiz\u0103",
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
          <h1 className="text-2xl font-bold text-white">Blog</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {mockPosts.length} articole
          </p>
        </div>
        <Button className="bg-[#FF2D2D] text-[#050505] hover:bg-[#FF2D2D]/90">
          + Articol nou
        </Button>
      </div>

      <div className="bg-[#0F1017] border border-white/[0.08] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#1A1B25]">
                <th className="text-left p-3 font-medium text-[#8B8D97]">Titlu</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Categorie</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Status</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Data</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Views</th>
                <th className="text-left p-3 font-medium text-[#8B8D97]">Ac\u021Biuni</th>
              </tr>
            </thead>
            <tbody>
              {mockPosts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-white/[0.08] last:border-0 hover:bg-[#1A1B25] transition-colors"
                >
                  <td className="p-3 font-medium max-w-xs truncate text-white">
                    {post.title}
                  </td>
                  <td className="p-3 text-[#8B8D97]">{post.category}</td>
                  <td className="p-3">
                    <Badge
                      variant="outline"
                      className={
                        post.published
                          ? "bg-green-500/10 text-green-400 border-green-500/30"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                      }
                    >
                      {post.published ? "Publicat" : "Ciorn\u0103"}
                    </Badge>
                  </td>
                  <td className="p-3 text-[#8B8D97]">{post.date}</td>
                  <td className="p-3 text-[#8B8D97]">{post.views}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#E2E4E9] hover:bg-white/10"
                      >
                        Editeaz\u0103
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#FF2D2D] hover:bg-[#FF2D2D]/10"
                      >
                        \u0218terge
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
