import * as React from 'react';

export type PanelListProps = {
  children: React.ReactNode[];
};

export function PanelList({ children }: PanelListProps): JSX.Element {
  return <>{children}</>;
}
