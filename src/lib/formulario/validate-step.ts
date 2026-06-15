import type { BriefingFormValues } from "./constants";
import { briefingSchema } from "./schema";

type StepField = keyof BriefingFormValues;

const STEP_FIELDS: Record<number, StepField[]> = {
  1: ["nome_e_negocio", "area_atuacao", "objetivo_site", "objetivo_outro", "site_atual"],
  2: ["publico_alvo", "tom_comunicacao", "tom_outro", "diferenciais", "depoimentos"],
  3: ["tem_logo", "estilo_visual", "cores_preferencia", "sites_referencia", "sites_evitar"],
  4: [
    "texto_apresentacao",
    "servicos",
    "secao_processo",
    "processo_texto",
    "faq",
    "tem_fotos",
  ],
  5: [
    "whatsapp",
    "email_formulario",
    "cidade_estado",
    "endereco_fisico",
    "redes_sociais",
    "horario_atendimento",
  ],
  6: [
    "tem_dominio",
    "dominio_texto",
    "tipo_email",
    "email_existente_texto",
    "telefone_recuperacao",
  ],
  7: ["termos_busca", "frase_titulo"],
  8: ["prazo", "prazo_data", "observacoes_finais", "website"],
};

export type StepErrors = Partial<Record<StepField, string>>;

/** Valida apenas os campos da etapa atual */
export function validateStep(
  step: number,
  values: BriefingFormValues,
): { valid: boolean; errors: StepErrors } {
  const result = briefingSchema.safeParse(values);
  if (result.success) {
    return { valid: true, errors: {} };
  }

  const stepFields = new Set(STEP_FIELDS[step] ?? []);
  const errors: StepErrors = {};

  for (const issue of result.error.issues) {
    const field = issue.path[0] as StepField | undefined;
    if (field && stepFields.has(field) && !errors[field]) {
      errors[field] = issue.message;
    }
  }

  if (step === 1 && values.objetivo_site.includes("Outro") && !values.objetivo_outro.trim()) {
    errors.objetivo_outro = errors.objetivo_outro ?? "Descreva o outro objetivo";
  }
  if (step === 2 && values.tom_comunicacao.includes("Outro") && !values.tom_outro.trim()) {
    errors.tom_outro = errors.tom_outro ?? "Descreva o outro tom de comunicação";
  }
  if (step === 4 && values.secao_processo === "Sim, vou descrever" && !values.processo_texto.trim()) {
    errors.processo_texto = errors.processo_texto ?? "Descreva o processo";
  }
  if (step === 6 && values.tem_dominio === "Sim" && !values.dominio_texto.trim()) {
    errors.dominio_texto = errors.dominio_texto ?? "Informe o domínio";
  }
  if (step === 6 && values.tipo_email === "Já tenho" && !values.email_existente_texto.trim()) {
    errors.email_existente_texto =
      errors.email_existente_texto ?? "Informe o e-mail existente";
  }
  if (step === 8 && values.prazo === "Sim" && !values.prazo_data.trim()) {
    errors.prazo_data = errors.prazo_data ?? "Informe a data desejada";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateAll(values: BriefingFormValues) {
  return briefingSchema.safeParse(values);
}

export { STEP_FIELDS };
