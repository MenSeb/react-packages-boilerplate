import * as React from 'react';
import { Options } from '../utilities';
import { TabsProvider } from './TabsProvider';

export type TabsProps = {
  children: React.ReactNode;
  options: Options;
};

export function Tabs({ children, options, ...props }: TabsProps): JSX.Element {
  const idTabs = React.useId();

  return (
    <TabsProvider initialState={{ idTabs, ...options }}>
      <div {...props} aria-live="polite" role="region">
        {children}
      </div>
    </TabsProvider>
  );
}
