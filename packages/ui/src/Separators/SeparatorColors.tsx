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
  ratioEnd?: number;
  ratioStart?: number;
  ratioScreen?: 'full' | 'wide';
};

export function SeparatorColors({
  colorBackground,
  colorForeground,
  numberOfWaves,
  ratioEnd = 1,
  ratioStart = 1,
  ratioScreen = 'full',
  ...props
}: SeparatorColorsProps) {
  const [width, height] =
    ratioScreen === 'full' ? ratioFullScreen : ratioWideScreen;

  const pathCommands = createPathCommands({
    height,
    numberOfWaves,
    ratioEnd,
    ratioStart,
    width,
  });

  return (
    <Separator {...props}>
      <svg
        height="100%"
        role="presentation"
        stroke="none"
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill={colorBackground} width="100%" height="100%" />
        <path fill={colorForeground} d={pathCommands} />
      </svg>
    </Separator>
  );
}
