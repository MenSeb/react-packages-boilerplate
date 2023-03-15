import * as React from 'react';
import { useTabsContextState } from '../utilities';

export type TabListProps = {
  children: React.ReactNode[];
};

export function TabList({ children, ...props }: TabListProps): JSX.Element {
  const { label, labelledby, orientation } = useTabsContextState();

  return (
    <ul
      aria-orientation={orientation}
      aria-label={label}
      aria-labelledby={labelledby}
      role="tablist"
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <li key={index} role="presentation">
          {child}
        </li>
      ))}
    </ul>
  );
}
