export type StatusProjeto = "No ar" | "Publicado" | "Em desenvolvimento";

export type Projeto = {
  titulo: string;
  descricao: string;
  stack: string[];
  github: string;
  live: string;
  status: StatusProjeto;
  destaque: boolean;
  imagem: string;
  contexto: string;
};

export const projetos: Projeto[] = [
  {
    titulo: "Outfit AI",
    descricao:
      "SaaS de moda com inteligência artificial. A stylist Mia gera looks personalizados com base no clima real, ocasião e estilo do usuário.",
    stack: ["Next.js", "TypeScript", "Supabase", "Anthropic API", "Tailwind CSS"],
    github: "https://github.com/MarcosRanauro/outfit-saas",
    live: "https://miaoutfitai.com.br",
    status: "Publicado",
    destaque: true,
    imagem: "/projeto-mia-outfit-ai.webp",
    contexto: "Produto próprio · SaaS",
  },
  {
    titulo: "Site Monique Ranauro",
    descricao:
      "Site institucional para advogada criminalista. Design sóbrio e sofisticado, com foco em presença digital premium e captação de clientes.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/MarcosRanauro/site-monique-ranauro",
    live: "https://www.moniqueranauro.com.br",
    status: "Em desenvolvimento",
    destaque: false,
    imagem: "/projeto-monique-ranauro.webp",
    contexto: "Cliente · Advocacia Criminal",
  },
];
