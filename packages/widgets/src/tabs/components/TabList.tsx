import * as React from 'react';

type TabListProps = {
  children?: React.ReactNode;
};

export default function TabList({ children }: TabListProps): JSX.Element {
  return <div>{children}</div>;
}
