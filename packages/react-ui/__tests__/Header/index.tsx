import { screen } from '@testing-library/react';

export function getHeader() {
  return screen.getByRole('banner');
}
