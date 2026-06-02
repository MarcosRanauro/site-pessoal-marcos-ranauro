import { FadeInView } from "@/components/ui/FadeInView";
import { servicos } from "@/data/servicos";

export function Servicos() {
  return (
    <section id="servicos" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Cabeçalho editorial */}
        <FadeInView className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            04 / Serviços
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Soluções que posso
            <br className="hidden sm:block" /> desenvolver
          </h2>
        </FadeInView>

        {/* Lista editorial — cada serviço como linha */}
        <div>
          {servicos.map((servico, i) => (
            <FadeInView key={servico.numero} delay={i * 0.08}>
              <div className="group border-t border-border py-8 lg:py-10">
                <div className="flex items-start gap-6 lg:gap-10">

                  {/* Número — vira lime no hover */}
                  <span className="shrink-0 pt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-accent">
                    {servico.numero}
                  </span>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <h3 className="mb-3 font-heading text-2xl font-bold text-foreground lg:text-3xl">
                      {servico.titulo}
                    </h3>
                    <p className="max-w-xl text-sm leading-relaxed text-muted">
                      {servico.descricao}
                    </p>
                  </div>

                  {/* Seta lime — aparece no hover */}
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
          {/* Borda inferior fechando a lista */}
          <div className="border-t border-border" />
        </div>

      </div>
    </section>
  );
}
