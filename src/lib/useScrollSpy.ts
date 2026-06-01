"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    function findActive(): string | null {
      // Fim da página: última seção sempre vence, independente da linha de leitura.
      // Necessário porque seções curtas no final nunca cruzam a linha antes do
      // scroll chegar ao máximo.
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= pageHeight - 2 && ids.length > 0) {
        return ids[ids.length - 1];
      }

      // Linha de leitura em 38% da altura do viewport — zona onde o olhar
      // naturalmente processa o conteúdo principal, acima do centro geométrico.
      const readingLine = window.innerHeight * 0.38;
      let fallback: string | null = null;

      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();

        // Contenção: a seção que inclui a linha de leitura é a ativa.
        // Funciona para qualquer altura — curta (Stack) ou alta (Projetos).
        if (top <= readingLine && bottom > readingLine) {
          return ids[i];
        }

        // Fallback: mantém a última seção cujo topo já cruzou a linha.
        // Evita "nada ativo" em gaps entre seções ou ao final da página.
        if (top <= readingLine) {
          fallback = ids[i];
        }
      }

      return fallback;
    }

    function scheduleUpdate() {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        setActiveId(findActive());
        rafId.current = null;
      });
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    setActiveId(findActive()); // estado inicial

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [ids]);

  return activeId;
}
