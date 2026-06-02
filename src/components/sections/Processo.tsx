import { FadeInView } from "@/components/ui/FadeInView";

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
    <section id="processo" className="bg-surface py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Cabeçalho editorial */}
        <FadeInView className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle">
            05 / Processo
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Como trabalho
          </h2>
        </FadeInView>

        {/* Mobile: sequência vertical numerada */}
        <div className="md:hidden">
          {etapas.map((etapa, i) => (
            <FadeInView key={etapa.numero} delay={i * 0.08}>
              <div className="flex gap-6">
                {/* Número + linha conectora */}
                <div className="flex shrink-0 flex-col items-center">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle">
                    {etapa.numero}
                  </span>
                  {i < etapas.length - 1 && (
                    <div className="mt-3 w-px flex-1 bg-border min-h-12" />
                  )}
                </div>
                {/* Conteúdo */}
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

        {/* Desktop: fluxo horizontal com linha conectora */}
        <div className="hidden md:block">

          {/* Linha horizontal + ticks verticais descendentes */}
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

          {/* Conteúdo das etapas */}
          <div className="mt-6 grid grid-cols-5">
            {etapas.map((etapa, i) => (
              <FadeInView
                key={etapa.numero}
                delay={i * 0.08}
                className={i < etapas.length - 1 ? "pr-6" : ""}
              >
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.3em] text-subtle">
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

      </div>
    </section>
  );
}
