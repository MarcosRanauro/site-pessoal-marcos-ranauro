# CONTEXT.md — Site Pessoal Marcos Ranauro

Este arquivo registra o estado vivo do projeto.

## Estado atual

Status: Fase 1 — Fundação concluída

A estrutura base do projeto foi implementada. O `app/` foi movido para `src/app/`, os tokens visuais da identidade foram aplicados no CSS global, e os componentes UI estruturais foram criados. O build passa sem erros.

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

- Header
- Hero
- Sobre
- Stack
- Projetos
- Serviços/Soluções
- Processo
- Diferenciais
- Contato
- Footer

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
    globals.css       ← tema dark fixo + tokens visuais
    layout.tsx        ← lang="pt-BR", metadados, fontes Geist
    page.tsx          ← placeholder (seções entram na Fase 2)

  components/
    ui/
      Button.tsx      ← variantes primary e secondary
      Card.tsx        ← card premium dark com hover
      Container.tsx   ← wrapper max-width 6xl responsivo
      Section.tsx     ← wrapper de seção com padding padrão
    layout/           ← vazio (Header e Footer entram na Fase 2)
    sections/         ← vazio (seções entram na Fase 3)

  data/               ← vazio (conteúdo entra na Fase 3)
  lib/
    utils.ts          ← função cn() para composição de classes

docs/
  architecture/arquitetura-inicial.md
  development/setup-local.md
  product/escopo.md
  product/identidade-visual.md
  product/visao-geral.md
  quality/definition-of-done.md
```

## Tokens visuais definidos (globals.css)

| Token Tailwind | Cor | Uso |
|---|---|---|
| `bg-background` | `#080A0F` | Fundo principal |
| `bg-background-alt` | `#0B0F17` | Fundo secundário |
| `bg-card` | `#10141F` | Cards e superfícies |
| `border-border` | `#242B3A` | Bordas sutis |
| `text-foreground` | `#F5F7FA` | Texto principal |
| `text-muted` | `#A8B0C2` | Texto secundário |
| `text-subtle` | `#6F7A8F` | Texto discreto |
| `text-accent-blue` | `#38BDF8` | Destaque azul |
| `text-accent-cyan` | `#22D3EE` | Destaque ciano |
| `text-accent-purple` | `#8B5CF6` | Destaque roxo |

## Configuração técnica relevante

- `tsconfig.json`: alias `@/*` aponta para `./src/*`
- `postcss.config.mjs`: usa `@tailwindcss/postcss` (Tailwind v4)
- `globals.css`: usa `@import "tailwindcss"` e `@theme {}` (sintaxe v4)

## Próxima ação recomendada

Iniciar a Fase 2 — Estrutura da página:

- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- Atualizar `src/app/page.tsx` para montar as seções em ordem
