# DECISOES.md — Site Pessoal Marcos Ranauro

Este documento registra decisões importantes do projeto.

---

## 2026-05-30 — Usar Next.js com TypeScript

**Status:** Aceita

**Contexto:**  
O projeto precisa de uma base moderna, performática e adequada para um site pessoal profissional.

**Decisão:**  
Usar Next.js com TypeScript como base do projeto.

**Motivo:**  
Next.js oferece boa estrutura para páginas públicas, SEO, performance, deploy na Vercel e evolução futura. TypeScript melhora segurança, manutenção e clareza do código.

**Alternativas consideradas:**  
- React com Vite
- HTML/CSS/JS puro
- Astro
- WordPress

**Impacto positivo:**  
- Boa integração com Vercel.
- Stack moderna.
- Facilidade para evoluir o projeto.
- Melhor organização com TypeScript.

**Impacto negativo ou riscos:**  
- Pode ser mais robusto do que o necessário para um site simples.
- Exige atenção para não criar complexidade desnecessária.

**Consequências práticas:**  
O projeto deve seguir padrões do Next.js, App Router, TypeScript e componentes reutilizáveis.

---

## 2026-05-30 — Não usar banco de dados na V1

**Status:** Aceita

**Contexto:**  
A primeira versão será um site pessoal/portfólio institucional, sem login, dashboard ou dados dinâmicos.

**Decisão:**  
Não usar banco de dados na V1.

**Motivo:**  
Não há necessidade real de banco neste momento. Usar banco agora aumentaria complexidade sem benefício direto.

**Alternativas consideradas:**  
- Supabase
- PostgreSQL
- CMS
- Arquivos estáticos

**Impacto positivo:**  
- Projeto mais simples.
- Menos custo.
- Menos risco.
- Deploy mais rápido.
- Menos variáveis de ambiente.

**Impacto negativo ou riscos:**  
- Projetos e conteúdos precisarão ser editados diretamente no código ou em arquivos estáticos.

**Consequências práticas:**  
A V1 será estática, sem autenticação e sem persistência de dados.

---

## 2026-05-30 — Não usar Supabase na V1

**Status:** Aceita

**Contexto:**  
Marcos usa Supabase em outros projetos, mas este site pessoal não precisa de autenticação, storage ou banco de dados na primeira versão.

**Decisão:**  
Não usar Supabase na V1.

**Motivo:**  
Supabase seria útil para sistemas com dados, usuários, storage ou painel administrativo. Para este site, seria complexidade desnecessária.

**Alternativas consideradas:**  
- Usar Supabase desde o início
- Usar banco local
- Não usar banco

**Impacto positivo:**  
- Menos configuração.
- Menos risco de erro.
- Menos dependência externa.
- Projeto mais rápido de publicar.

**Impacto negativo ou riscos:**  
- Caso o site evolua para blog, CMS ou painel admin, Supabase poderá ser considerado depois.

**Consequências práticas:**  
Não criar tabelas, autenticação, storage ou variáveis Supabase na V1.

---

## 2026-05-30 — Usar Vercel para deploy

**Status:** Aceita

**Contexto:**  
O projeto será desenvolvido com Next.js e precisa de deploy simples, rápido e integrado ao GitHub.

**Decisão:**  
Usar Vercel como plataforma de deploy.

**Motivo:**  
Vercel tem integração nativa com Next.js, GitHub, previews automáticos e configuração simples de domínio.

**Alternativas consideradas:**  
- Netlify
- Cloudflare Pages
- VPS
- Render

**Impacto positivo:**  
- Deploy simples.
- Preview automático.
- Boa integração com Next.js.
- Fácil conexão com domínio.

**Impacto negativo ou riscos:**  
- Dependência de plataforma externa.
- Algumas configurações avançadas podem exigir atenção futura.

**Consequências práticas:**  
O repositório GitHub deverá ser conectado à Vercel após a base inicial estar funcionando.

---

## 2026-05-30 — Direção visual premium editorial tech

**Status:** Aceita

**Contexto:**  
O site precisa transmitir profissionalismo, tecnologia, maturidade técnica e bom gosto visual.

**Decisão:**  
Adotar a direção visual “premium editorial tech com interatividade futurista controlada”.

**Motivo:**  
Essa direção equilibra elegância, autoridade e modernidade, sem cair em visual gamer, neon exagerado ou template genérico.

**Alternativas consideradas:**  
- Minimalista claro
- Currículo online tradicional
- Cyber/neon futurista
- Visual SaaS corporativo
- Portfólio dev genérico

**Impacto positivo:**  
- Visual mais autoral.
- Aparência premium.
- Boa associação com tecnologia.
- Diferenciação em relação a portfólios comuns.

**Impacto negativo ou riscos:**  
- Exige cuidado para não exagerar em animações, glow e efeitos futuristas.
- Pode ficar frio demais se a copy não trouxer personalidade.

**Consequências práticas:**  
A interface deve seguir a proporção 70% editorial premium e 30% futurista tech, com fundo escuro, tipografia forte, cards sofisticados e microinterações suaves.

---

## 2026-05-31 — Redesign: nova direção visual "Editorial expressivo"

**Status:** Aceita

**Contexto:**  
Após revisão do deploy da V1, a direção visual "premium editorial tech com interatividade futurista" foi considerada genérica. O site precisava de mais caráter autoral e posicionamento mais claro.

**Decisão:**  
Adotar nova direção: "Editorial e expressivo, com execução técnica de dev sênior. Engenharia como ofício."

Paleta monocromática rigorosa (#0A0A0A base) com acento lime (#C6FF00) usado em menos de 5% da tela. Tipografia com contraste dramático: Space Grotesk nos títulos, Inter no corpo.

**Motivo:**  
A paleta azul/ciano era comum em portfólios de dev. A monocromática com lime é mais ousada, editorial e difícil de imitar. O conceito "engenharia como ofício" comunica senioridade sem palavras.

**Alternativas consideradas:**  
- Manter a paleta azul/ciano (descartado — genérico)
- Paleta roxa (descartado — associação SaaS)
- Verde neon (descartado — excessivamente gamer)

**Impacto positivo:**  
- Visual mais autoral e memorável
- Diferenciação clara de portfólios genéricos
- Escala de cores mais controlável e sofisticada

**Impacto negativo ou riscos:**  
- Site ficará em estado transicional durante o redesign (seções com tokens antigos sem valor)
- Requer redesign completo das seções (em fases seguintes)

**Consequências práticas:**  
Tokens antigos (accent-blue, accent-cyan, accent-purple) removidos. Seções serão redesenhadas fase a fase. Regra do acento: < 5% da tela, nunca em áreas grandes. Ver `docs/design-system.md` para referência completa.