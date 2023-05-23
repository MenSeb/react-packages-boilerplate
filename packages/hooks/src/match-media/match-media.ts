import * as React from 'react';
import { useEventListener } from '../event-listener';

export default function useMatchMedia(
  query: string,
  listener: EventListenerOrEventListenerObject,
  options?: Partial<AddEventListenerOptions>,
) {
  const refMatchMedia = React.useRef(window.matchMedia(query));

  useEventListener(refMatchMedia.current, 'change', listener, options);

  return refMatchMedia.current;
}
