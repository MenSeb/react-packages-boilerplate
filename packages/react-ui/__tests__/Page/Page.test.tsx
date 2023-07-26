import { Page, PageProps } from '../../src';
import { createRender, otherProps, propsLabel } from '..';
import { getPage } from '.';

const props = {
  children: 'children',
  ...propsLabel,
};

const renderPage = createRender<PageProps>(Page, { props });

describe('<Page />', () => {
  it('renders correctly', () => {
    renderPage({ props: otherProps });

    expect(getPage()).toBeInTheDocument();
    expect(getPage()).toHaveClass('page');
    expect(getPage()).toHaveTextContent(props.children);
    expect(getPage()).toHaveAccessibleName(props.label);

    expect(getPage()).toHaveAttribute('id', otherProps.id);
    expect(getPage()).toHaveClass(otherProps.className);
    expect(getPage()).toHaveStyle(otherProps.style);
  });
});
