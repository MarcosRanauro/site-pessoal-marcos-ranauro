# CONTEXT.md — Site Pessoal Marcos Ranauro

Estado atual do projeto. Decisões em `DECISOES.md`. Escopo em `/docs`.

## 1. Estado atual

| Item | Valor |
|------|-------|
| Status | V1 em produção — Etapa 1 de melhorias aplicada |
| Branch principal | `main` |
| Deploy | [marcosranauro.com.br](https://marcosranauro.com.br) — Vercel, auto-deploy no push em `main` |
| Build | Passando (`npm run build`) |
| Lint | 0 erros (`npm run lint`) |

Site one-page estático. Conteúdo em `src/data/`. Sem backend, banco ou env vars obrigatórias.

**Posicionamento (desde Etapa 1):** freelance end-to-end — sites e produtos digitais sob medida, do briefing ao deploy.

## 2. O que está funcionando

**Layout:** `Header` (sticky, scroll-aware, menu mobile) · `Footer` (monograma, nav) · `SocialSidebar` (nav de seções + scroll-spy a partir de `lg`, trilho, bolinha spring, easter egg HOT/FRESH) · `navigation.ts` (fonte única de links)

**Seções:** `Hero` (conteúdo SSR imediato, scramble opcional no nome, copy freelance) · `Sobre` (stats recalibrados) · `Stack` · `Projetos` · `Servicos` · `Processo` · `Diferenciais` · `Contato`

**Interatividade:** `CursorGlow` (spotlight lime, rAF) · `FooterMonogram` (stroke draw, cursor tracking) · `AccentContext` (HOT `#FF6B35` / FRESH `#C6FF00`, sem persistência) · `FadeInView` (scroll reveal)

**SEO / infra:** metadata + OG + Twitter Card (copy freelance) · `sitemap.ts` · `robots.ts` · favicon MR · `og-image.png` · security headers em `next.config.ts`

## 3. Stack

Next.js 16.2.6 · React 19 · TypeScript strict · Tailwind CSS v4 · Framer Motion 12 · Vercel

## 4. Estrutura de pastas

```
src/
  app/          layout, page, globals.css, sitemap, robots, favicons
  components/
    layout/     Header, Footer, FooterMonogram, SocialSidebar
    sections/   Hero, Sobre, Stack, Projetos, Servicos, Processo, Diferenciais, Contato
    ui/         Logo, CursorGlow, FadeInView
  data/         navigation, projetos, servicos, stack
  lib/          AccentContext, utils, useScrollSpy, useTextScramble, useTypewriter
public/         og-image.png, projeto-*.webp, sobre/*.webp
```

## 5. Design system

Premium editorial monocromático + lime (< 5% da tela).

| Token | Hex |
|-------|-----|
| `background` | `#0A0A0A` |
| `surface` | `#111111` |
| `surface-elevated` | `#161616` |
| `foreground` | `#FAFAFA` |
| `muted` | `#A1A1A1` |
| `subtle` / `muted-foreground` | `#6B6B6B` |
| `border` | `#222222` |
| `border-strong` | `#2A2A2A` |
| `accent` | `#C6FF00` |

Fontes: Space Grotesk (headings), Inter (body), Geist Mono (labels). Acento dinâmico via `@property --color-accent` + `AccentContext`. Detalhes: `docs/design-system.md`.

## 6. Configuração técnica

- `tsconfig.json`: `@/*` → `./src/*`
- Tailwind v4: `@import "tailwindcss"` + `@theme {}`
- `scroll-padding-top: 80px` (header fixo h-16)
- `@property --color-accent` — transição CSS tipada
- `body`: `lg:pr-44` (reserva espaço para sidebar com nav de seções)
- `next.config.ts`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-DNS-Prefetch-Control`
- CSP não configurada (Framer Motion + easter egg usam estilos inline)

## 7. Pendências abertas

- CSP — fase dedicada
- PWA / manifest — ícones removidos; decidir na V2
- Testes e CI — nenhum
- Prettier — opcional
- JSON-LD / Person schema
- Regenerar `og-image.png` com copy freelance (arquivo estático ainda com texto antigo)

## 8. O que não mexer sem cuidado

- `SocialSidebar` + `useScrollSpy`
- `AccentContext` + `@property --color-accent`
- `FooterMonogram` (stroke draw + cursor tracking)
- Metadados SEO em `layout.tsx`

## 9. Etapa 1 (2026-06-14) — concluída

- Hero: conteúdo no SSR (sem gate de 6s); scramble breve no nome como enhancement
- Copy freelance: "Do zero ao no ar." + subframe de posicionamento
- Nav de seções na sidebar a partir de `lg` (1024px+)
- Scroll indicator respeita `prefers-reduced-motion`
- URL Outfit AI → `miaoutfitai.com.br`
- Stats Sobre recalibrados (2 produtos / 100% / Solo)
