import * as React from 'react';
import { classNames, ClassNames } from '..';
import { ListItems } from '.';

/**
 * The props types for component {@link ListUnordered}
 */
export type ListUnorderedProps = React.ComponentProps<'ul'> & {
  children: React.ReactNode[];
} & ClassNames;

/**
 * Renders an unordered list.
 *
 * @category Component
 */
export function ListUnordered({
  children,
  className,
  ...props
}: ListUnorderedProps) {
  return (
    <ul {...props} className={classNames('list list-unordered', className)}>
      <ListItems>{children}</ListItems>
    </ul>
  );
}
