interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#"
      aria-label="Marcos Ranauro — voltar ao topo"
      className="inline-block text-foreground"
    >
      <svg
        viewBox="0 0 172 116"
        width="172"
        height="116"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Marcos Ranauro"
        className={className ?? "h-9 w-auto"}
      >
        <g
          stroke="currentColor"
          strokeWidth="9"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        >
          {/* M: sobe, vale, sobe, desce — haste direita compartilhada com R */}
          <path d="M 20 96 L 20 20 L 52 70 L 84 20 L 84 96" />
          {/* R: bojo arredondado a partir do tronco compartilhado */}
          <path d="M 84 20 L 112 20 Q 136 20 136 44 Q 136 66 112 66 L 90 66" />
          {/* R: perna diagonal */}
          <path d="M 110 66 L 140 96" />
        </g>
        {/* Ponto lime que respira */}
        <circle cx="150" cy="96" r="5.5" fill="var(--color-accent)" className="logo-dot" />
      </svg>
    </a>
  );
}
