import { screen } from '@testing-library/react';

export function getInput() {
  return screen.getByRole('textbox');
}
