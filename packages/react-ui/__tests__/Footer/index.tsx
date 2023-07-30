import { screen } from '@testing-library/react';

export function getFooter() {
  return screen.getByRole('contentinfo');
}
