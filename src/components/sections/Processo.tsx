import { FadeInView } from "@/components/ui/FadeInView";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    <Section id="processo" className="bg-surface">

        <FadeInView className="mb-16 lg:mb-20">
          <SectionHeader numero="05" label="Processo" titulo="Como trabalho" />
        </FadeInView>

        <div className="md:hidden">
          {etapas.map((etapa, i) => (
            <FadeInView key={etapa.numero} delay={i * 0.08}>
              <div className="flex gap-6">
                <div className="flex shrink-0 flex-col items-center">
                  <span className="type-label tracking-[0.2em]">
                    {etapa.numero}
                  </span>
                  {i < etapas.length - 1 && (
                    <div className="mt-3 w-px flex-1 bg-border min-h-12" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                    {etapa.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {etapa.descricao}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <div className="hidden md:block">

          <FadeInView>
            <div className="h-px w-full bg-border" />
            <div className="grid grid-cols-5">
              {etapas.map((etapa) => (
                <div key={etapa.numero} className="flex justify-start">
                  <div className="h-4 w-px bg-border" />
                </div>
              ))}
            </div>
          </FadeInView>

          <div className="mt-6 grid grid-cols-5">
            {etapas.map((etapa, i) => (
              <FadeInView
                key={etapa.numero}
                delay={i * 0.08}
                className={i < etapas.length - 1 ? "pr-6" : ""}
              >
                <p className="type-label mb-3 tracking-[0.3em]">
                  {etapa.numero}
                </p>
                <h3 className="mb-2 font-heading text-base font-bold text-foreground">
                  {etapa.titulo}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {etapa.descricao}
                </p>
              </FadeInView>
            ))}
          </div>

        </div>

    </Section>
  );
}
