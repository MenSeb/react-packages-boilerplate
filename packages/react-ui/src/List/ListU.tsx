import * as React from 'react';
import { ListItems } from '.';

/**
 * The props types for component {@link ListU}
 */
export type ListUProps = React.ComponentProps<'ul'> & {
  children: React.ReactNode[];
};

/**
 * Renders an unordered list.
 *
 * @category Component
 */
export function ListU({ children, ...props }: ListUProps) {
  return (
    <ul {...props}>
      <ListItems>{children}</ListItems>
    </ul>
  );
}
