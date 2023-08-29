import React from 'react';

export interface UseLockScroll {
  element: HTMLElement;
  toggle: boolean;
}

export function useLockScroll({ element, toggle }: UseLockScroll) {
  const refOverflow = React.useRef(
    window.getComputedStyle(element).getPropertyValue('overflow'),
  );

  React.useEffect(() => {
    const { current: overflow } = refOverflow;

    element.style.overflow = toggle ? 'hidden' : overflow;

    return () => {
      element.style.overflow = overflow;
    };
  }, [element, toggle]);
}
