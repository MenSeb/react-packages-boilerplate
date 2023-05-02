import * as React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import * as Theme from '../src';

export const spyAddEventListener = jest.fn();
export const spyRemoveEventListener = jest.fn();

export function defineMatchMedia() {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: mockMatchMedia(),
  });
}

export function mockMatchMedia(mediaQuery?: string | string[]) {
  return jest.fn((query: string) => ({
    matches: mediaQuery === undefined ? false : mediaQuery.includes(query),
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: spyAddEventListener,
    removeEventListener: spyRemoveEventListener,
    dispatchEvent: jest.fn(),
  }));
}

export function renderThemeHook<Result>(hook: () => Result) {
  return renderHook(() => hook(), { wrapper: Theme.Provider });
}

export function createRender(
  FC: React.ElementType,
  defaultProps?: Record<string, unknown>,
) {
  return (customProps?: Record<string, unknown>) => {
    return render(<FC {...defaultProps} {...customProps} />, {
      wrapper: Theme.Provider,
    });
  };
}

export function getButton() {
  return screen.getByRole('button');
}

export function getIcon(container: HTMLElement) {
  return container.querySelector('svg');
}

export function getIconPath(container: HTMLElement) {
  return getIcon(container)?.querySelector('path');
}

beforeAll(() => defineMatchMedia());
beforeEach(() => localStorage.clear());
afterEach(() => {
  spyAddEventListener.mockReset();
  spyRemoveEventListener.mockReset();
});
