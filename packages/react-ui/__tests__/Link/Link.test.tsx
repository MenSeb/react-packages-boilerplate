import { Link, LinkProps } from '../../src';
import { createRender, otherProps } from '..';
import { getLink } from '.';

const props = {
  children: 'children',
  href: 'href',
  rel: 'rel',
  target: 'target',
};

const renderLink = createRender<LinkProps>(Link, { props });

describe('<Link />', () => {
  it('renders correctly', () => {
    const { rerender } = renderLink({ props: otherProps });

    expect(getLink()).toBeInTheDocument();
    expect(getLink()).toHaveClass('link');
    expect(getLink()).toHaveTextContent(props.children);
    expect(getLink()).toHaveAttribute('rel', props.rel);
    expect(getLink()).toHaveAttribute('target', props.target);

    expect(getLink()).toHaveAttribute('id', otherProps.id);
    expect(getLink()).toHaveClass(otherProps.className);
    expect(getLink()).toHaveStyle(otherProps.style);

    rerender({ rel: undefined, target: undefined });

    expect(getLink()).not.toHaveAttribute('rel');
    expect(getLink()).not.toHaveAttribute('target');
  });
});
