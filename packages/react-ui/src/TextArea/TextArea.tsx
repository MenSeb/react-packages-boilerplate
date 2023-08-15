import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link TextArea}
 */
export type TextAreaProps = React.ComponentProps<'textarea'> & ClassNames;

/**
 * Renders a textarea.
 *
 * @category Component
 */
export function TextArea({ className, ...props }: TextAreaProps) {
  return <textarea {...props} className={classNames('textarea', className)} />;
}
