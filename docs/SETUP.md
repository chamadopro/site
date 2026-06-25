# Setup — Desenvolvimento local

**Última atualização:** junho/2026

## Pré-requisitos

- Node.js 20+
- npm
- (Opcional) Monorepo `chamadopro/social` rodando para API e app locais

## Instalação

```bash
cd C:\Users\trova\Documents\Projetos_Alex\chamadopro_site

git checkout develop
npm install
```

## Variáveis de ambiente

Copie o exemplo:

```bash
cp .env.example .env.local
```

| Variável | Produção | Desenvolvimento local |
|----------|----------|------------------------|
| `NEXT_PUBLIC_APP_URL` | `https://app.chamadopro.com.br` | `http://localhost:3000` |
| `NEXT_PUBLIC_API_URL` | `https://app.chamadopro.com.br/api` | `http://localhost:3001/api` |

> O arquivo `.env.example` pode ser versionado (`.gitignore` permite `!.env.example`).

## Comandos

```bash
npm run dev      # http://localhost:3000
npm run build    # build de produção (57 rotas estáticas/SSG)
npm run start    # servir build
npm run lint     # ESLint
```

## Portas com o monorepo `social`

Se o app e a API estiverem no mesmo ambiente de desenvolvimento do `social`:

| Serviço | Porta típica |
|---------|----------------|
| Site (este repo) | 3000 |
| Frontend app | 3000 — **conflito**; use outra porta para um dos dois |

Para rodar site e app ao mesmo tempo:

```bash
# No chamadopro_site
npx next dev -p 3002
```

Ajuste `NEXT_PUBLIC_APP_URL` conforme a porta do frontend do `social`.

## Build

O build gera:

- Páginas institucionais estáticas
- 9 páginas de categoria + 35 de especialidade (SSG)
- `sitemap.xml` dinâmico

Se a API não estiver acessível no build, o catálogo estático em `src/lib/catalog.ts` é usado como fallback.

## Clone do repositório

```bash
git clone https://github.com/chamadopro/site.git chamadopro_site
cd chamadopro_site
git checkout develop
```
