import React from 'react';
import { classNames, ClassNames, Labelled } from '..';

/**
 * The props types for component {@link Form}
 */
export type FormProps = React.ComponentProps<'form'> &
  ClassNames &
  Partial<Labelled>;

/**
 * Renders a form.
 *
 * @category Component
 */
export function Form({
  children,
  className,
  label,
  labelledby,
  ...props
}: FormProps) {
  return (
    <form
      {...props}
      aria-label={label}
      aria-labelledby={labelledby}
      className={classNames('form', className)}
    >
      {children}
    </form>
  );
}
