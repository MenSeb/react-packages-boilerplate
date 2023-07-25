import { ListOrdered, ListOrderedProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, getList, items } from '.';

const props = {
  ...otherProps,
  children: items,
};

const renderList = createRender<ListOrderedProps>(ListOrdered, { props });

describe('<ListOrdered />', () => {
  it('renders correctly', () => {
    renderList();

    expect(getList()).toBeInTheDocument();
    expect(getList()).toHaveClass('list list-ordered');
    expect(getList().tagName.toLowerCase()).toBe('ol');

    getItems().forEach((item, index) => {
      expect(getList()).toContainElement(item);
      expect(item).toHaveTextContent(props.children[index]);
    });

    expect(getList()).toHaveAttribute('id', props.id);
    expect(getList()).toHaveClass(props.className);
    expect(getList()).toHaveStyle(props.style);
  });
});
