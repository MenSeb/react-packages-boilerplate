import * as React from 'react';
import ContextReducer from '../setup';

export default function ButtonLight({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { state, dispatch } = ContextReducer.useContextReducer();

  return (
    <button
      {...props}
      aria-pressed={state.theme === 'light'}
      data-theme="light"
      onClick={dispatch.setThemeLight}
      type="button"
    >
      {children}
    </button>
  );
}
