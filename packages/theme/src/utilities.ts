import { State, Theme } from './types';

export const THEME_QUERY_DARK = '(prefers-color-scheme: dark)';
export const THEME_STORAGE_KEY = 'color-scheme';

export const defaultState: State = {
  theme: Theme.LIGHT,
};

export function initializer(): State {
  const localStorageTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (localStorageTheme === null)
    return {
      theme: window.matchMedia(THEME_QUERY_DARK).matches
        ? Theme.DARK
        : Theme.LIGHT,
    };

  return {
    theme: localStorageTheme === Theme.DARK ? Theme.DARK : Theme.LIGHT,
  };
}
