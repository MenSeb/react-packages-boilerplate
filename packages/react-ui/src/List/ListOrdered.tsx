import * as React from 'react';
import { classNames, ClassNames } from '..';
import { ListItems } from '.';

/**
 * The props types for component {@link ListOrdered}
 */
export type ListOrderedProps = React.ComponentProps<'ol'> & {
  children: React.ReactNode[];
} & ClassNames;

/**
 * Renders an ordered list.
 *
 * @category Component
 */
export function ListOrdered({
  children,
  className,
  ...props
}: ListOrderedProps) {
  return (
    <ol {...props} className={classNames('list list-ordered', className)}>
      <ListItems>{children}</ListItems>
    </ol>
  );
}
