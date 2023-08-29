import * as React from 'react';
import { act, screen } from '@testing-library/react';
import { createRender } from '@packages/react-test';
import {
  Route,
  RouterProvider,
  RouterProviderProps,
  createRoutesFromElements,
  createMemoryRouter,
} from 'react-router-dom';
import { routes } from '../src/router';
import { About, Error as ErrorPage, Home, Layout, Lost } from '../src/pages';

function ErrorTest({ error = true }: { error?: boolean }) {
  if (error) throw new Error('test');
  return null;
}

const routesTest = (
  <Route element={<Layout />} path="/">
    <Route errorElement={<ErrorPage />}>
      <Route element={<Home />} index />
      <Route element={<About />} path="about" />
      <Route element={<Lost />} path="*" />
      <Route element={<ErrorTest />} path="error" />
    </Route>
  </Route>
);

const routerRoutes = createRoutesFromElements(routes);
const router = createMemoryRouter(routerRoutes);
const routerLost = createMemoryRouter(routerRoutes, {
  initialEntries: ['/lost'],
});
const routerError = createMemoryRouter(createRoutesFromElements(routesTest), {
  initialEntries: ['/error'],
});
const renderRouter = createRender<RouterProviderProps>(RouterProvider, {
  router,
});

describe('<App />', () => {
  describe('<Layout />', () => {
    it('renders with header', () => {
      renderRouter();
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('renders with main', () => {
      renderRouter();
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders with footer', () => {
      renderRouter();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('<Home />', () => {
    it('renders with home page', () => {
      renderRouter();
      expect(
        screen.getByRole('region', { name: 'home page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<About />', () => {
    it('renders with about page', async () => {
      const { user } = renderRouter();

      await act(async () => {
        await user.click(screen.getByText(/about/i));
      });

      expect(
        screen.getByRole('region', { name: 'about page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<Lost />', () => {
    it('renders with lost page', () => {
      renderRouter({ router: routerLost });
      expect(
        screen.getByRole('region', { name: 'lost page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<Error />', () => {
    it('renders with error page', () => {
      const spy = jest.spyOn(console, 'error');

      spy.mockImplementation(() => null);

      renderRouter({ router: routerError });

      expect(
        screen.getByRole('region', { name: 'error page' }),
      ).toBeInTheDocument();

      spy.mockRestore();
    });
  });
});
