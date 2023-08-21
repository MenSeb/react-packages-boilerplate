import * as React from 'react';
import classNames from 'classnames';
import { MdArrowLeft, MdArrowUpward } from 'react-icons/md';
import { useEventListener, useMatchMedia } from '@packages/react-hooks';
import { Scroll, ScrollProps } from '.';

export const QUERY_REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

export type ScrollToProps = ScrollProps & {
  scrollDirection: 'scrollLeft' | 'scrollTop';
  scrollHidden?: boolean;
};

export type ScrollToPropsDirection = Partial<
  Omit<ScrollToProps, 'scrollDirection'>
>;

export function ScrollTo({
  className,
  scrollDirection,
  scrollHidden,
  scrollOptions,
  ...props
}: ScrollToProps) {
  const { matches } = useMatchMedia(QUERY_REDUCED_MOTION, () => {
    setMotion((motion) => !motion);
  });

  const [motionReduced, setMotion] = React.useState(matches);

  const getScrolled = React.useCallback(() => {
    return document.documentElement[scrollDirection] > 0 ? false : true;
  }, [scrollDirection]);

  const [scrolled, setScrolled] = React.useState(getScrolled);

  const scroll = React.useCallback(() => {
    setScrolled(getScrolled);
  }, [getScrolled, setScrolled]);

  useEventListener(window, 'scroll', scroll);

  return scrollHidden && scrolled ? null : (
    <Scroll
      {...props}
      className={classNames(className, { scrolled })}
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
}: ScrollToPropsDirection) {
  return (
    <ScrollTo
      {...props}
      aria-label="scroll to top"
      className="scroll-top"
      scrollDirection="scrollTop"
      scrollOptions={{ ...scrollOptions, top: 0 }}
    >
      <MdArrowUpward className="scroll-icon" role="presentation" />
    </ScrollTo>
  );
}

export function ScrollToLeft({
  scrollOptions,
  ...props
}: ScrollToPropsDirection) {
  return (
    <ScrollTo
      {...props}
      aria-label="scroll to left"
      className="scroll-left"
      scrollDirection="scrollLeft"
      scrollOptions={{ ...scrollOptions, left: 0 }}
    >
      <MdArrowLeft className="scroll-icon" role="presentation" />
    </ScrollTo>
  );
}
