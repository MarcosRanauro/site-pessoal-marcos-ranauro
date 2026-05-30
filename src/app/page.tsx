import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const sections = [
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
        {/* Hero */}
        <section
          id="hero"
          className="flex min-h-screen flex-col items-center justify-center bg-background px-4 pt-16 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-widest text-accent-blue">
            Seção
          </p>
          <h1 className="text-4xl font-semibold text-foreground">Hero</h1>
          <p className="mt-3 text-sm text-muted">
            Conteúdo será implementado na Fase 3.
          </p>
        </section>

        {/* Seções restantes */}
        {sections.map((section) => (
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
