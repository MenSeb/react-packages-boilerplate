export type Theme = 'light' | 'dark';

export type ThemeDispatch = {
  setThemeDark: () => void;
  setThemeLight: () => void;
  toggleTheme: () => void;
};

export type ThemeState = {
  theme: Theme;
};
