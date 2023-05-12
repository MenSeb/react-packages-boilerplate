import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '@testing-library/react';
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

export const defaultOptions: Options = {
  numberOfTabs: 4,
  label: 'label',
};

export const options: Omit<Options, 'label' | 'labelledby'> = {
  initialTabIndex: 2,
  numberOfTabs: 4,
  orientation: 'horizontal',
  removable: false,
};

export const optionsLabel: Options = {
  ...options,
  label: 'label',
};

export const optionsLabelledby: Options = {
  ...options,
  labelledby: 'labelledby',
};

export const propsStyling = {
  className: 'className',
  style: { color: 'red' },
};

export const childrenTabs = Array.from(
  { length: defaultOptions.numberOfTabs },
  (_, index) => {
    return <Tab key={index}>{`tab ${index}`}</Tab>;
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

export function WidgetTabs({ options }: { options: Options }) {
  return (
    <TabsProvider {...options}>
      <Tabs {...propsStyling}>
        <TabList {...propsStyling}>
          {Array.from({ length: options.numberOfTabs }, (_, index) => {
            return (
              <Tab {...propsStyling} key={index}>
                {`tab ${index}`}
              </Tab>
            );
          })}
        </TabList>
        <PanelList>
          {Array.from({ length: options.numberOfTabs }, (_, index) => {
            return (
              <Panel {...propsStyling} key={index}>
                {`panel ${index}`}
              </Panel>
            );
          })}
        </PanelList>
      </Tabs>
    </TabsProvider>
  );
}

export function renderWidgetTabs(options = optionsLabel) {
  return {
    ...render(<WidgetTabs options={options} />),
    user: userEvent.setup(),
  };
}

export function getAllPanels(hidden = true) {
  return screen.getAllByRole('tabpanel', { hidden });
}

export function getPanel(index = 0, hidden?: boolean) {
  return getAllPanels(hidden)[index];
}

export function getActivePanel() {
  return getAllPanels().find(
    (panel) => panel.getAttribute('aria-hidden') === 'false',
  );
}

export function getAllTabs() {
  return screen.getAllByRole('tab');
}

export function getTab(index = 0) {
  return getAllTabs()[index];
}

export function getActiveTab() {
  return getAllTabs().find(
    (tab) => tab.getAttribute('aria-selected') === 'true',
  );
}

export function getTabList() {
  return screen.getByRole('tablist');
}

export function getAllTabListItems() {
  return within(getTabList()).getAllByRole('presentation');
}

export function getTabs() {
  return screen.getByRole('region');
}
