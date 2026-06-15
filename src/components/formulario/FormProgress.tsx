"use client";

import { TOTAL_STEPS } from "@/lib/formulario/constants";

type FormProgressProps = {
  currentStep: number;
};

export function FormProgress({ currentStep }: FormProgressProps) {
  const progress = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="type-label tracking-[0.2em]">
          Etapa {currentStep} de {TOTAL_STEPS}
        </p>
        <p className="font-mono text-xs text-muted">{Math.round(progress)}%</p>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={TOTAL_STEPS}
        aria-label={`Progresso do formulário: etapa ${currentStep} de ${TOTAL_STEPS}`}
      >
        <div
          className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
