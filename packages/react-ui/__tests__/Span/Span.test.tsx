import { screen } from '@testing-library/react';
import { Span, SpanProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

const renderSpan = createRender<SpanProps>(Span, { props });

function getSpan() {
  return screen.getByText(props.children);
}

describe('<Span />', () => {
  it('renders correctly', () => {
    renderSpan({ props: otherProps });

    expect(getSpan()).toBeInTheDocument();
    expect(getSpan()).toHaveClass('span');

    expect(getSpan()).toHaveAttribute('id', otherProps.id);
    expect(getSpan()).toHaveClass(otherProps.className);
    expect(getSpan()).toHaveStyle(otherProps.style);
  });
});
