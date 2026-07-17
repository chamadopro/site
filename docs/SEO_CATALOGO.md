# SEO e catálogo de serviços

**Última atualização:** junho/2026

## Escopo atual

| Tipo | Quantidade | Rota |
|------|------------|------|
| Hub | 1 | `/servicos` |
| Categorias | 9 | `/servicos/[categoria]` |
| Especialidades | 35 | `/servicos/[categoria]/[especialidade]` |
| **Local (cidade)** | **350** | `/servicos/[categoria]/[especialidade]/[cidade]` |
| Institucionais | 8 | home, como-funciona, para-clientes, etc. |

**Total no build:** ~407 rotas (10 cidades × 35 especialidades + base).

## Estrutura de URLs

```
/servicos
/servicos/construcao-reforma
/servicos/hidraulica-gas/encanador
/servicos/hidraulica-gas/encanador/sao-paulo
```

Slugs alinhados a `backend/src/config/catalogoCategoriasEspecialidades.ts` (repo `social`).

## Cidades Fase 1 (local SEO)

Definidas em `src/lib/cidades.ts`:

- São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba
- Porto Alegre, Salvador, Recife, Fortaleza, Campinas

## Categorias Fase 1

1. `construcao-reforma` (7 especialidades)
2. `eletrica-automacao` (5)
3. `hidraulica-gas` (4)
4. `climatizacao` (3)
5. `vidros` (3)
6. `limpeza-conservacao` (4)
7. `jardinagem` (3)
8. `mudancas-transporte` (3)
9. `tecnologia` (3)

## Conteúdo SEO

- Copy por especialidade: `src/lib/seoContentData.ts` + fallback em `src/lib/seoContent.ts`
- Copy local (cidade + especialidade): `getLocalContent()` em `src/lib/seoContent.ts`
- Componente compartilhado: `src/components/servicos/ServicePageContent.tsx`

## Metadata e structured data

| Item | Implementação |
|------|----------------|
| Canonical + OG | `buildPageMetadata()` em `src/lib/metadataHelpers.ts` |
| Organization | `OrganizationJsonLd` no `layout.tsx` |
| Service + Breadcrumb + FAQ | `src/components/seo/JsonLd.tsx` nas páginas de serviço |
| Favicon / apple-touch | `/logo.png` via `layout.tsx` `icons` |

## Sitemap e robots

| Arquivo | Origem |
|---------|--------|
| `/sitemap.xml` | `src/app/sitemap.ts` (inclui URLs locais) |
| `/robots.txt` | `public/robots.txt` |

## Home como hub SEO

Seções em `src/components/home/HomeSections.tsx`:

- Chips populares → páginas locais
- Como funciona (3 passos)
- Grid de categorias
- Principais cidades
- Bloco prestador (azul) + CTA cliente (laranja)

## Google Search Console — pós-deploy

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione a propriedade `https://chamadopro.com.br`
3. Verifique via DNS (recomendado) ou arquivo HTML no host
4. Envie o sitemap: `https://chamadopro.com.br/sitemap.xml`
5. Monitore semanalmente:
   - **Desempenho** → filtrar queries com padrão `em [cidade]` ou nomes de especialidade
   - **Páginas** → indexação das URLs `/servicos/.../[cidade]`
   - **Core Web Vitals** após deploy em produção

### Métricas locais sugeridas

| Query tipo | Exemplo |
|------------|---------|
| Serviço + cidade | `encanador são paulo` |
| Especialidade | `diarista`, `eletricista residencial` |
| Marca | `chamadopro` |

## Pendências (V2)

| Item | Status |
|------|--------|
| Imagem OG dedicada (1200×630) | Pendente |
| Expandir cidades (50+) | V2 |
| Blog / dicas | V2 |
| Prova social na home | Quando houver dados reais |
