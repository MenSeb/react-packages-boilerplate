import { ListItem, ListItemProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItem } from '.';

const props = {
  children: 'children',
};

const renderItem = createRender<ListItemProps>(ListItem, { props });

describe('<ListItem />', () => {
  it('renders correctly', () => {
    renderItem({ props: otherProps });

    expect(getItem()).toBeInTheDocument();
    expect(getItem()).toHaveClass('list-item');
    expect(getItem()).toHaveTextContent(props.children);

    expect(getItem()).toHaveAttribute('id', otherProps.id);
    expect(getItem()).toHaveClass(otherProps.className);
    expect(getItem()).toHaveStyle(otherProps.style);
  });
});
