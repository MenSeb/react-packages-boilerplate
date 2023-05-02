import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { ButtonDark } from '../../src/components';
import { THEME_STORAGE_KEY } from '../../src/utilities';
import { createRender, getButton, props } from '..';

const renderButtonDark = createRender(ButtonDark);

describe('<ThemeButtonDark />', () => {
  it('renders with attribute data-theme to dark', () => {
    renderButtonDark();

    expect(getButton()).toHaveAttribute('data-theme', 'dark');
  });

  it('renders with aria-pressed to true when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    renderButtonDark();

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with aria-pressed to false when theme is light', () => {
    renderButtonDark();

    expect(getButton()).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders with click handler to set the theme to dark', async () => {
    renderButtonDark();

    await act(async () => await userEvent.click(getButton()));

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with additional props', () => {
    renderButtonDark(props);

    expect(getButton()).toHaveStyle(props.style);
    expect(getButton()).toHaveClass(props.className);
    expect(getButton()).toHaveAttribute('id', props.id);
  });
});
