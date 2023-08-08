import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Select}
 */
export type SelectProps = React.ComponentProps<'select'> & ClassNames;

/**
 * Renders a select.
 *
 * @category Component
 */
export function Select({ children, className, ...props }: SelectProps) {
  return (
    <select {...props} className={classNames('select', className)}>
      {children}
    </select>
  );
}
