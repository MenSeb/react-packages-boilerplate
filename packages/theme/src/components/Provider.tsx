import * as React from 'react';
import * as ReactHooks from '@react/hooks';
import ContextReducer from '../setup';
import { Theme } from '../types';
import { THEME_QUERY_DARK } from '../utilities';
import Update from './Update';

export default function Provider({
  children,
}: React.PropsWithChildren): JSX.Element {
  const { matches } = ReactHooks.useMatchMedia(THEME_QUERY_DARK);

  return (
    <ContextReducer.Provider
      initialState={{ theme: matches ? Theme.DARK : undefined }}
    >
      <Update />
      {children}
    </ContextReducer.Provider>
  );
}
