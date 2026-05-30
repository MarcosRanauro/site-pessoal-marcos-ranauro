import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const placeholders = [
  { id: "sobre",        label: "Sobre",        bg: "bg-background-alt" },
  { id: "stack",        label: "Stack",        bg: "bg-background" },
  { id: "projetos",     label: "Projetos",     bg: "bg-background-alt" },
  { id: "servicos",     label: "Serviços",     bg: "bg-background" },
  { id: "processo",     label: "Processo",     bg: "bg-background-alt" },
  { id: "diferenciais", label: "Diferenciais", bg: "bg-background" },
  { id: "contato",      label: "Contato",      bg: "bg-background-alt" },
];

function SectionPlaceholder({ label }: { label: string }) {
  return (
    <Container>
      <div className="flex min-h-64 flex-col items-center justify-center text-center">
        <p className="mb-2 text-xs uppercase tracking-widest text-accent-blue">
          Seção
        </p>
        <h2 className="text-3xl font-semibold text-foreground">{label}</h2>
        <p className="mt-3 text-sm text-muted">
          Conteúdo será implementado na Fase 3.
        </p>
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-1 flex-col">
        <Hero />

        {placeholders.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            className={section.bg}
          >
            <SectionPlaceholder label={section.label} />
          </Section>
        ))}
      </main>

      <Footer />
    </>
  );
}
