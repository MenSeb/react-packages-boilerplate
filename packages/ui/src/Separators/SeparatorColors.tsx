import * as React from 'react';
import { Separator, SeparatorProps } from './';
import {
  createPathCommands,
  ratioFullScreen,
  ratioWideScreen,
} from './utilities';

export type SeparatorColorsProps = SeparatorProps & {
  colorBackground: string;
  colorForeground: string;
  numberOfWaves: number;
  ratioScreen?: 'full' | 'wide';
  ratioStart?: number;
  ratioEnd?: number;
};

export function SeparatorColors({
  colorBackground,
  colorForeground,
  numberOfWaves,
  ratioScreen = 'full',
  ratioStart = 1,
  ratioEnd = 1,
  ...props
}: SeparatorColorsProps) {
  const [width, height] =
    ratioScreen === 'full' ? ratioFullScreen : ratioWideScreen;

  const pathCommands = createPathCommands({
    height,
    width,
    numberOfWaves,
    ratioStart,
    ratioEnd,
  });

  return (
    <Separator {...props}>
      <svg
        height="100%"
        width="100%"
        role="presentation"
        stroke="none"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill={colorBackground} width="100%" height="100%" />
        <path fill={colorForeground} d={pathCommands} />
      </svg>
    </Separator>
  );
}
