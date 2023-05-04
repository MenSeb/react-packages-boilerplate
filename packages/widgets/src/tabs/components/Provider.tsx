import * as React from 'react';
import ContextReducer from '../setup';
import { InitialState } from '../types';

export type TabsProviderProps = React.PropsWithChildren & {
  initialState: InitialState;
};

export function TabsProvider({
  children,
  initialState,
}: TabsProviderProps): JSX.Element {
  return (
    <ContextReducer.Provider initialState={initialState}>
      {children}
    </ContextReducer.Provider>
  );
}
