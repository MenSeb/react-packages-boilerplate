import * as React from 'react';
import ContextReducer from '../setup';
import ThemeUpdate from './ThemeUpdate';

type ProviderProps = React.PropsWithChildren;

export default function ThemeProvider({ children }: ProviderProps) {
  return (
    <ContextReducer.Provider>
      <ThemeUpdate />
      {children}
    </ContextReducer.Provider>
  );
}
