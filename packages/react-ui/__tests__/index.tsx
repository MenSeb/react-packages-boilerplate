import * as React from 'react';
import { RenderOptions, render } from '@testing-library/react';

export const otherProps = {
  className: 'className',
  id: 'id',
  style: { display: 'flex' },
};

export const propsLabel = {
  label: 'label',
};

export const propsLabelledy = {
  labelledby: 'labelledby',
};

export interface Settings<Props> {
  props?: Partial<Props>;
  options?: RenderOptions;
}

export function createRender<Props>(
  UIElement: React.ElementType,
  defaultSettings?: Settings<Props>,
) {
  return function renderElement(customSettings?: Settings<Props>) {
    const props = { ...defaultSettings?.props, ...customSettings?.props };

    const result = render(<UIElement {...props} />, {
      ...defaultSettings?.options,
      ...customSettings?.options,
    });

    function rerender(rerenderProps?: Partial<Props>) {
      result.rerender(<UIElement {...props} {...rerenderProps} />);
    }

    return { ...result, rerender };
  };
}
