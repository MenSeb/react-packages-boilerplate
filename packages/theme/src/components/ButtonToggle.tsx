import * as React from 'react';
import ContextReducer from '../setup';
import { Theme } from '../types';

export default function ButtonToggle({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { state, dispatch } = ContextReducer.useContextReducer();

  return (
    <button
      {...props}
      aria-pressed={state.theme === Theme.DARK}
      data-theme={state.theme}
      onClick={dispatch.toggleTheme}
      type="button"
    >
      {children}
    </button>
  );
}
