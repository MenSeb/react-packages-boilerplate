import * as React from 'react';

export type DividerProps = React.ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical';
};

export function Divider({ children, orientation, ...props }: DividerProps) {
  return (
    <div {...props} aria-orientation={orientation} role="separator">
      {children}
    </div>
  );
}
