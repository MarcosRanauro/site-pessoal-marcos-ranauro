import { z } from "zod";
import {
  DEPOIMENTOS_OPTIONS,
  ESTILO_VISUAL_OPTIONS,
  OBJETIVO_SITE_OPTIONS,
  PRAZO_OPTIONS,
  SECAO_PROCESSO_OPTIONS,
  TEM_DOMINIO_OPTIONS,
  TEM_FOTOS_OPTIONS,
  TEM_LOGO_OPTIONS,
  TIPO_EMAIL_OPTIONS,
  TOM_COMUNICACAO_OPTIONS,
} from "./constants";

const nonEmpty = (msg: string) => z.string().trim().min(1, msg);

const whatsappRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

export const briefingSchema = z
  .object({
    nome_e_negocio: nonEmpty("Informe seu nome e o nome do negócio"),
    area_atuacao: nonEmpty("Informe a área de atuação"),
    objetivo_site: z
      .array(z.enum(OBJETIVO_SITE_OPTIONS))
      .min(1, "Selecione ao menos um objetivo"),
    objetivo_outro: z.string().optional(),
    site_atual: z.string().optional(),
    publico_alvo: nonEmpty("Descreva o público-alvo"),
    tom_comunicacao: z
      .array(z.enum(TOM_COMUNICACAO_OPTIONS))
      .min(1, "Selecione ao menos um tom de comunicação"),
    tom_outro: z.string().optional(),
    diferenciais: nonEmpty("Descreva os diferenciais"),
    depoimentos: z.enum(DEPOIMENTOS_OPTIONS).optional().or(z.literal("")),
    tem_logo: z.enum(TEM_LOGO_OPTIONS, {
      message: "Selecione uma opção sobre o logo",
    }),
    estilo_visual: z
      .array(z.enum(ESTILO_VISUAL_OPTIONS))
      .min(1, "Selecione ao menos um estilo visual"),
    cores_preferencia: nonEmpty("Informe as cores de preferência"),
    sites_referencia: nonEmpty("Informe sites de referência"),
    sites_evitar: z.string().optional(),
    texto_apresentacao: nonEmpty("Escreva o texto de apresentação"),
    servicos: nonEmpty("Descreva os serviços"),
    secao_processo: z.enum(SECAO_PROCESSO_OPTIONS).optional().or(z.literal("")),
    processo_texto: z.string().optional(),
    faq: z.string().optional(),
    tem_fotos: z.enum(TEM_FOTOS_OPTIONS).optional().or(z.literal("")),
    whatsapp: z
      .string()
      .trim()
      .regex(whatsappRegex, "Informe um WhatsApp válido, ex: (21) 99999-9999"),
    email_formulario: z
      .string()
      .trim()
      .email("Informe um e-mail válido"),
    cidade_estado: nonEmpty("Informe cidade e estado"),
    endereco_fisico: z.string().optional(),
    redes_sociais: z.string().optional(),
    horario_atendimento: z.string().optional(),
    tem_dominio: z.enum(TEM_DOMINIO_OPTIONS, {
      message: "Selecione uma opção sobre domínio",
    }),
    dominio_texto: z.string().optional(),
    tipo_email: z.enum(TIPO_EMAIL_OPTIONS, {
      message: "Selecione o tipo de e-mail",
    }),
    email_existente_texto: z.string().optional(),
    telefone_recuperacao: nonEmpty("Informe o telefone de recuperação"),
    termos_busca: nonEmpty("Informe os termos de busca"),
    frase_titulo: z.string().optional(),
    prazo: z.enum(PRAZO_OPTIONS, {
      message: "Selecione uma opção de prazo",
    }),
    prazo_data: z.string().optional(),
    observacoes_finais: z.string().optional(),
    website: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.objetivo_site.includes("Outro") && !data.objetivo_outro?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["objetivo_outro"],
        message: "Descreva o outro objetivo",
      });
    }
    if (data.tom_comunicacao.includes("Outro") && !data.tom_outro?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["tom_outro"],
        message: "Descreva o outro tom de comunicação",
      });
    }
    if (data.secao_processo === "Sim, vou descrever" && !data.processo_texto?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["processo_texto"],
        message: "Descreva o processo",
      });
    }
    if (data.tem_dominio === "Sim" && !data.dominio_texto?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["dominio_texto"],
        message: "Informe o domínio",
      });
    }
    if (data.tipo_email === "Já tenho" && !data.email_existente_texto?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["email_existente_texto"],
        message: "Informe o e-mail existente",
      });
    }
    if (data.prazo === "Sim" && !data.prazo_data?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["prazo_data"],
        message: "Informe a data desejada",
      });
    }
  });

export type BriefingPayload = z.infer<typeof briefingSchema>;

/** Campos enviados ao Supabase (sem honeypot) */
export function toDbRow(data: BriefingPayload) {
  return {
    nome_e_negocio: data.nome_e_negocio,
    area_atuacao: data.area_atuacao,
    objetivo_site: data.objetivo_site,
    objetivo_outro: data.objetivo_outro || null,
    site_atual: data.site_atual || null,
    publico_alvo: data.publico_alvo,
    tom_comunicacao: data.tom_comunicacao,
    tom_outro: data.tom_outro || null,
    diferenciais: data.diferenciais,
    depoimentos: data.depoimentos || null,
    tem_logo: data.tem_logo,
    estilo_visual: data.estilo_visual,
    cores_preferencia: data.cores_preferencia,
    sites_referencia: data.sites_referencia,
    sites_evitar: data.sites_evitar || null,
    texto_apresentacao: data.texto_apresentacao,
    servicos: data.servicos,
    secao_processo: data.secao_processo || null,
    processo_texto: data.processo_texto || null,
    faq: data.faq || null,
    tem_fotos: data.tem_fotos || null,
    whatsapp: data.whatsapp,
    email_formulario: data.email_formulario,
    cidade_estado: data.cidade_estado,
    endereco_fisico: data.endereco_fisico || null,
    redes_sociais: data.redes_sociais || null,
    horario_atendimento: data.horario_atendimento || null,
    tem_dominio: data.tem_dominio,
    dominio_texto: data.dominio_texto || null,
    tipo_email: data.tipo_email,
    email_existente_texto: data.email_existente_texto || null,
    telefone_recuperacao: data.telefone_recuperacao,
    termos_busca: data.termos_busca,
    frase_titulo: data.frase_titulo || null,
    prazo: data.prazo,
    prazo_data: data.prazo_data || null,
    observacoes_finais: data.observacoes_finais || null,
  };
}
