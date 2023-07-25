import * as React from 'react';
import { classNames, ClassNames } from '..';
import { ListItems } from '.';

/**
 * The props types for component {@link ListO}
 */
export type ListOProps = React.ComponentProps<'ol'> & {
  children: React.ReactNode[];
} & ClassNames;

/**
 * Renders an ordered list.
 *
 * @category Component
 */
export function ListO({ children, className, ...props }: ListOProps) {
  return (
    <ol {...props} className={classNames('list list-ordered', className)}>
      <ListItems>{children}</ListItems>
    </ol>
  );
}
