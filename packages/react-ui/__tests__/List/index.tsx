import { screen } from '@testing-library/react';

export function getItem() {
  return screen.getByRole('listitem');
}

export function getList() {
  return screen.getByRole('list');
}

export function getItems() {
  return screen.getAllByRole('listitem');
}

export const items = Array.from({ length: 5 }, () => 'item');
