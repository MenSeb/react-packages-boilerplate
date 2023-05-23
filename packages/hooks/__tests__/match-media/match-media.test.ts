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

  it('listens to change on the media query', () => {
    const { result, unmount } = renderHook(() =>
      useMatchMedia(query, listener),
    );

    result.current.dispatchEvent(new Event('change'));

    expect(listener).toHaveBeenCalledWith({
      matches: result.current.matches,
      media: result.current.media,
    });

    unmount();

    result.current.dispatchEvent(new Event('change'));

    expect(listener).toHaveBeenCalledTimes(1);
  });
});
