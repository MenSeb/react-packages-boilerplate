import * as React from 'react';
import { useTabsContextState } from '../utilities';

export type PanelListProps = {
  children: React.ReactNode[];
};

export function PanelList({ children }: PanelListProps): JSX.Element {
  const { datas, idActiveTab } = useTabsContextState();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const { id, idTab, idPanel } = datas[index];

        return React.cloneElement(child as React.ReactElement, {
          hidden: id === idActiveTab,
          id: idPanel,
          labelledby: idTab,
        });
      })}
    </>
  );
}
