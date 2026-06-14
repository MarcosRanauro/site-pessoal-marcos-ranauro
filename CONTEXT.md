# CONTEXT.md — Site Pessoal Marcos Ranauro

Estado atual do projeto. Decisões em `DECISOES.md`. Escopo em `/docs`.

## 1. Estado atual

| Item | Valor |
|------|-------|
| Status | V1 em produção — Etapa 3 (sistema + a11y) aplicada |
| Branch ativa | `feat/etapa-3-sistema-a11y` |
| Deploy | [marcosranauro.com.br](https://marcosranauro.com.br) — Vercel |
| Build | Passando (`npm run build`) |
| Lint | 0 erros (`npm run lint`) |

Site one-page estático. Conteúdo em `src/data/`. Sem backend, banco ou env vars obrigatórias.

## 2. O que está funcionando

**Layout:** `Header` (hamburger 44×44px) · `Footer` · `SocialSidebar` · skip link · `navigation.ts`

**UI / design system executado:** `Section` · `SectionHeader` · `.type-label` · `.type-section-eyebrow` · `.text-section-title` · tokens `--space-section`, `--fs-section-title-*`, `--fs-label`

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
    ui/         Section, SectionHeader, JsonLd, Logo, CursorGlow, FadeInView
  data/         navigation, projetos, servicos, stack
  lib/          AccentContext, utils, hooks
public/         og-image.png, projeto-*.webp, sobre/*.webp
```

## 5. Tokens principais (globals.css)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-section` | `6rem` | padding vertical seção (py-24) |
| `--space-section-lg` | `9rem` | padding vertical lg (py-36) |
| `--fs-section-title-sm/md/lg` | 2.25 / 3 / 3.75rem | títulos h2 de seção |
| `--fs-label` | `0.6875rem` (11px) | micro-labels mono |

Classes: `.type-label` · `.type-section-eyebrow` · `.text-section-title`

## 6. Pendências abertas

- CSP — fase dedicada
- PWA / manifest
- Testes e CI
- Regenerar `og-image.png` com copy freelance
- Button/Card genéricos (design system fase futura)

## 7. Histórico de etapas

**Etapa 1:** Hero SSR, copy freelance, nav lg+, reduced motion, stats Sobre.

**Etapa 2:** Projetos enriquecidos (3 cases, profundidade editorial).

**Etapa 3 (2026-06-14):** Section/SectionHeader, tokens calibrados, JSON-LD, skip link, labels a11y, touch targets, Logo #hero.

## 8. O que não mexer sem cuidado

- `SocialSidebar` + `useScrollSpy`
- `AccentContext` + `@property --color-accent`
- `FooterMonogram`
- Tokens em `globals.css` (fonte de verdade do ritmo visual)
