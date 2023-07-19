import { screen } from '@testing-library/react';

export function getSignature() {
  return screen.getByTestId('signature');
}

export function getLink() {
  return screen.getByRole('link');
}

export function queryLink() {
  return screen.queryByRole('link');
}
