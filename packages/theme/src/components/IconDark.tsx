import * as React from 'react';
import ContextReducer from '../setup';
import { Theme } from '../types';

export default function IconDark({
  children,
  ...props
}: React.SVGProps<SVGSVGElement>): JSX.Element {
  const state = ContextReducer.useContextState();

  return (
    <svg
      {...props}
      aria-hidden="true"
      data-theme={Theme.DARK}
      data-hidden={state.theme === Theme.LIGHT}
      focusable="false"
      viewBox="-12 -12 24 24"
    >
      {children}
      <path
        d="M0 -8 
          A 8 8 0 0 0 0 8 
          A 8 8 0 0 0 8 0 
          A 6 6 0 1 1 0 -8 z"
      />
    </svg>
  );
}
