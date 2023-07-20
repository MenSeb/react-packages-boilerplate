import * as React from 'react';

/**
 * The props types for component {@link ListItems}
 */
export type ListItemsProps = React.ComponentProps<'li'> & {
  children: React.ReactNode[];
};

/**
 * Renders a list of items.
 *
 * @category Component
 */
export function ListItems({ children, ...props }: ListItemsProps) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <li {...props} key={index}>
          {child}
        </li>
      ))}
    </>
  );
}
