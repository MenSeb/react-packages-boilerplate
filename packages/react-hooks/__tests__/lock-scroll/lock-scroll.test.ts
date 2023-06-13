import { renderHook } from '@testing-library/react';
import { useLockScroll } from '../../src/lock-scroll';

const element = document.body;
const overflow = 'auto';

beforeEach(() => {
  element.style.overflow = overflow;
});

function getOverflow(elt: Element = element) {
  return window.getComputedStyle(elt).getPropertyValue('overflow');
}

describe('useLockScroll', () => {
  it('updates the element scroll behavior with toggle', () => {
    expect(getOverflow()).toBe(overflow);

    const { rerender } = renderHook(
      (toggle: boolean) => useLockScroll(toggle, element),
      { initialProps: true },
    );

    expect(getOverflow()).toBe('hidden');

    rerender(false);

    expect(getOverflow()).toBe(overflow);
  });

  it('resets the element scroll behavior on unmount', () => {
    const { unmount } = renderHook(() => useLockScroll(true, element));

    unmount();

    expect(getOverflow()).toBe(overflow);
  });
});
