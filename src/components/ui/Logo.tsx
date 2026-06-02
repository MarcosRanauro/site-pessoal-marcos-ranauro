export function Logo() {
  return (
    <a
      href="#"
      aria-label="Marcos Ranauro — voltar ao topo"
      className="inline-flex items-baseline"
    >
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        MR
      </span>
      <span
        aria-hidden="true"
        className="animate-blink font-heading text-lg font-bold text-accent"
      >
        _
      </span>
    </a>
  );
}
