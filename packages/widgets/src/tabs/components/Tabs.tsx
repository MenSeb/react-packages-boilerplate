import * as React from 'react';
import ContextReducer from '../setup';
import { InitialState } from '../types';

export type TabsProps = React.PropsWithChildren & {
  initialState: Omit<InitialState, 'idWidget'>;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Tabs({
  children,
  initialState,
  ...props
}: TabsProps): JSX.Element {
  const idWidget = React.useId();

  return (
    <ContextReducer.Provider initialState={{ ...initialState, idWidget }}>
      <div {...props} aria-live="polite" role="region">
        {children}
      </div>
    </ContextReducer.Provider>
  );
}
