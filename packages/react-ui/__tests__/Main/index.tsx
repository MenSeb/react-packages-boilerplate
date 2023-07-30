import { screen } from '@testing-library/react';

export function getMain() {
  return screen.getByRole('main');
}
