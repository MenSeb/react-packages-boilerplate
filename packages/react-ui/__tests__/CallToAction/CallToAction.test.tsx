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
  it('renders correctly', () => {
    renderCallToAction({ props: otherProps });

    expect(getCallToAction()).toBeInTheDocument();
    expect(getCallToAction()).toHaveClass('cta');
    expect(getCallToAction()).toHaveTextContent(props.children);

    expect(getCallToAction()).toHaveAttribute('id', otherProps.id);
    expect(getCallToAction()).toHaveClass(otherProps.className);
    expect(getCallToAction()).toHaveStyle(otherProps.style);
  });

  it('redirects correctly', async () => {
    renderCallToAction();

    const user = userEvent.setup();

    await act(async () => {
      await user.click(getCallToAction());
    });

    expect(location.href).toBe(`http://localhost/${props.to}`);
  });
});
