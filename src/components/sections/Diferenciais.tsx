import { FadeInView } from "@/components/ui/FadeInView";

const diferenciais = [
  {
    titulo: "Código que dura",
    descricao:
      "Entrego código organizado, tipado e documentado. Não apenas funcional, mas sustentável.",
  },
  {
    titulo: "Comunicação direta",
    descricao:
      "Sem enrolação. Atualizações claras, prazos realistas e transparência em cada etapa.",
  },
  {
    titulo: "Visão de produto",
    descricao:
      "Penso além do código. Considero UX, fluxo e impacto real antes de implementar.",
  },
  {
    titulo: "Stack moderna",
    descricao:
      "Trabalho com as ferramentas certas para cada contexto, sem apego desnecessário a tecnologias ultrapassadas.",
  },
];

// Separadores em cruz formando a grade 2×2:
// item 0 (top-left):    border-b + border-r no desktop
// item 1 (top-right):   border-b
// item 2 (bottom-left): border-b no mobile; border-r no desktop, sem border-b
// item 3 (bottom-right): sem bordas
function gridBorderClass(index: number): string {
  switch (index) {
    case 0: return "border-b border-border md:border-r";
    case 1: return "border-b border-border";
    case 2: return "border-b border-border md:border-b-0 md:border-r";
    default: return "";
  }
}

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Cabeçalho editorial */}
        <FadeInView className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            06 / Diferenciais
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Por que trabalhar
            <br className="hidden sm:block" /> comigo
          </h2>
        </FadeInView>

        {/* Grade 2×2 com separadores editoriais em cruz */}
        <div className="grid md:grid-cols-2">
          {diferenciais.map((item, i) => (
            <FadeInView
              key={item.titulo}
              delay={i * 0.1}
              className={gridBorderClass(i)}
            >
              <div
                className={[
                  "py-10 md:py-12",
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12",
                ].join(" ")}
              >
                <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
                  0{i + 1}
                </p>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.descricao}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
