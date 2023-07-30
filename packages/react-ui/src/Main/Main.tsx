import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Main}
 */
export type MainProps = React.ComponentProps<'main'> & ClassNames;

/**
 * Renders a main.
 *
 * @category Component
 */
export function Main({ children, className, ...props }: MainProps) {
  return (
    <main {...props} className={classNames('main', className)}>
      {children}
    </main>
  );
}
