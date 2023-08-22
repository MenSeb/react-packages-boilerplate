import { createRender, screen } from '@packages/react-test';
import { Alert, AlertProps } from '../../src';

const props = {
  children: 'children',
};

const renderAlert = createRender<AlertProps>(Alert, props);

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
