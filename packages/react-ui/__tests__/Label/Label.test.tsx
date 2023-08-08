import { screen } from '@testing-library/react';
import { Label, LabelProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  children: 'children',
};

function getLabel() {
  return screen.getByText(props.children);
}

const renderLabel = createRender<LabelProps>(Label, { props });

describe('<Label />', () => {
  it('renders correctly', () => {
    renderLabel({ props: otherProps });

    expect(getLabel()).toBeInTheDocument();
    expect(getLabel()).toHaveClass('label');
    expect(getLabel()).toHaveTextContent(props.children);

    expect(getLabel()).toHaveAttribute('id', otherProps.id);
    expect(getLabel()).toHaveClass(otherProps.className);
    expect(getLabel()).toHaveStyle(otherProps.style);
  });
});
