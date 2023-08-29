import { act } from '@testing-library/react';
import createContextReducer from '../src/context-reducer';
import {
  actions,
  defaultState,
  initialState,
  initializer,
  initializerState,
  payload,
  spyOnConsoleError,
  Payload,
  DefaultState,
  InitialState,
  State,
} from '.';

import {
  createRenderWrapper,
  createRenderHookWrapper,
} from '@packages/react-test';

spyOnConsoleError();

const ContextReducer: ReturnType<
  typeof createContextReducer<
    typeof actions,
    Payload,
    State,
    DefaultState,
    InitialState
  >
> = createContextReducer({
  actions,
  defaultState,
  initializer,
});

const createRenderContext = createRenderWrapper(ContextReducer.Provider, {
  initialState,
});

const renderConsumerDispatch = createRenderContext(
  ContextReducer.ConsumerDispatch,
);

const renderConsumerState = createRenderContext(ContextReducer.ConsumerState);

const renderConsumerReducer = createRenderContext(
  ContextReducer.ConsumerReducer,
);

const createRenderContextHook = createRenderHookWrapper(
  ContextReducer.Provider,
  { initialState },
);

const renderHookDispatch = createRenderContextHook(
  ContextReducer.useContextDispatch,
);

const renderHookState = createRenderContextHook(ContextReducer.useContextState);

const renderHookReducer = createRenderContextHook(
  ContextReducer.useContextReducer,
);

const spyContext = jest.fn();

afterEach(() => {
  spyContext.mockReset();
});

describe('createContextReducer', () => {
  describe('useContextDispatch', () => {
    it('throws when used without provider', () => {
      expect(() =>
        renderHookDispatch(undefined, { wrapper: undefined }),
      ).toThrow('useContextDispatch');
    });

    it('renders the context dispatcher', () => {
      const { result } = renderHookDispatch();

      act(() => {
        result.current.action2(payload);
      });

      expect(actions.action2).toHaveBeenCalledWith(initializerState, payload);
    });
  });

  describe('useContextState', () => {
    it('throws when used without provider', () => {
      expect(() => renderHookState(undefined, { wrapper: undefined })).toThrow(
        'useContextState',
      );
    });

    it('renders the context state', () => {
      const { result } = renderHookState();

      expect(result.current).toEqual(initializerState);
    });
  });

  describe('useContextReducer', () => {
    it('throws when used without provider', () => {
      expect(() =>
        renderHookReducer(undefined, { wrapper: undefined }),
      ).toThrow('useContextReducer');
    });

    it('renders the context dispatcher and state', () => {
      const { result } = renderHookReducer();

      act(() => {
        result.current.dispatch.action2(payload);
      });

      expect(result.current.state).toEqual({
        ...initializerState,
        ...payload,
      });

      expect(actions.action2).toHaveBeenCalledWith(initializerState, payload);
    });
  });

  describe('<ConsumerState />', () => {
    it('throws when used without provider', () => {
      expect(() =>
        renderConsumerState(undefined, { wrapper: undefined }),
      ).toThrow('ConsumerState');
    });

    it('calls children with state', () => {
      renderConsumerState({ children: spyContext });

      expect(spyContext).toHaveBeenCalledWith({
        state: initializerState,
      });
    });
  });

  describe('<ConsumerDispatch />', () => {
    it('throws when used without provider', () => {
      expect(() => {
        renderConsumerDispatch(undefined, { wrapper: undefined });
      }).toThrow('ConsumerDispatch');
    });

    it('calls children with dispatch', () => {
      renderConsumerDispatch({ children: spyContext });

      expect(spyContext).toHaveBeenCalledWith({
        dispatch: expect.objectContaining({
          action1: expect.any(Function) as () => void,
          action2: expect.any(Function) as () => void,
          action3: expect.any(Function) as () => void,
        }) as object,
      });
    });
  });

  describe('<ConsumerReducer />', () => {
    it('throws when used without provider', () => {
      expect(() => {
        renderConsumerReducer(undefined, { wrapper: undefined });
      }).toThrow('ConsumerReducer');
    });

    it('calls children with dispatch and state', () => {
      renderConsumerReducer({ children: spyContext });

      expect(spyContext).toHaveBeenCalledWith({
        state: initializerState,
        dispatch: expect.objectContaining({
          action1: expect.any(Function) as () => void,
          action2: expect.any(Function) as () => void,
          action3: expect.any(Function) as () => void,
        }) as object,
      });
    });
  });

  describe('<Provider />', () => {
    it('renders with the actions dispatcher', () => {
      const { result } = renderHookReducer();

      for (const action of Object.keys(actions) as (keyof typeof actions)[]) {
        act(() => {
          result.current.dispatch[action]({});
        });

        expect(actions[action]).toHaveBeenCalledWith(initializerState, {});
      }
    });

    it('renders with the initializer function', () => {
      renderHookReducer();

      expect(initializer).toHaveBeenCalledWith({
        ...defaultState,
        ...initialState,
      });
    });

    it('renders with the initial state', () => {
      const { result } = renderHookReducer();

      expect(result.current.state).toEqual(initializerState);
    });

    it('calls the dispatcher with an empty object if payload is undefined', () => {
      const { result } = renderHookReducer();

      act(() => {
        result.current.dispatch.action2();
      });

      expect(actions.action2).toHaveBeenCalledWith(initializerState, {});
    });
  });
});
