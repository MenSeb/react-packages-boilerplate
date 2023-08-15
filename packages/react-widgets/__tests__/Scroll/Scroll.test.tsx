import userEvent from '@testing-library/user-event';
import { resetScroll } from '../../src/Scroll/mock';
import { Scroll, ScrollProps } from '../../src';
import { createRender, otherProps } from '..';
import { getScroll, scrollOptions } from '.';

const props = {
  children: 'children',
  scrollOptions,
};

const renderScroll = createRender<ScrollProps>(Scroll, { props });

describe('<Scroll />', () => {
  afterEach(() => {
    resetScroll();
  });

  it('renders correctly', () => {
    renderScroll({ props: otherProps });

    expect(getScroll()).toBeInTheDocument();
    expect(getScroll()).toHaveClass('scroll');
    expect(getScroll()).toHaveTextContent(props.children);

    expect(getScroll()).toHaveAttribute('id', otherProps.id);
    expect(getScroll()).toHaveClass(otherProps.className);
    expect(getScroll()).toHaveStyle(otherProps.style);
  });

  it('scrolls correctly', async () => {
    const spy = jest.spyOn(window, 'scroll');

    renderScroll();

    const user = userEvent.setup();

    await user.click(getScroll());

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(props.scrollOptions);

    spy.mockRestore();
  });
});
