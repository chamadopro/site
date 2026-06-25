# SEO e catálogo de serviços

**Última atualização:** junho/2026

## Escopo V1

| Tipo | Quantidade | Rota |
|------|------------|------|
| Hub | 1 | `/servicos` |
| Categorias | 9 | `/servicos/[categoria]` |
| Especialidades | 35 | `/servicos/[categoria]/[especialidade]` |
| Institucionais | 8 | home, como-funciona, para-clientes, etc. |

**Total no build:** ~57 rotas.

## Estrutura de URLs

```
/servicos
/servicos/construcao-reforma
/servicos/hidraulica-gas/encanador
```

Slugs alinhados a `backend/src/config/catalogoCategoriasEspecialidades.ts` (repo `social`).

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

Categoria `vitrine` do backend **não** entra no site (sem especialidades públicas).

## Dados do catálogo

### Runtime (ISR)

`fetchCatalogo()` em `src/lib/catalog.ts`:

```
GET {NEXT_PUBLIC_API_URL}/public/categorias
revalidate: 60 segundos
```

### Fallback estático

`CATALOGO_ESTATICO` no mesmo arquivo — usado se a API falhar no build.

**Manutenção:** ao alterar o catálogo no backend, atualizar `CATALOGO_ESTATICO` e `generateStaticParams` até haver script de sync.

## Metadata

- `layout.tsx`: `metadataBase` = `https://chamadopro.com.br`
- Categorias/especialidades: `generateMetadata()` por rota
- Template de title: `%s | ChamadoPro`

## Sitemap e robots

| Arquivo | Origem |
|---------|--------|
| `/sitemap.xml` | `src/app/sitemap.ts` |
| `/robots.txt` | `public/robots.txt` |

## SEO — pendências

| Item | Status |
|------|--------|
| Copy único por especialidade (150–250 palavras) | Pendente — risco de thin content hoje |
| JSON-LD (`Organization`, `Service`, `BreadcrumbList`) | Pendente |
| Open Graph images | Pendente |
| `canonical` explícito por página | Pendente |
| Páginas por cidade (V2) | Fora do escopo V1 |
| Blog (V2) | Fora do escopo V1 |

## Páginas institucionais

| Rota | Propósito |
|------|-----------|
| `/` | Home, grid de categorias |
| `/como-funciona` | Jornada cliente e prestador |
| `/para-clientes` | Benefícios para quem contrata |
| `/para-prestadores` | Benefícios para prestadores |
| `/sobre` | Sobre a empresa |
| `/contato` | E-mail de contato |
| `/faq` | Perguntas frequentes |
| `/parceiros` | Parceiros (placeholder V1) |

## Google Search Console

Arquivos de verificação antigos foram removidos do repo. Reconfigurar após deploy em `chamadopro.com.br`.
