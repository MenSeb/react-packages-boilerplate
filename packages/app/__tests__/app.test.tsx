import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import router from '../src/router';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
