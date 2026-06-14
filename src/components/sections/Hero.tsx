"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useTextScramble } from "@/lib/useTextScramble";
import { focusRing } from "@/lib/utils";

const NOME = "Marcos Ranauro";
const LINHA_IMPACTO = "Do zero ao no ar.";
const SUBFRAME =
  "Sites e produtos digitais sob medida — design, código e deploy. Você tem a ideia, eu entrego pronto pro cliente usar.";

const FADE_IN = { duration: 0.5, ease: "easeOut" as const };

export function Hero() {
  const reduced = useReducedMotion();

  const { display: nameDisplay, done: nameDone } = useTextScramble(
    NOME,
    !reduced,
    800,
  );

  const showScrambleOverlay = !reduced && !nameDone;

  const nameParts = NOME.split(" ");
  const nameLine1 = nameParts[0];
  const nameLine2 = nameParts.slice(1).join(" ");

  const scrambleParts = showScrambleOverlay ? nameDisplay.split(" ") : null;
  const scrambleLine1 = scrambleParts?.[0] ?? nameLine1;
  const scrambleLine2 = scrambleParts?.slice(1).join(" ") ?? nameLine2;

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Grid — fade curto, não bloqueia conteúdo */}
      <motion.div
        className="hero-grid pointer-events-none absolute inset-0"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Glow deslocado para o canto superior direito — assimétrico */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-16 pb-10 sm:px-10 lg:pl-28 lg:pr-24 xl:pl-36 xl:pr-24">

        <div className="flex flex-1 flex-col justify-center gap-0 pb-8">

          {/* Metadados — visíveis no SSR, fade curto como enhancement */}
          <motion.p
            className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={FADE_IN}
          >
            Fullstack Developer
            <span className="mx-3 opacity-40">—</span>
            Based in Brazil
            <span className="mx-3 opacity-40">—</span>
            <span className="text-accent">●</span>
            <span className="ml-2">Available 2026</span>
          </motion.p>

          {/* Nome — texto final sempre no DOM; scramble como overlay opcional */}
          <h1
            className="font-heading font-bold leading-[0.90] tracking-tight text-foreground"
            style={{ fontSize: "var(--fs-hero-name)" }}
          >
            <span className="relative block">
              <span>{nameLine1}</span>
              {showScrambleOverlay && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-background"
                >
                  {scrambleLine1}
                </span>
              )}
            </span>
            <span className="relative block">
              <span>{nameLine2}</span>
              {showScrambleOverlay && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-background"
                >
                  {scrambleLine2}
                </span>
              )}
            </span>
          </h1>

          {/* Posicionamento freelance */}
          <div className="mt-8 max-w-lg lg:mt-10">
            <p className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {LINHA_IMPACTO}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {SUBFRAME}
            </p>
          </div>

          {/* CTAs — fade-in imediato, sem gate temporal */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-8 lg:mt-12"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={FADE_IN}
          >
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

            <a
              href="#contato"
              className={`font-medium text-subtle transition-colors hover:text-foreground ${focusRing}`}
            >
              Entrar em contato
            </a>
          </motion.div>

          {/* Social links — mobile/tablet */}
          <motion.div
            className="mt-8 flex items-center gap-5 lg:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...FADE_IN, delay: 0.1 }}
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

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-start gap-2.5"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...FADE_IN, delay: 0.15 }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-border">
            <motion.div
              className="absolute inset-x-0 top-0 bg-accent"
              style={{ height: "100%" }}
              animate={
                reduced
                  ? { scaleY: 1, originY: "top" }
                  : { scaleY: [0, 1, 0], originY: "top" }
              }
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }
              }
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
