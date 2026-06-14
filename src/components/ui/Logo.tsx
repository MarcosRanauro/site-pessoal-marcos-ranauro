import { focusRing } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#hero"
      aria-label="Marcos Ranauro — voltar ao topo"
      className={`inline-block text-foreground rounded-sm ${focusRing}`}
    >
      <svg
        viewBox="0 0 172 116"
        width="172"
        height="116"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className ?? "h-9 w-auto"}
      >
        <g
          stroke="currentColor"
          strokeWidth="9"
          fill="none"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        >
          <path d="M 20 96 L 20 20 L 52 70 L 84 20 L 84 96" />
          <path d="M 84 20 L 112 20 Q 136 20 136 44 Q 136 66 112 66 L 90 66" />
          <path d="M 110 66 L 140 96" />
        </g>
        <circle cx="150" cy="96" r="5.5" fill="var(--color-accent)" className="logo-dot" />
      </svg>
    </a>
  );
}
