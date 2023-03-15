import * as React from 'react';
import {
  initializer,
  reducer,
  InitializerState,
  Reducer,
  TabsContextDispatch,
  TabsContextState,
} from '../utilities';

type TabsProviderProps = {
  children: React.ReactNode;
  initialState: InitializerState;
};

export default function TabsProvider({
  children,
  initialState,
}: TabsProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer<Reducer, InitializerState>(
    reducer,
    initialState,
    initializer,
  );

  return (
    <TabsContextDispatch.Provider value={dispatch}>
      <TabsContextState.Provider value={state}>
        {children}
      </TabsContextState.Provider>
    </TabsContextDispatch.Provider>
  );
}
