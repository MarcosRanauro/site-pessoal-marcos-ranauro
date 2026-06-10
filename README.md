# Site Pessoal — Marcos Ranauro

Site one-page de portfólio profissional. Apresenta Marcos Ranauro como desenvolvedor fullstack, com foco em projetos, serviços e contato direto.

**Produção:** [marcosranauro.com.br](https://marcosranauro.com.br)

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Vercel

## Scripts

```bash
npm run dev    # servidor de desenvolvimento (localhost:3000)
npm run build  # build de produção
npm run lint   # ESLint
```

## Estrutura

```
src/
  app/           # layout, página principal, SEO (sitemap, robots)
  components/
    layout/      # Header, Footer, SocialSidebar
    sections/    # Hero, Sobre, Stack, Projetos, etc.
    ui/          # Logo, FadeInView, CursorGlow
  data/          # conteúdo estático (projetos, serviços, navegação)
  lib/           # hooks e utilitários
```

## Rodar localmente

```bash
git clone https://github.com/MarcosRanauro/site-pessoal-marcos-ranauro.git
cd site-pessoal-marcos-ranauro
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy

O projeto está conectado à Vercel. Push na branch `main` dispara deploy automático.

## V1

Esta versão é um site estático — sem backend, sem banco de dados e sem variáveis de ambiente obrigatórias. Todo o conteúdo vem de arquivos em `src/data/`.

Documentação interna: `CONTEXT.md`, `DECISOES.md` e `/docs`.
