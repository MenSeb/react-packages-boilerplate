import * as React from 'react';

type TabProps = React.PropsWithChildren & {
  controls?: string;
  id?: string;
  removable?: boolean;
  selected?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

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
