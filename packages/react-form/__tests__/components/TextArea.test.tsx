import { act, screen } from '@testing-library/react';
import { createRender } from '@packages/react-test';
import { TextArea, TextAreaProps } from '../../src';
import { defaultValue, value } from '..';

const renderTextArea = createRender<TextAreaProps>(TextArea);

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
    renderTextArea({ defaultValue });

    expect(getTextArea()).toHaveValue(defaultValue);
    expect(getTextArea()).toHaveDisplayValue(defaultValue);
  });

  it('updates with the user onChange value', async () => {
    const { user } = renderTextArea();

    await act(async () => {
      await user.type(getTextArea(), value);
    });

    expect(getTextArea()).toHaveValue(value);
    expect(getTextArea()).toHaveDisplayValue(value);
  });
});
