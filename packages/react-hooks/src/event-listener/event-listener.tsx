import * as React from 'react';

export interface UseEventListener {
  target: EventTarget;
  type: string;
  listener: EventListenerOrEventListenerObject;
  options?: Partial<AddEventListenerOptions>;
}

export function useEventListener({
  target,
  type,
  listener,
  options,
}: UseEventListener) {
  React.useEffect(() => {
    target.addEventListener(type, listener, options);

    return () => {
      target.removeEventListener(type, listener, options);
    };
  }, [listener, options, target, type]);
}
