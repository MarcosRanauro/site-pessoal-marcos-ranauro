# CONTEXT.md — Site Pessoal Marcos Ranauro

Este arquivo registra o estado vivo do projeto.

## Estado atual

Status: Fase 2 — Estrutura da página concluída (branch `feature/fase-2-estrutura-pagina`)

Header, Footer e page.tsx estão implementados. A estrutura da página one-page está montada com placeholders para todas as seções. O build passa sem erros.

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
- Hero *(placeholder)*
- Sobre *(placeholder)*
- Stack *(placeholder)*
- Projetos *(placeholder)*
- Serviços/Soluções *(placeholder)*
- Processo *(placeholder)*
- Diferenciais *(placeholder)*
- Contato *(placeholder)*
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
    sections/           ← vazio (seções reais entram na Fase 3)

  data/                 ← vazio (conteúdo entra na Fase 3)
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

## Próxima ação recomendada

Iniciar a Fase 3 — Seções:

1. `src/components/sections/Hero.tsx` — nome, título, frase, CTAs, elemento visual
2. `src/components/sections/About.tsx` — texto sobre Marcos
3. `src/components/sections/Stack.tsx` + `src/data/stack.ts`
4. `src/components/sections/Projects.tsx` + `src/data/projects.ts`
5. `src/components/sections/Services.tsx` + `src/data/services.ts`
6. `src/components/sections/Process.tsx`
7. `src/components/sections/Differentials.tsx`
8. `src/components/sections/Contact.tsx`
