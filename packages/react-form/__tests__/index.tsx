import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { RenderOptions, render } from '@testing-library/react';

export type Settings<Props> = {
  props: Props;
  options?: RenderOptions;
};

export function createRender<Props>(
  UIElement: React.ElementType,
  defaultSettings?: Settings<Props>,
) {
  const user = userEvent.setup();

  return function renderElement(customSettings?: Settings<Partial<Props>>) {
    const props = { ...defaultSettings?.props, ...customSettings?.props };

    const result = render(<UIElement {...props} />, {
      ...defaultSettings?.options,
      ...customSettings?.options,
    });

    function rerender(rerenderProps?: Partial<Props>) {
      return result.rerender(<UIElement {...props} {...rerenderProps} />);
    }

    return { ...result, rerender, user };
  };
}
