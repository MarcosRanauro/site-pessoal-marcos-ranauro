import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  containerClassName?: string;
  /** Elementos decorativos absolutos — contidos em inset-0 overflow-hidden */
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
        "section-spacing",
        adornment ? "relative" : undefined,
        className,
      )}
    >
      {adornment && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          {adornment}
        </div>
      )}
      <div
        className={cn(
          "relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16",
          adornment ? "z-10" : undefined,
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
