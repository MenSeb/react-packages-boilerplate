import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Cite}
 */
export type CiteProps = React.ComponentProps<'cite'> & ClassNames;

/**
 * Renders a cite.
 *
 * @category Component
 */
export function Cite({ children, className, ...props }: CiteProps) {
  return (
    <cite {...props} className={classNames('cite', className)}>
      {children}
    </cite>
  );
}
