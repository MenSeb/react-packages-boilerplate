import * as React from 'react';
import { screen, within } from '@testing-library/react';
import {
  Options,
  Panel,
  PanelList,
  Tab,
  TabList,
  Tabs,
  TabsProvider,
  TabsProviderProps,
} from '../../src/tabs';
import { createRender, createWrapper } from '..';

export const indexRemovable = 2;
export const defaultOptions: Options = {
  numberOfTabs: 4,
  label: 'label',
};

export const childrenTabs = Array.from(
  { length: defaultOptions.numberOfTabs },
  (_, index) => {
    return (
      <Tab
        key={index}
        removable={indexRemovable === index ? true : undefined}
      >{`tab ${index}`}</Tab>
    );
  },
);

export const childrenPanels = Array.from(
  { length: defaultOptions.numberOfTabs },
  (_, index) => {
    return <Panel key={index}>{`panel ${index}`}</Panel>;
  },
);

export function createRenderTabs<Props>(
  FC: React.ElementType,
  defaultProps?: Props,
) {
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

export function Widget(): JSX.Element {
  return (
    <Tabs>
      <TabList>{childrenTabs}</TabList>
      <PanelList>{childrenPanels}</PanelList>
    </Tabs>
  );
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
