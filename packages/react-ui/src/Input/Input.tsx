import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Input}
 */
export type InputProps = React.ComponentProps<'input'> & ClassNames;

/**
 * Renders a input.
 *
 * @category Component
 */
export function Input({ children, className, ...props }: InputProps) {
  return (
    <input {...props} className={classNames('input', className)}>
      {children}
    </input>
  );
}
