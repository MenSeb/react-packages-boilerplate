import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ConsumerState, Provider, State } from '../../src/';

describe('<ConsumerState />', () => {
  it('throws when used without provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(<ConsumerState>{jest.fn()}</ConsumerState>);
    }).toThrow('ConsumerState');

    spy.mockRestore();
  });

  it('calls children with state', () => {
    const actions = { test: jest.fn((state: State) => state) };
    const initialState = { text: 'test' };

    render(
      <Provider actions={actions} initialState={initialState}>
        <ConsumerState>{(state) => <div>{state.text}</div>}</ConsumerState>
      </Provider>,
    );

    expect(screen.getByText(initialState.text)).toBeInTheDocument();
  });
});
