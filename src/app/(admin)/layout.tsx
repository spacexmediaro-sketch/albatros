import Link from "next/link";

const adminNav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/programari", label: "Programari" },
  { href: "/admin/lucrari", label: "Lucrari" },
  { href: "/admin/clienti", label: "Clienti" },
  { href: "/admin/servicii", label: "Servicii" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/setari", label: "Setari" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r bg-[#0A2540] text-white p-6 hidden md:block">
        <Link href="/admin" className="font-bold text-lg">
          Admin Panel
        </Link>
        <nav className="mt-8 space-y-1">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-sm hover:bg-white/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
