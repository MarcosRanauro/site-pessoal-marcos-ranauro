"use client";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTextScramble } from "@/lib/useTextScramble";
import { useTypewriter } from "@/lib/useTypewriter";

/*
 * Sequência de animação:
 * step 0 → grid fade-in (1s)
 * step 1 → badge pisca 3x (0.6s)
 * step 2 → nome scramble (1.2s) + delay 200ms
 * step 3 → título scramble (0.8s)
 * step 4 → frase typewriter (~25ms/char)
 * step 5 → CTAs + social fade-in (0.4s) — completo
 */

const NOME = "Marcos Ranauro";
const TITULO = "Fullstack Developer";
const FRASE =
  "Crio experiências digitais modernas, performáticas e bem estruturadas — do planejamento ao deploy.";

export function Hero() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  // Se prefers-reduced-motion, pular direto para o estado final
  useEffect(() => {
    if (reduced) setStep(5);
  }, [reduced]);

  // ── Hooks de animação (chamados incondicionalmente) ──────────────────────
  const { display: nameDisplay, done: nameDone } = useTextScramble(
    NOME,
    !reduced && step >= 2,
    1200
  );
  const { display: titleDisplay, done: titleDone } = useTextScramble(
    TITULO,
    !reduced && step >= 3,
    800
  );
  const { display: phraseDisplay, done: phraseDone } = useTypewriter(
    FRASE,
    !reduced && step >= 4,
    25
  );

  // ── Avanço de etapas ────────────────────────────────────────────────────
  useEffect(() => {
    if (step === 2 && nameDone) {
      const t = setTimeout(() => setStep(3), 200);
      return () => clearTimeout(t);
    }
  }, [step, nameDone]);

  useEffect(() => {
    if (step === 3 && titleDone) setStep(4);
  }, [step, titleDone]);

  useEffect(() => {
    if (step === 4 && phraseDone) setStep(5);
  }, [step, phraseDone]);

  // ── Texto a exibir ──────────────────────────────────────────────────────
  const nameText = reduced
    ? NOME
    : step === 2
    ? nameDisplay
    : step > 2
    ? NOME
    : "";

  const titleText = reduced
    ? TITULO
    : step === 3
    ? titleDisplay
    : step > 3
    ? TITULO
    : "";

  const phraseText = reduced ? FRASE : step >= 4 ? phraseDisplay : "";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 pt-16 text-center"
    >
      {/* Grid — fade-in separado para simular "ambiente inicializando" */}
      <motion.div
        className="hero-grid pointer-events-none absolute inset-0"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (step === 0 && !reduced) setStep(1);
        }}
      />

      {/* Glow radial centralizado */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[640px] w-[640px] rounded-full bg-accent-blue opacity-[0.06] blur-[120px]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">

        {/* Badge de status — pisca 3x ao aparecer */}
        <motion.div
          className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-1.5 text-sm text-muted"
          initial={reduced ? false : { opacity: 0 }}
          animate={
            reduced
              ? undefined
              : step >= 1
              ? { opacity: [0, 1, 0, 1, 0, 1] }
              : { opacity: 0 }
          }
          transition={{ duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          onAnimationComplete={() => {
            if (step === 1 && !reduced) setStep(2);
          }}
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Disponível para projetos
        </motion.div>

        {/* Nome — text scramble */}
        <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          {nameText || <>&nbsp;</>}
        </h1>

        {/* Título — text scramble */}
        <p className="min-h-[1.75rem] text-base font-medium uppercase tracking-[0.3em] text-accent-blue md:text-lg">
          {titleText}
        </p>

        {/* Frase — typewriter */}
        <p className="max-w-xl text-base leading-relaxed text-muted md:max-w-2xl md:text-lg">
          {phraseText}
          {step === 4 && (
            <span className="ml-0.5 animate-pulse text-accent-blue">|</span>
          )}
        </p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 5 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-accent-blue hover:text-accent-blue"
          >
            Entrar em contato
          </a>
        </motion.div>

        {/* Links sociais */}
        <motion.div
          className="flex items-center gap-6 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 5 ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <a
            href="https://github.com/MarcosRanauro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-subtle transition-colors hover:text-foreground"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <span className="h-4 w-px bg-border" />

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-subtle transition-colors hover:text-foreground"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
