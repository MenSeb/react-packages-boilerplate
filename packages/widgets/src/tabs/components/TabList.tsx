import * as React from 'react';
import ContextReducer from '../setup';
import { TabProps } from './Tab';

export type TabListProps = Omit<React.ComponentProps<'ul'>, 'children'> & {
  children: React.ReactElement<TabProps>[];
};

export function TabList({ children, ...props }: TabListProps) {
  const { datas, idActiveTab, label, labelledby, orientation } =
    ContextReducer.useContextState();

  return (
    <ul
      aria-orientation={orientation}
      aria-label={label}
      aria-labelledby={labelledby}
      role="tablist"
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        const { idTab, idPanel } = datas[index];

        return (
          <li key={index} role="presentation">
            {React.cloneElement(child, {
              controls: idPanel,
              id: idTab,
              selected: idTab === idActiveTab,
            })}
          </li>
        );
      })}
    </ul>
  );
}
