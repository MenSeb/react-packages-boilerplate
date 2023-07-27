import { LinkNewTab, LinkNewTabProps } from '../../src';
import { createRender, otherProps } from '..';
import { getLink } from '.';

const props = {
  children: 'children',
  href: 'href',
};

const renderLinkNewTab = createRender<LinkNewTabProps>(LinkNewTab, { props });

describe('<LinkNewTab />', () => {
  it('renders correctly', () => {
    renderLinkNewTab({ props: otherProps });

    expect(getLink()).toBeInTheDocument();
    expect(getLink()).toHaveClass('link');
    expect(getLink()).toHaveTextContent(props.children);
    expect(getLink()).toHaveAttribute('rel', 'noopener noreferrer');
    expect(getLink()).toHaveAttribute('target', '_blank');

    expect(getLink()).toHaveAttribute('id', otherProps.id);
    expect(getLink()).toHaveClass(otherProps.className);
    expect(getLink()).toHaveStyle(otherProps.style);
  });
});
