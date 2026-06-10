# Changelog

Todas as mudanças notáveis deste projeto estão documentadas neste arquivo.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e o versionamento segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

## [1.0.0] - 2025

Primeira versão completa — site one-page editorial em produção em [marcosranauro.com.br](https://marcosranauro.com.br).

### Added

- Easter egg HOT/FRESH — `AccentContext`, toggle de accent color (lime ↔ âmbar)
- Security headers em `next.config.ts` (X-Frame-Options, nosniff, Referrer-Policy, etc.)
- Navegação centralizada em `src/data/navigation.ts` (`NAV_LINKS`)
- SocialSidebar — trilho de progresso vertical + bolinha lime com spring na seção ativa
- `FooterMonogram` — stroke draw na entrada + ponto lime com cursor tracking
- Faixa de 3 imagens pessoais na seção Sobre (`public/sobre/`)
- Acessibilidade WCAG AA — contraste de labels, `focus-visible`, utilitário `focusRing`
- SEO completo — metadata, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`, favicon MR
- `CursorGlow` — spotlight lime seguindo o mouse via rAF (SSR safe)
- `SocialSidebar` — scroll-spy com `useScrollSpy`, links sociais verticais, nav xl+
- Logo MR — monograma SVG em ligadura com ponto lime pulsante (`logo-breathe`)
- `FadeInView` — scroll reveal reutilizável em todas as seções
- Hero — scramble de texto (`useTextScramble`) e typewriter (`useTypewriter`), step 0→5
- Framer Motion integrado para animações de entrada e interações
- Design system monocromático + acento lime — paleta, tipografia, regras em `docs/design-system.md`
- Galeria editorial de projetos com `next/image`, layout zigue-zague e links live/GitHub
- Contato com canais reais — WhatsApp, e-mail, LinkedIn, GitHub

### Changed

- Correção ESLint `react-hooks/set-state-in-effect` no Hero e FooterMonogram
- Hero redesenhado — composição editorial assimétrica, grid lime, metadados, CTAs, indicador de scroll
- Seções redesenhadas no padrão editorial premium — Sobre, Stack, Projetos, Serviços, Processo, Diferenciais, Contato, Footer
- Header simplificado — Logo + CTA desktop; hamburger com nav completa no mobile
- Stack migrada de chips para lista tipográfica com bordas
- Projetos reconstruídos como galeria visual (sem cards genéricos)
- Footer reorganizado — monograma central, localização, nav em 2 colunas
- Paleta e tokens visuais reescritos em `globals.css` (Tailwind v4 `@theme`)
- Fontes — Space Grotesk (headings), Inter (body), Geist Mono (labels)
- LinkedIn e numeração de seções corrigidos em todo o site
- `CONTEXT.md` e `README.md` reescritos com estado atual do projeto

### Removed

- Assets legados de `public/` (~61MB) — fotos de rascunho, ícones PWA não usados, PNGs duplicados
- Tokens de cor azul, ciano e roxo do design system antigo
- `CustomCursor` — substituído por `CursorGlow`; regra `cursor: none` removida
- Componentes órfãos — `Card3D`, `Button`, `Card`, `Container`, `Section`
- Dependência visual de cards 3D e templates genéricos de portfólio
