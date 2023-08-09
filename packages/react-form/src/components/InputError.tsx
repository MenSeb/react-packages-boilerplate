import * as React from 'react';
import * as UI from '@packages/react-ui';

export type InputErrorProps = UI.SpanProps;

export function InputError({ children, ...props }: InputErrorProps) {
  return (
    <UI.Span {...props} role="alert">
      {children}
    </UI.Span>
  );
}
