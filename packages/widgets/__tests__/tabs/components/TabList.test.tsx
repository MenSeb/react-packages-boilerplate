import * as React from 'react';
import { Tab, TabList, TabListProps } from '../../../src/tabs/';
import {
  createRenderTabs,
  defaultOptions,
  getAllTabListItems,
  getTabList,
} from '../';

const props = {
  children: Array.from({ length: defaultOptions.numberOfTabs }, (_, index) => {
    return <Tab key={index}>{`tab ${index}`}</Tab>;
  }),
  className: 'classname',
  id: 'id',
  style: { color: 'red' },
};

const renderTabList = createRenderTabs<TabListProps>(TabList, props);

describe('<TabList />', () => {
  describe('Default behavior and props', () => {
    beforeEach(() => renderTabList());

    it('renders with role tablist', () => {
      expect(getTabList()).toBeInTheDocument();
    });

    it('renders children in list item with role presentation', () => {
      getAllTabListItems().forEach((item, index) => {
        expect(getTabList()).toContainElement(item);
        expect(item.firstChild).toHaveTextContent(`tab ${index}`);
      });
    });

    it('renders with other attributes as className or style', () => {
      expect(getTabList()).toHaveClass(props.className);
      expect(getTabList()).toHaveStyle(props.style);
      expect(getTabList()).toHaveAttribute(props.id);
    });
  });

  describe('When orientation is horizontal', () => {
    beforeEach(() => renderTabList({ options: { orientation: 'horizontal' } }));

    it('renders with attribute aria-orientation to horizontal', () => {
      expect(getTabList()).toHaveAttribute('aria-orientation', 'horizontal');
    });
  });

  describe('When orientation is vertical', () => {
    beforeEach(() => renderTabList({ options: { orientation: 'vertical' } }));

    it('renders with attribute aria-orientation to vertical', () => {
      expect(getTabList()).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('With label provided', () => {
    beforeEach(() => renderTabList());

    it('renders with attribute aria-label', () => {
      expect(getTabList()).toHaveAttribute('aria-label', defaultOptions.label);
    });
  });

  describe('With labelledby provided', () => {
    beforeEach(() => renderTabList({ options: { labelledby: 'labelledby' } }));

    it('renders with attribute aria-labelledby', () => {
      expect(getTabList()).toHaveAttribute(
        'aria-labelledby',
        defaultOptions.labelledby,
      );
    });
  });
});
