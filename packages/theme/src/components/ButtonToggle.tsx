import * as React from 'react';
import ContextReducer from '../setup';

export default function ButtonToggle({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>): JSX.Element {
  const { state, dispatch } = ContextReducer.useContextReducer();

  return (
    <button
      {...props}
      aria-pressed={state.theme === 'dark'}
      data-theme={state.theme}
      onClick={() => dispatch.toggleTheme()}
      type="button"
    >
      {children}
    </button>
  );
}
