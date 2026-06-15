# CONTEXT.md — Site Pessoal Marcos Ranauro

Estado atual do projeto. Decisões em `DECISOES.md`. Escopo em `/docs`.

## 1. Estado atual

| Item | Valor |
|------|-------|
| Status | V1 em produção — polish final aplicado |
| Branch ativa | `feat/polish-real` |
| Deploy | [marcosranauro.com.br](https://marcosranauro.com.br) — Vercel |
| Build | Passando (`npm run build`) |
| Lint | 0 erros (`npm run lint`) |

Site one-page estático. Conteúdo em `src/data/`. Sem backend, banco ou env vars obrigatórias.

## 2. O que está funcionando

**Layout:** `Header` (hamburger 44×44px) · `Footer` · `SocialSidebar` (`lg:w-44`, nav `lg+`) · skip link · `navigation.ts` · body `lg:pr-44`

**UI / design system executado:** `Section` · `SectionHeader` · `EditorialImage` · `.type-label` · `.type-section-eyebrow` · `.text-section-title` · tokens `--space-section`, `--fs-section-title-*`, `--fs-label`

**Projetos (Etapa 2):** 3 cases — Outfit AI, Site Monique Ranauro (`producao`), Advoc.AI (`desenvolvimento`, `/projeto-advoc-ai.webp`, sem links)

**Seções:** todas migradas para `Section` + `SectionHeader` (exceto Hero)

**A11y:** skip link → `#conteudo` · micro-labels ≥11px em muted (#A1A1A1) · Logo `href="#hero"` · JSON-LD Person + WebSite

**SEO / infra:** metadata · OG/Twitter · `sitemap.ts` · `robots.ts` · `JsonLd` · security headers

## 3. Stack

Next.js 16.2.6 · React 19 · TypeScript strict · Tailwind CSS v4 · Framer Motion 12 · Vercel

## 4. Estrutura de pastas

```
src/
  app/          layout, page, globals.css, sitemap, robots
  components/
    layout/     Header, Footer, FooterMonogram, SocialSidebar
    sections/   Hero, Sobre, Stack, Projetos, Servicos, Processo, Diferenciais, Contato
    ui/         Section, SectionHeader, EditorialImage, JsonLd, Logo, CursorGlow, FadeInView
  data/         navigation, projetos, servicos, stack
  lib/          AccentContext, utils, hooks
public/         og-image.png, projeto-*.webp, sobre/*.webp (920×1150, ~78% quality)
```

## 5. Tokens principais (globals.css)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-section` | `6rem` (96px) | padding-top + padding-bottom via `.section-spacing` |
| `--space-section-lg` | `9rem` (144px) | padding vertical em `lg+` |
| `--fs-section-title-sm/md/lg` | 2.25 / 3 / 3.75rem | títulos h2 de seção |
| `--fs-label` | `0.6875rem` (11px) | micro-labels mono |

Classes: `.type-label` · `.type-section-eyebrow` · `.text-section-title` · `.hero-grid` (linhas neutras, sem tint accent)

## 6. Polish final (2026-06-14)

**Hero — parcimônia do lime:** grid e glow convertidos para neutros; scroll indicator em `muted`; mantidos ponto `Available 2026` e CTA "Ver projetos" (seta + underline hover). Demais seções inalteradas.

**Sobre — imagens:** redimensionadas para 920×1150 (2× do maior slot ~455px), WebP quality ~78. Peso total ~224KB (antes ~408KB).

**Sobre — `EditorialImage`:** componente extraído com hover/scale/brightness idênticos; 6 ocorrências (mobile + desktop).

**Docs:** proporção visual unificada 90/10 em `CLAUDE.md`, `docs/product/*` e alinhada com `docs/design-system.md`. Stack documentada como Next.js 16.

## 7. Pendências abertas

- CSP — fase dedicada
- PWA / manifest
- Testes e CI
- Regenerar `og-image.png` com copy freelance
- Button/Card genéricos (design system fase futura)

## 8. Histórico de etapas

**Etapa 1:** Hero SSR, copy freelance, nav lg+, reduced motion, stats Sobre.

**Etapa 2:** Projetos enriquecidos (3 cases, profundidade editorial).

**Etapa 3 (2026-06-14):** Section/SectionHeader, tokens calibrados, JSON-LD, skip link, labels a11y, touch targets, Logo #hero.

**Polish final (2026-06-14):** lime Hero, imagens Sobre, EditorialImage, docs 90/10.

## 9. O que não mexer sem cuidado

- `SocialSidebar` + `useScrollSpy`
- `AccentContext` + `@property --color-accent`
- `FooterMonogram`
- Tokens em `globals.css` (fonte de verdade do ritmo visual)
