"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/lib/actions/auth";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: "\u{1F4CA}" },
  { href: "/admin/programari", label: "Program\u0103ri", icon: "\u{1F4C5}" },
  { href: "/admin/servicii", label: "Servicii", icon: "\u{1F527}" },
  { href: "/admin/blog", label: "Blog", icon: "\u{1F4DD}" },
  { href: "/admin/masini-service", label: "Ma\u0219ini Service", icon: "\u{1F697}" },
  { href: "/admin/clienti", label: "Clien\u021Bi", icon: "\u{1F465}" },
  { href: "/admin/estimari", label: "Estim\u0103ri", icon: "\u{1F4B0}" },
  { href: "/admin/setari", label: "Set\u0103ri", icon: "\u2699\uFE0F" },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#080808] text-white flex flex-col transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-6 border-b border-white/[0.08]">
          <Link
            href="/admin"
            className="font-bold text-lg tracking-tight text-white"
            onClick={() => setSidebarOpen(false)}
          >
            Albatros Admin
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive(item.href)
                  ? "bg-[#C9A84C]/15 text-[#C9A84C] font-medium"
                  : "text-[#8B8D97] hover:bg-white/10 hover:text-[#E2E4E9]"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/[0.08]">
          <form action={logoutAction}>
            <Button
              type="submit"
              variant="ghost"
              className="w-full justify-start text-[#8B8D97] hover:text-white hover:bg-white/10"
            >
              Deconectare
            </Button>
          </form>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-14 border-b border-white/[0.08] bg-[#0F1017] flex items-center justify-between px-4 md:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-white/10 text-[#E2E4E9]"
              onClick={() => setSidebarOpen(true)}
              aria-label="Deschide meniul"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <span className="font-semibold text-sm text-[#E2E4E9] md:hidden">
              Albatros Admin
            </span>
          </div>
          <form action={logoutAction}>
            <Button
              type="submit"
              variant="outline"
              size="sm"
              className="hidden md:inline-flex bg-white/5 text-[#E2E4E9] border-white/[0.08] hover:bg-white/10"
            >
              Deconectare
            </Button>
          </form>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 bg-[#04040A] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
