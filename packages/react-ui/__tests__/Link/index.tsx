import { screen } from '@testing-library/react';

export function getLink() {
  return screen.getByRole('link');
}
