import React from 'react';
import classNames, { Argument } from 'classnames';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * The props types for component {@link Heading}
 */
export type HeadingProps = React.ComponentProps<HeadingTag> & {
  /**
   * The heading className.
   */
  className?: Argument;
  /**
   * The heading level.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

/**
 * Renders a heading (i.e. h1, h2, h3, h4, h5 or h6).
 *
 * @category Component
 */
export function Heading({
  children,
  className,
  level = 1,
  ...props
}: HeadingProps) {
  const Tag: HeadingTag = `h${level}`;

  return (
    <Tag {...props} className={classNames('heading', className)}>
      {children}
    </Tag>
  );
}
