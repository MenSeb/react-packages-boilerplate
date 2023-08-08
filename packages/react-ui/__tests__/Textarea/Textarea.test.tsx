import { screen } from '@testing-library/react';
import { Textarea, TextareaProps } from '../../src';
import { createRender, otherProps } from '..';

const props = {
  defaultValue: 'children',
};

const renderTextarea = createRender<TextareaProps>(Textarea, { props });

function getTextarea() {
  return screen.getByRole('textbox');
}

describe('<Textarea />', () => {
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
