import { Logo } from "@/components/ui/Logo";

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

        {/* Bloco principal — logo + nav */}
        <div className="flex flex-col gap-12 py-14 md:flex-row md:items-start md:justify-between">

          {/* Esquerda: logo como assinatura + localização */}
          <div className="flex flex-col gap-5">
            <Logo className="h-11 w-auto" />
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-subtle">
              Nova Iguaçu — RJ, Brasil
            </p>
          </div>

          {/* Direita: navegação compacta em 2 colunas */}
          <nav aria-label="Navegação do rodapé">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {footerNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Linha inferior — copyright + assinatura */}
        <div className="flex flex-col gap-2 border-t border-border py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle">
            © {new Date().getFullYear()} Marcos Ranauro
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-subtle">
            Desenhado e desenvolvido por Marcos Ranauro
          </p>
        </div>

      </div>
    </footer>
  );
}
