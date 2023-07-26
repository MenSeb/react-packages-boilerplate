import * as React from 'react';
import { classNames, ClassNames, Labelled } from '..';

/**
 * The props types for component {@link Navigation}
 */
export type NavigationProps = React.ComponentProps<'nav'> &
  Labelled &
  ClassNames;

/**
 * Renders a navigation.
 *
 * @category Component
 */
export function Navigation({
  children,
  className,
  label,
  labelledby,
  ...props
}: NavigationProps) {
  return (
    <nav
      {...props}
      className={classNames('navigation', className)}
      aria-label={label}
      aria-labelledby={labelledby}
    >
      {children}
    </nav>
  );
}
