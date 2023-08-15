import { screen } from '@testing-library/react';
import { Alert, AlertProps } from '../../src';
import { createRender } from '..';

const props = {
  children: 'children',
};

const renderAlert = createRender<AlertProps>(Alert, { props });

function getAlert() {
  return screen.getByRole('alert');
}

describe('<Alert />', () => {
  it('renders correctly', () => {
    renderAlert();

    expect(getAlert()).toBeInTheDocument();
    expect(getAlert()).toHaveTextContent(props.children);
  });
});
