import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Logo}
 */
export type LogoProps = Omit<LinkProps, 'to'> & {
  /**
   * The logo brand.
   */
  brand: string;
  /**
   * The logo image.
   */
  image?: string;
} & ClassNames;

/**
 * Renders a logo with image and brand.
 *
 * @category Component
 */
export function Logo({
  brand,
  children,
  className,
  image,
  ...props
}: LogoProps) {
  return (
    <Link {...props} className={classNames('logo', className)} to=".">
      {children}
      {image ? (
        <img alt={`Logo ${brand}`} className="logo-image" src={image} />
      ) : null}
      <span className="logo-brand">{brand}</span>
    </Link>
  );
}
