import { screen } from '@testing-library/react';

export function getCopyright() {
  return screen.getByTestId('copyright');
}
