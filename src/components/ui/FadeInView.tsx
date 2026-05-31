"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInView({ children, delay = 0, className }: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
