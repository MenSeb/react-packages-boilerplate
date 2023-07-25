import { screen } from '@testing-library/react';
import { Text, TextProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

const renderText = createRender<TextProps>(Text, { props });

function getText() {
  return screen.getByText(props.children);
}

describe('<Text />', () => {
  it('renders correctly', () => {
    renderText({ props: otherProps });

    expect(getText()).toBeInTheDocument();
    expect(getText()).toHaveClass('text');

    expect(getText()).toHaveAttribute('id', otherProps.id);
    expect(getText()).toHaveClass(otherProps.className);
    expect(getText()).toHaveStyle(otherProps.style);
  });
});
