import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import {
  Panel,
  PanelProps,
  PanelList,
  PanelListProps,
  Tab,
  TabProps,
  TabList,
  TabListProps,
  Tabs,
  TabsProps,
} from '../../src/tabs';

export const numberOfTabs = 5;

export type WrapperProps = {
  propsPanel: PanelProps;
  propsPanelList: PanelListProps;
  propsTab: TabProps;
  propsTabList: TabListProps;
  propsTabs: TabsProps;
};

export function Wrapper({
  propsPanel,
  propsPanelList,
  propsTab,
  propsTabList,
  propsTabs,
}: WrapperProps) {
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

export function renderTabs(props: WrapperProps) {
  return render(<Wrapper {...props} />);
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
