"use client";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTextScramble } from "@/lib/useTextScramble";
import { useTypewriter } from "@/lib/useTypewriter";
import { focusRing } from "@/lib/utils";

/*
 * Sequência de montagem:
 * 0 → grid fade-in (1s)
 * 1 → linha de metadados fade-in (0.5s)
 * 2 → nome scramble (1.2s) + 200ms gap
 * 3 → role scramble (0.8s)
 * 4 → frase typewriter (~25ms/char)
 * 5 → CTAs, sidebar, scroll indicator fade-in
 */

const NOME = "Marcos Ranauro";
const TITULO = "Fullstack Developer";
const FRASE =
  "Crio experiências digitais modernas, performáticas e bem estruturadas — do planejamento ao deploy.";

export function Hero() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) setStep(5);
  }, [reduced]);

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

  // Textos finais a exibir
  const nameText = reduced ? NOME : step === 2 ? nameDisplay : step > 2 ? NOME : "";
  const titleText = reduced ? TITULO : step === 3 ? titleDisplay : step > 3 ? TITULO : "";
  const phraseText = reduced ? FRASE : step >= 4 ? phraseDisplay : "";

  // Nome quebrado em duas linhas
  const nameParts = nameText.split(" ");
  const nameLine1 = nameParts[0] || " ";
  const nameLine2 = nameParts.slice(1).join(" ") || " ";

  const showFinal = step >= 5 || !!reduced;

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Grid — aparece primeiro, inicializa o "ambiente" */}
      <motion.div
        className="hero-grid pointer-events-none absolute inset-0"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (step === 0 && !reduced) setStep(1);
        }}
      />

      {/* Glow deslocado para o canto superior direito — assimétrico */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent opacity-[0.04] blur-[120px]" />

      {/* ── Área de conteúdo principal ────────────────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-16 pb-10 sm:px-10 lg:pl-28 lg:pr-16 xl:pl-36 xl:pr-24">

        {/* Conteúdo vertical centralizado */}
        <div className="flex flex-1 flex-col justify-center gap-0 pb-8">

          {/* Linha de metadados */}
          <motion.p
            className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={step >= 1 || reduced ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => {
              if (step === 1 && !reduced) setStep(2);
            }}
          >
            Fullstack Developer
            <span className="mx-3 opacity-40">—</span>
            Based in Brazil
            <span className="mx-3 opacity-40">—</span>
            <span className="text-accent">●</span>
            <span className="ml-2">Available 2026</span>
          </motion.p>

          {/* Nome — duas linhas, escala dramática */}
          <h1
            className="font-heading font-bold leading-[0.90] tracking-tight text-foreground"
            style={{ fontSize: "var(--fs-hero-name)" }}
          >
            <span className="block">{nameLine1}</span>
            <span className="block">{nameLine2}</span>
          </h1>

          {/* Role + frase */}
          <div className="mt-8 max-w-lg lg:mt-10">
            <p className="min-h-[1.5em] font-mono text-sm uppercase tracking-[0.15em] text-muted">
              {titleText}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {phraseText}
              {step === 4 && (
                <span className="ml-0.5 animate-pulse text-accent">|</span>
              )}
            </p>
          </div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-8 lg:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: showFinal ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Primário — underline lime no hover */}
            <a
              href="#projetos"
              className={`group inline-flex items-center gap-2 font-medium text-foreground ${focusRing}`}
            >
              <span className="relative">
                Ver projetos
                <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full" />
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="text-accent transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>

            {/* Secundário */}
            <a
              href="#contato"
              className={`font-medium text-subtle transition-colors hover:text-foreground ${focusRing}`}
            >
              Entrar em contato
            </a>
          </motion.div>

          {/* Social links — mobile/tablet (horizontal, abaixo dos CTAs) */}
          <motion.div
            className="mt-8 flex items-center gap-5 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: showFinal ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://github.com/MarcosRanauro"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent ${focusRing}`}
            >
              GitHub
            </a>
            <span className="h-3 w-px bg-border" />
            <a
              href="https://www.linkedin.com/in/marcosranauro/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent ${focusRing}`}
            >
              LinkedIn
            </a>
          </motion.div>

        </div>

        {/* ── Indicador de scroll — ancorado ao rodapé do Hero ──────────── */}
        <motion.div
          className="flex flex-col items-start gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: showFinal ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-border">
            <motion.div
              className="absolute inset-x-0 top-0 bg-accent"
              animate={
                showFinal
                  ? { scaleY: [0, 1, 0], originY: "top" }
                  : { scaleY: 0 }
              }
              style={{ height: "100%" }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
