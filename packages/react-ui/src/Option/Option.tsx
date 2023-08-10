import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Option}
 */
export type OptionProps = React.ComponentProps<'option'> & ClassNames;

/**
 * Renders a option.
 *
 * @category Component
 */
export function Option({ children, className, ...props }: OptionProps) {
  return (
    <option {...props} className={classNames('option', className)}>
      {children}
    </option>
  );
}
