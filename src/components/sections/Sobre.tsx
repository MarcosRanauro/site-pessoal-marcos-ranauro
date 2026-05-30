import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "3+",   label: "Anos de experiência" },
  { value: "20+",  label: "Projetos entregues" },
  { value: "100%", label: "Compromisso com qualidade" },
];

export function Sobre() {
  return (
    <Section id="sobre" className="bg-background-alt">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <h2 className="border-l-2 border-accent-blue pl-4 text-3xl font-bold text-foreground md:text-4xl">
              Sobre mim
            </h2>
            <p className="leading-relaxed text-muted">
              Sou desenvolvedor fullstack com foco em criar produtos digitais modernos,
              bem estruturados e fáceis de manter. Trabalho com JavaScript e TypeScript
              do front ao back, sempre com atenção a performance, organização de código
              e experiência do usuário.
            </p>
            <p className="leading-relaxed text-subtle">
              Gosto de projetos que exigem pensar além do código — arquitetura, fluxo,
              usabilidade. Trabalho bem em equipe e também de forma independente,
              entregando desde MVPs até sistemas mais robustos.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center">
            <div className="grid w-full grid-cols-3 gap-4 md:flex md:flex-col md:gap-0 md:divide-y md:divide-border">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center md:py-7 md:text-left md:first:pt-0 md:last:pb-0"
                >
                  <p className="text-2xl font-bold text-accent-blue md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
