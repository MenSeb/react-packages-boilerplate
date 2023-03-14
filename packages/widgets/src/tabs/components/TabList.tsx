import * as React from 'react';

type TabList = {
  children: React.ReactNode[];
  orientation?: 'horizontal' | 'vertical';
};

type TabListLabel = TabList & {
  label: string;
  labelledby?: never;
};

type TabListLabelledby = TabList & {
  label?: never;
  labelledby: string;
};

type TabListProps = TabListLabel | TabListLabelledby;

export default function TabList({
  children,
  label,
  labelledby,
  orientation = 'horizontal',
  ...props
}: TabListProps): JSX.Element {
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
