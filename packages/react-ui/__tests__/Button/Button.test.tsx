import { Button, ButtonProps } from '../../src';
import { createRender, otherProps } from '..';
import { getButton } from '.';

const props = {
  children: 'children',
};

const renderButton = createRender<ButtonProps>(Button, { props });

describe('<Button />', () => {
  it('renders correctly', () => {
    renderButton({ props: otherProps });

    expect(getButton()).toBeInTheDocument();
    expect(getButton()).toHaveClass('button');
    expect(getButton()).toHaveTextContent(props.children);

    expect(getButton()).toHaveAttribute('id', otherProps.id);
    expect(getButton()).toHaveClass(otherProps.className);
    expect(getButton()).toHaveStyle(otherProps.style);
  });
});
