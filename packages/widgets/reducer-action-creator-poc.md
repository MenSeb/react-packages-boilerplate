# React useReducer POC with actions creators

```jsx
import * as React from 'react';

export enum Actions {
  first = 'FIRST_TAB',
}

export function firstTab(target: HTMLElement): {
  type: Actions.first;
  payload: { target: HTMLElement };
} {
  return {
    type: Actions.first,
    payload: { target },
  };
}

export function lastTab(target: HTMLElement): {
  type: 'LAST_TAB';
  payload: { target: HTMLElement };
} {
  return {
    type: 'LAST_TAB',
    payload: { target },
  };
}

export type Action = ReturnType<typeof firstTab> | ReturnType<typeof lastTab>;

export type State = { target: HTMLElement | ChildNode | null };

export function reducer(state: State, action: Action) {
  const { payload } = action;
  const { target } = payload;
  const { parentNode } = target;

  switch (action.type) {
    case Actions.first:
      return { ...state, target: parentNode ? parentNode.firstChild : null };

    case 'LAST_TAB':
      return { ...state, target: parentNode ? parentNode.lastChild : null };
  }
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
