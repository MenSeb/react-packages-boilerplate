import { screen } from '@testing-library/react';

export function getPage() {
  return screen.getByRole('region');
}
