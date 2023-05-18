import { renderHook } from '@testing-library/react';
import { useMatchMedia } from '../../src/match-media';
import '../../src/match-media/mock';

export const mediaListener = jest.fn();
export const mediaQuery = 'prefers-color-scheme: dark';

export function renderMatchMedia(query = mediaQuery, listener = mediaListener) {
  return renderHook(() => useMatchMedia(query, listener));
}

afterEach(() => mediaListener.mockReset());
