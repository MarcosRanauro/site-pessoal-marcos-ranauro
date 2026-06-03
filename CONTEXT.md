# CONTEXT.md — Site Pessoal Marcos Ranauro

Este arquivo registra o estado vivo do projeto.

## Estado atual

Status: V1 feature-complete — monograma animado no footer — pronto para deploy de produção

Projeto na branch `main` com todas as features do redesign editorial premium mergeadas e limpeza de código aplicada.

Redesign editorial premium completo: design system monocromático + lime, Hero, todas as 7 seções (Sobre, Stack, Projetos, Serviços, Processo, Diferenciais, Contato), sidebar com scroll-spy, cursor glow, header minimalista com logo MR SVG, footer editorial.

Correções e limpezas pós-redesign aplicadas:
- LinkedIn com URL real em SocialSidebar e Hero
- Numeração de seções corrigida (03 / Projetos)
- SEO completo: metadata, Open Graph, Twitter Card, sitemap.xml, robots.txt, favicon próprio (MR)
- Alinhamento vertical da logo no header corrigido (removido `self-start` no `<a>` da Logo)
- Componentes UI órfãos deletados: Button.tsx, Card.tsx, Card3D.tsx, Container.tsx, Section.tsx
- Inline style removido de Processo.tsx (substituído por `min-h-12`)

Monograma MR animado no footer (branch `feature/footer-monograma-animado`):
- `src/components/layout/FooterMonogram.tsx` — novo client component com 2 camadas de animação
- Stroke draw (pathLength 0→1) via `motion.path` na entrada da viewport (IntersectionObserver, once:true); M desenhado primeiro (1.4s), R bojo staggerado (delay 0.42s, dur 0.98s), R perna finaliza (delay 1.19s, dur 0.42s); ponto lime surge por último com spring (delay 1.55s)
- Cursor tracking: ponto segue o mouse com `useMotionValue` + `useSpring` (stiffness 80, damping 18), clamped à bounding box do SVG; retorna com spring ao sair do hover; só ativo em dispositivos com hover real
- `src/components/layout/Footer.tsx` — Layout reorganizado em 3 zonas: localização (esquerda) | FooterMonogram h-40 (centro) | nav (direita); `<Logo />` removida do footer (substituída pelo monograma grande); Logo do header inalterada
- `prefers-reduced-motion`: caminhos já desenhados e ponto já visível, sem animações
- Touch/sem hover: ponto na posição original, sem cursor tracking

Faixa de imagens na seção Sobre (branch `feature/sobre-faixa-imagens`):
- 3 imagens pessoais (`public/sobre/`) inseridas entre o bloco de texto/stats e a timeline de formação em `Sobre.tsx`
- Grid 3 colunas no desktop/tablet (sm+); mobile mostra apenas a imagem 1 (ampla) em full width
- Hover sutil apenas em dispositivos com pointer fino: brightness 0.9→1 + scale 1.02, transição 400ms — touch/mobile estático
- Scroll reveal com FadeInView staggerado (0s, 0.1s, 0.2s) por imagem
- next/image com fill + sizes corretos + aspect-[4/5], borda `border-border` e `rounded-sm`

Acessibilidade (WCAG AA) aplicada (branch `fix/acessibilidade`):
- Contraste de labels pequenos (≤11px) elevado: `text-subtle` (#6B6B6B, ~3.7:1) → `text-muted` (#A1A1A1, ~8:1) em todos os labels mono de numeração de seções, categorias, stack labels, status de projeto, localização e copyright do footer, indicador "Scroll"
- Focus-visible lime consistente em todos os elementos interativos: `focusRing` exportado de `src/lib/utils.ts`, aplicado em Logo, Header (CTA + hamburger + nav mobile), Hero (CTAs + social links mobile), Projetos (links de projeto e código), Contato (links de canal), Footer (nav links), SocialSidebar (social links + nav de seções)
- No SocialSidebar nav: hover atualizado de `text-subtle→text-muted` para `text-muted→text-foreground` (hierarquia de contraste mantida)

SEO e metadata configurados (`src/app/layout.tsx`):
- `metadataBase`: `https://marcosranauro.com.br`
- `openGraph`: type website, locale pt_BR, og:image `/og-image.png` (1200×630)
- `twitter`: card summary_large_image, imagem `/og-image.png`
- `keywords`, `authors`, `creator`, `alternates.canonical`
- `robots`: index: true, follow: true

Assets de SEO/favicon presentes em `src/app/`:
- `favicon.ico` — ícone da aba do browser
- `icon.svg` — favicon vetorial moderno
- `apple-icon.png` — ícone para iOS
- `og-image.png` em `public/` — preview de compartilhamento

Rotas geradas pelo Next.js:
- `/sitemap.xml` — via `src/app/sitemap.ts`
- `/robots.txt` — via `src/app/robots.ts`
- `/apple-icon.png` e `/icon.svg` — geradas automaticamente pelo App Router

Correções aplicadas (branch `fix/links-e-numeracao`):
- LinkedIn: links `href="#"` corrigidos para `https://www.linkedin.com/in/marcosranauro/` em SocialSidebar.tsx e Hero.tsx
- Projetos: numeração `02 / Projetos` corrigida para `03 / Projetos`

Footer minimalista redesenhado (branch `feature/redesign-footer`)

Footer.tsx redesenhado — fecho sóbrio e institucional:
- Background: `bg-background` (#0A0A0A) — contrasta com Contato (bg-surface)
- `border-t border-border` no topo — linha divisória sutil
- Bloco principal: Logo `h-11 w-auto` (ligeiramente maior que header) à esquerda + "Nova Iguaçu — RJ, Brasil" mono abaixo + nav 2 colunas à direita
- Nav compacta: 7 seções em `font-mono text-[10px] uppercase tracking-[0.2em] text-subtle hover:text-muted`; grid-cols-2 (4+3 itens)
- Linha inferior: copyright `© {ano dinâmico}` (esquerda) + "Desenhado e desenvolvido por Marcos Ranauro" (direita) em mono subtle
- Responsivo: flex-col no mobile, flex-row md+ com justify-between
- Server component (sem "use client") — Logo também é server component
- Removido: SVG icons sociais, e-mail antigo, texto "Fullstack Developer"

Logo MR monograma SVG em ligadura implementada (branch `feature/logo-mr-ligadura`)

Logo.tsx reconstruída como monograma SVG vetorial:
- Ligadura MR: M (20,96→20,20→52,70→84,20→84,96) + R bojo (84,20→112,20→curva→90,66) + perna (110,66→140,96) compartilhando a haste central em x=84
- viewBox="0 0 160 110", stroke currentColor strokeWidth=9 (renderiza ~3px no tamanho de exibição h-9)
- Ponto lime: `<circle className="logo-dot">` — fill via `var(--color-accent)` em CSS, animação `logo-breathe` 2.2s ease-in-out infinite (scale 1→1.18, opacity 1→0.72); `transform-box: fill-box; transform-origin: center` para escalar a partir do próprio centro
- `prefers-reduced-motion`: `.logo-dot { animation: none }` via @media em globals.css — ponto visível, estático
- Prop `className?` para reutilizar no footer com tamanho/cor diferentes; default `h-9 w-auto`
- Server component (sem "use client") — animação é CSS puro
- globals.css: `@keyframes blink` e `--animate-blink` REMOVIDOS (CSS órfão limpo); `@keyframes logo-breathe` e `.logo-dot` adicionados

Header.tsx simplificado:
- Desktop (≥lg/1024px): Logo + botão "Fale comigo" → `#contato` apenas (nav links removidos — sidebar já cumpre esse papel)
- Mobile (<lg): Logo + hamburger; menu expande com as 7 seções completas (Sobre, Stack, Projetos, Serviços, Processo, Diferenciais, Contato) em mono uppercase + CTA "Fale comigo"
- Breakpoints migrados de `md:` para `lg:` (alinhado com a sidebar)
- Scroll-aware mantido (border + bg/80 + backdrop-blur-md ao rolar)
- Removido: navLinks de desktop, tokens antigos (accent-blue)

Logo.tsx criado (server component, sem "use client"):
- Monograma "MR" em Space Grotesk bold foreground + cursor "_" em accent lime
- Cursor pisca com `animate-blink` (1.1s ease-in-out infinite) — CSS puro via `@keyframes blink`
- `prefers-reduced-motion`: `animation: none` via `@media` em globals.css — cursor estático mas visível
- Reutilizável no Footer

globals.css:
- `--animate-blink` adicionado ao `@theme`
- `@keyframes blink { 0%,100% opacity:1; 50% opacity:0 }` adicionado
- `@media (prefers-reduced-motion: reduce) { .animate-blink { animation: none } }` adicionado

Redesign editorial completo — todas as seções concluídas (branch `feature/redesign-contato`)

Contato.tsx redesenhada — fechamento editorial assimétrico:
- Cabeçalho: `07 / Contato` mono + "Vamos / conversar" em display grande (2 cols, lg:col-span-2)
- Canais de contato como lista editorial (3 cols, lg:col-span-3): label mono 9px + valor mono sm + seta lime no hover
- Links reais: WhatsApp `wa.me/5521964242134`, E-mail `mailto:contato@marcosranauro.com.br`, LinkedIn `linkedin.com/in/marcosranauro/`, GitHub `github.com/MarcosRanauro` — todos com `target="_blank" rel="noopener noreferrer"` onde aplicável
- Glow lime ambiente: `bg-accent opacity-[0.04] blur-[120px]` no canto superior direito — muito sutil
- Background: `bg-surface` (#111111) — alterna de Diferenciais (bg-background)
- Removido: Section, Container, SVG icons, tokens antigos (accent-blue), layout de botões

Redesign editorial de Serviços, Processo e Diferenciais concluído (branch `feature/redesign-servicos-processo-diferenciais`)

Servicos.tsx redesenhada — catálogo em lista editorial:
- Cabeçalho: `04 / Serviços` + display "Soluções que posso desenvolver"
- Itens como linhas `border-t py-8 lg:py-10`, composição flex: número (mono 10px, `text-subtle → text-accent` no hover) + título display 2xl/3xl + descrição + seta lime (`opacity-0 → opacity-100` no hover)
- Hover por linha com `group` — um ponto lime visível de cada vez (seta + número)
- Removido: Card3D, Section, Container, cn, tokens antigos

Processo.tsx redesenhada — fluxo sequencial:
- Cabeçalho: `05 / Processo` + display "Como trabalho" (bg-surface)
- Desktop: linha horizontal `h-px bg-border` + ticks verticais descendentes `h-4 w-px` em grid 5 colunas + conteúdo em `grid-cols-5` com stagger FadeInView
- Mobile: sequência vertical — número mono esquerda + linha conectora `w-px bg-border flex-1` + conteúdo direita
- Sem lime (distingue visualmente de Sobre que tem dots lime na timeline)
- Removido: Fragment, Section, Container, tokens antigos

Diferenciais.tsx redesenhada — grade 2×2 com separadores em cruz:
- Cabeçalho: `06 / Diferenciais` + display "Por que trabalhar comigo" (bg-background)
- Grid `md:grid-cols-2` com borders calculados por posição: item 0 (top-left) border-b + md:border-r; item 1 (top-right) border-b; item 2 (bottom-left) border-b mobile + md:border-b-0 + md:border-r; item 3 sem bordas
- Cada célula: índice mono 9px + título display 2xl + descrição muted + padding assimétrico (`md:pr-12` / `md:pl-12`)
- Sem lime — composição geométrica é o diferenciador
- Removido: Card3D, Section, Container, tokens antigos

Redesign editorial de Sobre e Stack concluído (branch `feature/redesign-sobre-stack`)

Sobre.tsx redesenhada no padrão editorial premium:
- Cabeçalho: `01 / Sobre` mono + título display `Sobre mim` (font-heading, scale 4xl→6xl)
- Layout 5 colunas: texto (3 cols, max-w-xl, text-lg leading-relaxed) + stats (2 cols)
- Stats em escala dramática: números `font-heading text-4xl/5xl bold foreground`; stat sem número ganha `—` em `opacity-[0.08]` como placeholder visual; labels `font-mono text-[9px] uppercase tracking-[0.2em] text-muted`
- Mobile: stats em `grid-cols-3`; Desktop: lista vertical com `divide-y divide-border`
- Formação como timeline vertical: linha `w-px bg-border`, marcador lime `h-2 w-2 rounded-full bg-accent` posicionado na linha, curso em mono uppercase, instituição em display, descrição em text-muted
- Removido: imports Section, Container, cn; tokens antigos (accent-blue, accent-cyan) eliminados

Stack.tsx redesenhada — abordagem tipográfica sem chips:
- Cabeçalho: `02 / Stack` mono + título display `Stack Técnica`
- 3 grupos em `md:grid-cols-3 md:gap-0` com `border-l border-border` entre colunas
- Grupo label: `font-mono text-[9px] uppercase tracking-[0.3em] text-subtle`
- Tecnologias: `font-mono text-base text-muted` em lista com `border-b border-border py-3`; hover: `hover:text-foreground` (sem caixas, sem chips arredondados)
- Removido: chips rounded-full, tokens antigos

Cursor customizado removido, CursorGlow spotlight lime implementado (branch `feature/cursor-glow`)

CursorGlow spotlight implementado:
- `src/components/ui/CustomCursor.tsx`: REMOVIDO — cursor dot+ring com delay eliminado
- `src/app/globals.css`: regra `cursor: none` removida — cursor nativo do sistema restaurado
- `src/components/ui/CursorGlow.tsx`: novo componente — glow radial `#C6FF00` a 7% de opacidade, 500px de diâmetro, `mix-blend-mode: screen`, `pointer-events: none`, z-index 1; segue o mouse via rAF sem delay perceptível; só ativa em `(hover: hover) and (pointer: fine)`; ausente se `prefers-reduced-motion`; SSR safe
- `src/app/layout.tsx`: `<CursorGlow />` no lugar de `<CustomCursor />`

SocialSidebar evoluída para nav com scroll-spy:
- `src/lib/useScrollSpy.ts`: hook novo — IntersectionObserver com `rootMargin: "-30% 0px -50% 0px"` (detecção na faixa 30%–50% do viewport); IDs estáveis passados como `string[]`; cleanup com `observer.disconnect()`; SSR safe (só roda em useEffect)
- `src/components/layout/SocialSidebar.tsx`: dois grupos — social (topo, texto vertical `writing-mode:vertical-rl`, w-14, animações mantidas) + nav de seções (apenas xl+, texto horizontal mono 9px uppercase, traço direita — ativo: `w-12 bg-accent`, inativo: `w-6 bg-border group-hover:w-8`); stagger de entrada para os 7 itens do nav; `reduced motion`: animações de entrada puladas, scroll-spy continua funcionando
- `src/app/layout.tsx`: `xl:pr-44` adicionado ao body — empurra o conteúdo (max-w-6xl centrado em 1280-176=1104px) para não sobrepor o sidebar expandido; fixed elements (CustomCursor, SocialSidebar) não são afetados pelo padding
- Sidebar: `w-14 lg:flex xl:w-44` — estreita em lg (social only), larga em xl (social + nav)
- IDs do nav batem exatamente com os IDs reais das seções: sobre, stack, projetos, servicos, processo, diferenciais, contato

Seção Projetos reconstruída como galeria editorial visual:
- `src/data/projetos.ts`: tipo `Projeto` recebeu campos `imagem: string` e `contexto: string`; Outfit AI reordenado para primeiro; descrições atualizadas conforme identidade do produto
- `src/components/sections/Projetos.tsx`: reescrito completamente — layout editorial alternado (zigue-zague) com `grid-cols-5` (3fr imagem / 2fr conteúdo), sem `Section`/`Container` wrappers para controle total do ritmo vertical
- Imagem com `next/image fill`, `object-top`, filtros CSS em repouso (`brightness(0.85) grayscale(0.3)`) e transição suave para estado vivo no hover (`brightness(1) grayscale(0) + scale(1.02)`)
- Conteúdo: número watermark (mono, `opacity-[0.06]`, `clamp` de fonte), badge lime dot apenas no "Publicado", contexto mono uppercase, título Space Grotesk display, stack como labels separados por `·`, links com underline lime animado + seta lime no hover
- `FadeInView` por bloco de projeto para scroll reveal; `prefers-reduced-motion` gerenciado pelo hook existente
- Lime restrito: dot do status "Publicado" + seta/underline dos links no hover (máx 2 pontos por projeto)

SocialSidebar global implementada:
- `src/components/layout/SocialSidebar.tsx` — componente `fixed` left, desktop only (`hidden lg:flex`)
- Linhas superior e inferior animam via `scaleY 0→1` com `transformOrigin: top` (~0.8s, ease custom)
- Links entram em stagger: GitHub delay 0.45s, LinkedIn delay 0.60s (opacity 0→1, x -10→0)
- Hover: `x: 4px` via spring Framer Motion + `hover:text-accent` via Tailwind (apenas no hover)
- `prefers-reduced-motion`: `initial={false}` em todos os motion — sidebar aparece estática sem animação
- `layout.tsx`: `<SocialSidebar />` adicionado ao body, global em todas as seções
- `Hero.tsx`: `<motion.aside>` da sidebar local removido; links mobile (`lg:hidden`) mantidos; padding `lg:pl-28` preservado

Hero redesenhado com composição editorial assimétrica:
- Layout left-aligned, nome em duas linhas com `--fs-hero-name: clamp(2.8rem,10vw,9rem)`, Space Grotesk bold, line-height 0.90
- Sidebar vertical de links (GitHub / LinkedIn) ancorada à esquerda — desktop only, `writing-mode: vertical-rl`, hover lime
- Linha de metadados no topo: `FULLSTACK DEVELOPER — BASED IN BRAZIL — ● AVAILABLE 2026` (único lime visível no topo)
- CTAs editoriais: underline lime animado no hover do primário + seta lime; secundário texto fantasma
- Indicador de scroll: `SCROLL` mono + linha lime que pulsa via scaleY
- Social links horizontais no mobile (abaixo dos CTAs)
- Glow deslocado para canto superior direito (assimétrico)
- Sequência scramble/typewriter mantida (hooks reutilizados), agora na nova tipografia
- `--fs-hero-name` adicionado ao globals.css

Redesign iniciado. Nova direção visual: "Editorial e expressivo — Engenharia como ofício."
Paleta monocromática rigorosa com acento lime (#C6FF00) de uso < 5%.
Tokens antigos (azul/ciano/roxo) removidos. Seções em estado transicional — serão redesenhadas nas próximas fases.

Mudanças desta fase:
- `layout.tsx`: Space Grotesk (display), Inter (body), Geist Mono — variáveis `--font-space-grotesk`, `--font-inter`, `--font-geist-mono`
- `globals.css`: paleta completa reescrita; escala tipográfica em CSS custom properties; hero-grid atualizado para lime; cursor:none mantido
- `Button.tsx`, `Card.tsx`, `CustomCursor.tsx`: atualizados para novos tokens
- `docs/design-system.md`: criado — paleta, escala tipográfica, regras de uso do acento lime

Hero Scramble Effect implementado (branch anterior):
- `src/lib/useTextScramble.ts` — hook reutilizável: recebe texto + started + duration; usa rAF para scramble progressivo; hasStarted.current previne restart; respeita prefers-reduced-motion via `started=false`
- `src/lib/useTypewriter.ts` — hook reutilizável: intervalo por caractere; hasStarted.current previne restart
- `src/components/sections/Hero.tsx` — máquina de estados (step 0→5) coordenando a sequência: grid fade (1s) → badge pisca 3x (0.6s) → nome scramble (1.2s) → título scramble (0.8s) → frase typewriter (25ms/char) → CTAs fade (0.4s); prefers-reduced-motion pula direto para step 5

Fase 5 implementada com Framer Motion v12:
- `framer-motion` instalado
- `FadeInView.tsx` — scroll reveal reutilizável (opacity + y, once: true, delay prop, respeita prefers-reduced-motion)
- `Card3D.tsx` — efeito 3D no hover com useMotionValue + useTransform + useSpring (rotação máx 6deg, perspectiva 1000px)
- `CustomCursor.tsx` — cursor personalizado duplo (dot + ring) com spring; só ativa em desktop (≥1024px); expand em links/buttons
- `Hero.tsx` — convertido para "use client", variants com staggerChildren 0.1s substituem as classes CSS de delay
- Classes CSS `animate-fade-in-up` e `animate-delay-*` removidas do Hero (mantidas no globals.css para uso eventual)
- FadeInView aplicado em: Sobre, Stack, Projetos, Servicos, Processo, Diferenciais, Contato
- Card3D aplicado em: Projetos, Servicos, Diferenciais
- `globals.css`: `cursor: none` via `@media (pointer: fine)` para body, a, button
- `layout.tsx`: `<CustomCursor />` adicionado ao body

Build passa sem erros.

## Identidade do projeto

Nome: Site Pessoal Marcos Ranauro  
Tipo: site pessoal / portfólio profissional  
Pessoa apresentada: Marcos Ranauro  
Título: Fullstack Developer  

## Objetivo principal

Criar um site pessoal profissional para apresentar Marcos Ranauro como desenvolvedor fullstack, com foco em:

- clientes freelancer;
- oportunidades profissionais;
- parcerias;
- autoridade pessoal;
- apresentação de projetos.

## Stack inicial

- Next.js 16.2.6
- React 19
- TypeScript
- Tailwind CSS v4
- App Router
- Vercel
- Git
- GitHub

## Escopo da V1

A V1 será um site one-page com:

- Header ✅
- Hero ✅
- Sobre ✅
- Stack ✅
- Projetos ✅
- Serviços/Soluções ✅
- Processo ✅
- Diferenciais ✅
- Contato ✅
- Footer ✅

## Fora do escopo da V1

Não entra nesta primeira versão:

- login
- autenticação
- banco de dados
- Supabase
- dashboard
- painel admin
- pagamentos
- blog com CMS
- backend complexo
- SaaS
- API própria complexa

## Direção visual aprovada

Direção: Premium editorial tech com interatividade futurista controlada.

Proporção:

- 70% editorial premium;
- 30% futurista tech.

## Estrutura de pastas atual

```
src/
  app/
    favicon.ico
    globals.css         ← tokens visuais, animação fade-in-down, scroll-padding-top
    layout.tsx          ← lang="pt-BR", metadados, fontes Geist
    page.tsx            ← Header + seções (com placeholders) + Footer

  components/
    layout/
      Header.tsx          ← sticky, scroll-aware, mobile menu, animate-fade-in-down
      Footer.tsx          ← identidade, links sociais, copyright
      SocialSidebar.tsx   ← fixed right, social (lg+) + nav scroll-spy (xl+), hover lime
    ui/
      Logo.tsx            ← monograma MR SVG, ponto lime pulsante, server component
      CursorGlow.tsx      ← spotlight lime 500px, mix-blend-mode screen, rAF, SSR safe
      FadeInView.tsx      ← scroll reveal reutilizável (opacity+y, once, delay, reduced-motion)
    sections/
      Hero.tsx          ← grid, glow, badge, stagger CSS, CTAs, social links
      Sobre.tsx         ← layout 2 colunas, stats responsivos, border-l decorativa, bloco Formação (Trybe + UNISUAM)
      Stack.tsx         ← grupos com chips hover
      Projetos.tsx      ← cards com badge status/destaque, chips, links GitHub + live
      Servicos.tsx      ← 5 cards número+título+descrição, 5º centralizado
      Processo.tsx      ← timeline mobile + fluxo horizontal desktop com conectores
      Diferenciais.tsx  ← grid 2x2 de cards sem número
      Contato.tsx       ← glow radial, botão WhatsApp primário, 3 secundários

  data/
    stack.ts            ← 3 grupos: Frontend, Backend, Ferramentas & Infra
    projetos.ts         ← tipo Projeto + StatusProjeto, 2 projetos
    servicos.ts         ← tipo Servico, 5 serviços
  lib/
    utils.ts            ← função cn() para composição de classes
    useScrollSpy.ts     ← IntersectionObserver hook, retorna id da seção ativa
    useTextScramble.ts  ← scramble progressivo via rAF, respeita reduced-motion
    useTypewriter.ts    ← typewriter por caractere com intervalo

docs/
  architecture/arquitetura-inicial.md
  development/setup-local.md
  product/escopo.md
  product/identidade-visual.md
  product/visao-geral.md
  quality/definition-of-done.md
```

## Tokens visuais definidos (globals.css)

| Token Tailwind       | Cor       | Uso                    |
|----------------------|-----------|------------------------|
| `bg-background`      | `#080A0F` | Fundo principal        |
| `bg-background-alt`  | `#0B0F17` | Fundo secundário       |
| `bg-card`            | `#10141F` | Cards e superfícies    |
| `border-border`      | `#242B3A` | Bordas sutis           |
| `text-foreground`    | `#F5F7FA` | Texto principal        |
| `text-muted`         | `#A8B0C2` | Texto secundário       |
| `text-subtle`        | `#6F7A8F` | Texto discreto         |
| `text-accent-blue`   | `#38BDF8` | Destaque azul          |
| `text-accent-cyan`   | `#22D3EE` | Destaque ciano         |
| `text-accent-purple` | `#8B5CF6` | Destaque roxo          |

## Configuração técnica relevante

- `tsconfig.json`: alias `@/*` aponta para `./src/*`
- `postcss.config.mjs`: usa `@tailwindcss/postcss` (Tailwind v4)
- `globals.css`: usa `@import "tailwindcss"` e `@theme {}` (sintaxe v4)
- `globals.css`: `scroll-padding-top: 80px` compensa header fixo (h-16 = 64px)
- `globals.css`: `animate-fade-in-down` — animação de entrada via `@keyframes` + `@theme`

## Notas de implementação — Header

- Client Component (`"use client"`) por usar `useState` e `useEffect`
- `scrolled` state controla backdrop-blur e borda inferior
- `menuOpen` state controla menu mobile
- SVG inline para ícones hamburger/fechar (sem biblioteca externa)
- Link do logo: `#` (volta ao topo)
- CTA `Entrar em contato`: âncora `#contato`
- Nav links: `#sobre`, `#stack`, `#projetos`, `#servicos`, `#contato`

## Notas de implementação — Footer

- Server Component (sem interatividade)
- Links GitHub e LinkedIn: `href="#"` (placeholder — preencher com URLs reais)
- Email: `marcosranauro85@gmail.com` (já configurado)
- Layout responsivo: coluna no mobile, linha no desktop

## Notas de implementação — Hero

- Server Component (sem `"use client"` — apenas CSS e marcação)
- Grid via classe `.hero-grid` no `globals.css` (não CSS inline)
- Glow: div absoluta com `bg-accent-blue opacity-[0.06] blur-[120px]`
- Badge: border sutil + `animate-pulse` no ponto verde (`bg-green-400`)
- Animações: `animate-fade-in-up` com classes `.animate-delay-*` (0–500ms) em globals.css
- GitHub: `https://github.com/MarcosRanauro` (real)
- LinkedIn: `href="#"` (placeholder — preencher com URL real)
- Separador visual entre os links sociais: `span` com `bg-border`

## Deploy técnico inicial

A Vercel foi conectada ao repositório GitHub.

Status: funcionando.

Observação: este deploy ainda é preview técnico. O domínio definitivo será configurado apenas no final da V1.

## Próxima ação recomendada

**Revisão de responsividade em dispositivo real + deploy de produção na Vercel com domínio `marcosranauro.com.br`.**

Checklist pré-deploy:
- [ ] Testar em mobile real (iOS Safari + Android Chrome) — seções, navegação, logo, sidebar
- [ ] Testar compartilhamento no WhatsApp/LinkedIn para validar og:image
- [ ] Validar com opengraph.xyz ou similar
- [ ] Conectar domínio `marcosranauro.com.br` no painel da Vercel
- [ ] Verificar DNS (A record ou CNAME para Vercel)
- [ ] Confirmar que HTTPS está ativo após propagação

Fase 4 — Finalização:

1. SEO: metadados completos, Open Graph, favicon real
2. Responsividade final e revisão mobile
3. Animações suaves nas seções (fade-in no scroll)
4. Build sem erros + lint
5. Deploy final na Vercel com domínio
4. `src/components/sections/Services.tsx` + `src/data/services.ts`
5. `src/components/sections/Process.tsx`
6. `src/components/sections/Differentials.tsx`
7. `src/components/sections/Contact.tsx`
