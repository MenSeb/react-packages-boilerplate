import * as React from 'react';
import { useTabsContextState } from '../utilities';

export type TabListProps = {
  children: React.ReactNode[];
};

export function TabList({ children, ...props }: TabListProps): JSX.Element {
  const { datas, idActiveTab, label, labelledby, orientation } =
    useTabsContextState();

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
            {React.cloneElement(child as React.ReactElement, {
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
