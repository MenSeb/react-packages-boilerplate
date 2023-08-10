import { screen } from '@testing-library/react';
import { Alert, AlertProps } from '../../src';
import { createRender } from '..';

const props = {
  children: 'children',
};

const renderError = createRender<AlertProps>(Alert, { props });

function getError() {
  return screen.getByRole('alert');
}

describe('<Alert />', () => {
  it('renders correctly', () => {
    renderError();

    expect(getError()).toBeInTheDocument();
    expect(getError()).toHaveTextContent(props.children);
  });
});
