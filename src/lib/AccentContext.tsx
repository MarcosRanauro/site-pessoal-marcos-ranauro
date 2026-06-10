"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Accent = "fresh" | "hot";

const ACCENT_COLORS: Record<Accent, string> = {
  fresh: "#C6FF00",
  hot:   "#FF6B35",
};

interface AccentContextValue {
  accent: Accent;
  toggle: () => void;
}

const AccentContext = createContext<AccentContextValue>({
  accent: "fresh",
  toggle: () => {},
});

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<Accent>("fresh");

  const toggle = useCallback(() => {
    setAccent((prev) => {
      const next = prev === "fresh" ? "hot" : "fresh";
      document.documentElement.style.setProperty("--color-accent", ACCENT_COLORS[next]);
      return next;
    });
  }, []);

  return (
    <AccentContext.Provider value={{ accent, toggle }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  return useContext(AccentContext);
}
