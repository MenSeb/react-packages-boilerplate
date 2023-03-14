import * as React from 'react';

type TabsProps = {
  children?: React.ReactNode;
};

export default function Tabs({ children, ...props }: TabsProps): JSX.Element {
  return (
    <div {...props} aria-live="polite" role="region">
      {children}
    </div>
  );
}
