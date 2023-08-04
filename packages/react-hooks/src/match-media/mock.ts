export const mapMatchMedia = new Map<string, MediaQueryList>();

export function dispatchMatchMedia(
  mediaQuery: string,
  event = new Event('change'),
) {
  if (mapMatchMedia.has(mediaQuery))
    (mapMatchMedia.get(mediaQuery) as MediaQueryList).dispatchEvent(event);
}

export function defineMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: mockMatchMedia,
  });
}

export function mockMatchMedia(mediaQuery: string): MediaQueryList {
  let mediaListener: EventListener | undefined = undefined;
  let mediaMatches = true;

  function onchange(event: Partial<MediaQueryListEvent>) {
    mediaMatches = event.matches === undefined ? !mediaMatches : event.matches;

    if (mediaListener !== undefined)
      mediaListener({
        matches: mediaMatches,
        media: mediaQuery,
      } as MediaQueryListEvent);
  }

  const mediaQueryList: MediaQueryList = {
    get matches() {
      return mediaMatches;
    },
    get media() {
      return mediaQuery;
    },
    onchange,
    dispatchEvent: (event: Partial<MediaQueryListEvent>) => {
      onchange(event);

      return !(event.cancelable || event.defaultPrevented);
    },
    addEventListener: (type: 'change', listener: EventListener) => {
      mediaListener = listener;
    },
    removeEventListener: (type: 'change', listener: EventListener) => {
      if (mediaListener === listener) mediaListener = undefined;
    },
    /** @deprecated */
    addListener: (listener: EventListener) => {
      mediaListener = listener;
    },
    /** @deprecated */
    removeListener: (listener: EventListener) => {
      if (mediaListener === listener) mediaListener = undefined;
    },
  };

  mapMatchMedia.set(mediaQuery, mediaQueryList);

  return mediaQueryList;
}
