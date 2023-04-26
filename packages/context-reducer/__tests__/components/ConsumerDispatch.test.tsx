import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { ConsumerDispatch, Provider, State } from '../../src/';
import { spyOnConsoleError } from '../';

spyOnConsoleError();

describe('<ConsumerDispatch />', () => {
  it('throws when used without provider', () => {
    expect(() => {
      render(<ConsumerDispatch>{jest.fn()}</ConsumerDispatch>);
    }).toThrow('ConsumerDispatch');
  });

  it('calls children with dispatch', async () => {
    const user = userEvent.setup();
    const actions = { test: jest.fn((state: State) => state) };
    const payload = {};
    const initialState = {};

    render(
      <Provider actions={actions} initialState={initialState}>
        <ConsumerDispatch>
          {(dispatch) => <button onClick={() => dispatch.test(payload)} />}
        </ConsumerDispatch>
      </Provider>,
    );

    await act(async () => {
      await user.click(screen.getByRole('button'));
    });

    expect(actions.test).toHaveBeenCalledWith(initialState, payload);
  });
});
