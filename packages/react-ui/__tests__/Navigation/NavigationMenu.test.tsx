import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationMenu, NavigationMenuProps } from '../../src';
import { createRender } from '..';
import { getItems, getLink, getLinks, getList, getNavigation } from '.';

const links = [
  { to: 'home', children: 'home' },
  { to: 'about', children: 'about' },
];

const renderNavigation = createRender<NavigationMenuProps>(NavigationMenu, {
  props: { links },
  options: { wrapper: BrowserRouter },
});

describe('<NavigationMenu />', () => {
  it('renders with role navigation', () => {
    renderNavigation();

    expect(getNavigation()).toBeInTheDocument();
  });

  it('renders with a list of links', () => {
    renderNavigation();

    expect(getNavigation()).toContainElement(getList());

    getItems().forEach((item, index) => {
      expect(getList()).toContainElement(item);
      expect(getLink(item)).toHaveTextContent(links[index].children);
    });
  });

  it('redirects to the page url', async () => {
    renderNavigation();

    const user = userEvent.setup();

    for (const link of getLinks()) {
      await act(async () => {
        await user.click(link);
      });

      expect(location.href).toBe(
        `http://localhost${link.getAttribute('href')}`,
      );
    }
  });
});
