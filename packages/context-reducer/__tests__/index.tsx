import * as React from 'react';
import { render, renderHook } from '@testing-library/react';
import * as Types from '../src/types';

export type State = {
  bar: string;
  baz?: string;
  foo?: string;
  foobarbaz?: string;
};

export type Payload1 = Partial<State>;
export type Payload2 = Pick<State, 'foobarbaz'>;
export type Payloads = Payload1 & Payload2;

export const actions: Types.Actions<State, Payloads> = {
  action1: jest.fn((state: State): State => state),
  action2: jest.fn(
    (state: State, payload?: Payload1): State => ({
      ...state,
      ...payload,
    }),
  ),
  action3: jest.fn(
    (state: State, payload: Payload2): State => ({
      ...state,
      ...payload,
    }),
  ),
};

export const payload: Payload1 = { foo: 'foo' };

export const initialState: Partial<State> = { bar: 'bar' };

export const initializerState: State = { bar: 'bar', baz: 'baz' };

export const initializer: Types.Initializer<State> = jest.fn(
  () => initializerState,
);

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
        dispatch?: Types.Dispatcher<State, Payloads>;
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
