"use client";
import { useState, useEffect, useRef } from "react";

export function useTypewriter(text: string, started: boolean, speed = 25) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!started || hasStarted.current) return;
    hasStarted.current = true;

    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [started, text, speed]);

  return { display, done };
}
