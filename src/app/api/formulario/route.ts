import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildConfirmationEmailHtml,
  buildNotificationEmailHtml,
} from "@/lib/formulario/email-templates";
import { briefingSchema, toDbRow } from "@/lib/formulario/schema";
import { createServiceClient } from "@/lib/supabase/server";

const FROM_NOTIFICATION = "Briefing do Site <contato@marcosranauro.com.br>";
const FROM_CONFIRMATION = "Marcos Ranauro <contato@marcosranauro.com.br>";
const OWNER_EMAIL = "contato@marcosranauro.com.br";

// Rate limiting simples em memória — substituir por Redis/KV em produção de alto volume
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Tente novamente mais tarde." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Payload inválido" }, { status: 400 });
  }

  const parsed = briefingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot — retorna sucesso falso sem salvar nem enviar e-mail
  if (data.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const supabase = createServiceClient();
  const row = toDbRow(data);

  const { error: insertError } = await supabase.from("briefings").insert(row);

  if (insertError) {
    console.error("[formulario] Supabase insert error:", insertError);
    return NextResponse.json(
      { ok: false, error: "Erro ao salvar briefing. Tente novamente." },
      { status: 500 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const emailWarnings: string[] = [];

  if (!resendKey) {
    console.error("[formulario] RESEND_API_KEY não configurada");
    emailWarnings.push("E-mails não enviados — API key ausente");
    return NextResponse.json({ ok: true, emailWarnings });
  }

  const resend = new Resend(resendKey);

  const [notificationResult, confirmationResult] = await Promise.allSettled([
    resend.emails.send({
      from: FROM_NOTIFICATION,
      to: OWNER_EMAIL,
      replyTo: data.email_formulario,
      subject: `Novo briefing: ${data.nome_e_negocio}`,
      html: buildNotificationEmailHtml(data),
    }),
    resend.emails.send({
      from: FROM_CONFIRMATION,
      to: data.email_formulario,
      replyTo: OWNER_EMAIL,
      subject: "Recebi seu briefing — Marcos Ranauro",
      html: buildConfirmationEmailHtml(data),
    }),
  ]);

  if (notificationResult.status === "rejected") {
    console.error("[formulario] Notification email failed:", notificationResult.reason);
    emailWarnings.push("E-mail de notificação não enviado");
  } else if (notificationResult.value.error) {
    console.error("[formulario] Notification email error:", notificationResult.value.error);
    emailWarnings.push("E-mail de notificação não enviado");
  }

  if (confirmationResult.status === "rejected") {
    console.error("[formulario] Confirmation email failed:", confirmationResult.reason);
    emailWarnings.push("E-mail de confirmação não enviado");
  } else if (confirmationResult.value.error) {
    console.error("[formulario] Confirmation email error:", confirmationResult.value.error);
    emailWarnings.push("E-mail de confirmação não enviado");
  }

  return NextResponse.json({
    ok: true,
    ...(emailWarnings.length > 0 ? { emailWarnings } : {}),
  });
}
