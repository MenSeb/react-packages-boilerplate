defineMatchMedia();

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

  return {
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
}
