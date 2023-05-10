import * as React from 'react';
import ContextReducer from '../setup';
import { Theme } from '../types';

export default function IconLight({
  children,
  ...props
}: React.ComponentProps<'svg'>) {
  const state = ContextReducer.useContextState();

  return (
    <svg
      {...props}
      aria-hidden="true"
      data-theme={Theme.LIGHT}
      data-hidden={state.theme === Theme.DARK}
      focusable="false"
      viewBox="-12 -12 24 24"
    >
      {children}
      <path
        d="M-10 0 
          A 5 5 0 0 0 -7 -7 
          A 5 5 0 0 0 0 -10 
          A 5 5 0 0 0 7 -7 
          A 5 5 0 0 0 10 0 
          A 5 5 0 0 0 7 7 
          A 5 5 0 0 0 0 10 
          A 5 5 0 0 0 -7 7 
          A 5 5 0 0 0 -10 0 z
          M-6 0 a 6 6 0 0 0 12 0 a 6 6 0 0 0 -12 0 z
          M-5 0 a 5 5 0 0 0 10 0 a 5 5 0 0 0 -10 0 z"
      />
    </svg>
  );
}
