import * as React from 'react';
import { useEventListener } from '../event-listener';

export default function useMatchMedia(
  query: string,
  listener: EventListenerOrEventListenerObject,
  options?: AddEventListenerOptions,
) {
  const refMatchMedia = React.useRef(window.matchMedia(query));

  useEventListener('change', listener, refMatchMedia.current, options);

  return refMatchMedia.current;
}
