import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Figcaption}
 */
export type FigcaptionProps = React.ComponentProps<'figcaption'> & ClassNames;

/**
 * Renders a figcaption.
 *
 * @category Component
 */
export function Figcaption({ children, className, ...props }: FigcaptionProps) {
  return (
    <figcaption {...props} className={classNames('figcaption', className)}>
      {children}
    </figcaption>
  );
}
