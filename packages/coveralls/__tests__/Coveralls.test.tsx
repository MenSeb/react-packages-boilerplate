import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Coveralls } from '../src';

describe('<Coveralls />', () => {
  it('renders correctly', () => {
    render(<Coveralls />);

    expect(screen.getByTitle('coveralls')).toBeInTheDocument();
  });
});
