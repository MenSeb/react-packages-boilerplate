import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Button}
 */
export type ButtonProps = React.ComponentProps<'button'> & ClassNames;

/**
 * Renders a button.
 *
 * @category Component
 */
export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={classNames('button', className)}>
      {children}
    </button>
  );
}
