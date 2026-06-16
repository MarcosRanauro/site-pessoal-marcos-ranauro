/** Validação simples de e-mail no client — presença de @, domínio e TLD */
export function isValidEmailSimple(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.trim());
}
