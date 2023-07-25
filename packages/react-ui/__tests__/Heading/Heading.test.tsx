import { Heading, HeadingProps } from '../../src';
import { createRender, otherProps } from '..';
import { getHeading } from '.';

const props = {
  children: 'children',
};

const renderHeading = createRender<HeadingProps>(Heading, { props });

describe('<Heading />', () => {
  it('renders correctly', () => {
    const { rerender } = renderHeading({ props: otherProps });

    expect(getHeading()).toBeInTheDocument();
    expect(getHeading()).toHaveClass('heading');
    expect(getHeading()).toHaveTextContent(props.children);
    expect(getHeading().tagName.toLowerCase()).toBe('h1');

    expect(getHeading()).toHaveAttribute('id', otherProps.id);
    expect(getHeading()).toHaveClass(otherProps.className);
    expect(getHeading()).toHaveStyle(otherProps.style);

    rerender({ level: 2 });

    expect(getHeading().tagName.toLowerCase()).toBe('h2');
  });
});
