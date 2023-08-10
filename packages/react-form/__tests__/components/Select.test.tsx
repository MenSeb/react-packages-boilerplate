import { act, screen, within } from '@testing-library/react';
import { Select, SelectProps } from '../../src';
import { createRender } from '..';

const props = {
  options: Array.from({ length: 5 }, (_, index) => `option-${index}`),
  placeholder: 'select option...',
};

const renderSelect = createRender<SelectProps>(Select, { props });

function getSelect() {
  return screen.getByRole('combobox');
}

function getOptions() {
  return within(getSelect()).getAllByRole('option');
}

describe('<Select />', () => {
  it('renders correctly', () => {
    renderSelect();

    expect(getSelect()).toBeInTheDocument();
  });

  it('renders with empty value', () => {
    renderSelect();

    expect(getSelect()).not.toHaveValue();
    expect(getSelect()).toHaveDisplayValue(props.placeholder);
  });

  it('renders with default value', () => {
    const defaultValue = props.options[0];

    renderSelect({ props: { defaultValue } });

    expect(getSelect()).toHaveValue(defaultValue);
    expect(getSelect()).toHaveDisplayValue(defaultValue);
  });

  it('renders with empty value if default value is invalid', () => {
    const defaultValue = 'test';

    renderSelect({ props: { defaultValue } });

    expect(getSelect()).toHaveValue('');
    expect(getSelect()).toHaveDisplayValue(props.placeholder);
  });

  it('renders with all options', () => {
    renderSelect();

    const [optionPlaceholder, ...options] = getOptions();

    expect(optionPlaceholder).toHaveValue('');
    expect(optionPlaceholder).toHaveTextContent(props.placeholder);

    options.forEach((option, index) => {
      const optionValue = props.options[index];

      expect(option).toHaveValue(optionValue);
      expect(option).toHaveTextContent(optionValue);
    });
  });

  it('updates with the user onChange value', async () => {
    const value = props.options[0];

    const { user } = renderSelect();

    await act(() => user.selectOptions(getSelect(), value));

    expect(getSelect()).toHaveValue(value);
    expect(getSelect()).toHaveDisplayValue(value);
  });
});
