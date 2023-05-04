import * as React from 'react';
import ContextReducer from '../setup';

export default function ButtonDark({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { state, dispatch } = ContextReducer.useContextReducer();

  return (
    <button
      {...props}
      aria-pressed={state.theme === 'dark'}
      data-theme="dark"
      onClick={dispatch.setThemeDark}
      type="button"
    >
      {children}
    </button>
  );
}
