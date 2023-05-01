import * as React from 'react';
import { render, renderHook } from '@testing-library/react';
import * as Types from '../src/types';

type State = {
  bar: string;
  baz?: string;
  foo?: string;
  foobarbaz?: string;
};

type Payload = Partial<State>;

export const actions: Types.Actions<State> = {
  action1: jest.fn((state: State, payload: Payload) => ({
    ...state,
    ...payload,
  })),
  action2: jest.fn((state: State, payload: Payload) => ({
    ...state,
    ...payload,
  })),
  action3: jest.fn((state: State, payload: Payload) => ({
    ...state,
    ...payload,
  })),
};

export const payload = {
  foo: 'foo',
};

export const initialState = {
  bar: 'bar',
};

export const initializer = jest.fn(() => initializerState);

export const initializerState = { ...initialState, baz: 'baz' };

export function createWrapper(Provider: React.ElementType) {
  return function wrapper({ children }: React.PropsWithChildren) {
    return <Provider>{children}</Provider>;
  };
}

export function renderConsumer(
  Consumer: React.ElementType,
  Provider: React.ElementType,
) {
  return render(
    <Consumer>
      {({
        dispatch,
        state,
      }: {
        dispatch?: Types.Dispatcher<State>;
        state?: State;
      }) => {
        return (
          <button onClick={() => dispatch?.action1(payload)}>
            {state?.bar}
          </button>
        );
      }}
    </Consumer>,
    { wrapper: createWrapper(Provider) },
  );
}

export function renderContextHook<Result>(
  hook: () => Result,
  Provider: React.ElementType,
) {
  return renderHook(() => hook(), {
    wrapper: createWrapper(Provider),
  });
}

export function spyOnConsoleError() {
  let spy: jest.SpyInstance;

  beforeEach(() => (spy = jest.spyOn(console, 'error').mockImplementation()));
  afterEach(() => spy.mockRestore());
}
