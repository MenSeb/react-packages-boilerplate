import * as React from 'react';

export type SeparatorProps = React.ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical';
};

export function Separator({ children, orientation, ...props }: SeparatorProps) {
  return (
    <div {...props} aria-orientation={orientation} role="separator">
      {children}
    </div>
  );
}
