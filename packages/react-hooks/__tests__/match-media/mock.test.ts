import {
  defineMatchMedia,
  dispatchMatchMedia,
} from '../../src/match-media/mock';
import { listener, query } from './index';

defineMatchMedia();

describe('Match Media Mock', () => {
  it('defines matchMedia on window', () => {
    expect(window.matchMedia).toBeDefined();
  });

  it('returns a media query list', () => {
    expect(window.matchMedia(query)).toMatchObject({
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
    expect(window.matchMedia(query)).toMatchObject({ media: query });
  });

  it('returns matches to true by default', () => {
    expect(window.matchMedia(query)).toMatchObject({ matches: true });
  });

  it('exposes dispatchEvent with dispatchMatchMedia', () => {
    const mediaQueryList = window.matchMedia(query);

    const spy = jest.spyOn(mediaQueryList, 'dispatchEvent');

    dispatchMatchMedia(query);

    expect(spy).toHaveBeenCalledWith(new Event('change'));
  });

  it('reverses matches by default if no value is provided to onchange', () => {
    const mediaQueryList = window.matchMedia(query);

    dispatchMatchMedia(query);

    expect(mediaQueryList).toMatchObject({ matches: false });
  });

  it('updates matches with the value provided to onchange', () => {
    const mediaQueryList = window.matchMedia(query);

    dispatchMatchMedia(query, {
      matches: true,
      type: 'change',
    } as MediaQueryListEvent);

    expect(mediaQueryList).toMatchObject({ matches: true });
  });

  it('handles onchange with addEventListener and removeEventListener', () => {
    const mediaQueryList = window.matchMedia(query);

    dispatchMatchMedia(query);

    expect(listener).toHaveBeenCalledTimes(0);

    mediaQueryList.addEventListener('change', listener);

    dispatchMatchMedia(query);

    expect(listener).toHaveBeenCalledTimes(1);

    mediaQueryList.removeEventListener('change', listener);

    dispatchMatchMedia(query);

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('handles onchange with addListener and removeListener', () => {
    const mediaQueryList = window.matchMedia(query);

    dispatchMatchMedia(query);

    expect(listener).toHaveBeenCalledTimes(0);

    mediaQueryList.addListener(listener);

    dispatchMatchMedia(query);

    expect(listener).toHaveBeenCalledTimes(1);

    mediaQueryList.removeListener(listener);

    dispatchMatchMedia(query);

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('passes matches and media to listener', () => {
    const mediaQueryList = window.matchMedia(query);

    mediaQueryList.addEventListener('change', listener);

    dispatchMatchMedia(query);

    expect(listener).toHaveBeenCalledWith({
      matches: false,
      media: query,
    });
  });
});
