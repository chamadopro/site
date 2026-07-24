import { phoneFlowCacheVersion } from '@/lib/phoneFlowCache.generated';

/**
 * Sequência de telas do app no hero.
 * PNGs em public/images/flow/ — ordem: chama.ai-1 … chama.ai-6
 *
 * Entre capítulos entra uma “bolha” interna (slide de tip),
 * para o visitante entender onde o fluxo começa e termina.
 */
export const phoneFlowChapters = [
  {
    id: 'comeco',
    name: 'Começo',
    step: '1 / 4',
    title: 'Aqui começa sua solicitação',
    body: 'Se precisar, pode inserir fotos do problema.',
    accent: 'orange' as const,
  },
  {
    id: 'do-seu-jeito',
    name: 'Do seu jeito',
    step: '2 / 4',
    title: 'Fale ou escreva do seu jeito',
    body: 'Rápido e simples — sem preocupação. A gente entende.',
    accent: 'orange' as const,
  },
  {
    id: 'revisao',
    name: 'Revisão',
    step: '3 / 4',
    title: 'É só revisar',
    body: 'Confira se está tudo certo antes de publicar.',
    accent: 'orange' as const,
  },
  {
    id: 'no-ar',
    name: 'No ar',
    step: '4 / 4',
    title: 'Pronto — solicitação no ar!',
    body: 'Fica disponível e os profissionais da região são avisados.',
    accent: 'blue' as const,
  },
] as const;

export type PhoneFlowChapterId = (typeof phoneFlowChapters)[number]['id'];
export type PhoneFlowChapter = (typeof phoneFlowChapters)[number];

export const phoneFlowConfig = {
  directory: '/images/flow',
  /** Tempo padrão nas screenshots */
  intervalMs: 3200,
  /** Tempo um pouco maior nas bolhas internas (para ler) */
  tipIntervalMs: 3800,
  slideMs: 520,
  /** Proporção média dos recortes (largura / altura) */
  aspectRatio: 283 / 638,
  frames: [
    {
      file: 'chama.ai-1.png',
      alt: 'ChamadoPro — começar solicitação e fotos',
      label: 'Fotos',
      chapterId: 'comeco' as const,
    },
    {
      file: 'chama.ai-2.png',
      alt: 'ChamadoPro — fotos anexadas na solicitação',
      label: 'Fotos',
      chapterId: 'comeco' as const,
    },
    {
      file: 'chama.ai-3.png',
      alt: 'ChamadoPro — gravar áudio ou escrever',
      label: 'Áudio ou texto',
      chapterId: 'do-seu-jeito' as const,
    },
    {
      file: 'chama.ai-4.png',
      alt: 'ChamadoPro — revisar o pedido',
      label: 'Revisão',
      chapterId: 'revisao' as const,
    },
    {
      file: 'chama.ai-5.png',
      alt: 'ChamadoPro — fotos, endereço e publicar',
      label: 'Revisão',
      chapterId: 'revisao' as const,
    },
    {
      file: 'chama.ai-6.png',
      alt: 'ChamadoPro — pedido publicado na região',
      label: 'Pedido no ar',
      chapterId: 'no-ar' as const,
    },
  ],
} as const;

export type PhoneFlowScreenFrame = (typeof phoneFlowConfig.frames)[number];

export type PhoneFlowSlide =
  | { kind: 'tip'; id: string; chapter: PhoneFlowChapter }
  | { kind: 'screen'; id: string; frame: PhoneFlowScreenFrame; frameIndex: number };

/** Playlist estável: tip do capítulo → screenshots daquele capítulo. */
export function buildPhoneFlowPlaylist(): PhoneFlowSlide[] {
  const slides: PhoneFlowSlide[] = [];
  let lastChapter: PhoneFlowChapterId | null = null;

  phoneFlowConfig.frames.forEach((frame, frameIndex) => {
    if (frame.chapterId !== lastChapter) {
      const chapter = getPhoneFlowChapter(frame.chapterId);
      slides.push({
        kind: 'tip',
        id: `tip-${chapter.id}`,
        chapter,
      });
      lastChapter = frame.chapterId;
    }

    slides.push({
      kind: 'screen',
      id: `screen-${frame.file}`,
      frame,
      frameIndex,
    });
  });

  return slides;
}

export function getPhoneFlowChapter(chapterId: PhoneFlowChapterId) {
  return phoneFlowChapters.find((c) => c.id === chapterId) ?? phoneFlowChapters[0];
}

export function phoneFlowSrc(file: string, extraVersion?: string): string {
  const version = extraVersion ?? phoneFlowCacheVersion;
  return `${phoneFlowConfig.directory}/${encodeURIComponent(file)}?v=${version}`;
}
