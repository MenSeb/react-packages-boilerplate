import { PanelList, PanelListProps } from '../../../src/tabs';
import { childrenPanels, createRenderTabs } from '../';

const props = {
  children: childrenPanels,
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
