import { Footer, FooterProps } from '../../src';
import { createRender, otherProps } from '..';
import { getFooter } from '.';

const props = {
  children: 'children',
};

const renderFooter = createRender<FooterProps>(Footer, { props });

describe('<Footer />', () => {
  it('renders correctly', () => {
    renderFooter({ props: otherProps });

    expect(getFooter()).toBeInTheDocument();
    expect(getFooter()).toHaveClass('footer');
    expect(getFooter()).toHaveTextContent(props.children);

    expect(getFooter()).toHaveAttribute('id', otherProps.id);
    expect(getFooter()).toHaveClass(otherProps.className);
    expect(getFooter()).toHaveStyle(otherProps.style);
  });
});
