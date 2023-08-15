import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationMenu, NavigationMenuProps } from '../../src';
import { createRender, otherProps } from '..';
import { getItems, getLink, getLinks, getNavigation } from '.';

const links = [
  { to: 'home', children: 'home' },
  { to: 'about', children: 'about' },
];

const props = {
  links,
};

const renderNavigation = createRender<NavigationMenuProps>(NavigationMenu, {
  props,
  options: { wrapper: BrowserRouter },
});

describe('<NavigationMenu />', () => {
  it('renders correctly', () => {
    renderNavigation({ props: otherProps });

    expect(getNavigation()).toBeInTheDocument();

    expect(getNavigation()).toHaveAttribute('id', otherProps.id);
    expect(getNavigation()).toHaveClass(otherProps.className);
    expect(getNavigation()).toHaveStyle(otherProps.style);

    getItems().forEach((item, index) => {
      const { children } = props.links[index];

      expect(getLink(item)).toHaveTextContent(children);
    });
  });

  it('redirects correctly', async () => {
    renderNavigation();

    const user = userEvent.setup();
    const elements = getLinks();

    for (let index = 0; index < elements.length; index++) {
      await act(() => user.click(elements[index]));

      expect(location.href).toBe(`http://localhost/${props.links[index].to}`);
    }
  });
});
