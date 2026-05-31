import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";
import { Card3D } from "@/components/ui/Card3D";

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

export function Diferenciais() {
  return (
    <Section id="diferenciais" className="bg-background">
      <Container>
        <FadeInView>
          <h2 className="mb-12 border-l-2 border-accent-blue pl-4 text-3xl font-bold text-foreground md:text-4xl">
            Por que trabalhar comigo
          </h2>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-2">
          {diferenciais.map((item, i) => (
            <FadeInView key={item.titulo} delay={i * 0.1}>
              <Card3D className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent-blue hover:shadow-lg">
                <h3 className="text-base font-semibold text-foreground md:text-lg">
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.descricao}
                </p>
              </Card3D>
            </FadeInView>
          ))}
        </div>
      </Container>
    </Section>
  );
}
