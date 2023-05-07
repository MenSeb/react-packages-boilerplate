import * as React from 'react';
import ContextReducer from '../setup';
import { Theme } from '../types';

export default function ButtonLight({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { state, dispatch } = ContextReducer.useContextReducer();

  return (
    <button
      {...props}
      aria-pressed={state.theme === Theme.LIGHT}
      data-theme={Theme.LIGHT}
      onClick={dispatch.setThemeLight}
      type="button"
    >
      {children}
    </button>
  );
}
