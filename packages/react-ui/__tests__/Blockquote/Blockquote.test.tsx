import { screen } from '@testing-library/react';
import { Blockquote, BlockquoteProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
  cite: 'https://citation-source.com',
};

const renderBlockquote = createRender<BlockquoteProps>(Blockquote, { props });

function getBlockquote() {
  return screen.getByText(props.children);
}

describe('<Blockquote />', () => {
  it('renders correctly', () => {
    renderBlockquote({ props: otherProps });

    expect(getBlockquote()).toBeInTheDocument();
    expect(getBlockquote()).toHaveClass('blockquote');
    expect(getBlockquote()).toHaveAttribute('cite', props.cite);

    expect(getBlockquote()).toHaveAttribute('id', otherProps.id);
    expect(getBlockquote()).toHaveClass(otherProps.className);
    expect(getBlockquote()).toHaveStyle(otherProps.style);
  });
});
