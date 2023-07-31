import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Footer}
 */
export type FooterProps = React.ComponentProps<'footer'> & ClassNames;

/**
 * Renders a footer.
 *
 * @category Component
 */
export function Footer({ children, className, ...props }: FooterProps) {
  return (
    <footer {...props} className={classNames('footer', className)}>
      {children}
    </footer>
  );
}
