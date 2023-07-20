import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export type LogoProps = LinkProps & {
  brand: string;
  image?: string;
};

export function Logo({ brand, children, image, ...props }: LogoProps) {
  return (
    <Link {...props} to=".">
      {children}
      {image ? <img alt={`Logo ${brand}`} src={image} /> : null}
      <span>{brand}</span>
    </Link>
  );
}
