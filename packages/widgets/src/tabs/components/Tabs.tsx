import * as React from 'react';

export type TabsProps = React.ComponentProps<'div'>;

export function Tabs({ children, ...props }: TabsProps) {
  return (
    <div {...props} aria-live="polite" role="region">
      {children}
    </div>
  );
}
