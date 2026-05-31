import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { servicos } from "@/data/servicos";
import { cn } from "@/lib/utils";

export function Servicos() {
  const total = servicos.length;

  return (
    <Section id="servicos" className="bg-background">
      <Container>
        <h2 className="mb-12 border-l-2 border-accent-blue pl-4 text-3xl font-bold text-foreground md:text-4xl">
          Soluções que posso desenvolver
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {servicos.map((servico, index) => {
            const isOddLast = index === total - 1 && total % 2 !== 0;

            return (
              <article
                key={servico.numero}
                className={cn(
                  "flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent-blue hover:shadow-lg",
                  isOddLast && "md:col-span-2 md:mx-auto md:max-w-lg md:w-full"
                )}
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
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
