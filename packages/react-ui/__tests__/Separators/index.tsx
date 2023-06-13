import { screen, within } from '@testing-library/react';

export function getSeparator() {
  return screen.getByRole('separator');
}

export function getPresentation() {
  return within(getSeparator()).getByRole('presentation');
}

export function queryElement(
  selector: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,
) {
  return getSeparator().querySelector(selector);
}

export function queryPath() {
  return queryElement('path');
}

export function queryRect() {
  return queryElement('rect');
}

export function querySvg() {
  return queryElement('svg');
}
