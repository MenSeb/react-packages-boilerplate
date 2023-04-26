import { act } from '@testing-library/react';
import { useContextReducer } from '../../src';
import { actions, initialProps, renderContextHook } from '..';

describe('<Provider />', () => {
  it('renders with the actions dispatcher', () => {
    const { result } = renderContextHook(useContextReducer);

    for (const action of Object.keys(actions)) {
      act(() => result.current.dispatch[action]({}));

      expect(actions[action]).toHaveBeenCalledWith(
        initialProps.initialState,
        {},
      );
    }
  });

  it('renders with the initial state', () => {
    const { result } = renderContextHook(useContextReducer);

    expect(result.current.state).toEqual(initialProps.initialState);
  });

  it('renders with the default state', () => {
    const { result } = renderContextHook(useContextReducer, {
      ...initialProps,
      initialState: undefined,
    });

    expect(result.current.state).toEqual({});
  });

  it('renders with the initializer function', () => {
    const other = 'other';

    const { result } = renderContextHook(useContextReducer, {
      ...initialProps,
      initializer: (initialState) => ({ ...initialState, other }),
    });

    expect(result.current.state).toEqual({
      ...initialProps.initialState,
      other,
    });
  });
});
