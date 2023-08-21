import { createRender } from '@packages/react-test';
import { act, fireEvent } from '@testing-library/react';
import { dispatchMatchMedia } from '@packages/react-hooks/src/match-media/mock';
import { resetScroll } from '../../src/Scroll/mock';
import {
  QUERY_REDUCED_MOTION,
  ScrollTo,
  ScrollToLeft,
  ScrollToProps,
  ScrollToTop,
} from '../../src';
import { otherProps } from '..';
import { getIcon, getScroll, queryScroll, scrollOptions } from '.';

const props: ScrollToProps = {
  scrollOptions,
  scrollDirection: 'scrollTop',
};

const renderScrollTo = createRender(ScrollTo, props);
const renderScrollToLeft = createRender(ScrollToLeft, props);
const renderScrollToTop = createRender(ScrollToTop, props);

afterEach(() => {
  resetScroll();
});

describe('<ScrollTo />', () => {
  it('renders correctly', () => {
    renderScrollTo({ ...otherProps });

    expect(getScroll()).toBeInTheDocument();
    expect(getScroll()).toHaveClass('scrolled');

    expect(getScroll()).toHaveStyle(otherProps.style);
    expect(getScroll()).toHaveClass(otherProps.className);
    expect(getScroll()).toHaveAttribute('id', otherProps.id);
    expect(getScroll()).toHaveTextContent(otherProps.children);
  });

  it('hides and shows on window scroll Y', async () => {
    const { user } = renderScrollTo({
      scrollDirection: 'scrollTop',
      scrollHidden: true,
    });

    expect(queryScroll()).not.toBeInTheDocument();

    window.scroll({ top: 500 });

    fireEvent.scroll(window);

    expect(getScroll()).toBeInTheDocument();

    await user.click(getScroll());

    fireEvent.scroll(window);

    expect(queryScroll()).not.toBeInTheDocument();
  });

  it('hides and shows on window scroll X', async () => {
    const { user } = renderScrollTo({
      scrollDirection: 'scrollLeft',
      scrollHidden: true,
    });

    expect(queryScroll()).not.toBeInTheDocument();

    window.scroll({ left: 500 });

    fireEvent.scroll(window);

    expect(getScroll()).toBeInTheDocument();

    await user.click(getScroll());

    fireEvent.scroll(window);

    expect(queryScroll()).not.toBeInTheDocument();
  });

  it('scrolls with the user preference behavior', async () => {
    const spy = jest.spyOn(window, 'scroll');

    const { user } = renderScrollTo();

    await user.click(getScroll());

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      ...props.scrollOptions,
      behavior: 'instant',
    });

    spy.mockRestore();
  });

  it('listens for behavior update from the user preference', async () => {
    const spy = jest.spyOn(window, 'scroll');

    const { user } = renderScrollTo();

    act(() => {
      dispatchMatchMedia(QUERY_REDUCED_MOTION);
    });

    await user.click(getScroll());

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      ...props.scrollOptions,
      behavior: 'smooth',
    });

    spy.mockRestore();
  });
});

describe('<ScrollToLeft />', () => {
  it('renders correctly', () => {
    renderScrollToLeft();

    expect(getScroll()).toBeInTheDocument();
    expect(getScroll()).toHaveClass('scroll-left');
    expect(getScroll()).toHaveAttribute('aria-label', 'scroll to left');

    expect(getIcon()).toBeInTheDocument();
    expect(getIcon()).toHaveClass('scroll-icon');
  });

  it('scrolls correctly', async () => {
    window.scroll({ left: 1000 });

    const { user } = renderScrollToLeft();

    await user.click(getScroll());

    expect(document.documentElement.scrollLeft).toBe(0);
  });
});

describe('<ScrollToTop />', () => {
  it('renders correctly', () => {
    renderScrollToTop();

    expect(getScroll()).toBeInTheDocument();
    expect(getScroll()).toHaveClass('scroll-top');
    expect(getScroll()).toHaveAttribute('aria-label', 'scroll to top');

    expect(getIcon()).toBeInTheDocument();
    expect(getIcon()).toHaveClass('scroll-icon');
  });

  it('scrolls correctly', async () => {
    window.scroll({ top: 1000 });

    const { user } = renderScrollToTop();

    await user.click(getScroll());

    expect(document.documentElement.scrollTop).toBe(0);
  });
});
