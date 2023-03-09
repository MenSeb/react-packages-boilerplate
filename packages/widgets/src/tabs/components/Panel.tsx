import * as React from 'react';

type PanelProps = {
  children?: React.ReactNode;
};

export default function Panel({ children }: PanelProps): JSX.Element {
  return <div>{children}</div>;
}
