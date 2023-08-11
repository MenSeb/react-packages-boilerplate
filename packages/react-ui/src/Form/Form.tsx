import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Form}
 */
export type FormProps = React.ComponentProps<'form'> & ClassNames;

/**
 * Renders a form.
 *
 * @category Component
 */
export function Form({ children, className, ...props }: FormProps) {
  return (
    <form {...props} className={classNames('form', className)}>
      {children}
    </form>
  );
}
