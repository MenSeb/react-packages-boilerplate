import * as React from 'react';

type TabProps = {
  children?: React.ReactNode;
};

export default function Tab({ children }: TabProps): JSX.Element {
  return <div>{children}</div>;
}
