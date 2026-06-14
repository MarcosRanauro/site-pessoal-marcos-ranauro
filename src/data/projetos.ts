export type StatusProjeto = "producao" | "desenvolvimento";

export type Projeto = {
  titulo: string;
  contexto: string;
  imagem: string | null;
  problema: string;
  papel: string;
  stack: string[];
  resultado: string;
  status: StatusProjeto;
  url: string | null;
  urlLabel?: string;
  github?: string | null;
};

export const projetos: Projeto[] = [
  {
    titulo: "Outfit AI",
    contexto: "Produto próprio · SaaS",
    imagem: "/projeto-mia-outfit-ai.webp",
    problema:
      "Pessoas com armário cheio sem saber o que vestir — comprando mais roupa achando que faltava peça, quando faltava orientação.",
    papel: "Founder solo — produto, design, desenvolvimento full-stack e deploy.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind v4",
      "Supabase",
      "Claude API",
      "Stripe",
    ],
    resultado:
      "SaaS de moda com IA em produção — closet digital, stylist que analisa as peças reais, looks com clima e assinatura via Stripe. PWA instalável.",
    status: "producao",
    url: "https://miaoutfitai.com.br",
    urlLabel: "Ver projeto",
    github: "https://github.com/MarcosRanauro/outfit-saas",
  },
  {
    titulo: "Site Monique Ranauro",
    contexto: "Cliente · Advocacia Criminal",
    imagem: "/projeto-monique-ranauro.webp",
    problema:
      "Advogada criminalista sem presença digital — dependia do boca-a-boca e não tinha canal claro para captar contatos em urgências.",
    papel:
      "Design, desenvolvimento full-stack e deploy — do conceito visual à produção.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind v4",
      "Supabase",
      "Resend",
    ],
    resultado:
      "Site institucional no ar em ~7 dias — landing com 9 seções, formulário com e-mail, painel admin e domínio próprio. Auditado para acessibilidade (WCAG AA) e ética jurídica (OAB).",
    status: "producao",
    url: "https://moniqueranauro.com.br",
    urlLabel: "Ver projeto",
    github: "https://github.com/MarcosRanauro/site-monique-ranauro",
  },
  {
    titulo: "Advoc.AI",
    contexto: "Produto próprio · LegalTech",
    imagem: "/projeto-advoc-ai.webp",
    problema:
      "Advogados autônomos e pequenos escritórios afogados em publicações, intimações, prazos e processos espalhados.",
    papel: "Founder — produto, arquitetura e desenvolvimento full-stack.",
    stack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Supabase",
      "Claude API",
      "Stripe",
    ],
    resultado:
      "Copiloto de gestão processual com IA — organiza, resume e automatiza o que o advogado recebe no dia a dia. MVP em construção.",
    status: "desenvolvimento",
    url: null,
    github: null,
  },
];
