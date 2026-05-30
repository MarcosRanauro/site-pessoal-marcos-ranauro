import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { stackGroups } from "@/data/stack";

export function Stack() {
  return (
    <Section id="stack" className="bg-background">
      <Container>

        {/* Título */}
        <h2 className="mb-12 border-l-2 border-accent-blue pl-4 text-3xl font-bold text-foreground md:text-4xl">
          Stack técnica
        </h2>

        {/* Grupos */}
        <div className="grid gap-10 md:grid-cols-3">
          {stackGroups.map((group) => (
            <div key={group.group}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent-blue hover:text-accent-blue"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
