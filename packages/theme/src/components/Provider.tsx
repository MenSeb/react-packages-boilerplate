import * as React from 'react';
import ContextReducer from '../setup';
import Update from './Update';

export default function Provider({
  children,
}: React.PropsWithChildren): JSX.Element {
  return (
    <ContextReducer.Provider>
      <Update />
      {children}
    </ContextReducer.Provider>
  );
}
