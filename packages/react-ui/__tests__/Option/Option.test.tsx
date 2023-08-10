import { screen } from '@testing-library/react';
import { Option, OptionProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

const renderOption = createRender<OptionProps>(Option, { props });

function getOption() {
  return screen.getByRole('option');
}

describe('<Option />', () => {
  it('renders correctly', () => {
    renderOption({ props: otherProps });

    expect(getOption()).toBeInTheDocument();
    expect(getOption()).toHaveTextContent(props.children);
    expect(getOption()).toHaveClass('option');

    expect(getOption()).toHaveAttribute('id', otherProps.id);
    expect(getOption()).toHaveClass(otherProps.className);
    expect(getOption()).toHaveStyle(otherProps.style);
  });
});
