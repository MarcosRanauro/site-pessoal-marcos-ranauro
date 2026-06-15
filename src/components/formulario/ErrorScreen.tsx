"use client";

import { motion } from "framer-motion";
import { cn, focusRing } from "@/lib/utils";

type ErrorScreenProps = {
  message: string;
  onRetry: () => void;
};

export function ErrorScreen({ message, onRetry }: ErrorScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-lg rounded-sm border border-red-500/30 bg-surface p-6 text-center sm:p-8"
      role="alert"
    >
      <p className="font-heading text-lg font-bold text-foreground">
        Não foi possível enviar
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{message}</p>
      <p className="mt-2 text-xs text-muted-foreground">
        Suas respostas foram mantidas — você pode tentar novamente.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className={cn(
          "mt-6 inline-flex items-center rounded-sm border border-border",
          "bg-background px-6 py-3 text-sm font-medium text-foreground",
          "transition-colors hover:border-accent/40",
          focusRing,
        )}
      >
        Tentar novamente
      </button>
    </motion.div>
  );
}
