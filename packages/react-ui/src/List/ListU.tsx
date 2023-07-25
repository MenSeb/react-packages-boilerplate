import * as React from 'react';
import { classNames, ClassNames } from '..';
import { ListItems } from '.';

/**
 * The props types for component {@link ListU}
 */
export type ListUProps = React.ComponentProps<'ul'> & {
  children: React.ReactNode[];
} & ClassNames;

/**
 * Renders an unordered list.
 *
 * @category Component
 */
export function ListU({ children, className, ...props }: ListUProps) {
  return (
    <ul {...props} className={classNames('list list-unordered', className)}>
      <ListItems>{children}</ListItems>
    </ul>
  );
}
