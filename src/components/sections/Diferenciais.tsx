import { FadeInView } from "@/components/ui/FadeInView";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const diferenciais = [
  {
    titulo: "Código que dura",
    descricao:
      "Entrego código organizado, tipado e documentado. Não apenas funcional, mas sustentável.",
  },
  {
    titulo: "Comunicação direta",
    descricao:
      "Sem enrolação. Atualizações claras, prazos realistas e transparência em cada etapa.",
  },
  {
    titulo: "Visão de produto",
    descricao:
      "Penso além do código. Considero UX, fluxo e impacto real antes de implementar.",
  },
  {
    titulo: "Stack moderna",
    descricao:
      "Trabalho com as ferramentas certas para cada contexto, sem apego desnecessário a tecnologias ultrapassadas.",
  },
];

function gridBorderClass(index: number): string {
  switch (index) {
    case 0: return "border-b border-border md:border-r";
    case 1: return "border-b border-border";
    case 2: return "border-b border-border md:border-b-0 md:border-r";
    default: return "";
  }
}

export function Diferenciais() {
  return (
    <Section id="diferenciais" className="bg-background">

        <FadeInView className="mb-16 lg:mb-20">
          <SectionHeader
            numero="06"
            label="Diferenciais"
            titulo={
              <>
                Por que trabalhar
                <br className="hidden sm:block" /> comigo
              </>
            }
          />
        </FadeInView>

        <div className="grid md:grid-cols-2">
          {diferenciais.map((item, i) => (
            <FadeInView
              key={item.titulo}
              delay={i * 0.1}
              className={gridBorderClass(i)}
            >
              <div
                className={[
                  "py-10 md:py-12",
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12",
                ].join(" ")}
              >
                <p className="type-label mb-4 tracking-[0.3em]">
                  0{i + 1}
                </p>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.descricao}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

    </Section>
  );
}
