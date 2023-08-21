import * as React from 'react';
import { createRender, CreateRender, CustomRender, Settings } from '.';

export function createWrapper<Props>(
  WrapperElement: React.ElementType,
  props: Props,
) {
  return function Wrapper({ children }: React.PropsWithChildren) {
    return <WrapperElement {...props}>{children}</WrapperElement>;
  };
}

export function createRenderWrapper<PropsWrapper, PropsElement>(
  wrapper: React.ElementType,
  propsWrapper: PropsWrapper,
): CreateRender<PropsElement> {
  return function renderWrapper(
    element: React.ElementType,
    propsElement: PropsElement,
    settings?: Settings,
  ): CustomRender<PropsElement> {
    return createRender(element, propsElement, {
      options: {
        ...settings?.options,
        wrapper: createWrapper(wrapper, propsWrapper),
      },
      setup: settings?.setup,
    });
  };
}

// export function createRenderWrapper<PropsElement, PropsWrapper>(
//   element: React.ElementType,
//   propsElement: PropsElement,
//   wrapper: React.ElementType,
//   propsWrapper: PropsWrapper,
//   settings: Settings,
// ) {
//   const { options, setup } = settings;

//   return createRender(element, propsElement, {
//     options: { ...options, wrapper: createWrapper(wrapper, propsWrapper) },
//     setup,
//   });
// }
