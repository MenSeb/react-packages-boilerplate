import * as React from 'react';
import classNames, { Argument } from 'classnames';
import * as Images from '../../utilities/images';

export type ImageSVG = React.ComponentProps<'svg'> & {
  className?: Argument;
  label: string;
  name: keyof typeof Images;
};

export function ImageSVG({ className, label, name, ...props }: ImageSVG) {
  const ImageComponent = Images[name];

  return (
    <ImageComponent
      {...props}
      aria-label={label}
      className={classNames('image', className)}
      role="img"
    />
  );
}
