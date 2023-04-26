import { act, renderHook } from '@testing-library/react';
import { useContextDispatch, useContextReducer, useContextState } from '../src';
import {
  actions,
  createWrapper,
  initialProps,
  payload,
  spyOnConsoleError,
} from './';

spyOnConsoleError();

describe('useContextDispatch', () => {
  it('throws when used without provider', () => {
    expect(() => renderHook(() => useContextDispatch())).toThrow(
      'useContextDispatch',
    );
  });

  it('renders the context dispatcher', () => {
    const { result } = renderHook(() => useContextDispatch(), {
      wrapper: createWrapper(initialProps),
    });

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
    const { result } = renderHook(() => useContextState(), {
      wrapper: createWrapper(initialProps),
    });

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
    const { result } = renderHook(() => useContextReducer(), {
      wrapper: createWrapper(initialProps),
    });

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
