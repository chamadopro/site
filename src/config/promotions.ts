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
  cta: 'Cadastrar Agora',
  href: PROMO_CTA_URL,
  /** Arte desktop panorâmica (~7.4:1). Query força cache nova. */
  imageDesktopSrc: '/promocoes/seu-trabalho-vale-premio/capa-desktop.jpeg?v=3',
  /** Arte mobile compacta. */
  imageMobileSrc: '/promocoes/seu-trabalho-vale-premio/capa-mobile.jpeg?v=3',
  imageAlt: 'Promoção Seu Trabalho Vale Prêmio — ChamadoPro',
} as const;
