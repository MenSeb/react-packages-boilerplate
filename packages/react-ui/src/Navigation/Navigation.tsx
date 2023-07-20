import * as React from 'react';

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
  (Label | Labelledby);

/**
 * Renders a navigation.
 *
 * @category Component
 */
export function Navigation({
  children,
  label,
  labelledby,
  ...props
}: NavigationProps) {
  return (
    <nav {...props} aria-label={label} aria-labelledby={labelledby}>
      {children}
    </nav>
  );
}
