import * as React from 'react';

export type PanelProps = React.PropsWithChildren & {
  hidden?: boolean;
  id?: string;
  labelledby?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Panel({
  children,
  hidden,
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
