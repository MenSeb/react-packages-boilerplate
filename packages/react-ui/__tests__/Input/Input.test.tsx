import { Input, InputProps } from '../../src';
import { createRender, otherProps } from '..';
import { getInput } from '.';

const props = {};

const renderInput = createRender<InputProps>(Input, { props });

describe('<Input />', () => {
  it('renders correctly', () => {
    renderInput({ props: otherProps });

    expect(getInput()).toBeInTheDocument();
    expect(getInput()).toHaveClass('input');

    expect(getInput()).toHaveAttribute('id', otherProps.id);
    expect(getInput()).toHaveClass(otherProps.className);
    expect(getInput()).toHaveStyle(otherProps.style);
  });
});
