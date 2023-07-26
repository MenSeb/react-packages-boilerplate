import * as React from 'react';
import { Separator, SeparatorProps } from './';
import { classNames } from '..';
import {
  createPathCommands,
  screenRatioFull,
  screenRatioWide,
} from './utilities';

/**
 * The ratio of a point in the separator. Should be in range of [0-1].
 *
 * 0: representing the top of the separator.
 *
 * 1: representing the bottom of the separator.
 */
export type RatioPoint = number;

/**
 * The props types for component {@link SeparatorColors}
 */
export type SeparatorColorsProps = SeparatorProps & {
  /**
   * The background color of the section preceding the separator.
   */
  colorBackground: string;
  /**
   * The background color of the section following the separator.
   */
  colorForeground: string;
  /**
   * The number of waves represented in the separator.
   */
  numberOfWaves: number;
  /**
   * The ratio of the separator ending point.
   *
   * @defaultValue 1
   */
  ratioEndingPoint?: RatioPoint;
  /**
   * The ratio of the separator starting point.
   *
   * @defaultValue 1
   */
  ratioStartingPoint?: RatioPoint;
  /**
   * The screen ratio for the separator.
   *
   * @defaultValue full
   */
  screenRatio?: 'full' | 'wide';
};

/**
 * Renders a content separator with colors.
 *
 * Displays as a wave using the colors of the divided sections.
 *
 * @category Component
 */
export function SeparatorColors({
  className,
  colorBackground,
  colorForeground,
  numberOfWaves,
  ratioEndingPoint = 1,
  ratioStartingPoint = 1,
  screenRatio = 'full',
  ...props
}: SeparatorColorsProps) {
  const [width, height] =
    screenRatio === 'full' ? screenRatioFull : screenRatioWide;

  const pathCommands = createPathCommands({
    height,
    numberOfWaves,
    ratioEndingPoint,
    ratioStartingPoint,
    width,
  });

  return (
    <Separator {...props} className={classNames('separator-colors', className)}>
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
