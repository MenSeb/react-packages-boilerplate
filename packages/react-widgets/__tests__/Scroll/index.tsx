import { screen, within } from '@testing-library/react';

export function getScroll() {
  return screen.getByRole('button');
}

export function getIcon() {
  return within(getScroll()).getByRole('presentation');
}

export function queryScroll() {
  return screen.queryByRole('button');
}

export const scrollOptions: ScrollToOptions = {
  behavior: 'auto',
  left: 0,
  top: 0,
};
