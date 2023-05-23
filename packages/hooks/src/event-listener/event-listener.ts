import * as React from 'react';

export default function useEventListener(
  target: EventTarget,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: Partial<AddEventListenerOptions>,
) {
  React.useEffect(() => {
    target.addEventListener(type, listener, options);

    return () => {
      target.removeEventListener(type, listener, options);
    };
  }, [listener, options, target, type]);
}
