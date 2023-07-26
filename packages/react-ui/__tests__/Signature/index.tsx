import { screen, within } from '@testing-library/react';

export function getSignature() {
  return screen.getByTestId('signature');
}

export function getStatement(statement: string) {
  return within(getSignature()).getByText(statement);
}

export function getAuthor(author: string) {
  return within(getSignature()).getByText(author);
}

export function getLink() {
  return within(getSignature()).getByRole('link');
}

export function queryLink() {
  return within(getSignature()).queryByRole('link');
}
