import { Form, FormProps } from '../../src';
import { createRender, otherProps } from '..';
import { getForm } from '.';

const props = {
  children: 'children',
  'aria-label': 'form label',
};

const renderForm = createRender<FormProps>(Form, { props });

describe('<Form />', () => {
  it('renders correctly', () => {
    renderForm({ props: otherProps });

    expect(getForm()).toBeInTheDocument();
    expect(getForm()).toHaveClass('form');
    expect(getForm()).toHaveTextContent(props.children);

    expect(getForm()).toHaveAttribute('id', otherProps.id);
    expect(getForm()).toHaveClass(otherProps.className);
    expect(getForm()).toHaveStyle(otherProps.style);
  });
});
