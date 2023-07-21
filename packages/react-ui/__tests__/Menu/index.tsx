import { screen, within } from '@testing-library/react';

export function getMenu() {
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

export function getLink(item: HTMLElement) {
  return within(item).getByRole('link');
}
