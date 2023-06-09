import * as React from 'react';
import { render, screen, within } from '@testing-library/react';

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

export function getSeparator() {
  return screen.getByRole('separator');
}

export function getSeparatorChild() {
  return within(getSeparator()).getByRole('presentation');
}

export function querySeparatorElement(
  selector: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,
) {
  return getSeparator().querySelector(selector);
}

export function querySeparatorRect() {
  return querySeparatorElement('rect');
}

export function querySeparatorPath() {
  return querySeparatorElement('path');
}
