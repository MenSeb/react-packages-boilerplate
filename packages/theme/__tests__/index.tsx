import * as React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import * as Theme from '../src';

beforeEach(() => localStorage.clear());

export const props = {
  className: 'className',
  id: 'id',
  style: { color: 'red' },
};

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
