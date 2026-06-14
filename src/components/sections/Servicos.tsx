import { FadeInView } from "@/components/ui/FadeInView";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicos } from "@/data/servicos";

export function Servicos() {
  return (
    <Section id="servicos" className="bg-background">

        <FadeInView className="mb-16 lg:mb-20">
          <SectionHeader
            numero="04"
            label="Serviços"
            titulo={
              <>
                Soluções que posso
                <br className="hidden sm:block" /> desenvolver
              </>
            }
          />
        </FadeInView>

        <div>
          {servicos.map((servico, i) => (
            <FadeInView key={servico.numero} delay={i * 0.08}>
              <div className="group border-t border-border py-8 lg:py-10">
                <div className="flex items-start gap-6 lg:gap-10">

                  <span className="type-label shrink-0 pt-1.5 tracking-[0.2em] transition-colors group-hover:text-accent">
                    {servico.numero}
                  </span>

                  <div className="flex-1">
                    <h3 className="mb-3 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                      {servico.titulo}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed text-muted">
                      {servico.descricao}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="shrink-0 pt-1.5 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    →
                  </span>

                </div>
              </div>
            </FadeInView>
          ))}
          <div className="border-t border-border" />
        </div>

    </Section>
  );
}
