import { ThemeState } from './types';

export function toggleTheme(state: ThemeState): ThemeState {
  return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
}

export function setThemeDark(state: ThemeState): ThemeState {
  return state.theme === 'dark' ? state : { ...state, theme: 'dark' };
}

export function setThemeLight(state: ThemeState): ThemeState {
  return state.theme === 'light' ? state : { ...state, theme: 'light' };
}
