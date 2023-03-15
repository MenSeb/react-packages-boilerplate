import * as React from 'react';
import {
  initializer,
  reducer,
  Action,
  State,
  TabsContextDispatch,
  TabsContextState,
} from '../utilities';

type TabsProviderProps = {
  children: React.ReactNode;
  initial: State;
};

export default function TabsProvider({
  children,
  initial,
}: TabsProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer<
    React.Reducer<State, Action>,
    State
  >(reducer, initial, initializer);

  return (
    <TabsContextDispatch.Provider value={dispatch}>
      <TabsContextState.Provider value={state}>
        {children}
      </TabsContextState.Provider>
    </TabsContextDispatch.Provider>
  );
}
