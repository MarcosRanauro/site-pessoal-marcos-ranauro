import type { Metadata } from "next";
import { BriefingForm } from "@/components/formulario/BriefingForm";

export const metadata: Metadata = {
  title: "Briefing — Marcos Ranauro",
  description:
    "Formulário de briefing para elaboração de proposta de site. Conte sobre seu projeto e receba uma proposta personalizada.",
  robots: { index: false, follow: false },
};

export default function FormularioPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-10">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Briefing do projeto
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Preencha as etapas abaixo para eu entender seu negócio e montar a proposta
            ideal. Leva cerca de 10 minutos — seu progresso é salvo automaticamente.
          </p>
        </div>

        <BriefingForm />
      </div>
    </main>
  );
}
