import * as React from 'react';
import { ListItems } from '.';

/**
 * The props types for component {@link ListO}
 */
export type ListOProps = React.ComponentProps<'ol'> & {
  children: React.ReactNode[];
};

/**
 * Renders an ordered list.
 *
 * @category Component
 */
export function ListO({ children, ...props }: ListOProps) {
  return (
    <ol {...props}>
      <ListItems>{children}</ListItems>
    </ol>
  );
}
