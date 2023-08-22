import {
  createRenderWrapper,
  createRenderHookWrapper,
  screen,
} from '@packages/react-test';
import * as Theme from '../src';

beforeEach(() => {
  localStorage.clear();
});

export function getButton() {
  return screen.getByRole('button');
}

export function getIcon(container: HTMLElement) {
  return container.querySelector('svg');
}

export function getIconPath(container: HTMLElement) {
  return getIcon(container)?.querySelector('path');
}

export const createRender = createRenderWrapper<Theme.ProviderProps>(
  Theme.Provider,
);

export const createRenderHook = createRenderHookWrapper<Theme.ProviderProps>(
  Theme.Provider,
);

export const props = {
  className: 'className',
  id: 'id',
  style: { color: 'red' },
};
