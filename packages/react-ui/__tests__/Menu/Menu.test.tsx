import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Menu, MenuProps } from '../../src';
import { createRender } from '..';
import { getItems, getLink, getLinks, getList, getMenu } from '.';

const links = [
  { to: 'home', children: 'home' },
  { to: 'about', children: 'about' },
];

const renderMenu = createRender<MenuProps>(Menu, {
  props: { links },
  options: { wrapper: BrowserRouter },
});

describe('<Menu />', () => {
  it('renders with role navigation', () => {
    renderMenu();

    expect(getMenu()).toBeInTheDocument();
  });

  it('renders with a list of links', () => {
    renderMenu();

    expect(getMenu()).toContainElement(getList());

    getItems().forEach((item, index) => {
      expect(getList()).toContainElement(item);
      expect(getLink(item)).toHaveTextContent(links[index].children);
    });
  });

  it('redirects to the page url', async () => {
    renderMenu();

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
