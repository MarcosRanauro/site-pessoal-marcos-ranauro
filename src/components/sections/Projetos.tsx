import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { projetos, type Projeto } from "@/data/projetos";

function ArrowSm() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" />
    </svg>
  );
}

function ProjetoBloco({ projeto, index }: { projeto: Projeto; index: number }) {
  const numero = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;
  const isPublicado = projeto.status === "Publicado" || projeto.status === "No ar";

  return (
    <FadeInView>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center lg:gap-16 xl:gap-20">

        {/* Imagem — protagonista */}
        <div
          className={`group relative overflow-hidden rounded-sm border border-border lg:col-span-3 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={projeto.imagem}
              alt={`Screenshot do projeto ${projeto.titulo}`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top transition-all duration-[600ms] ease-out [@media(hover:hover)_and_(pointer:fine)]:[filter:brightness(0.2)_grayscale(0.45)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:[filter:brightness(1)_grayscale(0)] group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div
          className={`flex flex-col lg:col-span-2 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Número — watermark editorial */}
          <span
            aria-hidden="true"
            className="mb-1 select-none font-mono font-bold leading-none text-foreground opacity-[0.06] text-[clamp(4rem,8vw,6rem)]"
          >
            {numero}
          </span>

          {/* Status */}
          <div className="mb-3 flex items-center gap-2">
            {isPublicado && (
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
            )}
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
              {projeto.status}
            </span>
          </div>

          {/* Contexto / cliente */}
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {projeto.contexto}
          </p>

          {/* Título */}
          <h3 className="mb-4 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground lg:text-4xl">
            {projeto.titulo}
          </h3>

          {/* Descrição */}
          <p className="mb-6 text-sm leading-relaxed text-muted">
            {projeto.descricao}
          </p>

          {/* Stack — labels editoriais */}
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle">
            {projeto.stack.join(" · ")}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={projeto.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              <span className="relative">
                Ver projeto
                <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover/link:w-full" />
              </span>
              <span className="transition-colors group-hover/link:text-accent">
                <ArrowSm />
              </span>
            </a>

            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle transition-colors hover:text-muted"
            >
              Ver código
              <span className="transition-colors group-hover/link:text-accent">
                <ArrowSm />
              </span>
            </a>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

export function Projetos() {
  return (
    <section id="projetos" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Cabeçalho editorial */}
        <FadeInView className="mb-20 lg:mb-32">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle">
            02 / Projetos
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Trabalhos<br className="hidden sm:block" />
            {" "}Selecionados
          </h2>
        </FadeInView>

        {/* Blocos de projeto com espaçamento generoso */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {projetos.map((projeto, i) => (
            <ProjetoBloco key={projeto.titulo} projeto={projeto} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
