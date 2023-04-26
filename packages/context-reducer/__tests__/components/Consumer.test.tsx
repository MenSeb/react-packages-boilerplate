import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { Consumer } from '../../src/';
import {
  actions,
  initialProps,
  payload,
  renderConsumer,
  spyOnConsoleError,
} from '..';

spyOnConsoleError();

describe('<Consumer />', () => {
  it('throws when used without provider', () => {
    expect(() => {
      render(<Consumer>{jest.fn()}</Consumer>);
    }).toThrow();
  });

  it('calls children with dispatch and state', async () => {
    const user = userEvent.setup();

    renderConsumer(Consumer, initialProps);

    await act(async () => {
      await user.click(screen.getByText(initialProps.initialState.text));
    });

    expect(actions.test).toHaveBeenCalledWith(
      initialProps.initialState,
      payload,
    );
  });
});
