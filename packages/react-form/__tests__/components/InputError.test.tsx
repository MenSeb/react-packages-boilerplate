import { screen } from '@testing-library/react';
import { InputError, InputErrorProps } from '../../src';
import { createRender } from '..';

const props = {
  children: 'children',
};

const renderError = createRender<InputErrorProps>(InputError, { props });

function getError() {
  return screen.getByRole('alert');
}

describe('<InputError />', () => {
  it('renders correctly', () => {
    renderError();

    expect(getError()).toBeInTheDocument();
    expect(getError()).toHaveTextContent(props.children);
  });
});
