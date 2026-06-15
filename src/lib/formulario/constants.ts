export const SESSION_STORAGE_KEY = "briefing-form-draft";

export const TOTAL_STEPS = 8;

export const OBJETIVO_SITE_OPTIONS = [
  "WhatsApp",
  "Formulário de contato",
  "Conhecer serviços",
  "Agendar consulta",
  "Outro",
] as const;

export const TOM_COMUNICACAO_OPTIONS = [
  "Técnico e formal",
  "Profissional e acessível",
  "Próximo e humanizado",
  "Direto e objetivo",
  "Outro",
] as const;

export const DEPOIMENTOS_OPTIONS = [
  "Sim, vou enviar",
  "Sim, vou coletar",
  "Não quero exibir",
] as const;

export const TEM_LOGO_OPTIONS = [
  "Tenho e vou enviar",
  "Tenho mas insatisfeito",
  "Não tenho, criar junto",
  "Não tenho, sem logo",
] as const;

export const ESTILO_VISUAL_OPTIONS = [
  "Sóbrio e elegante",
  "Limpo e minimalista",
  "Moderno e arrojado",
  "Acolhedor e humanizado",
  "Colorido e vibrante",
] as const;

export const SECAO_PROCESSO_OPTIONS = [
  "Sim, vou descrever",
  "Sim, crie sugestão",
  "Não quero",
] as const;

export const TEM_FOTOS_OPTIONS = [
  "Tenho e vou enviar",
  "Vou tirar antes",
  "Não tenho, usar banco",
  "Não quero foto",
] as const;

export const TEM_DOMINIO_OPTIONS = [
  "Sim",
  "Não, preciso de ajuda",
  "Não sei o que é",
] as const;

export const TIPO_EMAIL_OPTIONS = [
  "Gmail comum",
  "Profissional com domínio",
  "Já tenho",
] as const;

export const PRAZO_OPTIONS = [
  "Sim",
  "Urgência sem data",
  "Sem prazo",
] as const;

export const STEP_TITLES = [
  "Sobre você e o projeto",
  "Público e comunicação",
  "Identidade visual",
  "Conteúdo do site",
  "Contato e localização",
  "Domínio e e-mail",
  "SEO",
  "Prazo e finais",
] as const;

export const DEFAULT_FORM_VALUES = {
  nome_e_negocio: "",
  area_atuacao: "",
  objetivo_site: [] as string[],
  objetivo_outro: "",
  site_atual: "",
  publico_alvo: "",
  tom_comunicacao: [] as string[],
  tom_outro: "",
  diferenciais: "",
  depoimentos: "",
  tem_logo: "",
  estilo_visual: [] as string[],
  cores_preferencia: "",
  sites_referencia: "",
  sites_evitar: "",
  texto_apresentacao: "",
  servicos: "",
  secao_processo: "",
  processo_texto: "",
  faq: "",
  tem_fotos: "",
  whatsapp: "",
  email_formulario: "",
  cidade_estado: "",
  endereco_fisico: "",
  redes_sociais: "",
  horario_atendimento: "",
  tem_dominio: "",
  dominio_texto: "",
  tipo_email: "",
  email_existente_texto: "",
  telefone_recuperacao: "",
  termos_busca: "",
  frase_titulo: "",
  prazo: "",
  prazo_data: "",
  observacoes_finais: "",
  website: "",
};

export type BriefingFormValues = typeof DEFAULT_FORM_VALUES;
