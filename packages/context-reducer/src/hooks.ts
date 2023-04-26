import * as React from 'react';
import { ContextDispatch, ContextState } from './contexts';
import { Context, Dispatcher, State } from './types';
import { createError } from './utilities';

export function useContextDispatch(): Dispatcher {
  const dispatch = React.useContext(ContextDispatch);

  if (dispatch === null) throw createError('useContextDispatch');

  return dispatch;
}

export function useContextState(): State {
  const state = React.useContext(ContextState);

  if (state === null) throw createError('useContextState');

  return state;
}

export function useContextReducer(): Context {
  try {
    return {
      dispatch: useContextDispatch(),
      state: useContextState(),
    };
  } catch (error) {
    throw createError('useContextReducer');
  }
}
