import { screen } from '@testing-library/react';

export function getHeading() {
  return screen.getByRole('heading');
}
