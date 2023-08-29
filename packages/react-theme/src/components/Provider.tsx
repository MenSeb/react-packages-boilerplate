import * as React from 'react';
import ContextReducer from '../setup';
import { Theme } from '../types';
import { THEME_QUERY_DARK } from '../utilities';
import { Update } from './Update';

export type ProviderProps = React.PropsWithChildren;

export function Provider({ children }: ProviderProps): JSX.Element {
  const { matches } = window.matchMedia(THEME_QUERY_DARK);

  return (
    <ContextReducer.Provider
      initialState={{ theme: matches ? Theme.DARK : undefined }}
    >
      <Update />
      {children}
    </ContextReducer.Provider>
  );
}
