# Integração com o aplicativo

**Última atualização:** junho/2026

## Arquivo central

Toda URL para o app passa por `src/config/appLinks.ts`.

```ts
NEXT_PUBLIC_APP_URL  →  https://app.chamadopro.com.br (padrão)
```

## Regra de CTAs no site

| Permitido no site | Não permitido no site |
|-------------------|------------------------|
| Entrar no app | Formulário de pedido |
| Cadastrar-se (cliente/prestador) | Pagamento |
| Explicar fluxo pós-login | Simular orçamento |

Textos de botão devem deixar claro que a ação continua **no aplicativo**.

## Mapa de links

| Função em `appLinks` | URL no app | Quando usar |
|----------------------|------------|-------------|
| `login` | `/login` | Header “Entrar”, acesso genérico |
| `cadastrarCliente` | `/register-cliente` | Header “Cadastrar-se”, novos clientes |
| `register` | `/register` | Cadastro geral (raro no site) |
| `cadastroPrestador` | `/cadastro-prestador` | Páginas para prestadores |
| `entrarParaPedirServico()` | `/login?redirect=…/posts/create?fluxo=chama-ai` | Intenção de solicitar serviço **após** login |
| `entrarChamaAi()` | Idem | Alias semântico |
| `politicaPrivacidade` | `/politica-de-privacidade` | Footer (hospedado no app) |
| `termosCliente` | `/termos-de-uso-cliente` | Footer |
| `termosPrestador` | `/termos-de-uso-prestador` | Footer |

## Fluxo canônico de pedido

Espelha `PEDIR_SERVICO_PATH` em `frontend/src/config/createPostNavigation.ts` (repo `social`):

```
/posts/create?fluxo=chama-ai
```

**Não usar** no site:

- `/solicitar-servico` — fluxo de lead a partir de post existente (`?post=`), não pedido genérico
- `/chama-ai` — rota inexistente; Chama.AI vive dentro de `posts/create`

## Padrão de redirect pós-login

```
https://app.chamadopro.com.br/login?redirect=%2Fposts%2Fcreate%3Ffluxo%3Dchama-ai
```

Implementado por `loginWithRedirect()` em `appLinks.ts`.

## Contato institucional

```ts
siteContact.email  →  contato@chamadopro.com.br
```

Usado em `/contato`, `/parceiros` e footer.

## UTMs (futuro)

Ao implementar campanhas, padronizar:

```
?utm_source=site&utm_medium=cta&utm_campaign={pagina}
```

## Backlog no monorepo `social`

Itens que facilitam a integração mas ficam no repo do app/API:

- CORS: incluir `https://chamadopro.com.br` em `CORS_ORIGINS` (se houver fetch no browser)
- Deep-link por slug de especialidade em `posts/create` (hoje só `especialidade_id`)
- Endpoints públicos por slug: `/api/public/categorias/:slug`
