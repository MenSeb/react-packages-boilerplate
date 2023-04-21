import * as React from 'react';
import { ContextDispatch, ContextState } from '../contexts';
import { Actions, Reducer, State } from '../types';
import { createDispatcher, createReducer } from '../utilities';

type ProviderProps = {
  actions: Actions;
  children: React.ReactNode;
  initializer?: (initialState: State) => State;
  initialState?: State;
};

export default function Provider({
  actions,
  children,
  initializer = (initialState) => initialState,
  initialState = {},
}: ProviderProps) {
  const [state, dispatch] = React.useReducer<Reducer, State>(
    createReducer(actions),
    initialState,
    initializer,
  );

  const dispatcher = React.useMemo(
    () => createDispatcher(actions, dispatch),
    [actions],
  );

  return (
    <ContextDispatch.Provider value={dispatcher}>
      <ContextState.Provider value={state}>{children}</ContextState.Provider>
    </ContextDispatch.Provider>
  );
}
