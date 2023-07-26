import * as React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link ListItem}
 */
export type ListItemProps = React.ComponentProps<'li'> & ClassNames;

/**
 * Renders a list item.
 *
 * @category Component
 */
export function ListItem({ children, className, ...props }: ListItemProps) {
  return (
    <li {...props} className={classNames('list-item', className)}>
      {children}
    </li>
  );
}
