import { screen } from '@testing-library/react';
import { TextArea, TextAreaProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  defaultValue: 'children',
};

const renderTextarea = createRender<TextAreaProps>(TextArea, { props });

function getTextarea() {
  return screen.getByRole('textbox');
}

describe('<TextArea />', () => {
  it('renders correctly', () => {
    renderTextarea({ props: otherProps });

    expect(getTextarea()).toBeInTheDocument();
    expect(getTextarea()).toHaveTextContent(props.defaultValue);
    expect(getTextarea()).toHaveClass('textarea');

    expect(getTextarea()).toHaveAttribute('id', otherProps.id);
    expect(getTextarea()).toHaveClass(otherProps.className);
    expect(getTextarea()).toHaveStyle(otherProps.style);
  });
});
