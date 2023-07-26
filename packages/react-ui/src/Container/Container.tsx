import * as React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Container}
 */
export type ContainerProps = React.ComponentProps<'div'> & ClassNames;

/**
 * Renders a container.
 *
 * @category Component
 */
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={classNames('container', className)}
      data-testid="container"
    >
      {children}
    </div>
  );
}
