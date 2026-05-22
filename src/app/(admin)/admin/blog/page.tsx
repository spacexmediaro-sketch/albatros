import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { db } from "@/lib/db";

export const metadata = generatePageMetadata({
  title: "Blog - Admin",
  description: "Gestionare articole blog Albatros A Service",
  path: "/admin/blog",
  noIndex: true,
});

async function togglePublished(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const post = await db.blogPost.findUnique({ where: { id } });
  if (!post) return;
  await db.blogPost.update({
    where: { id },
    data: {
      published: !post.published,
      publishedAt: !post.published ? new Date() : null,
    },
  });
  revalidatePath("/admin/blog");
}

async function deletePost(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  await db.blogPost.delete({ where: { id } });
  revalidatePath("/admin/blog");
}

export default async function BlogAdminPage() {
  const posts = await db.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: { select: { name: true } } },
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog</h1>
          <p className="text-sm text-[#8B8D97] mt-1">
            {posts.length} articole
          </p>
        </div>
        <Button className="bg-[#C9A84C] text-[#050505] hover:bg-[#C9A84C]/90">
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
                <th className="text-left p-3 font-medium text-[#8B8D97]">Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
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
                      {post.published ? "Publicat" : "Ciornă"}
                    </Badge>
                  </td>
                  <td className="p-3 text-[#8B8D97]">
                    {(post.publishedAt ?? post.createdAt).toLocaleDateString("ro-RO")}
                  </td>
                  <td className="p-3 text-[#8B8D97]">{post.views}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <form action={togglePublished}>
                        <input type="hidden" name="id" value={post.id} />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="text-[#E2E4E9] hover:bg-white/10"
                        >
                          {post.published ? "Ascunde" : "Publică"}
                        </Button>
                      </form>
                      <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="text-[#C9A84C] hover:bg-[#C9A84C]/10"
                        >
                          Șterge
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-[#4A4B55]">
                    Niciun articol. Adaugă primul articol de blog.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
