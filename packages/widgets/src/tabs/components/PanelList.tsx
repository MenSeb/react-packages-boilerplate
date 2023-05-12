import * as React from 'react';
import ContextReducer from '../setup';
import { PanelProps } from './Panel';

export type PanelListProps = {
  children: React.ReactElement<PanelProps>[];
};

export function PanelList({ children }: PanelListProps) {
  const { datas, idActiveTab } = ContextReducer.useContextState();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const { idTab, idPanel } = datas[index];

        return React.cloneElement(child, {
          hidden: idTab !== idActiveTab,
          id: idPanel,
          labelledby: idTab,
        });
      })}
    </>
  );
}
