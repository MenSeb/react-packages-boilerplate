import { act, createRender, screen } from '@packages/react-test';
import { Input, InputProps } from '../../src';
import { defaultValue, value } from '..';

const renderInput = createRender<InputProps>(Input);

function getInput() {
  return screen.getByRole('textbox');
}

describe('<Input />', () => {
  it('renders correctly', () => {
    renderInput();

    expect(getInput()).toBeInTheDocument();
  });

  it('renders with empty value', () => {
    renderInput();

    expect(getInput()).not.toHaveValue();
    expect(getInput()).toHaveDisplayValue('');
  });

  it('renders with default value', () => {
    renderInput({ defaultValue });

    expect(getInput()).toHaveValue(defaultValue);
    expect(getInput()).toHaveDisplayValue(defaultValue);
  });

  it('updates with the user onChange value', async () => {
    const { user } = renderInput();

    await act(async () => {
      await user.type(getInput(), value);
    });

    expect(getInput()).toHaveValue(value);
    expect(getInput()).toHaveDisplayValue(value);
  });
});
