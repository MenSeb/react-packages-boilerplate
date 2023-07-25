import { ListU, ListUProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, getList, items } from '.';

const props = {
  ...otherProps,
  children: items,
};

const renderList = createRender<ListUProps>(ListU, { props });

describe('<ListU />', () => {
  it('renders correctly', () => {
    renderList();

    expect(getList()).toBeInTheDocument();
    expect(getList()).toHaveClass('list list-unordered');
    expect(getList().tagName.toLowerCase()).toBe('ul');

    getItems().forEach((item, index) => {
      expect(getList()).toContainElement(item);
      expect(item).toHaveTextContent(props.children[index]);
    });

    expect(getList()).toHaveAttribute('id', props.id);
    expect(getList()).toHaveClass(props.className);
    expect(getList()).toHaveStyle(props.style);
  });
});
