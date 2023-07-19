import { screen } from '@testing-library/react';

export function getNavigation() {
  return screen.getByRole('navigation');
}

export function getList() {
  return screen.getByRole('list');
}

export function getItems() {
  return screen.getAllByRole('listitem');
}

export function getLinks() {
  return screen.getAllByRole('link');
}
