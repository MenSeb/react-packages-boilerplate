import { screen } from '@testing-library/react';

export function getImage() {
  return screen.getByRole('img');
}
