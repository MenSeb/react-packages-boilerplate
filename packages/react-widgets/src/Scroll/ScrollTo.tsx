import * as React from 'react';
import { MdArrowLeft, MdArrowUpward } from 'react-icons/md';
import { useMatchMedia } from '@packages/react-hooks';
import { Scroll, ScrollProps } from '.';

export const QUERY_REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

export type ScrollToProps = ScrollProps;

export function ScrollTo({ scrollOptions, ...props }: ScrollToProps) {
  const { matches } = useMatchMedia(QUERY_REDUCED_MOTION, () =>
    setMotion((motion) => !motion),
  );

  const [motionReduced, setMotion] = React.useState(matches);

  return (
    <Scroll
      {...props}
      scrollOptions={{
        ...scrollOptions,
        behavior: motionReduced ? 'instant' : 'smooth',
      }}
    />
  );
}

export function ScrollToTop({
  scrollOptions,
  ...props
}: Partial<ScrollToProps>) {
  return (
    <ScrollTo
      {...props}
      className="scroll-top"
      scrollOptions={{ ...scrollOptions, top: 0 }}
    >
      <MdArrowUpward className="scroll-icon" role="presentation" />
    </ScrollTo>
  );
}

export function ScrollToLeft({
  scrollOptions,
  ...props
}: Partial<ScrollToProps>) {
  return (
    <ScrollTo
      {...props}
      className="scroll-left"
      scrollOptions={{ ...scrollOptions, left: 0 }}
    >
      <MdArrowLeft className="scroll-icon" role="presentation" />
    </ScrollTo>
  );
}
