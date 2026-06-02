import { FadeInView } from "@/components/ui/FadeInView";
import { stackGroups } from "@/data/stack";

export function Stack() {
  return (
    <section id="stack" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Cabeçalho editorial */}
        <FadeInView className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            02 / Stack
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Stack Técnica
          </h2>
        </FadeInView>

        {/* Grupos tipográficos */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-0">
          {stackGroups.map((group, i) => (
            <FadeInView key={group.group} delay={i * 0.1}>
              <div
                className={
                  i > 0
                    ? "md:border-l md:border-border md:pl-10"
                    : "md:pr-10"
                }
              >
                {/* Label do grupo */}
                <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
                  {group.group}
                </p>

                {/* Tecnologias como lista tipográfica */}
                <ul>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border py-3 font-mono text-base text-muted transition-colors last:border-0 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
}
