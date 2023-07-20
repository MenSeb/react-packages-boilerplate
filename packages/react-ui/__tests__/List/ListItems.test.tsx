import { ListItems, ListItemsProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, items } from '.';

const props = {
  children: items,
};

const renderItems = createRender<ListItemsProps>(ListItems, { props });

describe('<ListItems />', () => {
  it('renders with items', () => {
    renderItems();

    getItems().forEach((item, index) => {
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent(props.children[index]);
    });
  });

  it('renders with additional props', () => {
    renderItems({ props: otherProps });

    getItems().forEach((item) => {
      expect(item).toHaveAttribute('id', otherProps.id);
      expect(item).toHaveClass(otherProps.className);
      expect(item).toHaveStyle(otherProps.style);
    });
  });
});
