import * as React from 'react';

export type TabProps = React.HTMLAttributes<HTMLButtonElement> & {
  controls?: string;
  id?: string;
  removable?: boolean;
  selected?: boolean;
} & React.PropsWithChildren;

export default function Tab({
  children,
  controls,
  id,
  removable,
  selected,
  ...props
}: TabProps): JSX.Element {
  return (
    <button
      {...props}
      aria-controls={controls}
      aria-selected={selected}
      data-removable={removable}
      id={id}
      role="tab"
      tabIndex={selected ? 0 : -1}
    >
      {children}
    </button>
  );
}
