import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Text}
 */
export type TextProps = React.ComponentProps<'p'> & ClassNames;

/**
 * Renders a text paragraph.
 *
 * @category Component
 */
export function Text({ children, className, ...props }: TextProps) {
  return (
    <p {...props} className={classNames('text', className)}>
      {children}
    </p>
  );
}
