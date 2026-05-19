import { Navbar } from "@/components/public/navbar";
import { Footer } from "@/components/public/footer";
import { LocalBusinessSchema } from "@/components/public/schema-org";
import { FloatingCTA } from "@/components/public/floating-cta";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LocalBusinessSchema />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
