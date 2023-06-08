import * as React from 'react';
import { render, screen } from '@testing-library/react';

export const otherProps = {
  className: 'className',
  id: 'id',
  style: { display: 'flex' },
};

export function createRender<Props>(
  Element: React.ElementType,
  defaultProps?: Partial<Props>,
) {
  return function renderElement(customProps?: Partial<Props>) {
    const result = render(<Element {...defaultProps} {...customProps} />);

    function rerender(rerenderProps?: Partial<Props>) {
      return result.rerender(
        <Element {...defaultProps} {...customProps} {...rerenderProps} />,
      );
    }

    return { ...result, rerender };
  };
}

export function getDivider() {
  return screen.getByRole('separator');
}

export function queryDividerElement(
  selector: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,
) {
  return getDivider().querySelector(selector);
}

export function queryDividerSvg() {
  return queryDividerElement('svg');
}

export function queryDividerRect() {
  return queryDividerElement('rect');
}

export function queryDividerPath() {
  return queryDividerElement('path');
}
