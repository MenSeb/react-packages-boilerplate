import { screen } from '@testing-library/react';

export function getLogo() {
  return screen.getByRole('link');
}

export function getImage() {
  return screen.getByRole('img');
}

export function queryImage() {
  return screen.queryByRole('img');
}
