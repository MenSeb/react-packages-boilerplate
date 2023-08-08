import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Textarea}
 */
export type TextareaProps = React.ComponentProps<'textarea'> & ClassNames;

/**
 * Renders a textarea.
 *
 * @category Component
 */
export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea {...props} className={classNames('textarea', className)} />;
}
