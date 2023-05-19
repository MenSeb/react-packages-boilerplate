import { IconDark } from '../../src';
import { THEME_STORAGE_KEY } from '../../src/utilities';
import { createRender, getIcon, getIconPath, props } from '..';

const renderIconDark = createRender(IconDark);

describe('<IconDark />', () => {
  it('renders a path for the dark icon', () => {
    const { container } = renderIconDark();

    expect(getIconPath(container)).toBeInTheDocument();
  });

  it('renders with attribute viewBox to "-12 -12 24 24"', () => {
    const { container } = renderIconDark();

    expect(getIcon(container)).toHaveAttribute('viewBox', '-12 -12 24 24');
  });

  it('renders with attribute data-theme to dark', () => {
    const { container } = renderIconDark();

    expect(getIcon(container)).toHaveAttribute('data-theme', 'dark');
  });

  it('renders with attribute data-hidden to false when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { container } = renderIconDark();

    expect(getIcon(container)).toHaveAttribute('data-hidden', 'false');
  });

  it('renders with attribute data-hidden to true when theme is light', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    const { container } = renderIconDark();

    expect(getIcon(container)).toHaveAttribute('data-hidden', 'true');
  });

  it('renders with additional props', () => {
    const { container } = renderIconDark(props);

    expect(getIcon(container)).toHaveStyle(props.style);
    expect(getIcon(container)).toHaveClass(props.className);
    expect(getIcon(container)).toHaveAttribute('id', props.id);
  });
});
