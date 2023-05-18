import * as React from 'react';

export default function useMatchMedia(
  mediaQuery: string,
  mediaListener?: EventListener,
) {
  const refMatchMedia = React.useRef(window.matchMedia(mediaQuery));

  React.useEffect(() => {
    if (mediaListener === undefined) return;

    const { current: mediaQueryList } = refMatchMedia;

    mediaQueryList.addEventListener('change', mediaListener);

    return () => mediaQueryList.removeEventListener('change', mediaListener);
  }, [mediaListener]);

  return refMatchMedia.current;
}
