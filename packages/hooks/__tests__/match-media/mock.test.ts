import { dispatchMatchMedia } from '../../src/match-media/mock';
import { mediaListener, mediaQuery } from './index';

describe('Match Media Mock', () => {
  it('defines matchMedia on window', () => {
    expect(window.matchMedia).toBeDefined();
  });

  it('returns a media query list', () => {
    expect(window.matchMedia(mediaQuery)).toMatchObject({
      matches: expect.any(Boolean) as boolean,
      media: expect.any(String) as string,
      onchange: expect.any(Function) as () => void,
      addEventListener: expect.any(Function) as () => void,
      removeEventListener: expect.any(Function) as () => void,
      dispatchEvent: expect.any(Function) as () => void,
      addListener: expect.any(Function) as () => void,
      removeListener: expect.any(Function) as () => void,
    });
  });

  it('returns the query as media', () => {
    expect(window.matchMedia(mediaQuery)).toMatchObject({ media: mediaQuery });
  });

  it('returns matches to true by default', () => {
    expect(window.matchMedia(mediaQuery)).toMatchObject({ matches: true });
  });

  it('exposes dispatchEvent with dispatchMatchMedia', () => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const spy = jest.spyOn(mediaQueryList, 'dispatchEvent');

    dispatchMatchMedia(mediaQuery);

    expect(spy).toHaveBeenCalledWith(new Event('change'));
  });

  it('reverses matches by default if no value is provided to onchange', () => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    dispatchMatchMedia(mediaQuery);

    expect(mediaQueryList).toMatchObject({ matches: false });
  });

  it('updates matches with the value provided to onchange', () => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    dispatchMatchMedia(mediaQuery, {
      matches: true,
      type: 'change',
    } as MediaQueryListEvent);

    expect(mediaQueryList).toMatchObject({ matches: true });
  });

  it('handles onchange with addEventListener and removeEventListener', () => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    dispatchMatchMedia(mediaQuery);

    expect(mediaListener).toHaveBeenCalledTimes(0);

    mediaQueryList.addEventListener('change', mediaListener);

    dispatchMatchMedia(mediaQuery);

    expect(mediaListener).toHaveBeenCalledTimes(1);

    mediaQueryList.removeEventListener('change', mediaListener);

    dispatchMatchMedia(mediaQuery);

    expect(mediaListener).toHaveBeenCalledTimes(1);
  });

  it('handles onchange with addListener and removeListener', () => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    dispatchMatchMedia(mediaQuery);

    expect(mediaListener).toHaveBeenCalledTimes(0);

    mediaQueryList.addListener(mediaListener);

    dispatchMatchMedia(mediaQuery);

    expect(mediaListener).toHaveBeenCalledTimes(1);

    mediaQueryList.removeListener(mediaListener);

    dispatchMatchMedia(mediaQuery);

    expect(mediaListener).toHaveBeenCalledTimes(1);
  });

  it('passes matches and media to listener', () => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    mediaQueryList.addEventListener('change', mediaListener);

    dispatchMatchMedia(mediaQuery);

    expect(mediaListener).toHaveBeenCalledWith({
      matches: false,
      media: mediaQuery,
    });
  });
});
