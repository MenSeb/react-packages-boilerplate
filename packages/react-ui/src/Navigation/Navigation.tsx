import * as React from 'react';
import { classNames, ClassNames } from '..';

export type Label = {
  labelledby?: never;
  /**
   * The label of the navigation.
   */
  label: string;
};

export type Labelledby = {
  label?: never;
  /**
   * The id of the element which label the navigation.
   */
  labelledby: string;
};

/**
 * The props types for component {@link Navigation}
 */
export type NavigationProps = React.ComponentProps<'nav'> &
  (Label | Labelledby) &
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
