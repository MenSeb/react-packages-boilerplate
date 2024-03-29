import { createRender, fireEvent, screen } from '@packages/react-test';
import { Form, FormProps } from '../../src';

const props = {
  onSubmit: jest.fn(),
  'aria-label': 'form label',
};

const renderForm = createRender<FormProps>(Form, props);

function getForm() {
  return screen.getByRole('form');
}

describe('<Form />', () => {
  it('renders & submits correctly', () => {
    renderForm();

    fireEvent.submit(getForm());

    expect(props.onSubmit).toHaveBeenCalledTimes(1);
    expect(props.onSubmit).toHaveBeenCalledWith(new FormData());
  });
});
