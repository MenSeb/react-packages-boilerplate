import { screen, within } from '@testing-library/react';

export function getLogo() {
  return screen.getByRole('link');
}

export function getBrand(brand: string) {
  return within(getLogo()).getByText(brand);
}

export function getImage() {
  return within(getLogo()).getByRole('img');
}

export function queryImage() {
  return within(getLogo()).queryByRole('img');
}
