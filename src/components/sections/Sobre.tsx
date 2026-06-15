import { FadeInView } from "@/components/ui/FadeInView";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stats: { value?: string; label: string }[] = [
  { value: "2",    label: "Produtos em produção" },
  { value: "100%", label: "Do briefing ao deploy" },
  { value: "Solo", label: "Design, código e deploy" },
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
    <Section id="sobre" className="bg-surface">

        {/* Cabeçalho editorial */}
        <FadeInView className="mb-16 lg:mb-20">
          <SectionHeader numero="01" label="Sobre" titulo="Sobre mim" />
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
                    <p className="type-label mt-2 tracking-[0.2em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>

        </div>

        {/* Faixa de imagens — composição C: assimétrica, peso à esquerda, zigue-zague */}
        <div className="mb-16 lg:mb-20">

          {/* Mobile: empilhado com variação de largura — assimetria leve */}
          <div className="flex flex-col gap-3 sm:hidden">
            <FadeInView>
              <EditorialImage
                src="/sobre/sobre-1-ampla.webp"
                alt="Ambiente de trabalho de Marcos Ranauro"
                sizes="calc(100vw - 3rem)"
              />
            </FadeInView>
            <FadeInView delay={0.1}>
              <EditorialImage
                src="/sobre/sobre-2-costas.webp"
                alt="Marcos Ranauro trabalhando em código"
                sizes="calc((100vw - 3rem) * 0.8)"
                wrapperClassName="ml-auto w-4/5"
              />
            </FadeInView>
            <FadeInView delay={0.15}>
              <EditorialImage
                src="/sobre/sobre-3-fechada.webp"
                alt="Setup de desenvolvimento de Marcos Ranauro"
                sizes="calc((100vw - 3rem) * 0.92)"
                wrapperClassName="w-11/12"
              />
            </FadeInView>
          </div>

          {/* Desktop/tablet (sm+): composição C rebalanceada — central protagonista, laterais assimétricas */}
          <div className="hidden sm:grid items-start gap-6 lg:gap-8 grid-cols-[28fr_44fr_24fr]">

            {/* Esquerda — secundária, offset moderado */}
            <FadeInView delay={0.12} className="mt-12 lg:mt-16">
              <EditorialImage
                src="/sobre/sobre-1-ampla.webp"
                alt="Ambiente de trabalho de Marcos Ranauro"
                sizes="(max-width: 1280px) 28vw, 290px"
              />
            </FadeInView>

            {/* Centro — PROTAGONISTA, maior, âncora no topo, entra primeiro */}
            <FadeInView delay={0}>
              <EditorialImage
                src="/sobre/sobre-2-costas.webp"
                alt="Marcos Ranauro trabalhando em código"
                sizes="(max-width: 1280px) 44vw, 455px"
              />
            </FadeInView>

            {/* Direita — terciária, menor lateral, queda dramática */}
            <FadeInView delay={0.22} className="mt-24 lg:mt-32">
              <EditorialImage
                src="/sobre/sobre-3-fechada.webp"
                alt="Setup de desenvolvimento de Marcos Ranauro"
                sizes="(max-width: 1280px) 24vw, 250px"
              />
            </FadeInView>

          </div>
        </div>

        {/* Formação — timeline editorial */}
        <div className="border-t border-border pt-16 lg:pt-20">
          <FadeInView className="mb-12">
            <p className="type-section-eyebrow mb-2">
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
                    <p className="type-label mb-2 tracking-[0.25em]">
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

    </Section>
  );
}
