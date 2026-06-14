import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  containerClassName?: string;
  /** Elementos absolutos/fora do fluxo (ex.: glow decorativo) */
  adornment?: ReactNode;
  children: ReactNode;
}

export function Section({
  id,
  className,
  containerClassName,
  adornment,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--space-section)] lg:py-[var(--space-section-lg)]",
        className,
      )}
    >
      {adornment}
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 sm:px-10 lg:px-16",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
