import * as React from 'react';
import ContextReducer from '../setup';
import { Options } from '../types';

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  options: Options;
} & React.PropsWithChildren;

export default function Tabs({
  children,
  options,
  ...props
}: TabsProps): JSX.Element {
  const idWidget = React.useId();

  return (
    <ContextReducer.Provider initialState={{ ...options, idWidget }}>
      <div {...props} aria-live="polite" role="region">
        {children}
      </div>
    </ContextReducer.Provider>
  );
}
