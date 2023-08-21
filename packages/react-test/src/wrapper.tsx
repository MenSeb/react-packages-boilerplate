import * as React from 'react';

export function createWrapper<Props>(
  WrapperElement: React.ElementType,
  props: Props,
) {
  return function Wrapper({ children }: React.PropsWithChildren) {
    return <WrapperElement {...props}>{children}</WrapperElement>;
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
