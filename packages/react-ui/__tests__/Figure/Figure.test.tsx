import { screen } from '@testing-library/react';
import { Figure, FigureProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

const renderFigure = createRender<FigureProps>(Figure, { props });

function getFigure() {
  return screen.getByRole('figure');
}

describe('<Figure />', () => {
  it('renders correctly', () => {
    renderFigure({ props: otherProps });

    expect(getFigure()).toBeInTheDocument();
    expect(getFigure()).toHaveClass('figure');
    expect(getFigure()).toHaveTextContent(props.children);

    expect(getFigure()).toHaveAttribute('id', otherProps.id);
    expect(getFigure()).toHaveClass(otherProps.className);
    expect(getFigure()).toHaveStyle(otherProps.style);
  });
});
