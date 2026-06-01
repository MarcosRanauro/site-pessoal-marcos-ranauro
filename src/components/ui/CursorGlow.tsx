"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!canHover.matches) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) return;

    const el = glowRef.current;
    if (!el) return;

    el.style.opacity = "1";

    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
        }
        rafRef.current = null;
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 500,
        height: 500,
        marginTop: -250,
        marginLeft: -250,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(198,255,0,0.07) 0%, rgba(198,255,0,0.03) 40%, transparent 70%)",
        transform: "translate(-1000px, -1000px)",
        pointerEvents: "none",
        zIndex: 1,
        mixBlendMode: "screen",
        willChange: "transform",
        opacity: 0,
      }}
    />
  );
}
