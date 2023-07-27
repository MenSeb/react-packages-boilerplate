import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Figure}
 */
export type FigureProps = React.ComponentProps<'figure'> & ClassNames;

/**
 * Renders a figure.
 *
 * @category Component
 */
export function Figure({ children, className, ...props }: FigureProps) {
  return (
    <figure {...props} className={classNames('figure', className)}>
      {children}
    </figure>
  );
}
