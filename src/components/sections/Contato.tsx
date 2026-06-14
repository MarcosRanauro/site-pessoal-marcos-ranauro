import { FadeInView } from "@/components/ui/FadeInView";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { focusRing } from "@/lib/utils";

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
    <Section
      id="contato"
      className="relative overflow-hidden bg-surface"
      containerClassName="relative z-10"
      adornment={
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent opacity-[0.04] blur-[120px]"
        />
      }
    >

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">

          <div className="lg:col-span-2">
            <FadeInView>
              <SectionHeader
                numero="07"
                label="Contato"
                titulo={
                  <>
                    Vamos
                    <br />
                    conversar
                  </>
                }
              />
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="mt-6 max-w-xs text-base leading-relaxed text-muted">
                Tem um projeto em mente? Me conta o que você precisa.
              </p>
            </FadeInView>
          </div>

          <div className="lg:col-span-3">
            {canais.map((canal, i) => (
              <FadeInView key={canal.label} delay={i * 0.08}>
                <a
                  href={canal.href}
                  target={canal.external ? "_blank" : undefined}
                  rel={canal.external ? "noopener noreferrer" : undefined}
                  className={`group flex items-center justify-between border-t border-border py-6 transition-colors ${focusRing}`}
                >
                  <div>
                    <p className="type-label mb-1.5 tracking-[0.3em]">
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
            <div className="border-t border-border" />
          </div>

        </div>

    </Section>
  );
}
