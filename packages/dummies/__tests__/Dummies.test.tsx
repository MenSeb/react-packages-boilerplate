import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Dummies } from '../src';

describe('<Test />', () => {
  it('renders correctly', () => {
    render(<Dummies />);

    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
