/** Extrai somente dígitos de uma string */
export function phoneDigitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Máscara telefone BR adaptativa:
 * - 10 dígitos (fixo): (XX) XXXX-XXXX
 * - 11 dígitos (celular): (XX) XXXXX-XXXX
 */
export function maskPhoneBR(value: string): string {
  const digits = phoneDigitsOnly(value).slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/** Valida telefone BR com 10 (fixo) ou 11 (celular) dígitos */
export function isValidPhoneBR(value: string): boolean {
  const digits = phoneDigitsOnly(value);
  return digits.length === 10 || digits.length === 11;
}

/** @deprecated Use maskPhoneBR */
export const maskWhatsApp = maskPhoneBR;
