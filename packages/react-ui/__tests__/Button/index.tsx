import { screen } from '@testing-library/react';

export function getButton() {
  return screen.getByRole('button');
}
