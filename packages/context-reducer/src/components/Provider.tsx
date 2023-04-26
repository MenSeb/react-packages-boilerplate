import * as React from 'react';
import { ContextDispatch, ContextState } from '../contexts';
import { Actions, State } from '../types';
import { createDispatcher, createReducer } from '../utilities';

type ProviderProps = React.PropsWithChildren & {
  actions: Actions;
  initializer?: (initialState: State) => State;
  initialState?: State;
};

export default function Provider({
  actions,
  children,
  initializer = () => initialState,
  initialState = {},
}: ProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(
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
