import { ListItems, ListItemsProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, items } from '.';

const props = {
  ...otherProps,
  children: items,
};

const renderItems = createRender<ListItemsProps>(ListItems, { props });

describe('<ListItems />', () => {
  it('renders correctly', () => {
    renderItems();

    getItems().forEach((item, index) => {
      expect(item).toBeInTheDocument();
      expect(item).toHaveClass('list-item');
      expect(item).toHaveTextContent(props.children[index]);
      expect(item).toHaveAttribute('id', props.id);
      expect(item).toHaveClass(props.className);
      expect(item).toHaveStyle(props.style);
    });
  });
});
