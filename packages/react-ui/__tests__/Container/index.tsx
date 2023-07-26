import { screen } from '@testing-library/react';

export function getContainer() {
  return screen.getByTestId('container');
}
