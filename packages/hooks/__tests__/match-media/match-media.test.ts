import { mediaListener, mediaQuery, renderMatchMedia } from './index';

describe('useMatchMedia', () => {
  it('returns a media query list with matches and media', () => {
    const { result } = renderMatchMedia();

    expect(result.current).toMatchObject({
      matches: true,
      media: mediaQuery,
    });
  });

  it('handles addEventListener with the listener', () => {
    const { result } = renderMatchMedia();

    result.current.dispatchEvent(new Event('change'));

    expect(mediaListener).toHaveBeenCalledWith({
      matches: result.current.matches,
      media: result.current.media,
    });
  });

  it('handles removeEventListener with the listener', () => {
    const { unmount, result } = renderMatchMedia();

    unmount();

    result.current.dispatchEvent(new Event('change'));

    expect(mediaListener).not.toHaveBeenCalled();
  });
});
