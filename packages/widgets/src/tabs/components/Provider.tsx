import * as React from 'react';
import ContextReducer from '../setup';
import { Options } from '../types';

export type TabsProviderProps = React.PropsWithChildren & {
  options: Options;
};

export function TabsProvider({
  children,
  options,
}: TabsProviderProps): JSX.Element {
  const idWidget = React.useId();

  return (
    <ContextReducer.Provider initialState={{ ...options, idWidget }}>
      {children}
    </ContextReducer.Provider>
  );
}
