import * as React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Copyright}
 */
export type CopyrightProps = React.ComponentProps<'div'> & {
  /**
   * The copryright author.
   */
  author: string;
  /**
   * The copyright statement (e.g. All rights resrved.).
   */
  statement?: string;
  /**
   * The copyright year.
   */
  year?: string;
} & ClassNames;

/**
 * Renders a copyright notice.
 *
 * @category Component
 */
export function Copyright({
  author,
  children,
  className,
  statement,
  year = new Date().getFullYear().toString(),
  ...props
}: CopyrightProps) {
  return (
    <div
      {...props}
      className={classNames('copyright', className)}
      data-testid="copyright"
    >
      <span>©</span>
      <span>{year}</span>
      <span>{author}</span>
      {statement ? <span>{statement}</span> : null}
      {children}
    </div>
  );
}
