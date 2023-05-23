import { renderHook } from '@testing-library/react';
import { useMatchMedia } from '../../src/match-media';
import { listener, query } from './index';

describe('useMatchMedia', () => {
  it('returns a media query list with matches and media', () => {
    const { result } = renderHook(() => useMatchMedia(query, listener));

    expect(result.current).toMatchObject({
      matches: true,
      media: query,
    });
  });

  it('handles addEventListener with the listener', () => {
    const { result } = renderHook(() => useMatchMedia(query, listener));

    result.current.dispatchEvent(new Event('change'));

    expect(listener).toHaveBeenCalledWith({
      matches: result.current.matches,
      media: result.current.media,
    });
  });

  it('handles removeEventListener with the listener', () => {
    const { unmount, result } = renderHook(() =>
      useMatchMedia(query, listener),
    );

    unmount();

    result.current.dispatchEvent(new Event('change'));

    expect(listener).not.toHaveBeenCalled();
  });
});
