import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { Consumer, Provider } from '../../src/';
import { State } from '../../src/types';

describe('<Consumer />', () => {
  it('throws when used without provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(<Consumer>{jest.fn()}</Consumer>);
    }).toThrow();

    spy.mockRestore();
  });

  it('calls children with dispatch and state', async () => {
    const user = userEvent.setup();
    const actions = { test: jest.fn((state: State) => state) };
    const payload = {};
    const initialState = { text: 'test' };

    render(
      <Provider actions={actions} initialState={initialState}>
        <Consumer>
          {({ dispatch, state }) => (
            <button onClick={() => dispatch.test(payload)}>
              {state.text as string}
            </button>
          )}
        </Consumer>
      </Provider>,
    );

    await act(async () => {
      await user.click(screen.getByRole('button'));
    });

    expect(actions.test).toHaveBeenCalledWith(initialState, payload);
    expect(screen.getByText(initialState.text)).toBeInTheDocument();
  });
});
