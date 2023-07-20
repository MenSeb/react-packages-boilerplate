import { ListU, ListUProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, getList, items } from '.';

const props = {
  children: items,
};

const renderList = createRender<ListUProps>(ListU, { props });

describe('<ListU />', () => {
  it('renders with role list', () => {
    renderList();

    expect(getList()).toBeInTheDocument();
  });

  it('renders with tag ul', () => {
    renderList();

    expect(getList().tagName.toLowerCase()).toBe('ul');
  });

  it('renders with items', () => {
    renderList();

    getItems().forEach((item, index) => {
      expect(getList()).toContainElement(item);
      expect(item).toHaveTextContent(props.children[index]);
    });
  });

  it('renders with additional props', () => {
    renderList({ props: otherProps });

    expect(getList()).toHaveAttribute('id', otherProps.id);
    expect(getList()).toHaveClass(otherProps.className);
    expect(getList()).toHaveStyle(otherProps.style);
  });
});
