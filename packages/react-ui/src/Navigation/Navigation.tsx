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
export type NavigationProps = React.ComponentProps<'nav'> & {
  listed?: boolean;
} & (Label | Labelledby);

/**
 * Renders a navigation.
 *
 * @category Component
 */
export function Navigation({
  children,
  label,
  labelledby,
  listed = false,
  ...props
}: NavigationProps) {
  return (
    <nav {...props} aria-label={label} aria-labelledby={labelledby}>
      {listed ? (
        <ul>
          {React.Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </nav>
  );
}
