import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { projetos, type Projeto, type StatusProjeto } from "@/data/projetos";
import { cn } from "@/lib/utils";

function IconeGithub() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconeLink() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function BadgeStatus({ status }: { status: StatusProjeto }) {
  const ativo = status === "No ar";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        ativo
          ? "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan"
          : "border-yellow-400/30 bg-yellow-400/10 text-yellow-400"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          ativo ? "bg-accent-cyan" : "bg-yellow-400"
        )}
      />
      {status}
    </span>
  );
}

function ProjetoCard({ projeto }: { projeto: Projeto }) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border bg-card p-6 transition-all duration-200 hover:border-accent-blue hover:shadow-lg",
        projeto.destaque ? "border-accent-blue/30" : "border-border"
      )}
    >
      {/* Topo: status + destaque */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <BadgeStatus status={projeto.status} />
        {projeto.destaque && (
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-2.5 py-0.5 text-xs text-accent-purple">
            Destaque
          </span>
        )}
      </div>

      {/* Título */}
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {projeto.titulo}
      </h3>

      {/* Descrição */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
        {projeto.descricao}
      </p>

      {/* Chips de stack */}
      <div className="mb-5 flex flex-wrap gap-2">
        {projeto.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background px-3 py-0.5 text-xs text-subtle"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Separador */}
      <div className="mb-4 h-px bg-border" />

      {/* Links */}
      <div className="flex items-center gap-5">
        <a
          href={projeto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <IconeGithub />
          Ver código
        </a>
        <a
          href={projeto.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <IconeLink />
          Ver projeto
        </a>
      </div>
    </article>
  );
}

export function Projetos() {
  return (
    <Section id="projetos" className="bg-background-alt">
      <Container>
        <h2 className="mb-12 border-l-2 border-accent-blue pl-4 text-3xl font-bold text-foreground md:text-4xl">
          Projetos
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projetos.map((projeto) => (
            <ProjetoCard key={projeto.titulo} projeto={projeto} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
