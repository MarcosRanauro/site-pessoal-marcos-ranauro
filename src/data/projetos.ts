export type StatusProjeto = "No ar" | "Publicado" | "Em desenvolvimento";

export type Projeto = {
  titulo: string;
  descricao: string;
  stack: string[];
  github: string;
  live: string;
  status: StatusProjeto;
  destaque: boolean;
};

export const projetos: Projeto[] = [
  {
    titulo: "Site Monique Ranauro",
    descricao:
      "Site institucional para advogada criminalista. Foco em design sofisticado, comunicação sóbria e conversão de clientes via presença digital profissional.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/MarcosRanauro/site-monique-ranauro",
    live: "https://www.moniqueranauro.com.br",
    status: "Em desenvolvimento",
    destaque: false,
  },
  {
    titulo: "Outfit AI",
    descricao:
      "SaaS de moda com inteligência artificial. Usuários cadastram suas peças e a Mia — stylist IA — gera outfits personalizados com base no clima real, ocasião e estilo pessoal.",
    stack: ["Next.js", "TypeScript", "Supabase", "Anthropic API", "Tailwind CSS"],
    github: "https://github.com/MarcosRanauro/outfit-saas",
    live: "https://outfit-saas.vercel.app",
    status: "Publicado",
    destaque: true,
  },
];
