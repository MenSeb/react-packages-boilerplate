import React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Link}
 */
export type LinkProps = React.ComponentProps<'a'> & {
  href: string;
  rel?: string;
  target?: string;
} & ClassNames;

/**
 * Renders a link.
 *
 * @category Component
 */
export function Link({
  children,
  className,
  href,
  rel,
  target,
  ...props
}: LinkProps) {
  return (
    <a
      {...props}
      className={classNames('link', className)}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </a>
  );
}
