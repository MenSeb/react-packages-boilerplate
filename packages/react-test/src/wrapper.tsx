import * as React from 'react';

export function createWrapper<Props>(
  Provider: React.ElementType,
  props: Props,
) {
  return function Wrapper({ children }: React.PropsWithChildren) {
    return <Provider {...props}>{children}</Provider>;
  };
}
