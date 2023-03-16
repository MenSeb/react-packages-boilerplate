import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
import { Panel, PanelList, Tab, TabList, Tabs } from '../../src/tabs';
import { Options, OptionsBase } from '../../src/tabs/utilities';

export const props = {
  className: 'className',
  style: { color: 'red' },
};

export const options: OptionsBase = {
  initialIndex: 2,
  numberOfTabs: 5,
};

export const optionsLabel: Options = {
  ...options,
  label: 'label',
};

export const optionsLabelledby: Options = {
  ...options,
  labelledby: 'labelledby',
};

export type WrapperProps = {
  options: Options;
};

export function Wrapper({ options }: WrapperProps) {
  return (
    <Tabs {...props} options={options}>
      <TabList {...props}>
        {Array.from({ length: options.numberOfTabs }, (_, index) => (
          <Tab {...props} key={index}>
            {`Tab ${index}`}
          </Tab>
        ))}
      </TabList>
      <PanelList {...props}>
        {Array.from({ length: options.numberOfTabs }, (_, index) => (
          <Panel {...props} key={index}>
            {`Panel ${index}`}
          </Panel>
        ))}
      </PanelList>
    </Tabs>
  );
}

export function renderTabs(options = optionsLabel) {
  return render(<Wrapper options={options} />);
}

export function renderTabsUser(options?: Options) {
  return { ...renderTabs(options), user: userEvent.setup() };
}

export function getAllPanels(hidden = true): HTMLElement[] {
  return screen.getAllByRole('tabpanel', { hidden });
}

export function getPanel(index = 0, hidden?: boolean): HTMLElement {
  return getAllPanels(hidden)[index];
}

export function getActivePanel(): HTMLElement | undefined {
  return getAllPanels().find(
    (panel) => panel.getAttribute('aria-hidden') === 'false',
  );
}

export function getAllTabs(): HTMLElement[] {
  return screen.getAllByRole('tab');
}

export function getTab(index = 0): HTMLElement {
  return getAllTabs()[index];
}

export function getActiveTab(): HTMLElement | undefined {
  return getAllTabs().find(
    (tab) => tab.getAttribute('aria-selected') === 'true',
  );
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
