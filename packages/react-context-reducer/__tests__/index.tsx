import * as React from 'react';
import {
  render,
  renderHook,
  RenderHookResult,
  RenderResult,
} from '@testing-library/react';
import * as Types from '../src/types';

export interface DefaultState {
  baz?: string;
}
export interface InitialState {
  bar: string;
}
export interface State {
  bar: string;
  baz?: string;
  foo?: string;
  foobarbaz?: string;
}

export type Payload1 = Partial<State>;
export type Payload2 = Pick<State, 'foobarbaz'>;
export type Payload = Payload1 & Payload2;

export const actions = {
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

export const payload: Payload = { foo: 'foo' };

export const defaultState: DefaultState = { baz: 'baz' };

export const initialState: InitialState = { bar: 'bar' };

export const initializerState: State = { ...defaultState, ...initialState };

export const initializer: Types.Initializer<State, DefaultState, InitialState> =
  jest.fn(
    (state: DefaultState & InitialState): State =>
      state.baz === undefined ? initializerState : state,
  );

export function createWrapper(
  Provider: React.ElementType,
  props: React.ComponentProps<typeof Provider>,
) {
  return function wrapper({ children }: React.PropsWithChildren) {
    return <Provider {...props}>{children}</Provider>;
  };
}

export function renderConsumer(
  Consumer: React.ElementType,
  Provider: React.ElementType,
  props = { initialState },
): RenderResult {
  return render(
    <Consumer>
      {({
        dispatch,
        state,
      }: {
        dispatch?: Types.GenericDispatcher<typeof actions, Payload>;
        state?: State;
      }) => {
        return (
          <button onClick={() => dispatch?.action1(payload)}>
            {state?.bar}
          </button>
        );
      }}
    </Consumer>,
    { wrapper: createWrapper(Provider, props) },
  );
}

export function renderContextHook<Result>(
  hook: () => Result,
  Provider: React.ElementType,
  props = { initialState },
): RenderHookResult<Result, React.ComponentProps<typeof Provider>> {
  return renderHook(() => hook(), {
    wrapper: createWrapper(Provider, props),
  });
}

export function spyOnConsoleError() {
  let spy: jest.SpyInstance;

  beforeEach(() => (spy = jest.spyOn(console, 'error').mockImplementation()));
  afterEach(() => {
    spy.mockRestore();
  });
}
