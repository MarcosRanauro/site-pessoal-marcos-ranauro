import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "3+",   label: "Anos de experiência" },
  { value: "20+",  label: "Projetos entregues" },
  { value: "100%", label: "Compromisso com qualidade" },
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
    <Section id="sobre" className="bg-background-alt">
      <Container>

        {/* Texto + Stats */}
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

        {/* Formação */}
        <div className="mt-16 border-t border-border pt-16">
          <h3 className="mb-8 border-l-2 border-accent-blue pl-4 text-xl font-semibold text-foreground md:text-2xl">
            Formação
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {formacao.map((item) => (
              <div
                key={item.instituicao}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="font-semibold text-foreground">{item.instituicao}</p>
                <p className="mt-1 text-sm text-accent-blue">{item.curso}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}
