import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, renderHook, screen } from '@testing-library/react';
import createContextReducer from '../src/context-reducer';
import {
  actions,
  initializer,
  initializerState,
  initialState,
  payload,
  renderConsumer,
  renderContextHook,
  spyOnConsoleError,
} from '.';

let ContextReducer: ReturnType<typeof createContextReducer>;

beforeEach(
  () =>
    (ContextReducer = createContextReducer({
      actions,
      initializer,
      initialState,
    })),
);

spyOnConsoleError();

describe('createContextReducer', () => {
  describe('useContextDispatch', () => {
    it('throws when used without provider', () => {
      expect(() =>
        renderHook(() => ContextReducer.useContextDispatch()),
      ).toThrow('useContextDispatch');
    });

    it('renders the context dispatcher', () => {
      const { result } = renderHook(() => ContextReducer.useContextDispatch(), {
        wrapper: ContextReducer.Provider,
      });

      act(() => result.current.action1(payload));

      expect(actions.action1).toHaveBeenCalledWith(initializerState, payload);
    });
  });

  describe('useContextState', () => {
    it('throws when used without provider', () => {
      expect(() => renderHook(() => ContextReducer.useContextState())).toThrow(
        'useContextState',
      );
    });

    it('renders the context state', () => {
      const { result } = renderHook(() => ContextReducer.useContextState(), {
        wrapper: ContextReducer.Provider,
      });

      expect(result.current).toEqual(initializerState);
    });
  });

  describe('useContextReducer', () => {
    it('throws when used without provider', () => {
      expect(() =>
        renderHook(() => ContextReducer.useContextReducer()),
      ).toThrow('useContextReducer');
    });

    it('renders the context dispatcher and state', () => {
      const { result } = renderHook(() => ContextReducer.useContextReducer(), {
        wrapper: ContextReducer.Provider,
      });

      act(() => result.current.dispatch.action1(payload));

      expect(result.current.state).toEqual({
        ...initializerState,
        ...payload,
      });

      expect(actions.action1).toHaveBeenCalledWith(initializerState, payload);
    });
  });

  describe('<ConsumerState />', () => {
    it('throws when used without provider', () => {
      expect(() => {
        render(
          <ContextReducer.ConsumerState>
            {jest.fn()}
          </ContextReducer.ConsumerState>,
        );
      }).toThrow('ConsumerState');
    });

    it('calls children with state', () => {
      renderConsumer(ContextReducer.ConsumerState, ContextReducer.Provider);

      expect(screen.getByText(initialState.bar)).toBeInTheDocument();
    });
  });

  describe('<ConsumerDispatch />', () => {
    it('throws when used without provider', () => {
      expect(() => {
        render(
          <ContextReducer.ConsumerDispatch>
            {jest.fn()}
          </ContextReducer.ConsumerDispatch>,
        );
      }).toThrow('ConsumerDispatch');
    });

    it('calls children with dispatch', async () => {
      const user = userEvent.setup();

      renderConsumer(ContextReducer.ConsumerDispatch, ContextReducer.Provider);

      await act(async () => {
        await user.click(screen.getByRole('button'));
      });

      expect(actions.action1).toHaveBeenCalledWith(initializerState, payload);
    });
  });

  describe('<ConsumerReducer />', () => {
    it('throws when used without provider', () => {
      expect(() => {
        render(
          <ContextReducer.ConsumerReducer>
            {jest.fn()}
          </ContextReducer.ConsumerReducer>,
        );
      }).toThrow('ConsumerReducer');
    });

    it('calls children with dispatch and state', async () => {
      const user = userEvent.setup();

      renderConsumer(ContextReducer.ConsumerReducer, ContextReducer.Provider);

      await act(async () => {
        await user.click(screen.getByText(initialState.bar));
      });

      expect(actions.action1).toHaveBeenCalledWith(initializerState, payload);
    });
  });

  describe('<Provider />', () => {
    it('renders with the actions dispatcher', () => {
      const { result } = renderContextHook(
        ContextReducer.useContextReducer,
        ContextReducer.Provider,
      );

      for (const action of Object.keys(actions) as (keyof typeof actions)[]) {
        act(() => result.current.dispatch[action]({}));

        expect(actions[action]).toHaveBeenCalledWith(initializerState, {});
      }
    });

    it('renders with the initializer function', () => {
      renderContextHook(
        ContextReducer.useContextReducer,
        ContextReducer.Provider,
      );

      expect(initializer).toHaveBeenCalledWith(initialState);
    });

    it('renders with the initial state', () => {
      const { result } = renderContextHook(
        ContextReducer.useContextReducer,
        ContextReducer.Provider,
      );

      expect(result.current.state).toEqual(initializerState);
    });

    it('calls the dispatcher with an empty object if payload is undefined', () => {
      const { result } = renderContextHook(
        ContextReducer.useContextReducer,
        ContextReducer.Provider,
      );

      act(() => result.current.dispatch.action1());

      expect(actions.action1).toHaveBeenCalledWith(initializerState, {});
    });
  });
});