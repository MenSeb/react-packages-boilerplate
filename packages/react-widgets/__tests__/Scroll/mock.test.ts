import { defineScroll, resetScroll } from '@/Scroll/mock';

defineScroll();

describe('Window Scroll Mock', () => {
  afterEach(() => {
    resetScroll();
  });

  it('defines scroll and scrollTo on window', () => {
    expect(window.scroll).toBeDefined();
    expect(window.scrollTo).toBeDefined();
    expect(window.scroll).toBe(window.scrollTo);
  });

  it('resets the document scroll properties', () => {
    const { documentElement } = document;

    documentElement.style.setProperty('scroll-behavior', 'smooth');
    documentElement.scrollLeft = 100;
    documentElement.scrollTop = 100;

    expect(documentElement).toHaveStyle({ scrollBehavior: 'smooth' });
    expect(documentElement.scrollLeft).toBe(100);
    expect(documentElement.scrollTop).toBe(100);

    resetScroll();

    expect(documentElement).toHaveStyle({ scrollBehavior: '' });
    expect(documentElement.scrollLeft).toBe(0);
    expect(documentElement.scrollTop).toBe(0);
  });

  it('styles the document with scroll behavior', () => {
    const { documentElement } = document;

    window.scroll({ behavior: 'auto' });

    expect(documentElement).not.toHaveStyle({
      scrollBehavior: 'auto',
    });

    window.scroll({ behavior: 'smooth' });

    expect(documentElement).toHaveStyle({
      scrollBehavior: 'smooth',
    });

    window.scroll({ behavior: 'instant' });

    expect(documentElement).toHaveStyle({
      scrollBehavior: 'instant',
    });
  });

  it('styles the document with scroll left', () => {
    const { documentElement } = document;

    window.scroll({ left: undefined });

    expect(documentElement.scrollLeft).toBe(0);

    window.scroll({ left: 100 });

    expect(documentElement.scrollLeft).toBe(100);
  });

  it('styles the document with scroll top', () => {
    const { documentElement } = document;

    window.scroll({ top: undefined });

    expect(documentElement.scrollTop).toBe(0);

    window.scroll({ top: 100 });

    expect(documentElement.scrollTop).toBe(100);
  });
});
