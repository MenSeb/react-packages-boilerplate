import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Label}
 */
export type LabelProps = React.ComponentProps<'label'> & ClassNames;

/**
 * Renders a label.
 *
 * @category Component
 */
export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label {...props} className={classNames('label', className)}>
      {children}
    </label>
  );
}
