import * as React from 'react';
import ContextReducer from '../setup';
import { THEME_QUERY_DARK, THEME_STORAGE_KEY } from '../utilities';

export default function ThemeUpdate(): null {
  const { dispatch, state } = ContextReducer.useContextReducer();

  React.useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, state.theme);
  }, [state.theme]);

  React.useEffect(() => {
    function updateTheme() {
      dispatch.toggleTheme();
    }

    const mediaQuery = window.matchMedia(THEME_QUERY_DARK);

    mediaQuery.addEventListener('change', updateTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, [dispatch]);

  return null;
}
