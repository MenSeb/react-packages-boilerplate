import * as React from 'react';
import ContextReducer from '../setup';
import { TabProps } from './Tab';

export type TabListProps = React.HTMLAttributes<HTMLUListElement> & {
  children: React.ReactElement<TabProps>[];
};

export function TabList({ children, ...props }: TabListProps): JSX.Element {
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
        const { id, idTab, idPanel } = datas[index];

        return (
          <li key={index} role="presentation">
            {React.cloneElement(child, {
              controls: idPanel,
              id: idTab,
              selected: id === idActiveTab,
            })}
          </li>
        );
      })}
    </ul>
  );
}
