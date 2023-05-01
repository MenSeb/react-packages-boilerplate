import * as React from 'react';
import * as Types from './types';
import * as utilities from './utilities';

export default function createContextReducer<T>(options: Types.Options<T>) {
  const ContextState = React.createContext<T | null>(null);
  const ContextDispatch = React.createContext<Types.Dispatcher<T> | null>(null);

  function Provider(props: Types.ProviderProps) {
    const [state, dispatch] = React.useReducer(
      utilities.createReducer(options.actions),
      options.initialState,
      options.initializer,
    );

    const dispatcher = React.useMemo(
      () => utilities.createDispatcher(options.actions, dispatch),
      [],
    );

    return (
      <ContextDispatch.Provider value={dispatcher}>
        <ContextState.Provider value={state}>
          {props.children}
        </ContextState.Provider>
      </ContextDispatch.Provider>
    );
  }

  function ConsumerDispatch({ children }: Types.ConsumerDispatchProps<T>) {
    return (
      <ContextDispatch.Consumer>
        {(dispatch) => {
          if (dispatch === null)
            throw utilities.createError('ConsumerDispatch');

          return children({ dispatch });
        }}
      </ContextDispatch.Consumer>
    );
  }

  function ConsumerState({ children }: Types.ConsumerStateProps<T>) {
    return (
      <ContextState.Consumer>
        {(state) => {
          if (state === null) throw utilities.createError('ConsumerState');

          return children({ state });
        }}
      </ContextState.Consumer>
    );
  }

  function ConsumerReducer({ children }: Types.ConsumerReducerProps<T>) {
    return (
      <ContextDispatch.Consumer>
        {(dispatch) => (
          <ContextState.Consumer>
            {(state) => {
              if (dispatch === null || state === null)
                throw utilities.createError('ConsumerReducer');

              return children({ dispatch, state });
            }}
          </ContextState.Consumer>
        )}
      </ContextDispatch.Consumer>
    );
  }

  function useContextDispatch() {
    const dispatch = React.useContext(ContextDispatch);

    if (dispatch === null) throw utilities.createError('useContextDispatch');

    return dispatch;
  }

  function useContextState() {
    const state = React.useContext(ContextState);

    if (state === null) throw utilities.createError('useContextState');

    return state;
  }

  function useContextReducer() {
    const dispatch = React.useContext(ContextDispatch);
    const state = React.useContext(ContextState);

    if (dispatch === null || state === null)
      throw utilities.createError('useContextReducer');

    return { dispatch, state };
  }

  return {
    ConsumerDispatch,
    ConsumerReducer,
    ConsumerState,
    Provider,
    useContextDispatch,
    useContextReducer,
    useContextState,
  };
}
