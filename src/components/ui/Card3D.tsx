"use client";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useTransform(rawY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(rawX, [-0.5, 0.5], [-6, 6]);

  const springRotateX = useSpring(rotateX, { stiffness: 140, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 140, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        className={className}
        style={reduced ? {} : { rotateX: springRotateX, rotateY: springRotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </motion.div>
    </div>
  );
}
