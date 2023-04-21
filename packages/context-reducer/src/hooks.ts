import * as React from 'react';
import { ContextDispatch, ContextState } from './contexts';
import { Context, Dispatcher, State } from './types';
import { createError } from './utilities';

export function useContextDispatch(): Dispatcher {
  const context = React.useContext(ContextDispatch);

  if (context === null) throw createError('useContextDispatch');

  return context;
}

export function useContextReducer(): Context {
  return {
    dispatch: useContextDispatch(),
    state: useContextState(),
  };
}

export function useContextState(): State {
  const context = React.useContext(ContextState);

  if (context === null) throw createError('useContextState');

  return context;
}
