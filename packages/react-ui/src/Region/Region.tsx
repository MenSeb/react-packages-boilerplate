import * as React from 'react';
import { classNames, ClassNames, Labelled } from '..';

/**
 * The props types for component {@link Region}
 */
export type RegionProps = React.ComponentProps<'section'> &
  Labelled &
  ClassNames;

/**
 * Renders a region.
 *
 * @category Component
 */
export function Region({
  children,
  className,
  label,
  labelledby,
  ...props
}: RegionProps) {
  return (
    <section
      {...props}
      className={classNames('region', className)}
      aria-label={label}
      aria-labelledby={labelledby}
    >
      {children}
    </section>
  );
}
