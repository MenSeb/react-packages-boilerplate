import * as React from 'react';
import { act, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createMemoryRouter,
} from 'react-router-dom';
import { routes } from '../src/router';
import { Layout } from '../src/containers';
import { About, Error as ErrorPage, Home, Lost } from '../src/pages';

interface RouterSettings {
  routes: React.ReactNode;
  initialEntries?: (string | Partial<Location>)[];
}

function renderRouter({ routes, initialEntries }: RouterSettings) {
  const router = createMemoryRouter(createRoutesFromElements(routes), {
    initialEntries,
  });

  return render(<RouterProvider router={router} />);
}

describe('<WebFolio />', () => {
  describe('<Layout />', () => {
    beforeEach(() => renderRouter({ routes }));

    it('renders with header', () => {
      expect(screen.getAllByRole('banner')[0]).toBeInTheDocument();
    });

    it('renders with main', () => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders with footer', () => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('<Home />', () => {
    beforeEach(() => renderRouter({ routes }));

    it('renders with home page', () => {
      expect(
        screen.getByRole('region', { name: 'home page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<About />', () => {
    beforeEach(() => renderRouter({ routes }));

    it('renders with about page', async () => {
      const user = userEvent.setup();

      await act(async () => {
        await user.click(screen.getAllByText(/about/i)[0]);
      });

      expect(
        screen.getByRole('region', { name: 'about page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<Lost />', () => {
    beforeEach(() => renderRouter({ routes, initialEntries: ['/test'] }));

    it('renders with lost page', () => {
      expect(
        screen.getByRole('region', { name: 'lost page' }),
      ).toBeInTheDocument();
    });
  });

  describe('<Error />', () => {
    function Test({ error = true }: { error?: boolean }) {
      if (error) throw new Error('test error');

      return <></>;
    }

    it('renders with error page', () => {
      const spy = jest.spyOn(console, 'error');

      spy.mockImplementation(() => null);

      const testRouter = createMemoryRouter(
        createRoutesFromElements(
          <Route element={<Layout />} path="/">
            <Route errorElement={<ErrorPage />}>
              <Route element={<Home />} index />
              <Route element={<About />} path="about" />
              <Route element={<Lost />} path="*" />
              <Route element={<Test />} path="test" />
            </Route>
          </Route>,
        ),
        { initialEntries: ['/test'] },
      );

      render(<RouterProvider router={testRouter} />);

      expect(
        screen.getByRole('region', { name: 'error page' }),
      ).toBeInTheDocument();

      spy.mockRestore();
    });
  });
});
