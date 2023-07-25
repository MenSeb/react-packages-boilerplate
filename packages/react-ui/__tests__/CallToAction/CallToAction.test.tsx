import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CallToAction, CallToActionProps } from '../../src';
import { createRender, otherProps } from '..';
import { getCallToAction } from '.';

const props = {
  children: 'children',
  to: 'path',
};

const renderCallToAction = createRender<CallToActionProps>(CallToAction, {
  props,
  options: { wrapper: BrowserRouter },
});

describe('<CallToAction />', () => {
  it('renders with role link', () => {
    renderCallToAction();

    expect(getCallToAction()).toBeInTheDocument();
  });

  it('renders with a link to the path provided', async () => {
    renderCallToAction();

    const user = userEvent.setup();

    await act(async () => {
      await user.click(getCallToAction());
    });

    expect(location.href).toBe(`http://localhost/${props.to}`);
  });

  it('renders with children', () => {
    renderCallToAction();

    expect(getCallToAction()).toHaveTextContent(props.children);
  });

  it('renders with additional props', () => {
    renderCallToAction({ props: otherProps });

    expect(getCallToAction()).toHaveAttribute('id', otherProps.id);
    expect(getCallToAction()).toHaveClass(otherProps.className);
    expect(getCallToAction()).toHaveStyle(otherProps.style);
  });
});
