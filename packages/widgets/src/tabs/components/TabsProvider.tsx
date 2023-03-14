import * as React from 'react';

enum TabsActions {
  next = 'NEXT',
  prev = 'PREV',
}

type TabsState = {};

type TabsPayload = {};

type TabsDispatch = {
  type: TabsActions;
  payload: object;
};

const initialTabsState = {};

const TabsContextDispatch = React.createContext<React.Dispatch | null>(null);

const TabsContextState = React.createContext<>(initialTabsState);

function reducer(state: TabsState, payload: TabsPayload): TabsState {
  return payload ? state : { ...state };
}

function config(state: TabsState): TabsState {
  return state;
}

type TabsProviderProps = {
  children: React.ReactNode;
  initial: TabsState;
};

export default function TabsProvider({
  children,
  initial,
}: TabsProviderProps): JSX.Element {
  const [dispatch, state] = React.useReducer(reducer, initial, config);

  return (
    <TabsContextDispatch.Provider value={dispatch}>
      <TabsContextState.Provider value={state}>
        {children}
      </TabsContextState.Provider>
    </TabsContextDispatch.Provider>
  );
}
