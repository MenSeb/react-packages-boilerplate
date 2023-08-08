import { screen } from '@testing-library/react';
import { Select, SelectProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

const renderSelect = createRender<SelectProps>(Select, { props });

function getSelect() {
  return screen.getByRole('combobox');
}

describe('<Select />', () => {
  it('renders correctly', () => {
    renderSelect({ props: otherProps });

    expect(getSelect()).toBeInTheDocument();
    expect(getSelect()).toHaveTextContent(props.children);
    expect(getSelect()).toHaveClass('select');

    expect(getSelect()).toHaveAttribute('id', otherProps.id);
    expect(getSelect()).toHaveClass(otherProps.className);
    expect(getSelect()).toHaveStyle(otherProps.style);
  });
});
