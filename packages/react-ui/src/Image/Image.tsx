import * as React from 'react';
import { classNames, ClassNames } from '..';

export type ImageProps = React.ComponentProps<'img'> & {
  alt: string;
  src: string;
} & ClassNames;

export function Image({ alt, className, src, ...props }: ImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      className={classNames('image', className)}
      src={src}
    />
  );
}
