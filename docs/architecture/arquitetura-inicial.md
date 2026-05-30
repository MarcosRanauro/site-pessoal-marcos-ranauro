# Arquitetura Inicial — Site Pessoal Marcos Ranauro

## Objetivo

Definir a arquitetura inicial do site pessoal de Marcos Ranauro.

---

## Tipo de projeto

Site pessoal / portfólio profissional one-page.

---

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Git
- GitHub
- Vercel

---

## Arquitetura da V1

A V1 será uma aplicação frontend estática, sem banco de dados, sem autenticação e sem backend complexo.

O projeto deve priorizar:

- performance;
- responsividade;
- SEO básico;
- organização de componentes;
- identidade visual consistente;
- facilidade de manutenção.

---

## Estrutura esperada

Estrutura base recomendada:

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    layout/
      Header.tsx
      Footer.tsx

    sections/
      Hero.tsx
      About.tsx
      Stack.tsx
      Projects.tsx
      Services.tsx
      Process.tsx
      Differentials.tsx
      Contact.tsx

    ui/
      Button.tsx
      Section.tsx
      Card.tsx
      Container.tsx

  data/
    projects.ts
    stack.ts
    services.ts

  lib/
    utils.ts
Organização dos componentes

Os componentes devem ser separados por responsabilidade:

layout: componentes estruturais globais;
sections: seções principais da página;
ui: componentes reutilizáveis;
data: conteúdo estruturado;
lib: funções auxiliares.
Regras técnicas
Usar TypeScript.
Usar Tailwind CSS.
Evitar CSS inline.
Evitar componentes grandes demais.
Evitar lógica desnecessária.
Manter conteúdo editável de forma simples.
Não implementar banco de dados na V1.
Não implementar autenticação na V1.
Não implementar Supabase na V1.
Dados do site

Na V1, os dados podem ficar em arquivos estáticos dentro de src/data.

Exemplos:

projetos;
tecnologias;
serviços;
links sociais;
textos principais.
Deploy

O deploy será feito na Vercel, conectado ao GitHub.

Fluxo esperado:

Desenvolvimento local.
Commit no Git.
Push para GitHub.
Deploy automático na Vercel.
Riscos
Criar complexidade desnecessária.
Implementar funcionalidades fora do escopo.
Exagerar em animações.
Deixar componentes grandes demais.
Misturar conteúdo, layout e lógica no mesmo arquivo.
Regra principal

A arquitetura inicial deve ser simples, limpa e suficiente para entregar uma V1 profissional.

Não adicionar backend, banco, auth ou integrações externas sem nova decisão registrada em DECISOES.md.