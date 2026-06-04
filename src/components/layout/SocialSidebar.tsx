"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { cn, focusRing } from "@/lib/utils";
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

const SECTION_IDS = NAV.map((s) => s.id);

export function SocialSidebar() {
  const reduced = useReducedMotion();
  const activeId = useScrollSpy(SECTION_IDS);

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Scroll progress 0→1 para preencher o trilho
  const scrollProgress = useMotionValue(0);

  // Posição Y da bolinha (px a partir do topo do container do nav)
  const dotY = useMotionValue(0);
  const dotYSpring = useSpring(dotY, { stiffness: 280, damping: 28, mass: 0.7 });
  const effectiveDotY = reduced ? dotY : dotYSpring;

  // Rastreia progresso de scroll via rAF
  useEffect(() => {
    let rafId: number | null = null;
    function update() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.set(maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0);
      rafId = null;
    }
    function schedule() {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", schedule, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [scrollProgress]);

  // Atualiza posição da bolinha quando a seção ativa muda
  const updateDot = useCallback(() => {
    const idx = NAV.findIndex((s) => s.id === activeId);
    if (idx === -1 || !navRef.current) return;
    const item = itemRefs.current[idx];
    if (!item) return;
    const containerTop = navRef.current.getBoundingClientRect().top;
    const { top, height } = item.getBoundingClientRect();
    dotY.set(top + height / 2 - containerTop);
  }, [activeId, dotY]);

  useEffect(() => { updateDot(); }, [updateDot]);

  useEffect(() => {
    window.addEventListener("resize", updateDot, { passive: true });
    return () => window.removeEventListener("resize", updateDot);
  }, [updateDot]);

  return (
    <aside
      aria-label="Navegação lateral"
      className="fixed bottom-0 right-0 top-0 z-30 hidden w-14 flex-col items-end lg:flex xl:w-44"
    >
      {/* ── Grupo social — topo ─────────────────────────────────────────── */}
      <div className="flex w-14 flex-col items-center pt-20">
        <motion.div
          className="w-px bg-border"
          style={{ height: "56px", transformOrigin: "top" }}
          initial={reduced ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="flex flex-col items-center gap-3 py-6">
          <motion.a
            href="https://github.com/MarcosRanauro"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent [writing-mode:vertical-rl]",
              focusRing,
            )}
            initial={reduced ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            whileHover={
              reduced ? undefined : { x: -4, transition: { type: "spring", stiffness: 400, damping: 30 } }
            }
          >
            GitHub
          </motion.a>

          <span aria-hidden="true" className="h-3 w-px bg-border" />

          <motion.a
            href="https://www.linkedin.com/in/marcosranauro/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent [writing-mode:vertical-rl]",
              focusRing,
            )}
            initial={reduced ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            whileHover={
              reduced ? undefined : { x: -4, transition: { type: "spring", stiffness: 400, damping: 30 } }
            }
          >
            LinkedIn
          </motion.a>
        </div>

        <motion.div
          className="w-px bg-border"
          style={{ height: "28px", transformOrigin: "top" }}
          initial={reduced ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ── Nav de seções — apenas xl+ ──────────────────────────────────── */}
      <nav
        aria-label="Seções da página"
        className="hidden xl:flex w-full flex-1 flex-col justify-center px-4 pb-10 pt-4"
      >
        {/* Container relativo: trilho absoluto + itens */}
        <div ref={navRef} className="relative flex w-full flex-col items-end gap-0.5">

          {/* Trilho vertical — à esquerda dos labels */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-px overflow-visible"
          >
            {/* Fundo do trilho (cinza muito sutil) */}
            <div className="absolute inset-0 bg-border/60" />

            {/* Preenchimento de progresso (foreground sutil — NÃO lime) */}
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top"
              style={{
                scaleY: scrollProgress,
                backgroundColor: "rgba(250,250,250,0.18)",
              }}
            />

            {/* Bolinha lime — desliza sobre o trilho na seção ativa */}
            <motion.div
              className="absolute left-1/2 h-2.5 w-2.5 rounded-full bg-accent"
              style={{
                top: effectiveDotY,
                x: "-50%",
                y: "-50%",
                boxShadow: "0 0 6px 1px rgba(198,255,0,0.22)",
              }}
              animate={{ opacity: activeId !== null ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            />
          </div>

          {/* Links de seção — pl-4 abre espaço para o trilho */}
          {NAV.map((section, i) => {
            const isActive = activeId === section.id;
            return (
              <motion.a
                key={section.id}
                ref={(el) => { itemRefs.current[i] = el; }}
                href={`#${section.id}`}
                className={cn(
                  "group/nav flex w-full items-center justify-end py-1.5 pl-4",
                  focusRing,
                )}
                initial={reduced ? false : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.07, ease: "easeOut" }}
              >
                <span
                  className={cn(
                    "font-mono text-[9px] uppercase tracking-[0.15em] transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted group-hover/nav:text-foreground",
                  )}
                >
                  {section.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </nav>

      {/* Linha inferior — lg sem xl (sidebar estreita sem nav) */}
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
