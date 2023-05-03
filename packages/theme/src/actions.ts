import { State } from './types';

export function toggleTheme(state: State): State {
  return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
}

export function setThemeDark(state: State): State {
  return state.theme === 'dark' ? state : { ...state, theme: 'dark' };
}

export function setThemeLight(state: State): State {
  return state.theme === 'light' ? state : { ...state, theme: 'light' };
}
