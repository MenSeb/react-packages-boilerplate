import { Container, ContainerProps } from '../../src';
import { createRender, otherProps } from '..';
import { getContainer } from '.';

const props = {
  children: 'children',
};

const renderContainer = createRender<ContainerProps>(Container, { props });

describe('<Container />', () => {
  it('renders correctly', () => {
    renderContainer({ props: otherProps });

    expect(getContainer()).toBeInTheDocument();
    expect(getContainer()).toHaveClass('container');
    expect(getContainer()).toHaveTextContent(props.children);

    expect(getContainer()).toHaveAttribute('id', otherProps.id);
    expect(getContainer()).toHaveClass(otherProps.className);
    expect(getContainer()).toHaveStyle(otherProps.style);
  });
});
