import * as React from 'react';
import ContextReducer from '../setup';
import { Options } from '../types';

export type TabsProviderProps = React.PropsWithChildren & Options;

export function TabsProvider({ children, ...props }: TabsProviderProps) {
  const idWidget = React.useId();

  return (
    <ContextReducer.Provider initialState={{ ...props, idWidget }}>
      {children}
    </ContextReducer.Provider>
  );
}
