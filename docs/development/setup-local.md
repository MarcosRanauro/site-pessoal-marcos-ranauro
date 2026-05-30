# Setup Local — Site Pessoal Marcos Ranauro

## Objetivo

Explicar como rodar o projeto localmente.

---

## Pré-requisitos

Antes de rodar o projeto, é necessário ter instalado:

- Node.js 20 ou superior
- npm
- Git
- VS Code

---

## Clonar o projeto

Quando o projeto já estiver no GitHub:

```bash
git clone URL_DO_REPOSITORIO
cd site-pessoal-marcos-ranauro
Instalar dependências
npm install
Rodar localmente
npm run dev

Acessar no navegador:

http://localhost:3000
Build de produção
npm run build
Rodar lint
npm run lint
Variáveis de ambiente

Na V1, o projeto não deve exigir variáveis de ambiente obrigatórias.

Caso alguma variável seja criada no futuro, ela deve ser documentada em:

.env.example
Stack local
Next.js
TypeScript
Tailwind CSS
App Router
Observações

A V1 não usa:

banco de dados;
Supabase;
autenticação;
backend complexo;
API externa.
Checklist antes de iniciar desenvolvimento
 Rodar npm install
 Rodar npm run dev
 Abrir http://localhost:3000
 Confirmar que o projeto carrega sem erro
 Conferir se CLAUDE.md existe
 Conferir se CONTEXT.md existe
 Conferir se DECISOES.md existe
 Conferir se a pasta /docs existe
Regra principal

Antes de implementar qualquer alteração relevante, consultar:

CLAUDE.md
CONTEXT.md
DECISOES.md
documentos em /docs