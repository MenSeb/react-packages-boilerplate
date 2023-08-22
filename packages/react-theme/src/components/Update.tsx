import * as React from 'react';
import * as ReactHooks from '@packages/react-hooks';
import ContextReducer from '../setup';
import { THEME_QUERY_DARK, THEME_STORAGE_KEY } from '../utilities';

export function Update(): null {
  const { state, dispatch } = ContextReducer.useContextReducer();

  const updateTheme = React.useCallback<EventListener>(() => {
    dispatch.toggleTheme();
  }, [dispatch]);

  ReactHooks.useMatchMedia({
    query: THEME_QUERY_DARK,
    listener: updateTheme,
  });

  React.useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, state.theme);
  }, [state.theme]);

  return null;
}
