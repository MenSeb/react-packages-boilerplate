import { renderHook } from '@testing-library/react';
import { useContextReducer } from '../src/context-reducer';

describe('useContextReducer', () => {
  it('works correctly', () => {
    const { result } = renderHook(() => useContextReducer());

    expect(result.current).toBeDefined();
  });
});
