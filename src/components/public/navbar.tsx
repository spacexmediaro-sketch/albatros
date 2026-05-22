"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/programare", label: "Programare" },

  { href: "/blog", label: "Blog" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#111111]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Albatros A Auto Service - Pagina principală">
          <Image
            src="/logo-albatros.png"
            alt="Albatros'A Auto Service"
            width={440}
            height={132}
            className="h-28 w-auto object-contain drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigare principala">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#8B8D97] transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/garaj"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[#8B8D97] transition-colors duration-300 hover:text-white"
            aria-label="Garajul meu"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Garajul meu
          </Link>
          <Link href="/programare" className="ml-2">
            <Button
              className="bg-[#C9A84C] text-[#111111] font-semibold shadow-lg shadow-[#C9A84C]/20 hover:bg-[#C9A84C]/90 transition-all duration-300"
            >
              Programează
            </Button>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/[0.05]"
              aria-label={open ? "Inchide meniul" : "Deschide meniul"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-[#080808] border-l border-white/[0.08]"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/logo-albatros.png"
                alt="Albatros'A Auto Service"
                width={300}
                height={90}
                className="h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]"
              />
            </div>
            <nav className="mt-4 flex flex-col gap-1" aria-label="Meniu mobil">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-base font-medium text-[#8B8D97] transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/garaj"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-base font-medium text-[#8B8D97] transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
                aria-label="Garajul meu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Garajul meu
              </Link>
              <Link href="/programare" onClick={() => setOpen(false)} className="mt-4">
                <Button className="w-full bg-[#C9A84C] text-[#111111] font-semibold shadow-lg shadow-[#C9A84C]/20 hover:bg-[#C9A84C]/90 transition-all duration-300">
                  Programează
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
