import { Tabs, TabsProps } from '../../../src/tabs';
import { createRenderTabs, getTabs } from '../';

const props = {
  children: 'children',
  className: 'classname',
  id: 'id',
  style: { color: 'red' },
};

const renderTabs = createRenderTabs<TabsProps>(Tabs, props);

describe.skip('<Tabs />', () => {
  describe('Default behavior and props', () => {
    beforeEach(() => renderTabs());

    it('renders with role region', () => {
      expect(getTabs()).toBeInTheDocument();
    });

    it('renders with children', () => {
      expect(getTabs()).toHaveTextContent(props.children);
    });

    it('renders with attribute aria-live to polite', () => {
      expect(getTabs()).toHaveAttribute('aria-live', 'polite');
    });

    it('renders with other attributes as className or style', () => {
      expect(getTabs()).toHaveClass(props.className);
      expect(getTabs()).toHaveStyle(props.style);
      expect(getTabs()).toHaveAttribute(props.id);
    });
  });
});
