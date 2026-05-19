import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Urmărire comandă service",
  description:
    "Verifică stadiul reparației mașinii tale în timp real. Introdu codul de urmărire primit la recepție.",
  path: "/tracker",
});

export default function TrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
