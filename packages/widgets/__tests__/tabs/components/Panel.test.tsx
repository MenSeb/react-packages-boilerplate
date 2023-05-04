import * as React from 'react';
import { render } from '@testing-library/react';
import { Panel } from '../../../src/tabs';
import { getPanel } from '../';

const props = {
  children: 'children',
  className: 'classname',
  id: ' id',
  labelledby: 'labelledby',
  style: { color: 'red' },
};

describe('<Panel />', () => {
  describe('Default behavior and props', () => {
    beforeEach(() => render(<Panel {...props} />));

    it('renders with role panel', () => {
      expect(getPanel()).toBeInTheDocument();
    });

    it('renders with children', () => {
      expect(getPanel()).toHaveTextContent(props.children);
    });

    it('renders with attribute id', () => {
      expect(getPanel()).toHaveAttribute('id', props.id);
    });

    it('renders with attribute aria-labelledby', () => {
      expect(getPanel()).toHaveAttribute('aria-labelledby', props.labelledby);
    });

    it('renders with other attributes as className or style', () => {
      expect(getPanel()).toHaveClass(props.className);
      expect(getPanel()).toHaveStyle(props.style);
    });
  });

  describe('When selected', () => {
    beforeEach(() => render(<Panel {...props} hidden={false} />));

    it('renders with attribute aria-hidden to false', () => {
      expect(getPanel()).toHaveAttribute('aria-hidden', 'false');
    });

    it('renders with attribute tabIndex to 0', () => {
      expect(getPanel()).toHaveAttribute('tabindex', '0');
    });
  });

  describe('When not selected', () => {
    beforeEach(() => render(<Panel {...props} hidden={true} />));

    it('renders with attribute aria-hidden to true', () => {
      expect(getPanel()).toHaveAttribute('aria-hidden', 'true');
    });

    it('renders with attribute tabIndex to -1', () => {
      expect(getPanel()).toHaveAttribute('tabindex', '-1');
    });
  });
});
