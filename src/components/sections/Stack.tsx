import { FadeInView } from "@/components/ui/FadeInView";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackGroups } from "@/data/stack";

export function Stack() {
  return (
    <Section id="stack" className="bg-background">

        <FadeInView className="mb-16 lg:mb-20">
          <SectionHeader numero="02" label="Stack" titulo="Stack Técnica" />
        </FadeInView>

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
                <p className="type-label mb-6 tracking-[0.3em]">
                  {group.group}
                </p>

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

    </Section>
  );
}
