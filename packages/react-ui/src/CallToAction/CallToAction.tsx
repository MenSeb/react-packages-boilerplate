import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

/**
 * The props types for component {@link CallToAction}
 */
export type CallToActionProps = LinkProps;

/**
 * Renders a call to action link.
 *
 * @category Component
 */
export function CallToAction({ children, ...props }: CallToActionProps) {
  return <Link {...props}>{children}</Link>;
}
