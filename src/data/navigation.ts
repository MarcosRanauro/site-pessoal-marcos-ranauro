export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: "sobre",        label: "Sobre",        href: "#sobre" },
  { id: "stack",        label: "Stack",        href: "#stack" },
  { id: "projetos",     label: "Projetos",     href: "#projetos" },
  { id: "servicos",     label: "Serviços",     href: "#servicos" },
  { id: "processo",     label: "Processo",     href: "#processo" },
  { id: "diferenciais", label: "Diferenciais", href: "#diferenciais" },
  { id: "contato",      label: "Contato",      href: "#contato" },
];
