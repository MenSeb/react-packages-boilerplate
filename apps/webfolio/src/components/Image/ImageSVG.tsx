import * as React from 'react';
import classNames, { Argument } from 'classnames';
import * as Images from '../../utilities/images';

export type ImageSVGType = {
  label: string;
  name: keyof typeof Images;
};

export type ImageSVGProps = React.ComponentProps<'svg'> & {
  className?: Argument;
} & ImageSVGType;

export function ImageSVG({ className, label, name, ...props }: ImageSVGProps) {
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
