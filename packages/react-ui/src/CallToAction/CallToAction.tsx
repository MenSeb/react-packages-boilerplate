import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link CallToAction}
 */
export type CallToActionProps = LinkProps & ClassNames;

/**
 * Renders a call to action link.
 *
 * @category Component
 */
export function CallToAction({
  children,
  className,
  ...props
}: CallToActionProps) {
  return (
    <Link {...props} className={classNames('cta', className)}>
      {children}
    </Link>
  );
}
