import { screen } from '@testing-library/react';
import { Figcaption, FigcaptionProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

const renderFigcaption = createRender<FigcaptionProps>(Figcaption, { props });

function getFigcaption() {
  return screen.getByText(props.children);
}

describe('<Figcaption />', () => {
  it('renders correctly', () => {
    renderFigcaption({ props: otherProps });

    expect(getFigcaption()).toBeInTheDocument();
    expect(getFigcaption()).toHaveClass('figcaption');

    expect(getFigcaption()).toHaveAttribute('id', otherProps.id);
    expect(getFigcaption()).toHaveClass(otherProps.className);
    expect(getFigcaption()).toHaveStyle(otherProps.style);
  });
});
