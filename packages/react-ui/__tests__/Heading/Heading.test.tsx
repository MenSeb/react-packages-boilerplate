import { Heading, HeadingProps } from '../../src';
import { createRender, otherProps } from '..';
import { getHeading } from '.';

const props = {
  children: 'children',
};

const renderHeading = createRender<HeadingProps>(Heading, { props });

describe('<Heading />', () => {
  it('renders correctly', () => {
    const { rerender } = renderHeading();

    expect(getHeading()).toBeInTheDocument();
    expect(getHeading()).toHaveClass('heading');
    expect(getHeading()).toHaveTextContent(props.children);
    expect(getHeading().tagName.toLowerCase()).toBe('h1');

    rerender({ ...otherProps, level: 2 });

    expect(getHeading()).toHaveAttribute('id', otherProps.id);
    expect(getHeading()).toHaveClass(otherProps.className);
    expect(getHeading()).toHaveStyle(otherProps.style);
    expect(getHeading().tagName.toLowerCase()).toBe('h2');
  });
});
