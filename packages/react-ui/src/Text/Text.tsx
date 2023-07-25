import React from 'react';
import classNames, { Argument } from 'classnames';

/**
 * The props types for component {@link Text}
 */
export type TextProps = React.ComponentProps<'p'> & {
  /**
   * The heading className.
   */
  className?: Argument;
};

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
