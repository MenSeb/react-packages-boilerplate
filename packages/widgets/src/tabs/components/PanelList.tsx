import * as React from 'react';
import ContextReducer from '../setup';
import { Panel } from '.';

export type PanelListProps = {
  children: React.ReactElement<React.ComponentProps<typeof Panel>>[];
};

export default function PanelList({ children }: PanelListProps): JSX.Element {
  const { datas, idActiveTab } = ContextReducer.useContextState();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const { id, idTab, idPanel } = datas[index];

        return React.cloneElement(child, {
          hidden: id === idActiveTab,
          id: idPanel,
          labelledby: idTab,
        });
      })}
    </>
  );
}
