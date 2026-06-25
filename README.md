# ChamadoPro — Site institucional

Site de marketing e SEO em **chamadopro.com.br**. O aplicativo fica em **app.chamadopro.com.br** ([`chamadopro/social`](https://github.com/chamadopro/social)).

## Início rápido

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Documentação

Toda a documentação do projeto está em **[`docs/`](./docs/README.md)**:

- [Arquitetura](./docs/ARQUITETURA.md) — site vs app, fluxo do visitante
- [Setup](./docs/SETUP.md) — ambiente local e build
- [Design system](./docs/DESIGN_SYSTEM.md) — identidade visual
- [Integração com o app](./docs/INTEGRACAO_APP.md) — CTAs e `appLinks`
- [SEO e catálogo](./docs/SEO_CATALOGO.md) — rotas e sitemap
- [Roadmap](./docs/ROADMAP.md) — pendências

## Regra principal

O site **não** processa pedidos. O visitante entra ou se cadastra no **aplicativo** e só então publica o pedido (fluxo Chama.AI).

## Branches

- `develop` — desenvolvimento
- `main` — produção
