import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { ConsumerDispatch } from '../../src/';
import {
  actions,
  initialProps,
  payload,
  renderConsumer,
  spyOnConsoleError,
} from '..';

spyOnConsoleError();

describe('<ConsumerDispatch />', () => {
  it('throws when used without provider', () => {
    expect(() => {
      render(<ConsumerDispatch>{jest.fn()}</ConsumerDispatch>);
    }).toThrow('ConsumerDispatch');
  });

  it('calls children with dispatch', async () => {
    const user = userEvent.setup();

    renderConsumer(ConsumerDispatch, initialProps);

    await act(async () => {
      await user.click(screen.getByRole('button'));
    });

    expect(actions.test).toHaveBeenCalledWith(
      initialProps.initialState,
      payload,
    );
  });
});
