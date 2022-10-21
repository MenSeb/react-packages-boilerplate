import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Dummy } from '../src';

describe('<Dummy />', () => {
  beforeEach(() => render(<Dummy />));

  it('renders as a region', () => {
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('renders with name dummy', () => {
    expect(screen.getByRole('region')).toHaveAccessibleName('dummy');
  });
});
