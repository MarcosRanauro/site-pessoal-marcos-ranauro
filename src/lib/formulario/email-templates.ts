import type { BriefingPayload } from "./schema";
import { STEP_TITLES } from "./constants";

type FieldDef = {
  label: string;
  value: string | string[] | null | undefined;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatValue(value: string | string[] | null | undefined): string | null {
  if (value == null) return null;
  if (Array.isArray(value)) {
    const filtered = value.filter(Boolean);
    return filtered.length > 0 ? filtered.join(", ") : null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function renderField(label: string, value: string | string[] | null | undefined): string {
  const formatted = formatValue(value);
  if (!formatted) return "";
  return `
    <tr>
      <td style="padding:8px 0 4px;font-weight:600;color:#FAFAFA;font-size:13px;">${escapeHtml(label)}</td>
    </tr>
    <tr>
      <td style="padding:0 0 12px;color:#A1A1A1;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(formatted)}</td>
    </tr>`;
}

function renderSection(title: string, fields: FieldDef[]): string {
  const rows = fields.map((f) => renderField(f.label, f.value)).join("");
  if (!rows) return "";
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="font-family:'Space Grotesk',Arial,sans-serif;font-size:16px;font-weight:700;color:#C6FF00;padding-bottom:12px;border-bottom:1px solid #222222;">
          ${escapeHtml(title)}
        </td>
      </tr>
      ${rows}
    </table>`;
}

export function buildNotificationEmailHtml(data: BriefingPayload): string {
  const sections = [
    renderSection(STEP_TITLES[0], [
      { label: "Nome e negócio", value: data.nome_e_negocio },
      { label: "Área de atuação", value: data.area_atuacao },
      { label: "Objetivo do site", value: data.objetivo_site },
      { label: "Outro objetivo", value: data.objetivo_outro },
      { label: "Site atual", value: data.site_atual },
    ]),
    renderSection(STEP_TITLES[1], [
      { label: "Público-alvo", value: data.publico_alvo },
      { label: "Tom de comunicação", value: data.tom_comunicacao },
      { label: "Outro tom", value: data.tom_outro },
      { label: "Diferenciais", value: data.diferenciais },
      { label: "Depoimentos", value: data.depoimentos },
    ]),
    renderSection(STEP_TITLES[2], [
      { label: "Logo", value: data.tem_logo },
      { label: "Estilo visual", value: data.estilo_visual },
      { label: "Cores de preferência", value: data.cores_preferencia },
      { label: "Sites de referência", value: data.sites_referencia },
      { label: "Sites a evitar", value: data.sites_evitar },
    ]),
    renderSection(STEP_TITLES[3], [
      { label: "Texto de apresentação", value: data.texto_apresentacao },
      { label: "Serviços", value: data.servicos },
      { label: "Seção de processo", value: data.secao_processo },
      { label: "Descrição do processo", value: data.processo_texto },
      { label: "FAQ", value: data.faq },
      { label: "Fotos", value: data.tem_fotos },
    ]),
    renderSection(STEP_TITLES[4], [
      { label: "WhatsApp", value: data.whatsapp },
      { label: "E-mail", value: data.email_formulario },
      { label: "Cidade / Estado", value: data.cidade_estado },
      { label: "Endereço físico", value: data.endereco_fisico },
      { label: "Redes sociais", value: data.redes_sociais },
      { label: "Horário de atendimento", value: data.horario_atendimento },
    ]),
    renderSection(STEP_TITLES[5], [
      { label: "Tem domínio", value: data.tem_dominio },
      { label: "Domínio", value: data.dominio_texto },
      { label: "Tipo de e-mail", value: data.tipo_email },
      { label: "E-mail existente", value: data.email_existente_texto },
      { label: "Telefone de recuperação", value: data.telefone_recuperacao },
    ]),
    renderSection(STEP_TITLES[6], [
      { label: "Termos de busca", value: data.termos_busca },
      { label: "Frase de título", value: data.frase_titulo },
    ]),
    renderSection(STEP_TITLES[7], [
      { label: "Prazo", value: data.prazo },
      { label: "Data desejada", value: data.prazo_data },
      { label: "Observações finais", value: data.observacoes_finais },
    ]),
  ].join("");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#0A0A0A;font-family:Inter,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#111111;border:1px solid #222222;border-radius:8px;">
    <tr>
      <td style="padding:32px 24px;">
        <h1 style="margin:0 0 8px;font-family:'Space Grotesk',Arial,sans-serif;font-size:22px;color:#FAFAFA;">
          Novo briefing recebido
        </h1>
        <p style="margin:0 0 24px;color:#A1A1A1;font-size:14px;">
          ${escapeHtml(data.nome_e_negocio)} — ${escapeHtml(data.email_formulario)}
        </p>
        ${sections}
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildConfirmationEmailHtml(data: BriefingPayload): string {
  const firstName = data.nome_e_negocio.split(/[\s\-–—]/)[0] || data.nome_e_negocio;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;background:#0A0A0A;font-family:Inter,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#111111;border:1px solid #222222;border-radius:8px;">
    <tr>
      <td style="padding:32px 24px;">
        <h1 style="margin:0 0 16px;font-family:'Space Grotesk',Arial,sans-serif;font-size:22px;color:#FAFAFA;">
          Recebi seu briefing!
        </h1>
        <p style="margin:0 0 16px;color:#FAFAFA;font-size:15px;line-height:1.6;">
          Olá, ${escapeHtml(firstName)}!
        </p>
        <p style="margin:0 0 16px;color:#A1A1A1;font-size:15px;line-height:1.6;">
          Obrigado por compartilhar os detalhes do seu projeto. Já recebi todas as informações
          e vou analisar com calma para montar a melhor proposta para você.
        </p>
        <p style="margin:0 0 24px;color:#A1A1A1;font-size:15px;line-height:1.6;">
          Retorno com a proposta em até <strong style="color:#FAFAFA;">3 dias úteis</strong>.
          Se precisar complementar algo, é só responder este e-mail.
        </p>
        <p style="margin:0;color:#FAFAFA;font-size:15px;line-height:1.6;">
          Abraço,<br>
          <strong>Marcos Ranauro</strong><br>
          <span style="color:#A1A1A1;font-size:13px;">contato@marcosranauro.com.br</span>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
