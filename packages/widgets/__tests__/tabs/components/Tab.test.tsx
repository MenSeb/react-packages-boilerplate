import * as React from 'react';
import { render } from '@testing-library/react';
import { Tab } from '../../../src/tabs';
import { getTab } from '../';

const props = {
  children: 'children',
  className: 'classname',
  controls: 'controls',
  id: ' id',
  removable: false,
  selected: false,
  style: { color: 'red' },
};

describe('<Tab />', () => {
  describe('Default behavior and props', () => {
    beforeEach(() => render(<Tab {...props} />));

    it('renders with role tab', () => {
      expect(getTab()).toBeInTheDocument();
    });

    it('renders with children', () => {
      expect(getTab()).toHaveTextContent(props.children);
    });

    it('renders with attribute id', () => {
      expect(getTab()).toHaveAttribute('id', props.id);
    });

    it('renders with attribute aria-controls', () => {
      expect(getTab()).toHaveAttribute('aria-controls', props.controls);
    });

    it('renders with other attributes  as className or style', () => {
      expect(getTab()).toHaveClass(props.className);
      expect(getTab()).toHaveStyle(props.style);
    });
  });

  describe('When selected', () => {
    beforeEach(() => render(<Tab {...props} selected={true} />));

    it('renders with attribute aria-selected to true', () => {
      expect(getTab()).toHaveAttribute('aria-selected', 'true');
    });

    it('renders with attribute tabIndex to 0', () => {
      expect(getTab()).toHaveAttribute('tabindex', '0');
    });
  });

  describe('When not selected', () => {
    beforeEach(() => render(<Tab {...props} selected={false} />));

    it('renders with attribute aria-selected to false', () => {
      expect(getTab()).toHaveAttribute('aria-selected', 'false');
    });

    it('renders with attribute tabIndex to -1', () => {
      expect(getTab()).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('When removable', () => {
    beforeEach(() => render(<Tab {...props} removable={true} />));

    it('renders with attribute data-removable to true', () => {
      expect(getTab()).toHaveAttribute('data-removable', 'true');
    });
  });

  describe('When not removable', () => {
    beforeEach(() => render(<Tab {...props} removable={false} />));

    it('renders with attribute data-removable to false', () => {
      expect(getTab()).toHaveAttribute('data-removable', 'false');
    });
  });
});
