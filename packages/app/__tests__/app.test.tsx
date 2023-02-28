import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import router from '../src/router';

describe('<App />', () => {
  beforeEach(() => render(<RouterProvider router={router} />));

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
  });
});
