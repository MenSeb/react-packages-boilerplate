import { Region, RegionProps } from '../../src';
import { createRender, otherProps, propsLabel, propsLabelledy } from '..';
import { getRegion } from '.';

const props = {
  children: 'children',
};

const renderRegion = createRender<RegionProps>(Region, { props });

describe('<Region />', () => {
  it('renders correctly', () => {
    const { rerender } = renderRegion({
      props: { ...otherProps, ...propsLabel },
    });

    expect(getRegion()).toBeInTheDocument();
    expect(getRegion()).toHaveClass('region');
    expect(getRegion()).toHaveTextContent(props.children);

    expect(getRegion()).toHaveAttribute('id', otherProps.id);
    expect(getRegion()).toHaveClass(otherProps.className);
    expect(getRegion()).toHaveStyle(otherProps.style);

    expect(getRegion()).toHaveAccessibleName(propsLabel.label);

    rerender({ label: undefined, ...propsLabelledy });

    expect(getRegion()).toHaveAttribute(
      'aria-labelledby',
      propsLabelledy.labelledby,
    );
  });
});
