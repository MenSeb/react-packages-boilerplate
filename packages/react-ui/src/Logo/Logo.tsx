import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames, ClassNames } from '..';

export type LogoProps = Omit<LinkProps, 'to'> & {
  brand: string;
  image?: string;
} & ClassNames;

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
