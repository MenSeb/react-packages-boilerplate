import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { ConsumerDispatch, Provider } from '../../src/';

describe('<ConsumerDispatch />', () => {
  it('throws when used without provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(<ConsumerDispatch>{jest.fn()}</ConsumerDispatch>);
    }).toThrow('ConsumerDispatch');

    spy.mockRestore();
  });

  it('calls children with dispatch', async () => {
    const user = userEvent.setup();
    const actions = { test: jest.fn() };
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
