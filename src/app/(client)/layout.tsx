"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/lib/actions/auth";

const clientNav = [
  { href: "/garaj", label: "Garajul meu" },
  { href: "/garaj/programari", label: "Programari" },
  { href: "/garaj/istoric", label: "Istoric" },
  { href: "/garaj/setari", label: "Setari" },
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#04040A] text-[#E2E4E9]">
      {/* Top nav bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#080808]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-bold text-white">
            Albatros A Service
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {clientNav.map((item) => {
              const isActive =
                item.href === "/garaj"
                  ? pathname === "/garaj"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                      : "text-[#E2E4E9] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* User greeting (desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-sm text-[#8B8D97]">Buna, Andrei</span>
            <form action={logoutAction}>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                className="border-white/[0.08] bg-white/5 text-[#E2E4E9] hover:bg-white/10"
              >
                Deconectare
              </Button>
            </form>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#E2E4E9] hover:bg-white/5 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Meniu navigare"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/[0.08] bg-[#080808] px-4 pb-4 md:hidden">
            <nav className="flex flex-col gap-1 pt-2">
              {clientNav.map((item) => {
                const isActive =
                  item.href === "/garaj"
                    ? pathname === "/garaj"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                        : "text-[#E2E4E9] hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 flex items-center justify-between border-t border-white/[0.08] pt-3">
              <span className="text-sm text-[#8B8D97]">Buna, Andrei</span>
              <form action={logoutAction}>
                <Button
                  type="submit"
                  variant="outline"
                  size="sm"
                  className="border-white/[0.08] bg-white/5 text-[#E2E4E9] hover:bg-white/10"
                >
                  Deconectare
                </Button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-5xl p-4">{children}</main>
    </div>
  );
}
