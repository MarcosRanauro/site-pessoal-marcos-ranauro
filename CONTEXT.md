# CONTEXT.md — Site Pessoal Marcos Ranauro

Estado atual do projeto. Decisões em `DECISOES.md`. Escopo em `/docs`.

## 1. Estado atual

| Item | Valor |
|------|-------|
| Status | V1 completa — acabamento OG/metadata aplicado |
| Branch ativa | `feat/og-metadata-acabamento` (merge pendente → `main`) |
| Deploy | [marcosranauro.com.br](https://marcosranauro.com.br) — Vercel |
| Build | Passando (`npm run build`) |
| Lint | 0 erros (`npm run lint`) |

Site one-page estático. Conteúdo em `src/data/`. Sem backend, banco ou env vars obrigatórias.

**Plano pós-auditoria:** 4 etapas (Hero/copy/nav, Projetos, Section/a11y, polish) + acabamento OG/metadata — **completo** após merge desta branch na `main`.

## 2. O que está funcionando

**Layout:** `Header` (hamburger 44×44px) · `Footer` · `SocialSidebar` (`lg:w-44`, nav `lg+`) · skip link · `navigation.ts` · body `lg:pr-44`

**UI / design system executado:** `Section` · `SectionHeader` · `EditorialImage` · `.type-label` · `.type-section-eyebrow` · `.text-section-title` · tokens `--space-section`, `--fs-section-title-*`, `--fs-label`

**Projetos (Etapa 2):** 3 cases — Outfit AI, Site Monique Ranauro (`producao`), Advoc.AI (`desenvolvimento`, `/projeto-advoc-ai.webp`, sem links)

**Seções:** todas migradas para `Section` + `SectionHeader` (exceto Hero)

**A11y:** skip link → `#conteudo` · micro-labels ≥11px via `.type-label` / `.type-section-eyebrow` · Logo `href="#hero"` · JSON-LD Person + WebSite

**SEO / infra:** metadata freelance alinhada ao Hero · OG dinâmica (`opengraph-image.tsx`) · OG/Twitter · `sitemap.ts` · `robots.ts` · `JsonLd` · security headers

## 3. Stack

Next.js 16.2.6 · React 19 · TypeScript strict · Tailwind CSS v4 · Framer Motion 12 · Vercel

## 4. Estrutura de pastas

```
src/
  app/          layout, page, opengraph-image, globals.css, sitemap, robots
  components/
    layout/     Header, Footer, FooterMonogram, SocialSidebar
    sections/   Hero, Sobre, Stack, Projetos, Servicos, Processo, Diferenciais, Contato
    ui/         Section, SectionHeader, EditorialImage, JsonLd, Logo, CursorGlow, FadeInView
  data/         navigation, projetos, servicos, stack
  lib/          AccentContext, utils, hooks
public/         projeto-*.webp, sobre/*.webp (920×1150, ~78% quality)
```

## 5. Tokens principais (globals.css)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-section` | `6rem` (96px) | padding-top + padding-bottom via `.section-spacing` |
| `--space-section-lg` | `9rem` (144px) | padding vertical em `lg+` |
| `--fs-section-title-sm/md/lg` | 2.25 / 3 / 3.75rem | títulos h2 de seção |
| `--fs-label` | `0.6875rem` (11px) | micro-labels mono |

Classes: `.type-label` · `.type-section-eyebrow` · `.text-section-title` · `.hero-grid` (linhas neutras, sem tint accent)

## 6. Acabamento OG/metadata (2026-06-15)

**Metadata:** description/OG/Twitter alinhados ao posicionamento freelance end-to-end ("Do zero ao no ar", sob medida, deploy).

**OG dinâmica:** `src/app/opengraph-image.tsx` — ImageResponse 1200×630, fundo `#0A0A0A`, Space Grotesk + Inter via Google Fonts no build. Removido `public/og-image.png` estático.

**Labels:** microtextos remanescentes em 9–10px migrados para `.type-label` / `.type-section-eyebrow`.

## 7. Pendências abertas

- CSP — fase dedicada
- PWA / manifest
- Testes e CI
- Button/Card genéricos (design system fase futura)

## 8. Histórico de etapas

**Etapa 1:** Hero SSR, copy freelance, nav lg+, reduced motion, stats Sobre.

**Etapa 2:** Projetos enriquecidos (3 cases, profundidade editorial).

**Etapa 3 (2026-06-14):** Section/SectionHeader, tokens calibrados, JSON-LD, skip link, labels a11y, touch targets, Logo #hero.

**Polish final (2026-06-14):** lime Hero, imagens Sobre, EditorialImage, docs 90/10.

**Acabamento (2026-06-15):** metadata freelance, OG dinâmica, labels 11px residuais.

## 9. O que não mexer sem cuidado

- `SocialSidebar` + `useScrollSpy`
- `AccentContext` + `@property --color-accent`
- `FooterMonogram`
- Tokens em `globals.css` (fonte de verdade do ritmo visual)
