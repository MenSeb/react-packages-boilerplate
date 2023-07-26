import { screen, within } from '@testing-library/react';

export function getNavigation() {
  return screen.getByRole('navigation');
}

export function getList() {
  return within(getNavigation()).getByRole('list');
}

export function getItems() {
  return within(getList()).getAllByRole('listitem');
}

export function getLinks() {
  return within(getList()).getAllByRole('link');
}

export function getLink(item: HTMLElement) {
  return within(item).getByRole('link');
}
