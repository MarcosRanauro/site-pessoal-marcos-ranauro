"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const reduced = useReducedMotion();

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 40 });
  const ringX = useSpring(mouseX, { stiffness: 160, damping: 26 });
  const ringY = useSpring(mouseY, { stiffness: 160, damping: 26 });

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    setMounted(true);

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    function onOver(e: MouseEvent) {
      setIsHovering(!!(e.target as HTMLElement).closest("a, button"));
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted || reduced) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-accent"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: isHovering ? 8 : 12, height: isHovering ? 8 : 12, opacity: isHovering ? 0.6 : 0.9 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-accent"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", opacity: 0.2 }}
        animate={{ width: isHovering ? 52 : 36, height: isHovering ? 52 : 36 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
