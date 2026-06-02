import { FadeInView } from "@/components/ui/FadeInView";

type Canal = {
  label: string;
  valor: string;
  href: string;
  external: boolean;
};

const canais: Canal[] = [
  {
    label: "WhatsApp",
    valor: "+55 21 96424-2134",
    href: "https://wa.me/5521964242134",
    external: true,
  },
  {
    label: "E-mail",
    valor: "contato@marcosranauro.com.br",
    href: "mailto:contato@marcosranauro.com.br",
    external: false,
  },
  {
    label: "LinkedIn",
    valor: "in/marcosranauro",
    href: "https://www.linkedin.com/in/marcosranauro/",
    external: true,
  },
  {
    label: "GitHub",
    valor: "MarcosRanauro",
    href: "https://github.com/MarcosRanauro",
    external: true,
  },
];

export function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-surface py-24 lg:py-36">

      {/* Glow lime ambiente — muito sutil, canto superior direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent opacity-[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Layout assimétrico: texto (2 cols) + canais (3 cols) */}
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">

          {/* Esquerda — cabeçalho editorial + convite */}
          <div className="lg:col-span-2">
            <FadeInView>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle">
                07 / Contato
              </p>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Vamos
                <br />
                conversar
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="mt-6 max-w-xs text-base leading-relaxed text-muted">
                Tem um projeto em mente? Me conta o que você precisa.
              </p>
            </FadeInView>
          </div>

          {/* Direita — lista editorial de canais */}
          <div className="lg:col-span-3">
            {canais.map((canal, i) => (
              <FadeInView key={canal.label} delay={i * 0.08}>
                <a
                  href={canal.href}
                  target={canal.external ? "_blank" : undefined}
                  rel={canal.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between border-t border-border py-6 transition-colors"
                >
                  <div>
                    <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.3em] text-subtle transition-colors group-hover:text-muted-foreground">
                      {canal.label}
                    </p>
                    <p className="font-mono text-sm text-muted transition-colors group-hover:text-foreground">
                      {canal.valor}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    →
                  </span>
                </a>
              </FadeInView>
            ))}
            {/* Borda inferior fechando a lista */}
            <div className="border-t border-border" />
          </div>

        </div>

      </div>
    </section>
  );
}
