import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { dispatchMatchMedia } from '@packages/react-hooks/src/match-media/mock';
import { resetScroll } from '../../src/Scroll/mock';
import {
  QUERY_REDUCED_MOTION,
  ScrollTo,
  ScrollToLeft,
  ScrollToProps,
  ScrollToTop,
} from '../../src';
import { createRender } from '..';
import { getIcon, getScroll, scrollOptions } from '.';

const props = {
  children: 'children',
  scrollOptions,
};

const renderScrollTo = createRender<ScrollToProps>(ScrollTo, { props });
const renderScrollToLeft = createRender<ScrollToProps>(ScrollToLeft, { props });
const renderScrollToTop = createRender<ScrollToProps>(ScrollToTop, { props });

afterEach(() => resetScroll());

describe('<ScrollTo />', () => {
  it('renders correctly', () => {
    renderScrollTo();

    expect(getScroll()).toBeInTheDocument();
    expect(getScroll()).toHaveTextContent(props.children);
  });

  it('scrolls with the user preference behavior', async () => {
    const spy = jest.spyOn(window, 'scroll');

    renderScrollTo();

    const user = userEvent.setup();

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

    renderScrollTo();

    act(() => {
      dispatchMatchMedia(QUERY_REDUCED_MOTION);
    });

    const user = userEvent.setup();

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

    expect(getIcon()).toBeInTheDocument();
    expect(getIcon()).toHaveClass('scroll-icon');
  });

  it('scrolls correctly', async () => {
    window.scroll({ left: 1000 });

    renderScrollToLeft();

    const user = userEvent.setup();

    await user.click(getScroll());

    expect(document.documentElement.scrollLeft).toBe(0);
  });
});

describe('<ScrollToTop />', () => {
  it('renders correctly', () => {
    renderScrollToTop();

    expect(getScroll()).toBeInTheDocument();
    expect(getScroll()).toHaveClass('scroll-top');

    expect(getIcon()).toBeInTheDocument();
    expect(getIcon()).toHaveClass('scroll-icon');
  });

  it('scrolls correctly', async () => {
    window.scroll({ top: 1000 });

    renderScrollToTop();

    const user = userEvent.setup();

    await user.click(getScroll());

    expect(document.documentElement.scrollTop).toBe(0);
  });
});
