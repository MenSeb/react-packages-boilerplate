import { act } from '@packages/react-test';
import { ButtonDark, ButtonDarkProps } from '../../src/components';
import { THEME_STORAGE_KEY } from '../../src/utilities';
import { createRender, getButton, props } from '..';

const renderButtonDark = createRender<ButtonDarkProps>(ButtonDark);

describe('<ButtonDark />', () => {
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
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    renderButtonDark();

    expect(getButton()).toHaveAttribute('aria-pressed', 'false');
  });

  it('renders with click handler to set the theme to dark', async () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    const { user } = renderButtonDark();

    await act(async () => {
      await user.click(getButton());
    });

    expect(getButton()).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders with additional props', () => {
    renderButtonDark(props);

    expect(getButton()).toHaveStyle(props.style);
    expect(getButton()).toHaveClass(props.className);
    expect(getButton()).toHaveAttribute('id', props.id);
  });
});
