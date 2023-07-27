import React from 'react';
import { Link, LinkProps } from '.';

/**
 * The props types for component {@link LinkNewTab}
 */
export type LinkNewTabProps = Omit<LinkProps, 'rel' | 'target'>;

/**
 * Renders a link that opens in a new tab.
 *
 * @category Component
 */
export function LinkNewTab({ children, ...props }: LinkNewTabProps) {
  return (
    <Link {...props} rel="noopener noreferrer" target="_blank">
      {children}
    </Link>
  );
}
