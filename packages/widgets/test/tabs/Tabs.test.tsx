import * as React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from '../../src/tabs';
import { getTabs } from './';

const props = {
  children: 'children',
  className: 'classname',
  style: { color: 'red' },
};

describe('<Tabs />', () => {
  describe('Default behavior and props', () => {
    beforeEach(() => render(<Tabs {...props} />));

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
    });
  });
});
