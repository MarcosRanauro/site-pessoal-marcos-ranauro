"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  DEFAULT_FORM_VALUES,
  STEP_TITLES,
  TOTAL_STEPS,
  type BriefingFormValues,
} from "@/lib/formulario/constants";
import {
  clearAllFormStorage,
  loadFormDraft,
  loadFormStep,
  saveFormDraft,
  saveFormStep,
} from "@/lib/formulario/storage";
import { validateAll, validateFieldOnBlur, validateStep, type StepErrors } from "@/lib/formulario/validate-step";
import { cn, focusRing } from "@/lib/utils";
import { ErrorScreen } from "./ErrorScreen";
import { FormProgress } from "./FormProgress";
import { StepContent } from "./StepContent";
import { SuccessScreen } from "./SuccessScreen";

type FormStatus = "idle" | "submitting" | "success" | "error";

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export function BriefingForm() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<BriefingFormValues>(DEFAULT_FORM_VALUES);
  const [errors, setErrors] = useState<StepErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setValues(loadFormDraft());
    setStep(loadFormStep());
    setMounted(true);
  }, []);

  const update = useCallback(
    <K extends keyof BriefingFormValues>(key: K, value: BriefingFormValues[K]) => {
      setValues((prev) => {
        const next = { ...prev, [key]: value };
        saveFormDraft(next);
        return next;
      });
      setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
    },
    [],
  );

  const onFieldBlur = useCallback(
    (field: keyof BriefingFormValues) => {
      const message = validateFieldOnBlur(field, values);
      if (message) {
        setErrors((prev) => ({ ...prev, [field]: message }));
      }
    },
    [values],
  );

  const goToStep = useCallback((nextStep: number, dir: number) => {
    setDirection(dir);
    setStep(nextStep);
    saveFormStep(nextStep);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = () => {
    const { valid, errors: stepErrors } = validateStep(step, values);
    if (!valid) {
      setErrors(stepErrors);
      const firstErrorField = Object.keys(stepErrors)[0];
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.focus();
      }
      return;
    }
    if (step < TOTAL_STEPS) {
      goToStep(step + 1, 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      goToStep(step - 1, -1);
    }
  };

  const handleSubmit = async () => {
    const stepResult = validateStep(step, values);
    if (!stepResult.valid) {
      setErrors(stepResult.errors);
      return;
    }

    const fullResult = validateAll(values);
    if (!fullResult.success) {
      setErrorMessage("Alguns campos estão incompletos. Revise o formulário.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullResult.data),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        emailWarnings?: string[];
      };

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error ?? "Erro ao enviar. Tente novamente.");
        setStatus("error");
        return;
      }

      clearAllFormStorage();
      setStatus("success");
    } catch {
      setErrorMessage("Falha de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  if (!mounted) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (status === "success") {
    return <SuccessScreen />;
  }

  const slideVariants = {
    enter: (d: number) => ({
      opacity: 0,
      x: reduced ? 0 : d > 0 ? 24 : -24,
    }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({
      opacity: 0,
      x: reduced ? 0 : d > 0 ? -24 : 24,
    }),
  };

  return (
    <div className="relative">
      {status === "error" && (
        <div className="mb-8">
          <ErrorScreen message={errorMessage} onRetry={handleRetry} />
        </div>
      )}

      <FormProgress currentStep={step} />

      <div className="mt-8 mb-6">
        <p className="type-label mb-2 tracking-[0.2em]">Briefing</p>
        <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {STEP_TITLES[step - 1]}
        </h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step === TOTAL_STEPS) {
            handleSubmit();
          } else {
            handleNext();
          }
        }}
        noValidate
      >
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <StepContent
                step={step}
                values={values}
                update={update}
                errors={errors}
                onFieldBlur={onFieldBlur}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={status === "submitting"}
                className={cn(
                  "rounded-sm border border-border bg-transparent px-5 py-3",
                  "text-sm font-medium text-muted transition-colors",
                  "hover:border-border-strong hover:text-foreground",
                  "disabled:opacity-50",
                  focusRing,
                )}
              >
                Voltar
              </button>
            ) : (
              <Link
                href="/"
                className={cn(
                  "rounded-sm border border-border bg-transparent px-5 py-3",
                  "text-sm font-medium text-muted transition-colors",
                  "hover:border-border-strong hover:text-foreground",
                  focusRing,
                )}
              >
                Cancelar
              </Link>
            )}
          </div>

          {step < TOTAL_STEPS ? (
            <button
              type="submit"
              className={cn(
                "rounded-sm border border-accent/30 bg-accent px-6 py-3",
                "text-sm font-medium text-background transition-opacity",
                "hover:opacity-90",
                focusRing,
              )}
            >
              Avançar
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "submitting"}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-sm",
                "border border-accent/30 bg-accent px-6 py-3",
                "text-sm font-medium text-background transition-opacity",
                "hover:opacity-90 disabled:opacity-60",
                focusRing,
              )}
            >
              {status === "submitting" && <Spinner />}
              {status === "submitting" ? "Enviando..." : "Enviar briefing"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
