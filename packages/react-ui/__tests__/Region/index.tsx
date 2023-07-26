import { screen } from '@testing-library/react';

export function getRegion() {
  return screen.getByRole('region');
}
