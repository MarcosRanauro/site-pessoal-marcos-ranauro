import { Fragment } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const etapas = [
  {
    numero: "01",
    titulo: "Entendimento",
    descricao:
      "Antes de qualquer código, entendo o problema, o contexto e o objetivo real do projeto.",
  },
  {
    numero: "02",
    titulo: "Planejamento",
    descricao:
      "Defino estrutura, stack, fluxos e critérios de entrega antes de começar a implementar.",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento",
    descricao:
      "Código limpo, componentizado e bem organizado, com entregas incrementais e rastreáveis.",
  },
  {
    numero: "04",
    titulo: "Revisão e ajustes",
    descricao:
      "Testo, refino e ajusto com base no feedback até o resultado estar certo.",
  },
  {
    numero: "05",
    titulo: "Entrega",
    descricao:
      "Deploy, documentação básica e handoff organizado para que o projeto possa evoluir.",
  },
];

export function Processo() {
  return (
    <Section id="processo" className="bg-background-alt">
      <Container>
        <h2 className="mb-12 border-l-2 border-accent-blue pl-4 text-3xl font-bold text-foreground md:text-4xl">
          Como trabalho
        </h2>

        {/* Mobile: timeline vertical */}
        <div className="flex flex-col md:hidden">
          {etapas.map((etapa, index) => (
            <div key={etapa.numero} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-blue/30 bg-card font-mono text-xs text-accent-blue">
                  {etapa.numero}
                </div>
                {index < etapas.length - 1 && (
                  <div className="my-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-8 pt-1">
                <h3 className="text-base font-semibold text-foreground">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {etapa.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: fluxo horizontal */}
        <div className="hidden items-start md:flex">
          {etapas.map((etapa, index) => (
            <Fragment key={etapa.numero}>
              <div className="flex flex-1 flex-col items-center gap-3 px-3 text-center">
                <span className="font-mono text-sm text-accent-blue">
                  {etapa.numero}
                </span>
                <h3 className="text-sm font-semibold text-foreground">
                  {etapa.titulo}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {etapa.descricao}
                </p>
              </div>

              {index < etapas.length - 1 && (
                <div className="mt-4 flex shrink-0 items-center">
                  <div className="h-px w-4 bg-border" />
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    className="-ml-px text-border"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </Section>
  );
}
