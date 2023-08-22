import { IconDark, IconDarkProps } from '../../src';
import { THEME_STORAGE_KEY } from '../../src/utilities';
import { createRender, getIcon, getIconPath, props } from '..';

const renderIconDark = createRender<IconDarkProps>(IconDark);

describe('<IconDark />', () => {
  it('renders a path for the dark icon', () => {
    const { result } = renderIconDark();

    expect(getIconPath(result.container)).toBeInTheDocument();
  });

  it('renders with attribute viewBox to "-12 -12 24 24"', () => {
    const { result } = renderIconDark();

    expect(getIcon(result.container)).toHaveAttribute(
      'viewBox',
      '-12 -12 24 24',
    );
  });

  it('renders with attribute data-theme to dark', () => {
    const { result } = renderIconDark();

    expect(getIcon(result.container)).toHaveAttribute('data-theme', 'dark');
  });

  it('renders with attribute data-hidden to false when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderIconDark();

    expect(getIcon(result.container)).toHaveAttribute('data-hidden', 'false');
  });

  it('renders with attribute data-hidden to true when theme is light', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    const { result } = renderIconDark();

    expect(getIcon(result.container)).toHaveAttribute('data-hidden', 'true');
  });

  it('renders with additional props', () => {
    const { result } = renderIconDark(props);

    expect(getIcon(result.container)).toHaveStyle(props.style);
    expect(getIcon(result.container)).toHaveClass(props.className);
    expect(getIcon(result.container)).toHaveAttribute('id', props.id);
  });
});
