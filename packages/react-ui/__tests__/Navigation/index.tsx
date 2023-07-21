import { screen } from '@testing-library/react';

export function getNavigation() {
  return screen.getByRole('navigation');
}
