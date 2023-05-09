import { act } from '@testing-library/react';
import * as Theme from '../../src';
import { THEME_QUERY_DARK, THEME_STORAGE_KEY } from '../../src/utilities';
import {
  mockMatchMedia,
  renderThemeHook,
  spyAddEventListener,
  spyRemoveEventListener,
} from '..';

describe('Provider', () => {
  it('loads the dark theme from local storage', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook(Theme.useContextReducer);

    expect(result.current.state.theme).toBe('dark');
  });

  it('loads the light theme from local storage', () => {
    const { result } = renderThemeHook(Theme.useContextReducer);

    expect(result.current.state.theme).toBe('light');
  });

  it('loads the user color scheme preference', () => {
    jest
      .spyOn(window, 'matchMedia')
      .mockImplementationOnce(mockMatchMedia(THEME_QUERY_DARK));

    const { result } = renderThemeHook(Theme.useContextReducer);

    expect(result.current.state.theme).toBe('dark');
  });

  it('saves the theme in local storage on the initial render', () => {
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();

    renderThemeHook(Theme.useContextReducer);

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  });

  it('saves the theme in local storage when it changes', () => {
    const { result } = renderThemeHook(Theme.useContextReducer);

    act(() => result.current.dispatch.toggleTheme());

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');

    act(() => result.current.dispatch.setThemeLight());

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

    act(() => result.current.dispatch.setThemeDark());

    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('renders with the initial theme', () => {
    const { result } = renderThemeHook(Theme.useContextReducer);

    expect(result.current.state.theme).toBe('light');
  });

  it('renders with the dispatch to toggle theme', () => {
    const { result } = renderThemeHook(Theme.useContextReducer);

    expect(result.current.state.theme).toBe('light');

    act(() => result.current.dispatch.toggleTheme());

    expect(result.current.state.theme).toBe('dark');

    act(() => result.current.dispatch.toggleTheme());

    expect(result.current.state.theme).toBe('light');
  });

  it('renders with the dispatch to set theme dark', () => {
    const { result } = renderThemeHook(Theme.useContextReducer);

    expect(result.current.state.theme).toBe('light');

    act(() => result.current.dispatch.setThemeDark());

    expect(result.current.state.theme).toBe('dark');

    act(() => result.current.dispatch.setThemeDark());

    expect(result.current.state.theme).toBe('dark');
  });

  it('renders with the dispatch to set theme light', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderThemeHook(Theme.useContextReducer);

    expect(result.current.state.theme).toBe('dark');

    act(() => result.current.dispatch.setThemeLight());

    expect(result.current.state.theme).toBe('light');

    act(() => result.current.dispatch.setThemeLight());

    expect(result.current.state.theme).toBe('light');
  });

  it('listens to the user color scheme change event', () => {
    const { unmount } = renderThemeHook(Theme.useContextReducer);

    expect(spyAddEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );

    unmount();

    expect(spyRemoveEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
  });

  // to implement the next tests, try to trigger the onchange event
  // on the MediaQueryList, maybe using DispatchEvent?
  // 'updates the theme when the user color scheme change'
  // 'saves the theme when the user color scheme change'
});
