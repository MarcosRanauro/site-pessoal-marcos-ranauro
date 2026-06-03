"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const ORIGIN_CX = 150;
const ORIGIN_CY = 96;
const VIEWBOX_W = 172;
const VIEWBOX_H = 116;
const CLAMP = 12; // SVG units — ponto não escapa para fora do monograma

export function FooterMonogram() {
  const reduced = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);
  const [canHover, setCanHover] = useState(false);

  // Motion values para posição do ponto — animam fora do ciclo de render
  const cxVal = useMotionValue(ORIGIN_CX);
  const cyVal = useMotionValue(ORIGIN_CY);
  const springCx = useSpring(cxVal, { stiffness: 80, damping: 18 });
  const springCy = useSpring(cyVal, { stiffness: 80, damping: 18 });

  // Detectar dispositivo com hover real (SSR safe)
  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  // IntersectionObserver — dispara uma vez ao entrar na viewport
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ponto segue o cursor (apenas em dispositivos com hover real)
  useEffect(() => {
    if (!canHover) return;
    const el = svgRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      cxVal.set(
        Math.max(
          CLAMP,
          Math.min(
            VIEWBOX_W - CLAMP,
            (e.clientX - rect.left) * (VIEWBOX_W / rect.width)
          )
        )
      );
      cyVal.set(
        Math.max(
          CLAMP,
          Math.min(
            VIEWBOX_H - CLAMP,
            (e.clientY - rect.top) * (VIEWBOX_H / rect.height)
          )
        )
      );
    };

    const onLeave = () => {
      cxVal.set(ORIGIN_CX);
      cyVal.set(ORIGIN_CY);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [canHover, cxVal, cyVal]);

  const DRAW = 1.4; // duração base do stroke draw em segundos

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 172 116"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Marcos Ranauro"
      className="h-40 w-auto cursor-default text-foreground"
    >
      <g
        stroke="currentColor"
        strokeWidth="9"
        fill="none"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      >
        {/* M — segmento mais longo, inicia o desenho */}
        <motion.path
          d="M 20 96 L 20 20 L 52 70 L 84 20 L 84 96"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={
            reduced ? {} : { duration: DRAW, ease: "easeInOut" }
          }
        />
        {/* R bojo — começa a aparecer enquanto o M está sendo traçado */}
        <motion.path
          d="M 84 20 L 112 20 Q 136 20 136 44 Q 136 66 112 66 L 90 66"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={
            reduced
              ? {}
              : {
                  duration: DRAW * 0.7,
                  delay: DRAW * 0.3,
                  ease: "easeInOut",
                }
          }
        />
        {/* R perna — finaliza o traçado */}
        <motion.path
          d="M 110 66 L 140 96"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={
            reduced
              ? {}
              : {
                  duration: DRAW * 0.3,
                  delay: DRAW * 0.85,
                  ease: "easeInOut",
                }
          }
        />
      </g>

      {/* Ponto lime — toque final: surge depois do traço, depois segue o cursor */}
      <motion.circle
        cx={springCx}
        cy={springCy}
        r={5.5}
        fill="var(--color-accent)"
        initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={
          reduced
            ? {}
            : {
                delay: DRAW + 0.15,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }
        }
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </svg>
  );
}
