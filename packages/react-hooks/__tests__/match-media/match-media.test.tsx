import { createRenderHook } from '@packages/react-test';
import { useMatchMedia, UseMatchMedia } from '../../src/match-media';
import { listener, query } from './index';

const props: UseMatchMedia = { query, listener };

const renderMatchMedia = createRenderHook(useMatchMedia, props);

describe('useMatchMedia', () => {
  it('returns a media query list with matches and media', () => {
    const { result } = renderMatchMedia();

    expect(result.current).toMatchObject({
      matches: true,
      media: query,
    });
  });

  it('listens to change on the media query', () => {
    const { result, unmount } = renderMatchMedia();

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
