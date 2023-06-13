import * as React from 'react';
import ContextReducer from '../setup';
import { Theme } from '../types';

export default function ButtonDark({
  children,
  ...props
}: React.ComponentProps<'button'>) {
  const { state, dispatch } = ContextReducer.useContextReducer();

  return (
    <button
      {...props}
      aria-pressed={state.theme === Theme.DARK}
      data-theme={Theme.DARK}
      onClick={dispatch.setThemeDark}
      type="button"
    >
      {children}
    </button>
  );
}
