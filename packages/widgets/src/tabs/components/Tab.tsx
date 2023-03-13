import * as React from 'react';

type TabProps = {
  children: React.ReactNode;
  controls: string;
  id: string;
  selected?: boolean;
};

export default function Tab({
  children,
  controls,
  id,
  selected = false,
  ...props
}: TabProps): JSX.Element {
  return (
    <button
      {...props}
      aria-controls={controls}
      aria-selected={selected}
      id={id}
      role="tab"
      tabIndex={selected ? 0 : -1}
    >
      {children}
    </button>
  );
}
