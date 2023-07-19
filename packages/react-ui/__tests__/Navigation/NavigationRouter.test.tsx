import { BrowserRouter } from 'react-router-dom';
import { NavigationRouter, NavigationRouterProps } from '../../src';
import { createRender } from '../';
import { getLinks, getNavigation } from '.';

const links = [
  { to: 'home', children: 'home' },
  { to: 'about', children: 'about' },
];

const renderNavigation = createRender<NavigationRouterProps>(NavigationRouter, {
  props: { links },
  options: { wrapper: BrowserRouter },
});

describe('<NavigationRouter />', () => {
  it('renders with role navigation', () => {
    renderNavigation();

    expect(getNavigation()).toBeInTheDocument();
  });

  it('renders with router links', () => {
    renderNavigation();

    getLinks().forEach((link) => {
      expect(getNavigation()).toContainElement(link);
    });
  });
});
