"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SocialSidebar() {
  const reduced = useReducedMotion();

  return (
    <aside
      aria-label="Links sociais"
      className="fixed bottom-0 right-0 top-0 z-30 hidden w-14 flex-col items-center lg:flex xl:w-16"
    >
      {/* Linha superior — se desenha de cima para baixo */}
      <motion.div
        className="mt-20 w-px flex-1 bg-border"
        style={{ transformOrigin: "top" }}
        initial={reduced ? false : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Links */}
      <div className="flex flex-col items-center gap-3 py-8">
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

      {/* Linha inferior — se desenha de cima para baixo */}
      <motion.div
        className="mb-10 w-px flex-1 bg-border"
        style={{ transformOrigin: "top" }}
        initial={reduced ? false : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </aside>
  );
}
