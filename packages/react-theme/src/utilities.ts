import { DefaultState, InitialState, State, Theme } from './types';

export const THEME_QUERY_DARK = '(prefers-color-scheme: dark)';
export const THEME_STORAGE_KEY = 'color-scheme';

export const defaultState: State = {
  theme: Theme.LIGHT,
};

export function initializer(initialState: DefaultState & InitialState): State {
  const localStorageTheme = localStorage.getItem(THEME_STORAGE_KEY);

  return {
    theme:
      localStorageTheme === null
        ? initialState.theme === undefined
          ? defaultState.theme
          : initialState.theme
        : (localStorageTheme as Theme),
  };
}
