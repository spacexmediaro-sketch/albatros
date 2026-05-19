import { generatePageMetadata } from "@/lib/seo";
import { ProgramareForm } from "./programare-form";

export const metadata = generatePageMetadata({
  title: "Programare online",
  description:
    "Programeaza-te online la Albatros A Service Ploiesti. Alege serviciul, data si ora potrivita. Confirmare rapida.",
  path: "/programare",
});

export default function ProgramarePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Programare online</h1>
        <p className="mt-2 text-muted-foreground">
          Completeaza formularul si te contactam pentru confirmare in maxim 2 ore.
        </p>
      </div>

      <ProgramareForm />
    </div>
  );
}
