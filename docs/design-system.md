# Design System — Marcos Ranauro

**Conceito:** Editorial e expressivo, com execução técnica de dev sênior. "Engenharia como ofício."

Proporção visual: 90% editorial monocromático / 10% tech (acento lime com parcimônia extrema).

---

## Paleta de cores

### Superfícies

| Token Tailwind           | Hex       | Uso                                         |
|--------------------------|-----------|---------------------------------------------|
| `bg-background`          | `#0A0A0A` | Fundo base da página                        |
| `bg-surface`             | `#111111` | Superfície levemente elevada (seções alt)   |
| `bg-surface-elevated`    | `#161616` | Cards, modais, elementos flutuantes         |
| `bg-background-alt`      | `#111111` | Alias de compat. → `surface`                |
| `bg-card`                | `#161616` | Alias de compat. → `surface-elevated`       |

### Bordas

| Token Tailwind           | Hex       | Uso                                         |
|--------------------------|-----------|---------------------------------------------|
| `border-border`          | `#222222` | Bordas padrão (sutis)                       |
| `border-border-strong`   | `#2A2A2A` | Bordas em hover, separadores de ênfase      |

### Tipografia

| Token Tailwind           | Hex       | Uso                                         |
|--------------------------|-----------|---------------------------------------------|
| `text-foreground`        | `#FAFAFA` | Texto primário (branco levemente quente)    |
| `text-muted`             | `#A1A1A1` | Texto secundário, descrições                |
| `text-muted-foreground`  | `#6B6B6B` | Texto terciário, metadados discretos        |
| `text-subtle`            | `#6B6B6B` | Alias de compat. → `muted-foreground`       |

### Acento

| Token Tailwind | Hex       | Uso                                                              |
|----------------|-----------|------------------------------------------------------------------|
| `bg-accent`    | `#C6FF00` | **< 5% da tela.** Hovers pontuais, indicadores, detalhes ativos |
| `text-accent`  | `#C6FF00` | Labels de destaque, ícones ativos, cursor personalizado          |
| `border-accent`| `#C6FF00` | Bordas de foco, anéis de hover                                   |

### Regra de ouro do acento lime

> O lime existe para ser surpreendente. Se aparecer em toda parte, perde o impacto.

- **Nunca** em áreas grandes (fundos, títulos principais, blocos inteiros)
- **Somente** em: estado hover, indicador de status ativo, cursor, detalhe decorativo pontual
- Máximo de **1-2 ocorrências visíveis simultaneamente** na viewport
- Em dúvida: use `text-muted` em vez de `text-accent`

---

## Tipografia

### Famílias

| CSS Variable          | Fonte          | Pesos    | Uso                                     |
|-----------------------|----------------|----------|-----------------------------------------|
| `--font-space-grotesk`| Space Grotesk  | 500, 700 | Títulos display, headings expressivos   |
| `--font-inter`        | Inter          | 400, 500 | Corpo, UI, labels                       |
| `--font-geist-mono`   | Geist Mono     | default  | Dados técnicos, numeração, código       |

Classes Tailwind geradas:
- `font-heading` → Space Grotesk
- `font-sans` → Inter (padrão do body)
- `font-mono` → Geist Mono

### Escala tipográfica

| Token CSS          | Valor                       | Uso                                          |
|--------------------|-----------------------------|----------------------------------------------|
| `--fs-display`     | `clamp(3.5rem, 7vw, 7rem)`  | Hero name, títulos de impacto máximo         |
| `--fs-h1`          | `clamp(2.5rem, 5vw, 5rem)`  | Títulos de seção principais                  |
| `--fs-h2`          | `clamp(1.75rem, 3vw, 2.5rem)` | Sub-seções, cards em destaque              |
| `--fs-h3`          | `clamp(1.125rem, 1.5vw, 1.25rem)` | Itens de lista, títulos de card        |
| `--fs-body-lg`     | `1.125rem`                  | Lead text, destaques de parágrafo            |
| `--fs-body`        | `1rem`                      | Texto corrido                                |
| `--fs-label`       | `0.6875rem`                 | Labels uppercase, numeração, metadados       |
| `--fs-mono`        | `0.875rem`                  | Código, dados técnicos                       |

### Princípios tipográficos

- Contraste dramático entre display e body: não tenha medo de tamanhos grandes
- Títulos: `font-heading` (Space Grotesk) com `font-bold` (700) e `--ls-tight` (-0.02em)
- Labels e numeração: `font-mono`, uppercase, `--ls-wide` (0.2em), `text-muted`
- Corpo: `font-sans` (Inter), `--ls-normal`, `text-muted` para leveza visual

---

## Espaçamento e ritmo vertical

| Token CSS                | Valor                       | Uso                                 |
|--------------------------|-----------------------------|-------------------------------------|
| `--space-section`        | `clamp(5rem, 10vw, 8rem)`   | Padding vertical das seções         |
| `--space-section-inner`  | `clamp(2.5rem, 5vw, 4rem)`  | Gap entre elementos dentro da seção |

Princípio: **espaço generoso é sofisticação**. Não comprimir. Deixar o conteúdo respirar.

---

## Componentes base

### Section
Wrapper de seção. `py-24` (pode ser atualizado para `var(--space-section)` nas próximas fases).

### Container
`max-w-6xl` centrado com padding horizontal responsivo. Não alterar a largura máxima sem justificativa.

### Button
- `primary`: `bg-foreground text-background` — branco sobre preto
- `secondary`: `border border-border` — fantasma com borda sutil
- Foco: `ring-accent` (lime)

### Card
`bg-card border-border` com `hover:border-border-strong`. Sem hover em accent — o lime é reservado para detalhes pontuais nos cards das seções.

---

## O que NÃO fazer

- ❌ `text-accent` em parágrafos corridos
- ❌ `bg-accent` em qualquer área maior que um ícone ou ponto decorativo
- ❌ Múltiplos elementos com `border-accent` visíveis ao mesmo tempo
- ❌ Animações pesadas ou partículas
- ❌ Neon, gradientes coloridos, múltiplas cores de destaque
- ❌ Tipografia decorativa (fontes display apenas em títulos — nunca em corpo)
