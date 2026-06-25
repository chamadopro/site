# Roadmap — Site institucional

**Última atualização:** junho/2026

## Concluído (V1 base)

- [x] Scaffold Next.js 16 + Tailwind + TypeScript
- [x] Identidade visual `cp-*` alinhada ao app
- [x] Home, páginas institucionais (8)
- [x] Catálogo SEO: hub + 9 categorias + 35 especialidades
- [x] `appLinks` com fluxo correto (login → app → Chama.AI)
- [x] CTAs sem “pedir serviço” direto no site
- [x] `sitemap.xml`, `robots.txt`
- [x] Build de produção validado
- [x] Documentação em `docs/`

## Etapa 1 — Publicação do código

- [ ] Commit e push da branch `develop` no GitHub
- [ ] Primeiro merge `develop` → `main`
- [ ] README e `docs/` versionados

## Etapa 2 — Qualidade e conversão

- [ ] Favicon e ícones PWA
- [ ] Imagem Open Graph padrão
- [ ] JSON-LD estruturado
- [ ] Canonical URLs por página
- [ ] UTMs nos CTAs
- [ ] `not-found.tsx` customizada
- [ ] Mega-menu “Serviços” no header
- [ ] FAQ curto na home + prova social

## Etapa 3 — Conteúdo e dados

- [ ] Copy editorial único por especialidade (35 textos)
- [ ] Parceiros via `GET /api/public/parceiros`
- [ ] Branding dinâmico opcional (`/api/config/branding`)
- [ ] Script de sync catálogo backend → `catalog.ts`
- [ ] `dynamicParams` para novas especialidades sem redeploy manual

## Etapa 4 — Deploy

- [ ] DNS `chamadopro.com.br` → host do site
- [ ] SSL
- [ ] Variáveis de produção no host
- [ ] Google Search Console (nova verificação)
- [ ] CI: lint + build no push

## Etapa 5 — Integração backend (`social`)

- [ ] `CORS_ORIGINS` incluir `https://chamadopro.com.br`
- [ ] Endpoints públicos por slug (opcional)
- [ ] Deep-link `especialidade_slug` em `posts/create` (opcional)

## V2 (futuro)

- Blog / central de ajuda
- Landing pages por cidade
- Campanhas com templates e UTMs
- Catálogo Fase 2 (~120 especialidades)
- Analytics (GA4 ou similar)
