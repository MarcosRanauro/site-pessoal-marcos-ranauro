# CLAUDE.md — Site Pessoal Marcos Ranauro

Este arquivo contém as regras que o Claude Code deve seguir neste projeto.

## Contexto do projeto

Projeto: Site Pessoal Marcos Ranauro  
Tipo: site pessoal / portfólio profissional  
Pessoa apresentada: Marcos Ranauro  
Título profissional: Fullstack Developer  
Objetivo: apresentar Marcos como desenvolvedor fullstack, atrair clientes freelancer, oportunidades profissionais, parcerias e fortalecer autoridade pessoal.

## Regra principal

Antes de implementar qualquer alteração, leia:

- `CONTEXT.md`
- `DECISOES.md`
- documentos em `/docs`

Não implemente código sem entender o escopo atual.

## Stack prevista

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Vercel
- Git/GitHub

## Escopo da V1

A primeira versão será um site one-page com:

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

Não implementar agora:

- login
- dashboard
- banco de dados
- Supabase
- autenticação
- pagamentos
- área administrativa
- blog com CMS
- backend complexo
- funcionalidades SaaS

## Direção visual

A direção visual aprovada é:

Premium editorial tech com interatividade futurista controlada.

Proporção visual:

- 70% editorial premium / black & white tech
- 30% futurista / tech interativo

O site deve parecer premium primeiro e tecnológico depois.

Evitar:

- visual gamer
- excesso de neon
- template genérico de portfólio
- partículas exageradas
- animações pesadas
- poluição visual

## Regras de implementação

1. Não criar funcionalidades fora do escopo.
2. Não alterar a stack sem registrar decisão.
3. Não usar banco de dados na V1.
4. Não usar Supabase na V1, salvo decisão futura.
5. Manter componentes organizados e reutilizáveis.
6. Evitar CSS inline desnecessário.
7. Priorizar responsividade, performance e acessibilidade.
8. Atualizar `CONTEXT.md` ao final de cada alteração relevante.
9. Registrar decisões importantes em `DECISOES.md`.
10. Informar claramente arquivos criados e alterados após cada entrega.

## Fluxo de trabalho

Antes de codar:

1. Validar o escopo.
2. Sugerir plano de implementação.
3. Listar arquivos que serão criados ou alterados.
4. Aguardar aprovação quando a mudança for grande.

Após implementar:

1. Explicar o que foi feito.
2. Informar arquivos criados.
3. Informar arquivos alterados.
4. Explicar como testar.
5. Atualizar `CONTEXT.md`.