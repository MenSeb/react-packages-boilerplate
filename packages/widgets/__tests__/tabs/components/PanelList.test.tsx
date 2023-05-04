import * as React from 'react';
import { Panel, PanelList, PanelListProps } from '../../../src/tabs';
import { createRenderTabs, defaultOptions } from '../';

const props = {
  children: Array.from({ length: defaultOptions.numberOfTabs }, (_, index) => {
    return <Panel key={index}>{`panel ${index}`}</Panel>;
  }),
};

const renderPanelList = createRenderTabs<PanelListProps>(PanelList, props);

describe('<PanelList />', () => {
  it('renders with children', () => {
    const { container } = renderPanelList();

    container.childNodes.forEach((child, index) => {
      expect(child).toHaveTextContent(`panel ${index}`);
    });
  });
});
