import * as React from 'react';

type PanelListProps = {
  children: React.ReactNode[];
};

export default function PanelList({ children }: PanelListProps): JSX.Element {
  return <>{children}</>;
}
