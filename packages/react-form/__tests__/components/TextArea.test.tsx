import { act, screen } from '@testing-library/react';
import { TextArea, TextAreaProps } from '../../src';
import { createRender } from '..';

const props = {};

const renderTextArea = createRender<TextAreaProps>(TextArea, { props });

function getTextArea() {
  return screen.getByRole('textbox');
}

describe('<TextArea />', () => {
  it('renders correctly', () => {
    renderTextArea();

    expect(getTextArea()).toBeInTheDocument();
  });

  it('renders with empty value', () => {
    renderTextArea();

    expect(getTextArea()).not.toHaveValue();
    expect(getTextArea()).toHaveDisplayValue('');
  });

  it('renders with default value', () => {
    const defaultValue = 'defaultValue';

    renderTextArea({ props: { defaultValue } });

    expect(getTextArea()).toHaveValue(defaultValue);
    expect(getTextArea()).toHaveDisplayValue(defaultValue);
  });

  it('updates with the user onChange value', async () => {
    const value = 'value';

    const { user } = renderTextArea();

    await act(async () => {
      await user.type(getTextArea(), value);
    });

    expect(getTextArea()).toHaveValue(value);
    expect(getTextArea()).toHaveDisplayValue(value);
  });
});
