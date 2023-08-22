import { IconLight, IconLightProps } from '../../src';
import { THEME_STORAGE_KEY } from '../../src/utilities';
import { createRender, getIcon, getIconPath, props } from '..';

const renderIconLight = createRender<IconLightProps>(IconLight);

describe('<IconLight />', () => {
  it('renders a path for the light icon', () => {
    const { result } = renderIconLight();

    expect(getIconPath(result.container)).toBeInTheDocument();
  });

  it('renders with attribute viewBox to "-12 -12 24 24"', () => {
    const { result } = renderIconLight();

    expect(getIcon(result.container)).toHaveAttribute(
      'viewBox',
      '-12 -12 24 24',
    );
  });

  it('renders with attribute data-theme to light', () => {
    const { result } = renderIconLight();

    expect(getIcon(result.container)).toHaveAttribute('data-theme', 'light');
  });

  it('renders with attribute data-hidden to false when theme is light', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    const { result } = renderIconLight();

    expect(getIcon(result.container)).toHaveAttribute('data-hidden', 'false');
  });

  it('renders with attribute data-hidden to true when theme is dark', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    const { result } = renderIconLight();

    expect(getIcon(result.container)).toHaveAttribute('data-hidden', 'true');
  });

  it('renders with additional props', () => {
    const { result } = renderIconLight(props);

    expect(getIcon(result.container)).toHaveStyle(props.style);
    expect(getIcon(result.container)).toHaveClass(props.className);
    expect(getIcon(result.container)).toHaveAttribute('id', props.id);
  });
});
