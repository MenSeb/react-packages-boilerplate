import { ListOrdered, ListOrderedProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, getList, items } from '.';

const props = {
  children: items,
};

const renderList = createRender<ListOrderedProps>(ListOrdered, { props });

describe('<ListOrdered />', () => {
  it('renders correctly', () => {
    renderList({ props: otherProps });

    expect(getList()).toBeInTheDocument();
    expect(getList()).toHaveClass('list list-ordered');
    expect(getList().tagName.toLowerCase()).toBe('ol');

    getItems().forEach((item, index) => {
      expect(getList()).toContainElement(item);
      expect(item).toHaveTextContent(props.children[index]);
    });

    expect(getList()).toHaveAttribute('id', otherProps.id);
    expect(getList()).toHaveClass(otherProps.className);
    expect(getList()).toHaveStyle(otherProps.style);
  });
});
