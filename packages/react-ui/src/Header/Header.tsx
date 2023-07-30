import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Header}
 */
export type HeaderProps = React.ComponentProps<'header'> & ClassNames;

/**
 * Renders a header.
 *
 * @category Component
 */
export function Header({ children, className, ...props }: HeaderProps) {
  return (
    <header {...props} className={classNames('header', className)}>
      {children}
    </header>
  );
}
