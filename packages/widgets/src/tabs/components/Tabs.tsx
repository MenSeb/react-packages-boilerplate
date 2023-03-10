import * as React from 'react';

type TabsProps = {
  children?: React.ReactNode;
};

export default function Tabs({ children }: TabsProps): JSX.Element {
  return <div>{children}</div>;
}
