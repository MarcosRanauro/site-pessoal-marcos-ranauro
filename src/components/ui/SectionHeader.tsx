import type { ReactNode } from "react";

interface SectionHeaderProps {
  numero: string;
  label: string;
  titulo: ReactNode;
  subtitulo?: ReactNode;
  className?: string;
}

export function SectionHeader({
  numero,
  label,
  titulo,
  subtitulo,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="type-section-eyebrow mb-4">
        {numero} / {label}
      </p>
      <h2 className="font-heading text-section-title font-bold tracking-tight text-foreground">
        {titulo}
      </h2>
      {subtitulo && (
        <div className="mt-6 text-base leading-relaxed text-muted">{subtitulo}</div>
      )}
    </div>
  );
}
