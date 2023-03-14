import * as React from 'react';
import { render } from '@testing-library/react';
import { TabList } from '../../src/tabs';
import { getAllTabListItems, getTabList } from './';

const props = {
  children: ['children-0', 'children-1'],
  className: 'classname',
  style: { color: 'red' },
};

const propsLabel = {
  ...props,
  label: 'label',
};

const propsLabelledby = {
  ...props,
  labelledby: 'labelledby',
};

describe('<TabList />', () => {
  describe('Default behavior and props', () => {
    beforeEach(() => render(<TabList {...propsLabel} />));

    it('renders with role tablist', () => {
      expect(getTabList()).toBeInTheDocument();
    });

    it('renders with attribute aria-orientation to horizontal', () => {
      expect(getTabList()).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('renders children in list item with role presentation', () => {
      getAllTabListItems().forEach((item, index) => {
        expect(getTabList()).toContainElement(item);
        expect(item.firstChild).toHaveTextContent(props.children[index]);
      });
    });

    it('renders with other attributes as className or style', () => {
      expect(getTabList()).toHaveClass(props.className);
      expect(getTabList()).toHaveStyle(props.style);
    });
  });

  describe('When orientation is horizontal', () => {
    beforeEach(() =>
      render(<TabList {...propsLabel} orientation="horizontal" />),
    );

    it('renders with attribute aria-orientation to horizontal', () => {
      expect(getTabList()).toHaveAttribute('aria-orientation', 'horizontal');
    });
  });

  describe('When orientation is vertical', () => {
    beforeEach(() =>
      render(<TabList {...propsLabel} orientation="vertical" />),
    );

    it('renders with attribute aria-orientation to vertical', () => {
      expect(getTabList()).toHaveAttribute('aria-orientation', 'vertical');
    });
  });

  describe('With label provided', () => {
    beforeEach(() => render(<TabList {...propsLabel} />));

    it('renders with attribute aria-label', () => {
      expect(getTabList()).toHaveAttribute('aria-label', propsLabel.label);
    });
  });

  describe('With labelledby provided', () => {
    beforeEach(() => render(<TabList {...propsLabelledby} />));

    it('renders with attribute aria-labelledby', () => {
      expect(getTabList()).toHaveAttribute(
        'aria-labelledby',
        propsLabelledby.labelledby,
      );
    });
  });
});
