import * as React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

export function createRender<Props>(
  FC: React.ElementType,
  {
    defaultProps,
    options,
  }: {
    defaultProps?: Props;
    options: RenderOptions;
  },
): (props?: Partial<Props>) => RenderResult {
  return function renderComponent(customProps) {
    const props = { ...defaultProps, ...customProps };

    return render(<FC {...props} />, options);
  };
}

export function createWrapper<Props>(
  Provider: React.ElementType,
  defaultProps?: Props,
): (
  props?: Partial<Props>,
) => React.JSXElementConstructor<{ children: React.ReactElement }> {
  return function renderWrapper(customProps) {
    const props = { ...defaultProps, ...customProps };

    return function wrapper({ children }) {
      return <Provider {...props}>{children}</Provider>;
    };
  };
}
