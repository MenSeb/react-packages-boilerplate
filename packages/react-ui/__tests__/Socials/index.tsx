import { screen } from '@testing-library/react';

export function getSocials() {
  return screen.getByRole('navigation');
}

export function getLinks() {
  return screen.getAllByRole('link');
}

export function getIcon(link: HTMLElement) {
  return link.querySelector('svg');
}
