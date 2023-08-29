import { createRenderHook } from '@packages/react-test';
import { useLockScroll, UseLockScroll } from '../../src/lock-scroll';

const overflow = 'auto';

beforeEach(() => {
  document.body.style.overflow = overflow;
});

function getOverflow() {
  return window.getComputedStyle(document.body).getPropertyValue('overflow');
}

const props: UseLockScroll = { element: document.body, toggle: true };

const renderLockScroll = createRenderHook(useLockScroll, props);

describe('useLockScroll', () => {
  it('updates the element scroll behavior with toggle', () => {
    expect(getOverflow()).toBe(overflow);

    const { rerender } = renderLockScroll();

    expect(getOverflow()).toBe('hidden');

    rerender({ toggle: false });

    expect(getOverflow()).toBe(overflow);
  });

  it('resets the element scroll behavior on unmount', () => {
    const { unmount } = renderLockScroll();

    unmount();

    expect(getOverflow()).toBe(overflow);
  });
});
