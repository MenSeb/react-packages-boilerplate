import { Navigation, NavigationProps } from '../../src';
import { createRender, otherProps, propsLabel, propsLabelledy } from '../';
import { getNavigation } from '.';

const props = {
  children: 'children',
};

const renderNavigation = createRender<NavigationProps>(Navigation, { props });

describe('<Navigation />', () => {
  it('renders correctly', () => {
    const { rerender } = renderNavigation({
      props: { ...propsLabel, ...otherProps },
    });

    expect(getNavigation()).toBeInTheDocument();
    expect(getNavigation()).toHaveTextContent('children');
    expect(getNavigation()).toHaveAttribute('aria-label', propsLabel.label);

    expect(getNavigation()).toHaveAttribute('id', otherProps.id);
    expect(getNavigation()).toHaveClass(otherProps.className);
    expect(getNavigation()).toHaveStyle(otherProps.style);

    rerender({ ...propsLabelledy, label: undefined });

    expect(getNavigation()).toHaveAttribute(
      'aria-labelledby',
      propsLabelledy.labelledby,
    );
  });
});
