import { act, screen } from '@testing-library/react';
import { Input, InputProps } from '../../src';
import { createRender } from '..';

const props = {};

const renderInput = createRender<InputProps>(Input, { props });

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
    const defaultValue = 'defaultValue';

    renderInput({ props: { defaultValue } });

    expect(getInput()).toHaveValue(defaultValue);
    expect(getInput()).toHaveDisplayValue(defaultValue);
  });

  it('updates with the user onChange value', async () => {
    const value = 'value';

    const { user } = renderInput();

    await act(() => user.type(getInput(), value));

    expect(getInput()).toHaveValue(value);
    expect(getInput()).toHaveDisplayValue(value);
  });
});
