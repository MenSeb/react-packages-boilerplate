import * as React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../src/App';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);

    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
