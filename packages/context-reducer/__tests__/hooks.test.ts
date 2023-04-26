import { act, renderHook } from '@testing-library/react';
import { useContextDispatch, useContextReducer, useContextState } from '../src';
import {
  actions,
  initialProps,
  payload,
  renderContextHook,
  spyOnConsoleError,
} from '.';

spyOnConsoleError();

describe('useContextDispatch', () => {
  it('throws when used without provider', () => {
    expect(() => renderHook(() => useContextDispatch())).toThrow(
      'useContextDispatch',
    );
  });

  it('renders the context dispatcher', () => {
    const { result } = renderContextHook(useContextDispatch);

    act(() => result.current.test(payload));

    expect(actions.test).toHaveBeenCalledWith(
      initialProps.initialState,
      payload,
    );
  });
});

describe('useContextState', () => {
  it('throws when used without provider', () => {
    expect(() => renderHook(() => useContextState())).toThrow(
      'useContextState',
    );
  });

  it('renders the context state', () => {
    const { result } = renderContextHook(useContextState);

    expect(result.current).toEqual(initialProps.initialState);
  });
});

describe('useContextReducer', () => {
  it('throws when used without provider', () => {
    expect(() => renderHook(() => useContextReducer())).toThrow(
      'useContextReducer',
    );
  });

  it('renders the context dispatcher and state', () => {
    const { result } = renderContextHook(useContextReducer);

    act(() => result.current.dispatch.test(payload));

    expect(result.current.state).toEqual({
      ...initialProps.initialState,
      ...payload,
    });

    expect(actions.test).toHaveBeenCalledWith(
      initialProps.initialState,
      payload,
    );
  });
});
