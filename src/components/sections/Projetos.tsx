import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projetos, type Projeto, type StatusProjeto } from "@/data/projetos";
import { cn, focusRing } from "@/lib/utils";

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

const STATUS_LABEL: Record<StatusProjeto, string> = {
  producao: "Em produção",
  desenvolvimento: "Em desenvolvimento",
};

function CaseBlock({
  label,
  children,
  variant = "default",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "default" | "resultado";
}) {
  return (
    <div className={variant === "resultado" ? "mt-1" : undefined}>
      <p className="type-label mb-2 tracking-[0.25em]">{label}</p>
      {children}
    </div>
  );
}

function ProjetoImagem({
  projeto,
  isProducao,
}: {
  projeto: Projeto;
  isProducao: boolean;
}) {
  const hoverReveal =
    "[@media(hover:hover)_and_(pointer:fine)]:[filter:brightness(0.2)_grayscale(0.45)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:[filter:brightness(1)_grayscale(0)] group-hover:scale-[1.02]";

  if (!projeto.imagem) {
    return (
      <div
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center bg-surface",
          !isProducao && "opacity-90",
        )}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(250,250,250,0.03)_100%)]" />
        <span className="select-none font-heading text-3xl font-bold tracking-tight text-foreground/10 sm:text-4xl">
          {projeto.titulo}
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10]">
      <Image
        src={projeto.imagem}
        alt={`Screenshot do projeto ${projeto.titulo}`}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className={cn(
          "object-cover object-top transition-all duration-[600ms] ease-out",
          isProducao
            ? hoverReveal
            : "brightness-[0.88] grayscale-[0.12] saturate-[0.85]",
        )}
      />
    </div>
  );
}

function ProjetoBloco({ projeto, index }: { projeto: Projeto; index: number }) {
  const numero = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;
  const isProducao = projeto.status === "producao";

  return (
    <FadeInView>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start lg:gap-16 xl:gap-20">

        <div
          className={cn(
            "group relative overflow-hidden rounded-sm border border-border lg:col-span-3",
            isEven ? "lg:order-1" : "lg:order-2",
            !isProducao && "border-border/80",
          )}
        >
          <ProjetoImagem projeto={projeto} isProducao={isProducao} />
        </div>

        <div
          className={cn(
            "flex flex-col lg:col-span-2",
            isEven ? "lg:order-2" : "lg:order-1",
          )}
        >
          <span
            aria-hidden="true"
            className="mb-1 select-none font-mono font-bold leading-none text-foreground opacity-[0.06] text-[clamp(4rem,8vw,6rem)]"
          >
            {numero}
          </span>

          <div className="mb-3 flex items-center gap-2">
            {isProducao && (
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
            )}
            <span
              className={cn(
                "type-label tracking-[0.2em]",
                !isProducao && "text-muted-foreground",
              )}
            >
              {STATUS_LABEL[projeto.status]}
            </span>
          </div>

          <p className="type-label mb-4 tracking-[0.2em]">
            {projeto.contexto}
          </p>

          <h3 className="mb-8 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground lg:text-4xl">
            {projeto.titulo}
          </h3>

          <div className="flex flex-col gap-6 sm:gap-7">
            <CaseBlock label="Problema">
              <p className="text-sm leading-relaxed text-muted">
                {projeto.problema}
              </p>
            </CaseBlock>

            <CaseBlock label="Papel">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {projeto.papel}
              </p>
            </CaseBlock>

            <CaseBlock label="Resultado" variant="resultado">
              <p className="text-base font-medium leading-relaxed text-foreground">
                {projeto.resultado}
              </p>
            </CaseBlock>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {projeto.stack.map((item) => (
              <span
                key={item}
                className="type-label rounded-sm border border-border px-2.5 py-1 tracking-[0.12em]"
              >
                {item}
              </span>
            ))}
          </div>

          {(projeto.url || projeto.github) && (
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {projeto.url && (
                <a
                  href={projeto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group/link type-label inline-flex items-center gap-2 tracking-[0.15em] transition-colors hover:text-foreground",
                    focusRing,
                  )}
                >
                  <span className="relative">
                    {projeto.urlLabel ?? "Ver projeto"}
                    <span className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover/link:w-full" />
                  </span>
                  <span className="transition-colors group-hover/link:text-accent">
                    <ArrowSm />
                  </span>
                </a>
              )}

              {projeto.github && (
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group/link type-label inline-flex items-center gap-2 tracking-[0.15em] transition-colors hover:text-foreground",
                    focusRing,
                  )}
                >
                  Ver código
                  <span className="transition-colors group-hover/link:text-accent">
                    <ArrowSm />
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </FadeInView>
  );
}

export function Projetos() {
  return (
    <Section id="projetos" className="bg-background">

      <FadeInView className="mb-20 lg:mb-32">
        <SectionHeader
          numero="03"
          label="Projetos"
          titulo={
            <>
              Trabalhos<br className="hidden sm:block" />
              {" "}Selecionados
            </>
          }
        />
      </FadeInView>

      <div className="flex flex-col gap-24 lg:gap-40">
        {projetos.map((projeto, i) => (
          <ProjetoBloco key={projeto.titulo} projeto={projeto} index={i} />
        ))}
      </div>

    </Section>
  );
}
