import { ListItem, ListItemProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItem } from '.';

const props = {
  ...otherProps,
  children: 'children',
};

const renderItem = createRender<ListItemProps>(ListItem, { props });

describe('<ListItem />', () => {
  it('renders correctly', () => {
    renderItem();

    expect(getItem()).toBeInTheDocument();
    expect(getItem()).toHaveClass('list-item');
    expect(getItem()).toHaveTextContent(props.children);
    expect(getItem()).toHaveAttribute('id', props.id);
    expect(getItem()).toHaveClass(props.className);
    expect(getItem()).toHaveStyle(props.style);
  });
});
