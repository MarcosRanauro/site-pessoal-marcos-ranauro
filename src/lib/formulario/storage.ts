import type { BriefingFormValues } from "./constants";
import { DEFAULT_FORM_VALUES, SESSION_STORAGE_KEY } from "./constants";

export function loadFormDraft(): BriefingFormValues {
  if (typeof window === "undefined") return { ...DEFAULT_FORM_VALUES };
  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_FORM_VALUES };
    const parsed = JSON.parse(raw) as Partial<BriefingFormValues>;
    return { ...DEFAULT_FORM_VALUES, ...parsed };
  } catch {
    return { ...DEFAULT_FORM_VALUES };
  }
}

export function saveFormDraft(values: BriefingFormValues): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(values));
  } catch {
    // sessionStorage indisponível ou quota excedida — ignora silenciosamente
  }
}

export function clearFormDraft(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  } catch {
    // ignora
  }
}

export function saveFormStep(step: number): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(`${SESSION_STORAGE_KEY}-step`, String(step));
  } catch {
    // ignora
  }
}

export function loadFormStep(): number {
  if (typeof window === "undefined") return 1;
  try {
    const raw = sessionStorage.getItem(`${SESSION_STORAGE_KEY}-step`);
    const step = raw ? parseInt(raw, 10) : 1;
    return step >= 1 && step <= 8 ? step : 1;
  } catch {
    return 1;
  }
}

export function clearFormStep(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(`${SESSION_STORAGE_KEY}-step`);
  } catch {
    // ignora
  }
}

export function clearAllFormStorage(): void {
  clearFormDraft();
  clearFormStep();
}
