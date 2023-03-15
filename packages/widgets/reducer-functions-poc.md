# React useReducer POC with functions

```jsx
import * as React from 'react';

export type Target = HTMLElement | ParentNode | ChildNode | null;

export type State = { target: Target };

export const actions = {
  first: (state: State, target: Target): State => ({
    ...state,
    target: target ? target.firstChild : null,
  }),
  last: (state: State, target: Target): State => ({
    ...state,
    target: target ? target.lastChild : null,
  }),
};

export type Payload = {
  target: HTMLElement;
};

export type Action = {
  type: keyof typeof actions;
  payload: Payload;
};

export function reducer(state: State, action: Action) {
  const { payload, type } = action;
  const { target } = payload;
  const { parentNode } = target;

  return actions[type](state, parentNode);
}

export type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = React.createContext<Context>({} as Context);

export const initialState: State = {
  target: null,
};

export function App() {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState,
  );

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      <div />
    </AppContext.Provider>
  );
}

```
