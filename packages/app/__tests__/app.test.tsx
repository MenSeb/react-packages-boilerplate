import * as React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes } from 'react-router-dom';
import { routes } from '../src/router';

describe('<App />', () => {
  beforeEach(() =>
    render(
      <MemoryRouter>
        <Routes>{routes}</Routes>
      </MemoryRouter>,
    ),
  );

  describe('<Layout />', () => {
    it('renders with header', () => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('renders with main', () => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders with footer', () => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('<RouterProvider />', () => {
    it('renders with home page', () => {
      expect(
        screen.getByRole('region', { name: 'home page' }),
      ).toBeInTheDocument();
    });

    it('renders with about page', async () => {
      const user = userEvent.setup();

      await user.click(screen.getByText(/about/i));

      expect(
        screen.getByRole('region', { name: 'about page' }),
      ).toBeInTheDocument();
    });
  });
});
