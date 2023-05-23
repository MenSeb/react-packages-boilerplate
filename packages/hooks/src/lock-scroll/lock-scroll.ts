import React from 'react';

export default function useLockScroll(toggle: boolean, element: HTMLElement) {
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
