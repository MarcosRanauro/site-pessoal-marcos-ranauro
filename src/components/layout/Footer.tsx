import { focusRing } from "@/lib/utils";
import { FooterMonogram } from "@/components/layout/FooterMonogram";

const footerNavLinks = [
  { href: "#sobre",        label: "Sobre" },
  { href: "#stack",        label: "Stack" },
  { href: "#projetos",     label: "Projetos" },
  { href: "#servicos",     label: "Serviços" },
  { href: "#processo",     label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato",      label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Bloco principal — 3 zonas: localização | monograma | nav */}
        <div className="flex flex-col items-center gap-10 py-14 md:flex-row md:items-center md:justify-between">

          {/* Esquerda: localização — abaixo do monograma no mobile */}
          <div className="order-2 w-full md:order-1 md:w-44">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted md:text-left text-center">
              Nova Iguaçu — RJ, Brasil
            </p>
          </div>

          {/* Centro: monograma grande animado — protagonista */}
          <div className="order-1 flex justify-center md:order-2">
            <FooterMonogram />
          </div>

          {/* Direita: navegação compacta — abaixo do monograma no mobile */}
          <nav className="order-3 w-full md:order-3 md:w-auto" aria-label="Navegação do rodapé">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 md:justify-items-end">
              {footerNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground ${focusRing}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Linha inferior — copyright + assinatura */}
        <div className="flex flex-col gap-2 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} Marcos Ranauro
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            Desenhado e desenvolvido por Marcos Ranauro
          </p>
        </div>

      </div>
    </footer>
  );
}
