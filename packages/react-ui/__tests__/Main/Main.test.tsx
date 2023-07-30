import { Main, MainProps } from '../../src';
import { createRender, otherProps } from '..';
import { getMain } from '.';

const props = {
  children: 'children',
};

const renderMain = createRender<MainProps>(Main, { props });

describe('<Main />', () => {
  it('renders correctly', () => {
    renderMain({ props: otherProps });

    expect(getMain()).toBeInTheDocument();
    expect(getMain()).toHaveClass('main');
    expect(getMain()).toHaveTextContent(props.children);

    expect(getMain()).toHaveAttribute('id', otherProps.id);
    expect(getMain()).toHaveClass(otherProps.className);
    expect(getMain()).toHaveStyle(otherProps.style);
  });
});
