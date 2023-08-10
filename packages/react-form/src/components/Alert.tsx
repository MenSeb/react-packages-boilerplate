import * as React from 'react';
import * as UI from '@packages/react-ui';

export type AlertProps = UI.SpanProps;

export function Alert({ children, ...props }: AlertProps) {
  return (
    <UI.Span {...props} role="alert">
      {children}
    </UI.Span>
  );
}
