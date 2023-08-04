export function defineScroll() {
  Object.defineProperty(window, 'scroll', {
    writable: true,
    configurable: true,
    value: mockScroll,
  });

  Object.defineProperty(window, 'scrollTo', {
    writable: true,
    configurable: true,
    value: mockScroll,
  });
}

export function mockScroll({ behavior, left, top }: ScrollToOptions) {
  const { documentElement } = document;

  if (behavior && behavior !== 'auto')
    documentElement.style.scrollBehavior = behavior;

  if (left !== undefined) documentElement.scrollLeft = left;
  if (top !== undefined) documentElement.scrollTop = top;
}

export function resetScroll() {
  const { documentElement } = document;

  documentElement.style.removeProperty('scroll-behavior');
  documentElement.scrollLeft = 0;
  documentElement.scrollTop = 0;
}
