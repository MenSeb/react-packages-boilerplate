import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { ButtonLight } from '../../src/components';
import { THEME_STORAGE_KEY } from '../../src/utilities';
import { createRender, getButton, props } from '..';

const renderButtonLight = createRender(ButtonLight);

describe('<ButtonLight />', () => {
  it('renders with attribute data-theme to light', () => {
    renderButtonLight();

    expect(getButton()).toHaveAttribute('data-theme', 'light');
  });

  it('renders with aria-pressed to true when theme is light', () => {
    renderButtonLight();

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with aria-pressed to false when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    renderButtonLight();

    expect(getButton()).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders with click handler to set the theme to light', async () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    renderButtonLight();

    await act(async () => await userEvent.click(getButton()));

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with additional props', () => {
    renderButtonLight(props);

    expect(getButton()).toHaveStyle(props.style);
    expect(getButton()).toHaveClass(props.className);
    expect(getButton()).toHaveAttribute('id', props.id);
  });
});
