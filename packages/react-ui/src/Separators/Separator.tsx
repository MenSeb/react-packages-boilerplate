import * as React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Separator}
 */
export type SeparatorProps = React.ComponentProps<'div'> & {
  /**
   * The orientation of the separator.
   */
  orientation?: 'horizontal' | 'vertical';
} & ClassNames;

/**
 * Renders a content separator.
 *
 * @category Component
 */
export function Separator({
  children,
  className,
  orientation,
  ...props
}: SeparatorProps) {
  return (
    <div
      {...props}
      aria-orientation={orientation}
      className={classNames('separator', className)}
      role="separator"
    >
      {children}
    </div>
  );
}
