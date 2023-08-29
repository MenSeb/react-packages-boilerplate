import { act } from '@packages/react-test';
import { dispatchMatchMedia } from '@packages/react-hooks/src/match-media/mock';
import * as Theme from '../../src';
import { THEME_QUERY_DARK, THEME_STORAGE_KEY } from '../../src/utilities';
import { createRenderHook } from '..';

const renderThemeHook = createRenderHook(Theme.useContextReducer);

describe('Provider', () => {
  it('loads the theme from local storage', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    const { result } = renderThemeHook();

    expect(result.current.state.theme).toBe('light');
  });

  it('loads the user color scheme preference', () => {
    const { result } = renderThemeHook();

    expect(result.current.state.theme).toBe('dark');
  });

  it('loads with the initial theme otherwise', () => {
    jest
      .spyOn(window, 'matchMedia')
      .mockImplementationOnce(() => ({ matches: false }) as MediaQueryList);

    const { result } = renderThemeHook();

    expect(result.current.state.theme).toBe('light');
  });

  it('saves the theme in local storage on the initial render', () => {
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();

    renderThemeHook();

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('saves the theme in local storage when it changes', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook();

    act(() => {
      result.current.dispatch.toggleTheme();
    });

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

    act(() => {
      result.current.dispatch.setThemeDark();
    });

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');

    act(() => {
      result.current.dispatch.setThemeLight();
    });

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  });

  it('renders with the dispatch to toggle theme', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook();

    expect(result.current.state.theme).toBe('dark');

    act(() => {
      result.current.dispatch.toggleTheme();
    });

    expect(result.current.state.theme).toBe('light');

    act(() => {
      result.current.dispatch.toggleTheme();
    });

    expect(result.current.state.theme).toBe('dark');
  });

  it('renders with the dispatch to set theme dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    const { result } = renderThemeHook();

    expect(result.current.state.theme).toBe('light');

    act(() => {
      result.current.dispatch.setThemeDark();
    });

    expect(result.current.state.theme).toBe('dark');

    act(() => {
      result.current.dispatch.setThemeDark();
    });

    expect(result.current.state.theme).toBe('dark');
  });

  it('renders with the dispatch to set theme light', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook();

    expect(result.current.state.theme).toBe('dark');

    act(() => {
      result.current.dispatch.setThemeLight();
    });

    expect(result.current.state.theme).toBe('light');

    act(() => {
      result.current.dispatch.setThemeLight();
    });

    expect(result.current.state.theme).toBe('light');
  });

  it('listens to the user color scheme change event', () => {
    const { result } = renderThemeHook();

    expect(result.current.state.theme).toBe('dark');

    act(() => {
      dispatchMatchMedia(THEME_QUERY_DARK);
    });

    expect(result.current.state.theme).toBe('light');
  });
});
