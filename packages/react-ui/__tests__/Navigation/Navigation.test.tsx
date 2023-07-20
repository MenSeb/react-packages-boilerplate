import { Navigation, NavigationProps } from '../../src';
import { createRender, otherProps, propsLabel, propsLabelledy } from '../';
import { getNavigation } from '.';

const renderNavigation = createRender<NavigationProps>(Navigation);

describe('<Navigation />', () => {
  it('renders with role navigation', () => {
    renderNavigation();

    expect(getNavigation()).toBeInTheDocument();
  });

  it('renders with children', () => {
    renderNavigation({ props: { children: 'children' } });

    expect(getNavigation()).toHaveTextContent('children');
  });

  it('renders with attribute aria-label when provided', () => {
    renderNavigation({ props: propsLabel });

    expect(getNavigation()).toHaveAttribute('aria-label', propsLabel.label);
  });

  it('renders with attribute aria-labelledby when provided', () => {
    renderNavigation({ props: propsLabelledy });

    expect(getNavigation()).toHaveAttribute(
      'aria-labelledby',
      propsLabelledy.labelledby,
    );
  });

  it('renders with additional props', () => {
    renderNavigation({ props: otherProps });

    expect(getNavigation()).toHaveAttribute('id', otherProps.id);
    expect(getNavigation()).toHaveClass(otherProps.className);
    expect(getNavigation()).toHaveStyle(otherProps.style);
  });
});
