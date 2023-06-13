import { State, Theme } from './types';

export function toggleTheme(state: State): State {
  return { theme: state.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK };
}

export function setThemeDark(state: State): State {
  return state.theme === Theme.DARK ? state : { theme: Theme.DARK };
}

export function setThemeLight(state: State): State {
  return state.theme === Theme.LIGHT ? state : { theme: Theme.LIGHT };
}
