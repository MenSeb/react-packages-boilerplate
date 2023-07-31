import { Header, HeaderProps } from '../../src';
import { createRender, otherProps } from '..';
import { getHeader } from '.';

const props = {
  children: 'children',
};

const renderHeader = createRender<HeaderProps>(Header, { props });

describe('<Header />', () => {
  it('renders correctly', () => {
    renderHeader({ props: otherProps });

    expect(getHeader()).toBeInTheDocument();
    expect(getHeader()).toHaveClass('header');
    expect(getHeader()).toHaveTextContent(props.children);

    expect(getHeader()).toHaveAttribute('id', otherProps.id);
    expect(getHeader()).toHaveClass(otherProps.className);
    expect(getHeader()).toHaveStyle(otherProps.style);
  });
});
