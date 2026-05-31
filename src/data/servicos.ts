export type Servico = {
  numero: string;
  titulo: string;
  descricao: string;
};

export const servicos: Servico[] = [
  {
    numero: "01",
    titulo: "Sites profissionais e landing pages",
    descricao:
      "Criação de sites modernos, responsivos e bem estruturados para profissionais, negócios e marcas que precisam de presença digital com aparência premium.",
  },
  {
    numero: "02",
    titulo: "Sistemas web sob medida",
    descricao:
      "Desenvolvimento de aplicações web personalizadas para organizar processos, cadastros, fluxos internos, dashboards e operações digitais.",
  },
  {
    numero: "03",
    titulo: "Front-end moderno",
    descricao:
      "Construção de interfaces responsivas, performáticas e bem organizadas, com foco em experiência do usuário, clareza visual e manutenção do código.",
  },
  {
    numero: "04",
    titulo: "Back-end e APIs",
    descricao:
      "Criação de APIs, rotas, integrações, regras de negócio e estruturas de dados para aplicações web funcionarem de forma segura e organizada.",
  },
  {
    numero: "05",
    titulo: "Integrações e automações",
    descricao:
      "Integração com serviços externos, bancos de dados, autenticação, plataformas de deploy e ferramentas que conectam o produto ao funcionamento real.",
  },
];
