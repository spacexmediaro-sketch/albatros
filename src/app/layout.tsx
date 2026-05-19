import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Albatros A Service | Service Auto Multimarca Ploiești",
    template: "%s | Albatros A Service",
  },
  description:
    "Service auto multimarca în Blejoi-Ploiești, specializat în reparații motoare diesel, tinichigerie și vopsitorie auto. Membru al rețelei Q-SERVICE Romania.",
  metadataBase: new URL("https://albatrosa.ro"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} ${dmSerif.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
