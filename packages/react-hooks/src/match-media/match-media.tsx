import * as React from 'react';
import { useEventListener } from '..';

export interface UseMatchMedia {
  query: string;
  listener: EventListenerOrEventListenerObject;
  options?: Partial<AddEventListenerOptions>;
}

export function useMatchMedia({ query, listener, options }: UseMatchMedia) {
  const refMatchMedia = React.useRef(window.matchMedia(query));

  useEventListener({
    target: refMatchMedia.current,
    type: 'change',
    listener,
    options,
  });

  return refMatchMedia.current;
}
