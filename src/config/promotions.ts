/**
 * Promoções ativas do site institucional (só link + card; cadastro no app).
 * Edite PROMO_CTA_URL / paths aqui quando mudar a campanha.
 */

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/+$/, '') ||
  'https://app.chamadopro.com.br';

/** URL do CTA — abre o cadastro de prestador com a campanha. */
export const PROMO_CTA_URL =
  `${appUrl}/cadastro-prestador/promocao?campanha=seu-trabalho-vale-premio`;

export const providerPromo = {
  id: 'seu-trabalho-vale-premio',
  label: 'Promoção',
  title: 'Seu Trabalho Vale Prêmio',
  subtitle: 'Cadastre-se como prestador e concorra ao número da sorte.',
  cta: 'Quero me cadastrar',
  href: PROMO_CTA_URL,
  /** Arte desktop (faixa larga). Ideal: 1600×320 (5:1) ou similar. */
  imageDesktopSrc: '/promocoes/seu-trabalho-vale-premio/capa-desktop.jpeg',
  /** Arte mobile (mais compacta / empilhada). */
  imageMobileSrc: '/promocoes/seu-trabalho-vale-premio/capa-mobile.jpeg',
  imageAlt: 'Promoção Seu Trabalho Vale Prêmio — ChamadoPro',
} as const;
