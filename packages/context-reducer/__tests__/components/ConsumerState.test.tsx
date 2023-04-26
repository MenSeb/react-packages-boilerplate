import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ConsumerState, Provider } from '../../src/';
import { initialProps, spyOnConsoleError } from '../';

spyOnConsoleError();

describe('<ConsumerState />', () => {
  it('throws when used without provider', () => {
    expect(() => {
      render(<ConsumerState>{jest.fn()}</ConsumerState>);
    }).toThrow('ConsumerState');
  });

  it('calls children with state', () => {
    render(
      <Provider {...initialProps}>
        <ConsumerState>{(state) => <div>{state.text}</div>}</ConsumerState>
      </Provider>,
    );

    expect(
      screen.getByText(initialProps.initialState.text),
    ).toBeInTheDocument();
  });
});
