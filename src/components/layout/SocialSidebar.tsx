"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/lib/useScrollSpy";

const NAV = [
  { id: "sobre",        label: "Sobre" },
  { id: "stack",        label: "Stack" },
  { id: "projetos",     label: "Projetos" },
  { id: "servicos",     label: "Serviços" },
  { id: "processo",     label: "Processo" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "contato",      label: "Contato" },
] as const;

// Referência estável — não recriada a cada render
const SECTION_IDS = NAV.map((s) => s.id);

export function SocialSidebar() {
  const reduced = useReducedMotion();
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <aside
      aria-label="Navegação lateral"
      className="fixed bottom-0 right-0 top-0 z-30 hidden w-14 flex-col items-end lg:flex xl:w-44"
    >
      {/* ── Grupo social — topo, texto vertical ─────────────────────── */}
      <div className="flex w-14 flex-col items-center pt-20">

        {/* Linha decorativa acima dos links */}
        <motion.div
          className="w-px bg-border"
          style={{ height: "56px", transformOrigin: "top" }}
          initial={reduced ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Links sociais verticais */}
        <div className="flex flex-col items-center gap-3 py-6">
          <motion.a
            href="https://github.com/MarcosRanauro"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-accent [writing-mode:vertical-rl]"
            initial={reduced ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            whileHover={
              reduced
                ? undefined
                : { x: -4, transition: { type: "spring", stiffness: 400, damping: 30 } }
            }
          >
            GitHub
          </motion.a>

          <span aria-hidden="true" className="h-3 w-px bg-border" />

          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-accent [writing-mode:vertical-rl]"
            initial={reduced ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            whileHover={
              reduced
                ? undefined
                : { x: -4, transition: { type: "spring", stiffness: 400, damping: 30 } }
            }
          >
            LinkedIn
          </motion.a>
        </div>

        {/* Linha curta abaixo do social */}
        <motion.div
          className="w-px bg-border"
          style={{ height: "28px", transformOrigin: "top" }}
          initial={reduced ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ── Nav de seções — apenas xl+ (≥1280px) ────────────────────── */}
      <nav
        aria-label="Seções da página"
        className="hidden xl:flex w-full flex-1 flex-col items-end justify-center gap-0.5 px-4 pb-10 pt-4"
      >
        {NAV.map((section, i) => {
          const isActive = activeId === section.id;
          return (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className="group/nav flex items-center gap-2 py-1.5"
              initial={reduced ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.65 + i * 0.07, ease: "easeOut" }}
            >
              <span
                className={cn(
                  "font-mono text-[9px] uppercase tracking-[0.15em] transition-colors duration-300",
                  isActive
                    ? "text-foreground"
                    : "text-subtle group-hover/nav:text-muted-foreground"
                )}
              >
                {section.label}
              </span>
              {/* Traço — estende e vira lime na seção ativa */}
              <div
                className={cn(
                  "h-px flex-shrink-0 transition-all duration-300 ease-out",
                  isActive
                    ? "w-12 bg-accent"
                    : "w-6 bg-border group-hover/nav:w-8"
                )}
              />
            </motion.a>
          );
        })}
      </nav>

      {/* Linha inferior — só visível em lg sem xl (sidebar estreita sem nav) */}
      <motion.div
        className="mb-10 w-px flex-1 bg-border xl:hidden"
        style={{ transformOrigin: "top" }}
        initial={reduced ? false : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </aside>
  );
}
