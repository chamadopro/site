# Design system — Continuidade com o app

**Última atualização:** junho/2026

O site institucional usa a mesma linguagem visual do aplicativo ChamadoPro para que a transição site → app seja natural.

## Princípios

1. **Modo claro fixo** na V1 (sem dark mode no site).
2. **Laranja** (`cp-accent`) nos CTAs primários do site.
3. **Header branco** com borda cinza — espelha o header guest do app.
4. **Logo:** ícone `public/logo.svg` + wordmark “Chamado” laranja + “Pro” azul.

## Tokens CSS

Definidos em `src/app/globals.css`. Fonte canônica no app: `frontend/src/app/globals.css` (repo `social`).

| Token | Valor | Uso |
|-------|-------|-----|
| `--cp-accent` | `#ff7a00` | CTAs primários, links de destaque |
| `--cp-accent-hover` | `#e66e00` | Hover de botão primário |
| `--cp-accent-soft` | `#fffdf9` | Fundos suaves, cards de destaque |
| `--cp-background` | `#f5f5f5` | Fundo da página |
| `--cp-surface` | `#ffffff` | Header, cards |
| `--cp-surface-muted` | `#fafafa` | Hover de navegação |
| `--cp-border` | `#e8e8e8` | Bordas |
| `--cp-text-primary` | `#222222` | Títulos e corpo |
| `--cp-text-secondary` | `#777777` | Subtítulos e legendas |
| `--cp-brand-blue` | `#2563eb` | “Pro” no logotipo |
| `--cp-radius-card` | `1.25rem` | Cards de categoria e benefícios |
| `--cp-shadow` | ver CSS | Sombra leve em cards |

Classes Tailwind: `bg-cp-accent`, `text-cp-text-primary`, `rounded-cp-card`, etc. (via `@theme inline`).

## Tipografia

- **Família:** Inter (`next/font/google` em `src/app/layout.tsx`)
- Títulos: `font-bold`, tracking tight
- Corpo: `text-cp-text-secondary`, `leading-relaxed`

## Componentes

| Componente | Arquivo | Notas |
|------------|---------|-------|
| Logo | `src/components/Logo.tsx` | Sem branding dinâmico na V1 |
| Button / ButtonLink | `src/components/ui/Button.tsx` | Primário laranja; outline para secundário |
| Header | `src/components/layout/Header.tsx` | Sticky, menu mobile |
| Footer | `src/components/layout/Footer.tsx` | Links institucionais + legais no app |
| PageHero | `src/components/layout/PageShell.tsx` | Cabeçalho de páginas internas |

## Botões no site vs app

No **app**, o botão `Button` primário interno costuma ser azul. No **site**, o primário é **laranja** (`cp-accent`) para reforçar a marca nas páginas de marketing.

## Assets

| Arquivo | Descrição |
|---------|-----------|
| `public/logo.svg` | Logo pin laranja (copiado do app) |
| `public/robots.txt` | SEO |

### Pendente

- Favicon / `apple-touch-icon`
- Imagem Open Graph padrão
- Hero image institucional (opcional)

## Branding dinâmico (V1.1)

O app suporta `GET /api/config/branding` (logo/nome do admin). O site ainda usa assets estáticos; integração futura em `Logo.tsx`.
