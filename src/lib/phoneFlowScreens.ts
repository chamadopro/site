import { phoneFlowCacheVersion } from '@/lib/phoneFlowCache.generated';

/**
 * Sequência de telas do app no hero.
 * PNGs em public/images/flow/ — ordem pelo número: chama.ai-1 … chama.ai-6
 */
export const phoneFlowConfig = {
  directory: '/images/flow',
  intervalMs: 3500,
  slideMs: 500,
  /** Proporção média dos recortes (largura / altura) */
  aspectRatio: 283 / 638,
  defaultCaption: {
    line1: 'Pode incluir fotos na sua solicitação.',
    line2: 'Mostre o problema do jeito que for mais claro.',
  },
  frames: [
    {
      file: 'chama.ai-1.png',
      alt: 'ChamadoPro — incluir fotos na solicitação',
      label: 'Fotos',
      caption: 'Pode incluir fotos na sua solicitação.',
      captionLine2: 'Mostre o problema do jeito que for mais claro.',
    },
    {
      file: 'chama.ai-2.png',
      alt: 'ChamadoPro — gravar áudio ou escrever',
      label: 'Áudio ou texto',
      caption: 'Você pode gravar um áudio ou escrever.',
      captionLine2: 'Conte do seu jeito — o app organiza tudo.',
    },
    {
      file: 'chama.ai-3.png',
      alt: 'ChamadoPro — revisar o pedido',
      label: 'Revisão',
      caption: 'Revise o que entendemos do seu pedido.',
      captionLine2: 'Confira serviço, título e detalhes antes de postar.',
    },
    {
      file: 'chama.ai-4.png',
      alt: 'ChamadoPro — detalhes do serviço e prazo',
      label: 'Detalhes',
      caption: 'Confira tipo de serviço, orçamento e prazo.',
      captionLine2: 'Ajuste o que precisar antes de publicar.',
    },
    {
      file: 'chama.ai-5.png',
      alt: 'ChamadoPro — fotos, endereço e publicar',
      label: 'Endereço',
      caption: 'Inclua fotos, endereço e publique o pedido.',
      captionLine2: 'Tudo organizado em um só fluxo.',
    },
    {
      file: 'chama.ai-6.png',
      alt: 'ChamadoPro — pedido publicado na região',
      label: 'Pedido no ar',
      caption: 'Seu pedido fica visível e prestadores são avisados.',
      captionLine2: 'Profissionais da região já podem enviar orçamento.',
    },
  ],
} as const;

export function phoneFlowSrc(file: string, extraVersion?: string): string {
  const version = extraVersion ?? phoneFlowCacheVersion;
  return `${phoneFlowConfig.directory}/${encodeURIComponent(file)}?v=${version}`;
}
