import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { ConsumerDispatch, Provider } from '../../src/';
import { actions, initialProps, payload, spyOnConsoleError } from '../';

spyOnConsoleError();

describe('<ConsumerDispatch />', () => {
  it('throws when used without provider', () => {
    expect(() => {
      render(<ConsumerDispatch>{jest.fn()}</ConsumerDispatch>);
    }).toThrow('ConsumerDispatch');
  });

  it('calls children with dispatch', async () => {
    const user = userEvent.setup();

    render(
      <Provider {...initialProps}>
        <ConsumerDispatch>
          {(dispatch) => <button onClick={() => dispatch.test(payload)} />}
        </ConsumerDispatch>
      </Provider>,
    );

    await act(async () => {
      await user.click(screen.getByRole('button'));
    });

    expect(actions.test).toHaveBeenCalledWith(
      initialProps.initialState,
      payload,
    );
  });
});
