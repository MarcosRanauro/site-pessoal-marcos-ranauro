# CONTEXT.md — Site Pessoal Marcos Ranauro

Este arquivo registra o estado vivo do projeto.

## Estado atual

Status: Redesign editorial de Sobre e Stack concluído (branch `feature/redesign-sobre-stack`)

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
  lib/
    useScrollSpy.ts       ← IntersectionObserver hook, retorna id da seção ativa
    ui/
      Button.tsx        ← variantes primary e secondary
      Card.tsx          ← card premium dark com hover
      Container.tsx     ← wrapper max-width 6xl responsivo
      Section.tsx       ← wrapper de seção (py-24, sem px)
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

Redesign das seções restantes no padrão editorial: Serviços (03), Processo (04), Diferenciais (05), Contato (06). Depois: merge de todas as feature branches para `main` + revisão mobile + deploy final.

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
