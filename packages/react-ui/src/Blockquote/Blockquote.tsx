import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Blockquote}
 */
export type BlockquoteProps = React.ComponentProps<'blockquote'> & {
  /**
   * The blockquote citation source url.
   */
  cite?: string;
} & ClassNames;

/**
 * Renders a blockquote.
 *
 * @category Component
 */
export function Blockquote({
  children,
  cite,
  className,
  ...props
}: BlockquoteProps) {
  return (
    <blockquote
      {...props}
      cite={cite}
      className={classNames('blockquote', className)}
    >
      {children}
    </blockquote>
  );
}
