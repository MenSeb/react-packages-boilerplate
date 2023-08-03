import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ImageSVG, ImageSVGProps } from '..';

export type LogoProps = Omit<LinkProps, 'to'> & {
  brand: string;
  image: ImageSVGProps;
};

export function Logo({ brand, image, ...props }: LogoProps) {
  return (
    <Link {...props} className="link logo" to=".">
      <ImageSVG className="logo-image" label={image.label} name={image.name} />
      <span className="logo-brand">{brand}</span>
    </Link>
  );
}
