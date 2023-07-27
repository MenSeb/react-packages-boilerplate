import { screen } from '@testing-library/react';

export function getForm() {
  return screen.getByRole('form');
}
