import * as React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Span}
 */
export type SpanProps = React.ComponentProps<'span'> & ClassNames;

/**
 * Renders a span.
 *
 * @category Component
 */
export function Span({ children, className, ...props }: SpanProps) {
  return (
    <span {...props} className={classNames('span', className)}>
      {children}
    </span>
  );
}
