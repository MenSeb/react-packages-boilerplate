import * as React from 'react';

export function createWrapper<Props>(
  WrapperElement: React.ElementType,
  props: Props,
) {
  return function Wrapper({ children }: React.PropsWithChildren) {
    return <WrapperElement {...props}>{children}</WrapperElement>;
  };
}
