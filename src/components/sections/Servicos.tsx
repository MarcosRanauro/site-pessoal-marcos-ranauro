import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeInView } from "@/components/ui/FadeInView";
import { Card3D } from "@/components/ui/Card3D";
import { servicos } from "@/data/servicos";
import { cn } from "@/lib/utils";

export function Servicos() {
  const total = servicos.length;

  return (
    <Section id="servicos" className="bg-background">
      <Container>
        <FadeInView>
          <h2 className="mb-12 border-l-2 border-accent-blue pl-4 text-3xl font-bold text-foreground md:text-4xl">
            Soluções que posso desenvolver
          </h2>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-2">
          {servicos.map((servico, index) => {
            const isOddLast = index === total - 1 && total % 2 !== 0;

            return (
              <FadeInView
                key={servico.numero}
                delay={index * 0.08}
                className={cn(isOddLast && "md:col-span-2 md:mx-auto md:w-full md:max-w-lg")}
              >
                <Card3D
                  className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent-blue hover:shadow-lg"
                >
                  <span className="font-mono text-sm text-accent-blue">
                    {servico.numero}
                  </span>
                  <h3 className="text-base font-semibold text-foreground md:text-lg">
                    {servico.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {servico.descricao}
                  </p>
                </Card3D>
              </FadeInView>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
