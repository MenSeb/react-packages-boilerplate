import { screen } from '@testing-library/react';

export function getCallToAction() {
  return screen.getByRole('link');
}
