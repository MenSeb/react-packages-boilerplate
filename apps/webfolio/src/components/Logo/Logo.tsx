import * as React from 'react';
import * as UI from '@packages/react-ui';
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
      <UI.Container className="logo-brand">
        {brand.split('').map((letter, index) => (
          <span className="logo-letter" key={index}>
            {letter}
          </span>
        ))}
      </UI.Container>
    </Link>
  );
}
