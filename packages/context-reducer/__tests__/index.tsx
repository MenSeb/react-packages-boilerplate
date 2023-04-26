import * as React from 'react';
import {
  render,
  renderHook,
  RenderHookResult,
  RenderResult,
} from '@testing-library/react';
import { Actions, Dispatcher, Payload, Provider, State } from '../src';

export const actions: Actions = {
  test: jest.fn((state: State, payload: Payload) => ({
    ...state,
    ...payload,
  })),
  other: jest.fn((state: State, payload: Payload) => ({
    ...state,
    ...payload,
  })),
  another: jest.fn((state: State, payload: Payload) => ({
    ...state,
    ...payload,
  })),
};

export const initialProps = {
  actions,
  initialState: {
    text: 'test',
  },
  initializer: jest.fn((state: State): State => state),
};

export const payload = {
  bool: true,
};

export function createWrapper(
  props: React.ComponentProps<typeof Provider> = initialProps,
): ({ children }: React.PropsWithChildren) => JSX.Element {
  return function wrapper({ children }: React.PropsWithChildren): JSX.Element {
    return <Provider {...props}>{children}</Provider>;
  };
}

export function renderConsumer(
  Consumer: React.ElementType,
  props?: React.ComponentProps<typeof Provider>,
): RenderResult {
  return render(
    <Consumer>
      {({ dispatch, state }: { dispatch?: Dispatcher; state?: State }) => {
        return (
          <button onClick={() => dispatch?.test(payload)}>{state?.text}</button>
        );
      }}
    </Consumer>,
    { wrapper: createWrapper(props) },
  );
}

export function renderContextHook<Result, Props>(
  hook: () => Result,
  props?: React.ComponentProps<typeof Provider>,
): RenderHookResult<Result, Props> {
  return renderHook(() => hook(), {
    wrapper: createWrapper(props),
  });
}

export function spyOnConsoleError() {
  let spy: jest.SpyInstance;

  beforeEach(() => (spy = jest.spyOn(console, 'error').mockImplementation()));
  afterEach(() => spy.mockRestore());
}
