import * as React from 'react';

type PanelProps = {
  children: React.ReactNode;
  hidden?: boolean;
  id: string;
  labelledby: string;
};

export default function Panel({
  children,
  hidden = true,
  id,
  labelledby,
  ...props
}: PanelProps): JSX.Element {
  return (
    <div
      {...props}
      aria-hidden={hidden}
      aria-labelledby={labelledby}
      id={id}
      role="tabpanel"
      tabIndex={hidden ? -1 : 0}
    >
      {children}
    </div>
  );
}
