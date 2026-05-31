# CONTEXT.md — Site Pessoal Marcos Ranauro

Este arquivo registra o estado vivo do projeto.

## Estado atual

Status: Fase 4 — Refinamento visual concluído (branch `feature/fase-4-refinamento-visual`)

Todas as seções da V1 estão implementadas. Ajustes visuais aplicados: Hero (tamanho do nome: `text-6xl md:text-7xl lg:text-8xl`), Sobre (padding dos cards de Formação: `p-5` → `p-6`), Diferenciais (gap interno dos cards: `gap-3` → `gap-4`). Build passa sem erros.

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
      Header.tsx        ← sticky, scroll-aware, mobile menu, animate-fade-in-down
      Footer.tsx        ← identidade, links sociais, copyright
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

Iniciar as seções restantes da Fase 3:

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
