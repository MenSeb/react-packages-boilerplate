import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ConsumerState } from '../../src/';
import { initialProps, renderConsumer, spyOnConsoleError } from '..';

spyOnConsoleError();

describe('<ConsumerState />', () => {
  it('throws when used without provider', () => {
    expect(() => {
      render(<ConsumerState>{jest.fn()}</ConsumerState>);
    }).toThrow('ConsumerState');
  });

  it('calls children with state', () => {
    renderConsumer(ConsumerState, initialProps);

    expect(
      screen.getByText(initialProps.initialState.text),
    ).toBeInTheDocument();
  });
});
