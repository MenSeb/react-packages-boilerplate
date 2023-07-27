import { Form, FormProps } from '../../src';
import { createRender, otherProps, propsLabel, propsLabelledy } from '..';
import { getForm } from '.';

const props = {
  children: 'children',
};

const renderForm = createRender<FormProps>(Form, { props });

describe('<Form />', () => {
  it('renders correctly', () => {
    const { rerender } = renderForm({
      props: { ...otherProps, ...propsLabel },
    });

    expect(getForm()).toBeInTheDocument();
    expect(getForm()).toHaveClass('form');
    expect(getForm()).toHaveTextContent(props.children);

    expect(getForm()).toHaveAttribute('id', otherProps.id);
    expect(getForm()).toHaveClass(otherProps.className);
    expect(getForm()).toHaveStyle(otherProps.style);

    expect(getForm()).toHaveAccessibleName(propsLabel.label);

    rerender({ ...propsLabelledy, label: undefined });

    expect(getForm()).toHaveAttribute(
      'aria-labelledby',
      propsLabelledy.labelledby,
    );
  });
});
