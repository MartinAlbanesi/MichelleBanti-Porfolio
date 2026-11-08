import type { AnimationConfigWithData, AnimationItem } from 'lottie-web';

type Options = Partial<Omit<AnimationConfigWithData<'svg'>, 'container' | 'animationData'>>;

/**
 * Carga una animación Lottie en `container` cuando el navegador está libre, así el reproductor
 * no compite con el contenido principal. Lo que tenga el contenedor (un respaldo estático) se
 * reemplaza al estar lista; si la carga falla, queda el respaldo.
 * Con "reducir movimiento" no arranca sola; `onReady` decide en qué fotograma queda.
 */
export function lazyLottie(
  container: HTMLElement,
  load: () => Promise<{ default: unknown }>,
  options: Options = {},
  onReady?: (anim: AnimationItem, reduce: boolean) => void,
) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const run = async () => {
    try {
      const [{ default: lottie }, { default: animationData }] = await Promise.all([
        import('lottie-web/build/player/lottie_light'),
        load(),
      ]);
      container.replaceChildren();
      container.classList.remove('skeleton');
      const anim = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: !reduce,
        animationData,
        ...options,
      });
      onReady?.(anim, reduce);
    } catch {
      /* queda el respaldo estático */
    }
  };
  'requestIdleCallback' in window ? requestIdleCallback(run) : setTimeout(run, 300);
}
