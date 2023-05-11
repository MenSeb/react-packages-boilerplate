import * as React from 'react';

export type TabProps = React.ComponentProps<'button'> & {
  controls?: string;
  id?: string;
  removable?: boolean;
  selected?: boolean;
};

export function Tab({
  children,
  controls,
  id,
  removable,
  selected,
  ...props
}: TabProps) {
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
