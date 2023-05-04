import { screen, within } from '@testing-library/react';
import { Options, TabsProvider, TabsProviderProps } from '../../src/tabs';
import { createRender, createWrapper } from '..';
import { ElementType } from 'react';

export const defaultOptions: Options = {
  numberOfTabs: 4,
  label: 'label',
};

export function createRenderTabs<Props>(FC: ElementType, defaultProps?: Props) {
  return function renderTabsComponent({
    props,
    options,
  }: {
    props?: Props;
    options?: Partial<Options>;
  } = {}) {
    return createRender<Props>(FC, {
      defaultProps,
      options: {
        wrapper: createWrapper<TabsProviderProps>(
          TabsProvider,
          defaultOptions,
        )(options),
      },
    })(props);
  };
}

export function getAllPanels(hidden = true): HTMLElement[] {
  return screen.getAllByRole('tabpanel', { hidden });
}

export function getPanel(index = 0, hidden?: boolean): HTMLElement {
  return getAllPanels(hidden)[index];
}

export function getAllTabs(): HTMLElement[] {
  return screen.getAllByRole('tab');
}

export function getTab(index = 0): HTMLElement {
  return getAllTabs()[index];
}

export function getTabList(): HTMLElement {
  return screen.getByRole('tablist');
}

export function getAllTabListItems(): HTMLElement[] {
  return within(getTabList()).getAllByRole('presentation');
}

export function getTabs(): HTMLElement {
  return screen.getByRole('region');
}
