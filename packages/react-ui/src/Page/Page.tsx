import * as React from 'react';
import { classNames, Label, Region, RegionProps } from '..';

/**
 * The props types for component {@link Page}
 */
export type PageProps = RegionProps & Label;

/**
 * Renders a page region.
 *
 * @category Component
 */
export function Page({ children, className, label, ...props }: PageProps) {
  return (
    <Region {...props} className={classNames('page', className)} label={label}>
      {children}
    </Region>
  );
}
