import * as React from 'react';
import { screen, within } from '@testing-library/react';
import { Panel, PanelList, Tab, TabList, Tabs } from '../../src/tabs';
import {
  PanelProps,
  PanelListProps,
  TabProps,
  TabListProps,
  TabsProps,
} from '../../src/tabs/utilities';

export const numberOfTabs = 5;

export type Wrapper = {
  propsPanel: PanelProps;
  propsPanelList: PanelListProps;
  propsTab: TabProps;
  propsTabList: TabListProps;
  propsTabs: TabsProps;
};

export function wrapper({
  propsPanel = {},
  propsPanelList = {},
  propsTab = {},
  propsTabList = {},
  propsTabs = {},
}: Wrapper) {
  return (
    <Tabs {...propsTabs}>
      <TabList {...propsTabList}>
        {Array.from({ length: numberOfTabs }, (_, index) => (
          <Tab key={index} {...propsTab} />
        ))}
      </TabList>
      <PanelList {...propsPanelList}>
        {Array.from({ length: numberOfTabs }, (_, index) => (
          <Panel key={index} {...propsPanel} />
        ))}
      </PanelList>
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
