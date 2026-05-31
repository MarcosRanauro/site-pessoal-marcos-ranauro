"use client";
import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export function useTextScramble(text: string, started: boolean, duration = 1200) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!started || hasStarted.current) return;
    hasStarted.current = true;

    const len = text.length;
    let raf: number;
    let startTime: number | null = null;

    function tick(timestamp: number) {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const fixedCount = Math.floor(progress * len);

      let result = "";
      for (let i = 0; i < len; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < fixedCount) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplay(result);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        setDone(true);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, text, duration]);

  return { display, done };
}
