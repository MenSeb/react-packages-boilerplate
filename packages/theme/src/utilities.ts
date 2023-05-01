import { ThemeState } from './types';

export const THEME_CONTEXT_ERROR =
  'useThemeContext should be used within ThemeProvider.';
export const THEME_QUERY_DARK = '(prefers-color-scheme: dark)';
export const THEME_STORAGE_KEY = 'color-scheme';

export const initialState: ThemeState = {
  theme: 'light',
};

export function initializer(): ThemeState {
  const theme = localStorage.getItem(THEME_STORAGE_KEY);

  if (theme === 'light' || theme === 'dark') return { theme };

  return {
    theme: window.matchMedia(THEME_QUERY_DARK).matches ? 'dark' : 'light',
  };
}
