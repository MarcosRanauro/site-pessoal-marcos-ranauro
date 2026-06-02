import { FadeInView } from "@/components/ui/FadeInView";

const stats: { value?: string; label: string }[] = [
  { value: "3",  label: "Anos de experiência" },
  { value: "13", label: "Projetos entregues" },
  { label: "Compromisso com qualidade" },
];

const formacao = [
  {
    instituicao: "Trybe",
    curso: "Formação Full Stack",
    descricao:
      "EAD com aulas ao vivo diárias, duração de aproximadamente 1 ano e meio. Cobre front-end, back-end, lógica, banco de dados, APIs e desenvolvimento de aplicações web.",
  },
  {
    instituicao: "UNISUAM",
    curso: "Análise e Desenvolvimento de Sistemas",
    descricao:
      "Formato modular, com certificações em Front-end, Back-end e Mobile.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-surface py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Cabeçalho editorial */}
        <FadeInView className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            01 / Sobre
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Sobre mim
          </h2>
        </FadeInView>

        {/* Texto + Stats */}
        <div className="mb-20 grid gap-16 lg:mb-32 lg:grid-cols-5 lg:gap-24">

          {/* Texto principal */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <FadeInView>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Sou desenvolvedor fullstack com foco em criar produtos digitais modernos,
                bem estruturados e fáceis de manter. Trabalho com JavaScript e TypeScript
                do front ao back, sempre com atenção a performance, organização de código
                e experiência do usuário.
              </p>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="max-w-xl leading-relaxed text-muted-foreground">
                Gosto de projetos que exigem pensar além do código — arquitetura, fluxo,
                usabilidade. Trabalho bem em equipe e também de forma independente,
                entregando desde MVPs até sistemas mais robustos.
              </p>
            </FadeInView>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <FadeInView delay={0.15}>
              <div className="grid grid-cols-3 gap-6 lg:flex lg:flex-col lg:gap-0 lg:divide-y lg:divide-border">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="lg:py-8 lg:first:pt-0 lg:last:pb-0"
                  >
                    {stat.value ? (
                      <p className="font-heading text-4xl font-bold leading-none text-foreground lg:text-5xl">
                        {stat.value}
                      </p>
                    ) : (
                      <p
                        aria-hidden="true"
                        className="select-none font-heading text-4xl font-bold leading-none text-foreground opacity-[0.08] lg:text-5xl"
                      >
                        —
                      </p>
                    )}
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>

        </div>

        {/* Formação — timeline editorial */}
        <div className="border-t border-border pt-16 lg:pt-20">
          <FadeInView className="mb-12">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              Trajetória
            </p>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Formação
            </h3>
          </FadeInView>

          {/* Timeline */}
          <div className="relative pl-8">
            {/* Linha vertical */}
            <div className="absolute bottom-0 left-0 top-2 w-px bg-border" />

            <div className="flex flex-col gap-12">
              {formacao.map((item, i) => (
                <FadeInView key={item.instituicao} delay={i * 0.12}>
                  <div className="relative">
                    {/* Marcador lime na linha */}
                    <div
                      aria-hidden="true"
                      className="absolute -left-9 top-[0.3rem] h-2 w-2 rounded-full bg-accent"
                    />
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                      {item.curso}
                    </p>
                    <h4 className="mb-3 font-heading text-2xl font-bold text-foreground">
                      {item.instituicao}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.descricao}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
