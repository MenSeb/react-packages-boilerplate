import * as React from 'react';

/**
 * The props types for component {@link Separator}
 */
export type SeparatorProps = React.ComponentProps<'div'> & {
  /**
   * The orientation of the separator.
   * @defaultValue horizontal
   */
  orientation?: 'horizontal' | 'vertical';
};

/**
 * Renders a content separator.
 *
 * @category Component
 */
export function Separator({ children, orientation, ...props }: SeparatorProps) {
  return (
    <div {...props} aria-orientation={orientation} role="separator">
      {children}
    </div>
  );
}
