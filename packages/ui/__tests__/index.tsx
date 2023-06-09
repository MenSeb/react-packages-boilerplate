import * as React from 'react';
import { render } from '@testing-library/react';

export const otherProps = {
  className: 'className',
  id: 'id',
  style: { display: 'flex' },
};

export function createRender<Props>(
  UIElement: React.ElementType,
  defaultProps?: Partial<Props>,
) {
  return function renderElement(customProps?: Partial<Props>) {
    const result = render(<UIElement {...defaultProps} {...customProps} />);

    function rerender(rerenderProps?: Partial<Props>) {
      return result.rerender(
        <UIElement {...defaultProps} {...customProps} {...rerenderProps} />,
      );
    }

    return { ...result, rerender };
  };
}
