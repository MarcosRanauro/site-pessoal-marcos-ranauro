export function Hero() {
  return (
    <section
      id="hero"
      className="hero-grid relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 pt-16 text-center"
    >
      {/* Glow radial centralizado */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[640px] w-[640px] rounded-full bg-accent-blue opacity-[0.06] blur-[120px]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">

        {/* Badge de status */}
        <div className="animate-fade-in-up animate-delay-0 inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Disponível para projetos
        </div>

        {/* Nome */}
        <h1 className="animate-fade-in-up animate-delay-100 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Marcos Ranauro
        </h1>

        {/* Título profissional */}
        <p className="animate-fade-in-up animate-delay-200 text-base font-medium uppercase tracking-[0.3em] text-accent-blue md:text-lg">
          Fullstack Developer
        </p>

        {/* Frase de posicionamento */}
        <p className="animate-fade-in-up animate-delay-300 max-w-xl text-base leading-relaxed text-muted md:max-w-2xl md:text-lg">
          Crio experiências digitais modernas, performáticas e bem estruturadas
          — do planejamento ao deploy.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animate-delay-400 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#projetos"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-accent-blue hover:text-accent-blue"
          >
            Entrar em contato
          </a>
        </div>

        {/* Links sociais */}
        <div className="animate-fade-in-up animate-delay-500 flex items-center gap-6 pt-2">
          <a
            href="https://github.com/MarcosRanauro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-subtle transition-colors hover:text-foreground"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <span className="h-4 w-px bg-border" />

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-subtle transition-colors hover:text-foreground"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
