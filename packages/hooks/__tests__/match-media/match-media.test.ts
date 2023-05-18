import { renderHook } from '@testing-library/react';
import { useMatchMedia } from '../../src/match-media';
import { mediaListener, mediaQuery } from './index';

describe('useMatchMedia', () => {
  it('returns a media query list with matches and media', () => {
    const { result } = renderHook(() =>
      useMatchMedia(mediaQuery, mediaListener),
    );

    expect(result.current).toMatchObject({
      matches: true,
      media: mediaQuery,
    });
  });

  it('handles addEventListener with the listener', () => {
    const { result } = renderHook(() =>
      useMatchMedia(mediaQuery, mediaListener),
    );

    result.current.dispatchEvent(new Event('change'));

    expect(mediaListener).toHaveBeenCalledWith({
      matches: result.current.matches,
      media: result.current.media,
    });
  });

  it('handles removeEventListener with the listener', () => {
    const { unmount, result } = renderHook(() =>
      useMatchMedia(mediaQuery, mediaListener),
    );

    unmount();

    result.current.dispatchEvent(new Event('change'));

    expect(mediaListener).not.toHaveBeenCalled();
  });

  it('ignores event handlers without listener', () => {
    const { unmount, result } = renderHook(() => useMatchMedia(mediaQuery));

    const spyAddEventListener = jest.spyOn(result.current, 'addEventListener');
    const spyRemoveEventListener = jest.spyOn(
      result.current,
      'removeEventListener',
    );

    expect(spyAddEventListener).not.toHaveBeenCalled();

    unmount();

    expect(spyRemoveEventListener).not.toHaveBeenCalled();
  });
});
