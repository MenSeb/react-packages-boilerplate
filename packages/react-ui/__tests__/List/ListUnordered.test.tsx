import { ListUnordered, ListUnorderedProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, getList, items } from '.';

const props = {
  children: items,
};

const renderList = createRender<ListUnorderedProps>(ListUnordered, { props });

describe('<ListUnordered />', () => {
  it('renders correctly', () => {
    renderList({ props: otherProps });

    expect(getList()).toBeInTheDocument();
    expect(getList()).toHaveClass('list list-unordered');
    expect(getList().tagName.toLowerCase()).toBe('ul');

    getItems().forEach((item, index) => {
      expect(getList()).toContainElement(item);
      expect(item).toHaveTextContent(props.children[index]);
    });

    expect(getList()).toHaveAttribute('id', otherProps.id);
    expect(getList()).toHaveClass(otherProps.className);
    expect(getList()).toHaveStyle(otherProps.style);
  });
});
