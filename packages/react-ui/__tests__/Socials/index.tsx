import { screen, within } from '@testing-library/react';

export function getSocials() {
  return screen.getByRole('navigation');
}

export function getLink(item: HTMLElement) {
  return within(item).getByRole('link');
}

export function getLinks() {
  return within(getList()).getAllByRole('link');
}

export function getList() {
  return within(getSocials()).getByRole('list');
}

export function getItems() {
  return within(getList()).getAllByRole('listitem');
}

export function getIcon(link: HTMLElement) {
  return link.querySelector('svg');
}
