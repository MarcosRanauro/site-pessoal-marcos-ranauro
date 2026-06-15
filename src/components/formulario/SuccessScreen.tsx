"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn, focusRing } from "@/lib/utils";

export function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-lg text-center"
    >
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
        <span className="text-2xl text-accent" aria-hidden="true">
          ✓
        </span>
      </div>
      <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Briefing enviado!
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Recebi suas informações e enviei uma confirmação para o seu e-mail.
        Analiso tudo com calma e retorno com a proposta em até{" "}
        <span className="text-foreground">3 dias úteis</span>.
      </p>
      <Link
        href="/"
        className={cn(
          "mt-8 inline-flex items-center gap-2 rounded-sm border border-border",
          "bg-surface px-6 py-3 text-sm font-medium text-foreground",
          "transition-colors hover:border-accent/40 hover:text-accent",
          focusRing,
        )}
      >
        Voltar ao site
        <span aria-hidden="true">→</span>
      </Link>
    </motion.div>
  );
}
