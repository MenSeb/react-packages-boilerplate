import { createRender } from '@packages/react-test';
import { resetScroll } from '../../src/Scroll/mock';
import { Scroll, ScrollProps } from '../../src';
import { otherProps } from '..';
import { getScroll, scrollOptions } from '.';

const props: ScrollProps = {
  scrollOptions,
};

const renderScroll = createRender(Scroll, props);

describe('<Scroll />', () => {
  afterEach(() => {
    resetScroll();
  });

  it('renders correctly', () => {
    renderScroll({ ...otherProps });

    expect(getScroll()).toBeInTheDocument();
    expect(getScroll()).toHaveClass('scroll');

    expect(getScroll()).toHaveStyle(otherProps.style);
    expect(getScroll()).toHaveClass(otherProps.className);
    expect(getScroll()).toHaveAttribute('id', otherProps.id);
    expect(getScroll()).toHaveTextContent(otherProps.children);
  });

  it('scrolls correctly', async () => {
    const spy = jest.spyOn(window, 'scroll');

    const { user } = renderScroll();

    await user.click(getScroll());

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(props.scrollOptions);

    spy.mockRestore();
  });
});
