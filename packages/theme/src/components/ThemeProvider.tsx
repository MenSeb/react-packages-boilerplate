import * as React from 'react';
import * as ContextReducer from '@react/context-reducer';
import * as actions from '../actions';
import ThemeUpdate from './ThemeUpdate';
import { initializer } from '../utilities';

type ProviderProps = React.PropsWithChildren;

export default function ThemeProvider({
  children,
}: ProviderProps): JSX.Element {
  return (
    <ContextReducer.Provider actions={actions} initializer={initializer}>
      <ThemeUpdate />
      {children}
    </ContextReducer.Provider>
  );
}
