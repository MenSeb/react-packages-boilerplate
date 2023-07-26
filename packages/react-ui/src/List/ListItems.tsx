import * as React from 'react';
import { ListItem, ListItemProps } from '.';

/**
 * The props types for component {@link ListItems}
 */
export type ListItemsProps = Omit<ListItemProps, 'children'> & {
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
        <ListItem {...props} key={index}>
          {child}
        </ListItem>
      ))}
    </>
  );
}
