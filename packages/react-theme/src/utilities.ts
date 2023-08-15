import { InitialState, State, Theme } from './types';

export const THEME_QUERY_DARK = '(prefers-color-scheme: dark)';
export const THEME_STORAGE_KEY = 'color-scheme';

export const defaultState: State = {
  theme: Theme.LIGHT,
};

export function initializer(initialState: InitialState): State {
  const localStorageTheme = localStorage.getItem(
    THEME_STORAGE_KEY,
  ) as Theme | null;

  return {
    theme: localStorageTheme ?? initialState.theme ?? defaultState.theme,
  };
}
